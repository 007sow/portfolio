/**
 * ScrollFillTextLetters.jsx
 * Letter-by-letter “fill” headline that reveals as you scroll.
 * — Keeps words intact (no mid-word line breaks or hyphens)
 * — Adds extra spacing between words
 * — Expands to wider line-lengths on large/XL/2XL screens
 */

import React, { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ScrollFillTextLetters = ({
  text,
  className = "",
  sectionClassName = "",
  textClassName = "",
  minHeight = "60vh",
  speed = 3,
}) => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* split text */
  const words         = text.split(" ");
  const totalLetters  = text.replace(/\s/g, "").length; // exclude spaces

  /* ───────── scroll listener ───────── */
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect        = sectionRef.current.getBoundingClientRect();
      const vh          = window.innerHeight;
      const start       = vh;            // section top hits bottom of viewport
      const end         = -rect.height;  // section bottom hits top of viewport
      const rawProgress = (start - rect.top) / (start - end);
      const scaled      = rawProgress * speed;
      const clamped     = Math.min(1, Math.max(0, scaled));

      setProgress(clamped);
    }

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  /* running index across all letters */
  let globalIndex = 0;

  /* ───────── render ───────── */
  return (
    <section
      ref={sectionRef}
      style={{ minHeight }}
      className={cn(
        "relative flex w-full flex-col items-center justify-center",
        "bg-[#f7f8fa] text-black dark:bg-black dark:text-white",
        "px-4 md:px-8 lg:px-24 pt-24 pb-12 md:pt-32 md:pb-10",
        "overflow-x-hidden",
        sectionClassName,
      )}
    >
      {/* small heading */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-[#75a8c7] dark:text-[#a8dbfa]" />
          <span className="font-clash text-sm font-medium uppercase tracking-widest text-[#75a8c7] dark:text-[#a8dbfa]">
            About Me
          </span>
        </div>

        {/* animated headline */}
        <div
          className={cn(
            "mx-auto text-center",
            "max-w-prose lg:max-w-[140ch]", // wider on large screens
            "whitespace-normal hyphens-none",                                // no hyphens
            className,
          )}
          style={{
            wordBreak:   "keep-all",  // never break inside words
            overflowWrap:"normal",    // wrap only at spaces
          }}
        >
          {words.map((word, w) => (
            /* keep whole word on one line if possible */
            <span
              key={`word-${w}`}
              className="inline-block whitespace-nowrap mr-2 sm:mr-3 lg:mr-3"
            >
              {word.split("").map((char, c) => {
                globalIndex += 1;
                const threshold = globalIndex / totalLetters;
                const opacity   = progress >= threshold ? 1 : 0.2;

                return (
                  <span
                    key={`char-${w}-${c}`}
                    style={{ opacity, marginRight: "1px" }}
                    className={cn(
                      "transition-opacity duration-300",
                      "text-xl sm:text-2xl lg:text-3xl",
                      "font-satoshi font-medium",
                      textClassName,
                    )}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollFillTextLetters;
