import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "../shared/Image.jsx";

const ProjectCard = ({ project, onHoverChange }) => {
  const { slug, name, cover, bgColor, categories, year, overview, technologies = [] } = project;
  const accentColor = bgColor || "#e0f2fe";

  return (
    <Link
      to={`/projects/${slug}`}
      aria-label={`Open ${name} project`}
      onMouseEnter={() => onHoverChange?.(slug)}
      onMouseLeave={() => onHoverChange?.(null)}
      className="block h-full"
    >
      <motion.article
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-stone-300 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/[0.06]"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute inset-4 flex items-center justify-center rounded-[1.15rem] bg-white/70 p-3 shadow-inner backdrop-blur dark:bg-black/20">
            {cover ? (
              <Image
                src={cover}
                alt={`${name} cover`}
                className="max-h-full w-full rounded-xl object-contain shadow-lg transition duration-500 group-hover:scale-[1.03]"
                w={620}
                h={0}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-stone-950 text-white">
                {name}
              </div>
            )}
          </div>
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-white shadow-lg transition group-hover:rotate-45 dark:bg-white dark:text-stone-950">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800 dark:text-sky-200">
                {categories.join(" / ")}
              </p>
              <h3 className="mt-2 font-clash text-2xl font-medium text-stone-950 dark:text-white">
                {name}
              </h3>
            </div>
            <span className="rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold text-stone-500 dark:border-white/10 dark:text-slate-300">
              {year}
            </span>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-stone-600 dark:text-slate-300">
            {overview}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 dark:bg-white/10 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectCard;
