import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { getProjectBySlug, projects } from "../config/ProjectsData.js";
import Footer from "../components/layout/Footer.jsx";
import Image from "../components/shared/Image.jsx";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [imgIndex, setImgIndex] = useState(0);
  const project = getProjectBySlug(slug);
  const images = project?.images || [];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setImgIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080b0f] px-4 text-white">
        Project not found.
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];
  const hasLiveSite = project.links?.website && !project.links.website.toLowerCase().includes("coming");

  const showPrevImg = () => setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNextImg = () => setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-stone-950 dark:bg-[#080b0f] dark:text-white">
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24 lg:px-40">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-cyan-900 dark:text-slate-300 dark:hover:text-sky-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Projects
          </Link>

          <motion.header
            className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800 dark:text-sky-200">
                {project.categories.join(" / ")} · {project.year}
              </p>
              <h1 className="mt-4 font-clash text-5xl font-medium leading-[0.95] md:text-7xl">
                {project.name}
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/75 px-5 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:border-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-300"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              )}
              {hasLiveSite && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.header>

          {images.length > 0 && (
            <motion.div
              className="relative mt-12"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-[2rem] p-4 shadow-sm"
                style={{ backgroundColor: project.bgColor || "#e0f2fe" }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[1.45rem] bg-white/75 p-4 backdrop-blur dark:bg-black/20">
                  <Image
                    src={images[imgIndex].src}
                    alt={images[imgIndex].alt}
                    className="max-h-full w-full rounded-2xl object-contain shadow-xl"
                    w={1100}
                    h={0}
                  />
                </div>
              </div>

              {images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                  <button
                    type="button"
                    onClick={showPrevImg}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:-translate-x-0.5 dark:bg-black/60 dark:text-white"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImg}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:translate-x-0.5 dark:bg-black/60 dark:text-white"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.38fr]">
            <div>
              <h2 className="font-clash text-3xl font-medium">Overview</h2>
              <p className="mt-5 whitespace-pre-line font-satoshi text-base leading-8 text-stone-700 dark:text-slate-300">
                {project.overview}
              </p>
            </div>

            <aside className="rounded-[1.5rem] border border-stone-300 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800 dark:text-sky-200">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </section>

          {project.features?.length > 0 && (
            <section className="mt-16">
              <h2 className="font-clash text-3xl font-medium">Highlights</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-stone-300 bg-white/70 p-4 text-sm leading-6 text-stone-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <nav className="border-y border-stone-300 bg-white/60 px-4 py-8 dark:border-white/10 dark:bg-white/[0.04] md:px-8 lg:px-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="group inline-flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" aria-hidden="true" />
              <span>
                <span className="block text-xs text-stone-500 dark:text-slate-400">Previous</span>
                <span className="font-semibold">{prevProject.name}</span>
              </span>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link to={`/projects/${nextProject.slug}`} className="group ml-auto inline-flex items-center gap-3 text-right">
              <span>
                <span className="block text-xs text-stone-500 dark:text-slate-400">Next</span>
                <span className="font-semibold">{nextProject.name}</span>
              </span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
      </nav>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
