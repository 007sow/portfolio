import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Github, Linkedin, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { metrics, profile, socials, strengths } from "../../config/PortfolioData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const Hero = () => {
  const featuredStrengths = strengths.slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f3ee] px-5 pt-24 pb-8 text-stone-950 dark:bg-[#080b0f] dark:text-white md:px-12 md:pt-28 md:pb-10 lg:px-48 xl:px-56">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,116,144,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.10)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f5f3ee] to-transparent dark:from-[#080b0f]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.98fr_0.92fr]"
      >
        <div>
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/70 px-3 py-1.5 text-[0.67rem] font-semibold uppercase tracking-[0.17em] text-stone-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-sky-100"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.75)]" />
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl font-clash text-[clamp(2.65rem,4.7vw,4.75rem)] font-medium leading-[0.92] text-stone-950 dark:text-white"
          >
            Building trusted data platforms across Azure and AWS.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl font-satoshi text-base leading-7 text-stone-700 dark:text-slate-300 md:text-[1.02rem] md:leading-7"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/experience"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
            >
              View experience
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={profile.resume}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/70 px-5 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:border-cyan-700 hover:text-cyan-800 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-100"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-stone-600 dark:text-slate-300"
          >
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.name] || ArrowUpRight;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-cyan-800 dark:hover:text-sky-200"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[500px] rounded-[1.5rem] border border-stone-300/80 bg-white/70 p-2.5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:justify-self-end"
        >
          <div className="rounded-[1.15rem] border border-stone-200 bg-[#101820] p-4 text-white dark:border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-sky-200">Portfolio</p>
                <p className="mt-1 font-clash text-xl">{profile.name}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200/20 bg-white/10 font-clash text-base text-sky-100">
                SS
              </div>
            </div>

            <div className="grid gap-2.5 py-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-white/[0.08] p-3">
                  <p className="font-clash text-2xl text-sky-100">{metric.value}</p>
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#eef8f6] p-3.5 text-stone-950">
              <div className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-cyan-950">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Data stack
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredStrengths.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-900/10 bg-white px-3 py-1 text-[0.7rem] font-semibold text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              {[
                {
                  icon: Database,
                  title: "Ingest",
                  copy: "ADF and AWS Glue pipelines from enterprise source systems.",
                },
                {
                  icon: Sparkles,
                  title: "Transform",
                  copy: "PySpark, SQL, Synapse, Databricks, and Delta Lake curation.",
                },
                {
                  icon: ShieldCheck,
                  title: "Govern",
                  copy: "PII masking, RBAC, Key Vault, and trusted reporting layers.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-cyan-950">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="mt-3 font-semibold text-sky-100">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
