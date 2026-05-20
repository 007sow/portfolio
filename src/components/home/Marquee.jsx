import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Zap } from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const keywords = [
  "Azure Pipelines",
  "PySpark",
  "Power BI",
  "AWS Glue",
  "Data Governance",
  "Delta Lake",
];

const Marquee = ({
  direction = "left",
  speed = "slow", // "fast" | "normal" | "slow"
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate the text nodes for seamless scroll
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      // Set direction
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }

      // Set speed
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden border-y border-stone-300/80 bg-[#f5f3ee] py-5 dark:border-white/10 dark:bg-[#080b0f] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6",
          start && "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {keywords.map((kw, i) => (
          <li
            key={i}
            className="flex items-center gap-6"
          >
            <span className="font-clash text-3xl font-medium text-stone-300 dark:text-white/10 md:text-4xl">
              {kw}
            </span>
            <Zap className="h-6 w-6 text-cyan-800/30 dark:text-sky-200/20" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
