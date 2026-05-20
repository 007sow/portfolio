import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { profile } from "../config/PortfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jcdhpdg",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_sa09i5d",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PZ5HUs-K1qXjOM7RT",
};

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        from_name: formData.fullName,
        from_email: formData.email,
        user_name: formData.fullName,
        user_email: formData.email,
        reply_to: formData.email,
        to_email: profile.email,
        message: formData.message,
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstError = errors.fullName || errors.email || errors.message;

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-stone-950 dark:bg-[#080b0f] dark:text-white">
      <main className="grid min-h-screen px-5 pt-28 pb-14 md:px-12 md:pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:px-56 xl:px-64">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-6xl lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-sky-100">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Contact
            </div>
            <h1 className="mt-5 max-w-xl font-clash text-4xl font-medium leading-[0.98] md:text-5xl lg:text-[3.45rem]">
              Tell me what you’re building.
            </h1>
            <p className="mt-6 max-w-lg font-satoshi text-base leading-8 text-stone-700 dark:text-slate-300">
              I’m open to data engineering roles where cloud pipelines, distributed processing, reporting quality, and stakeholder communication matter.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/75 px-6 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:border-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-300"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[1.75rem] border border-stone-300 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] md:p-7 lg:mt-0"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-stone-700 dark:text-slate-200">Full name</span>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="min-h-12 rounded-2xl border border-stone-300 bg-white px-4 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-cyan-800 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-300"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-stone-700 dark:text-slate-200">Email</span>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="min-h-12 rounded-2xl border border-stone-300 bg-white px-4 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-cyan-800 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-300"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-stone-700 dark:text-slate-200">Message</span>
                <textarea
                  id="message"
                  placeholder="A few details about the role, project, or team"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="resize-none rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-cyan-800 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-300"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-950 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-100"
            >
              {isSubmitting ? "Sending..." : "Send message"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mt-5 min-h-6 text-sm">
              {submitStatus === "success" && (
                <p className="text-emerald-700 dark:text-emerald-300">Message sent. I’ll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-700 dark:text-red-300">Message failed. Please email me directly.</p>
              )}
              {firstError && (
                <p className="text-red-700 dark:text-red-300">{firstError}</p>
              )}
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
}

export default ContactPage;
