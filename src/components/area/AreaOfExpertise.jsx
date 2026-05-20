import React from "react";
import { Cloud, Code2, Server, Sparkles } from "lucide-react";
import { expertise } from "../../config/PortfolioData";
import InfiniteSkills from "../home/InfiniteSkills";

const icons = [Server, Code2, Cloud];

const AreasOfExpertise = () => (
  <section className="bg-[linear-gradient(180deg,#f5f3ee_0%,#eef8f6_18%,#eef8f6_82%,#f5f3ee_100%)] px-5 py-16 text-stone-950 dark:bg-[linear-gradient(180deg,#080b0f_0%,#0b1117_20%,#0b1117_82%,#080b0f_100%)] dark:text-white md:px-12 md:py-24 lg:px-56 xl:px-64">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-900/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Specialty
          </div>
          <h2 className="mt-5 max-w-2xl font-clash text-3xl font-medium leading-tight md:text-4xl">
            Data engineering work built for scale, trust, and reporting speed.
          </h2>
        </div>
        <p className="max-w-md font-satoshi text-base leading-7 text-stone-600 dark:text-slate-300">
          I like data systems with a clear spine: dependable ingestion, curated transformations, governance controls, and reporting layers that leaders can trust.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {expertise.map((item, index) => {
          const Icon = icons[index] || Code2;
          return (
            <article
              key={item.title}
              className="group rounded-[1.35rem] border border-cyan-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-950 text-white dark:bg-sky-100 dark:text-cyan-950">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800 dark:text-sky-200">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-clash text-xl font-medium">{item.title}</h3>
              <p className="mt-4 font-satoshi text-sm leading-7 text-stone-600 dark:text-slate-300">
                {item.content}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-cyan-900/10 bg-white/70 py-3 dark:border-white/10 dark:bg-white/[0.04]">
        <InfiniteSkills />
      </div>
    </div>
  </section>
);

export default AreasOfExpertise;
