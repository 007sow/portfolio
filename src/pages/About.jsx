import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";
import Footer from "../components/layout/Footer";
import InfiniteSkills from "../components/home/InfiniteSkills";
import { profile } from "../config/PortfolioData";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Florida International University",
    dates: "January 2023 - December 2024",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-stone-950 dark:bg-[#080b0f] dark:text-white">
      <main className="px-5 pt-24 pb-12 md:px-12 md:pt-36 md:pb-16 lg:px-44 xl:px-52">
        <motion.section
          className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[390px] rounded-[1.5rem] border border-stone-300 bg-white/75 p-3.5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#101820] text-white">
                <div className="aspect-[4/3.15] overflow-hidden bg-slate-900">
                  <img
                    src="/images/sowmith-portrait.jpg"
                    alt="Sowmith Sripadi portrait"
                    className="h-full w-full object-cover object-[center_34%]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
                    {profile.role}
                  </p>
                  <h1 className="mt-1.5 font-clash text-2xl font-medium">{profile.name}</h1>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Azure", "PySpark", "Power BI"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold text-sky-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-7 text-slate-200">
                    Reliable ingestion, clean transformations, governed access, and fast dashboards that teams can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl lg:max-w-[560px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Profile
            </div>
            <h2 className="mt-5 font-clash text-4xl font-medium leading-[1] md:text-5xl lg:text-[3rem]">
              Data engineer with a cloud systems mind and a reporting eye.
            </h2>
            <p className="mt-5 max-w-xl font-satoshi text-[1.02rem] leading-8 text-stone-700 dark:text-slate-300">
              My foundation is production data engineering: Azure Data Factory, Synapse, ADLS Gen2, PySpark, SQL, Databricks, AWS Glue, Redshift, Kinesis, Airflow, Terraform, and Power BI. I like turning complex business questions into governed pipelines and dashboards that hold up under daily use.
            </p>
            <a
              href={profile.resume}
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.section>

        <section className="-mx-5 mt-10 md:-mx-12 lg:-mx-44 xl:-mx-52">
          <div className="px-5 md:px-12 lg:px-56 xl:px-64">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.25rem] border border-stone-300 bg-white/70 py-2 dark:border-white/10 dark:bg-white/[0.04]">
              <InfiniteSkills />
            </div>
          </div>
        </section>

        <section className="-mx-5 mt-28 md:-mx-12 lg:-mx-44 xl:-mx-52">
          <div className="px-5 md:px-12 lg:px-56 xl:px-64">
            <div className="mx-auto max-w-6xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Education
              </div>

              <div className="mt-8 grid gap-4">
                {education.map((item) => (
                  <article
                    key={item.degree}
                    className="w-full rounded-[1.5rem] border border-stone-300 bg-white/75 p-7 dark:border-white/10 dark:bg-white/[0.06] md:p-8"
                  >
                    <h3 className="font-clash text-2xl font-medium">{item.degree}</h3>
                    <p className="mt-4 text-lg text-stone-700 dark:text-slate-200">{item.school}</p>
                    <p className="mt-3 text-sm text-stone-500 dark:text-slate-400">{item.dates}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
