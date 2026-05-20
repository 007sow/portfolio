import React from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

/**
 * Animated circular text component – spins the given text around in a circle.
 *
 * Props:
 *  children  – string | string[] – content to render and animate around the circle (required)
 *  duration  – number – seconds it takes to make one full rotation (default 10)
 *  className – additional class names for the wrapper
 *  style     – inline-styles for the wrapper
 *  reverse   – boolean – spin counter-clockwise if true (default false)
 *  radius    – number – circle radius in `ch` units (default 5)
 *  transition – framer-motion transition overrides
 *  variants  – framer-motion variant overrides for container / item
 */
export function SpinningText({
  children,
  duration = 20,
  style,
  className,
  reverse = false,
  radius = 5,
  transition = {},
  variants = {},
}) {
  // Normalise children → string
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }
  if (Array.isArray(children)) {
    // Ensure all are strings
    if (!children.every((c) => typeof c === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }

  const letters = children.split("");
  // Add trailing space so words are separated when looping
  letters.push(" ");

  const BASE_TRANSITION = {
    repeat: Infinity,
    ease: "linear",
  };
  const BASE_ITEM_VARIANTS = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ ...style }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={{
            "--index": index,
            "--total": letters.length,
            "--radius": radius,
            transform: `
                translate(-50%, -50%)
                rotate(calc(360deg / var(--total) * var(--index)))
                translateY(calc(var(--radius, 5) * -1ch))
              `,
            transformOrigin: "center",
          }}
        >
          {letter}
        </motion.span>
      ))}
      {/* Screen-reader only full text */}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
} 