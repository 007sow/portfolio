import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers } from "lucide-react";
import ProjectCard from "../project/ProjectCard.jsx";
import { projects } from "../../config/ProjectsData.js";

const ProjectsPreview = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="bg-[#f5f3ee] px-4 py-16 text-stone-950 dark:bg-[#080b0f] dark:text-white md:px-12 md:py-24 lg:px-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
              <Layers className="h-4 w-4" aria-hidden="true" />
              Selected work
            </div>
            <h2 className="mt-6 max-w-2xl font-clash text-4xl font-medium leading-tight md:text-5xl">
              Projects with real architecture behind the interface.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
          >
            All projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {previewProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
