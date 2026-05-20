import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, socials } from "../../config/PortfolioData";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const Footer = () => (
  <footer className="bg-[#f5f3ee] px-5 pb-8 text-stone-950 dark:bg-[#080b0f] dark:text-white md:px-12 lg:px-56 xl:px-64">
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[1.75rem] border border-stone-300 bg-white/75 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {profile.availability}
            </div>
            <h2 className="mt-5 max-w-2xl font-clash text-3xl font-medium leading-tight md:text-4xl">
              Let’s build something resilient, useful, and sharp.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
          >
            Contact me
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 text-sm text-stone-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          {socials.map((link) => {
            const Icon = icons[link.name] || ArrowUpRight;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 text-stone-700 transition hover:-translate-y-0.5 hover:border-cyan-800 hover:text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-100"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
