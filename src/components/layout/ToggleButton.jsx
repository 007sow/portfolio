import React from "react";
import { Moon, Sun } from "lucide-react";

const ToggleButton = ({ handleThemeChange, isChecked }) => {
  const Icon = isChecked ? Moon : Sun;
  const label = isChecked ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      aria-label={label}
      title={label}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300/80 bg-white/75 text-stone-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-800 hover:text-cyan-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-100 dark:focus-visible:ring-sky-300"
    >
      <span className="absolute inset-1 rounded-full bg-cyan-50 opacity-0 transition group-hover:opacity-100 dark:bg-sky-300/10" />
      <Icon className="relative h-4 w-4" aria-hidden="true" />
    </button>
  );
};

export default ToggleButton;
