"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#f5f3ee] font-sans text-stone-950 dark:bg-[#080b0f] dark:text-white"
      ref={containerRef}>
      <div className="mx-auto max-w-6xl px-5 pt-28 md:px-12 lg:px-0 lg:pt-32">
        <div className="mb-6 inline-flex items-center rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
          Data Engineering Experience
        </div>
        <motion.h2 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-clash text-4xl font-medium leading-[0.98] md:text-5xl lg:text-[3.65rem]"
        >
          Cloud data platforms, enterprise reporting, and governed pipelines.
        </motion.h2>
      </div>
      <motion.div 
        ref={ref} 
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 pb-16 md:px-12 lg:px-0"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#080b0f] md:left-3">
                <div
                  className="h-4 w-4 rounded-full border border-cyan-900/20 bg-cyan-100 p-2 dark:border-sky-200/30 dark:bg-sky-200/20" />
              </div>
              <h3
                className="hidden text-xl font-bold text-stone-400 dark:text-slate-500 md:block md:pl-20 md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="mb-4 block text-left text-2xl font-bold text-stone-400 dark:text-slate-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-stone-300 to-transparent to-[99%] dark:via-white/10 md:left-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-cyan-700 via-sky-300 to-transparent from-[0%] via-[10%]" />
        </div>
      </motion.div>
    </div>
  );
};
