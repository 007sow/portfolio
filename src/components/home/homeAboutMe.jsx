import React from "react";
import { ArrowUpRight, BadgeCheck, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { metrics, profile } from "../../config/PortfolioData";

const HomeAboutMe = () => {
  return (
    <section className="bg-[#f5f3ee] px-5 py-14 text-stone-950 dark:bg-[#080b0f] dark:text-white md:px-12 md:py-20 lg:px-56 xl:px-64">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            About
          </div>
          <h2 className="mt-5 max-w-md font-clash text-3xl font-medium leading-tight md:text-4xl">
            I turn complex data requirements into reliable analytics systems.
          </h2>
        </div>

        <div className="space-y-8">
          <p className="max-w-3xl font-satoshi text-lg leading-8 text-stone-700 dark:text-slate-300 md:text-xl md:leading-9">
            I am {profile.name}, a {profile.role.toLowerCase()} with almost five years of experience designing scalable data pipelines, ETL workflows, and enterprise reporting systems. My work spans Azure Data Factory, Synapse, ADLS Gen2, PySpark, SQL, Databricks, AWS Glue, Redshift, Kinesis, and Power BI.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-stone-300 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <p className="font-clash text-3xl text-cyan-900 dark:text-sky-100">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Cloud-native ETL pipelines for banking, HR, and retail data",
              "PySpark, SparkSQL, Delta Lake, and data warehouse optimization",
              "Power BI reporting with trusted KPI definitions and secure access",
              "Governance-aware delivery with PII masking, RBAC, and encryption",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-stone-300 bg-white/60 p-4 text-sm leading-6 text-stone-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-800 dark:text-sky-300" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:border-cyan-800 hover:text-cyan-900 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-100"
          >
            More about me
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutMe;
