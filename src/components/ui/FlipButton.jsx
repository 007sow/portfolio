"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

const DEFAULT_SPAN_CLASS_NAME =
  "absolute inset-0 flex items-center justify-center rounded-full";

function FlipButton({
  frontText,
  backText,
  transition = { type: "spring", stiffness: 280, damping: 20 },
  className,
  frontClassName,
  backClassName,
  from = "top",
  ...props
}) {
  const isVertical = from === "top" || from === "bottom";
  const rotateAxis = isVertical ? "rotateX" : "rotateY";

  const frontOffset = from === "top" || from === "left" ? "50%" : "-50%";
  const backOffset = from === "top" || from === "left" ? "-50%" : "50%";

  const buildVariant = (opacity, rotation, offset = null) => ({
    opacity,
    [rotateAxis]: rotation,
    ...(isVertical && offset !== null ? { y: offset } : {}),
    ...(!isVertical && offset !== null ? { x: offset } : {}),
  });

  const frontVariants = {
    initial: buildVariant(1, 0, "0%"),
    hover: buildVariant(0, 90, frontOffset),
  };

  const backVariants = {
    initial: buildVariant(0, 90, backOffset),
    hover: buildVariant(1, 0, "0%"),
  };

  return (
    <motion.button
      data-slot="flip-button"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-block h-12 w-40 text-md font-medium cursor-pointer perspective-[1000px] focus:outline-none",
        className
      )}
      {...props}
    >
      <motion.span
        data-slot="flip-button-front"
        variants={frontVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          "dark:bg-black bg-white border border-gray-600 dark:text-white text-black font-satoshi text-sm",
          frontClassName
        )}
      >
        {frontText}
      </motion.span>
      <motion.span
        data-slot="flip-button-back"
        variants={backVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          "dark:bg-white border border-gray-600 dark:text-black text-white bg-black font-satoshi text-sm",
          backClassName
        )}
      >
        {backText}
      </motion.span>
      <span className="invisible">{frontText}</span>
    </motion.button>
  );
}

export { FlipButton };
