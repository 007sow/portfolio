import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import ProjectCard from "../components/project/ProjectCard.jsx";
import { projects } from "../config/ProjectsData.js";
import Footer from "../components/layout/Footer.jsx";

function ProjectsPage() {
  const [hoveredSlug, setHoveredSlug] = useState(null);

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-stone-950 dark:bg-[#080b0f] dark:text-white">
      <main className="px-4 pt-28 pb-16 md:px-12 md:pt-40 md:pb-24 lg:px-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
                <Layers className="h-4 w-4" aria-hidden="true" />
                Project archive
              </div>
              <h1 className="mt-6 max-w-4xl font-clash text-5xl font-medium leading-[0.95] md:text-7xl">
                Engineering work with product polish.
              </h1>
            </div>
            <a
              href="https://github.com/SowmithSripadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {projects.map((project) => {
              const fadedClass =
                hoveredSlug && hoveredSlug !== project.slug
                  ? "opacity-45 transition"
                  : "transition";
              return (
                <motion.div
                  key={project.slug}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className={fadedClass}
                >
                  <ProjectCard project={project} onHoverChange={setHoveredSlug} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
