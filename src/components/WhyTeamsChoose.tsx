"use client";

import { motion } from "framer-motion";
import { Rocket, ListChecks, Clock, Smile, GitMerge } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Hire faster", description: "Reduce manual screening and keep hiring moving." },
  { icon: ListChecks, title: "Improve consistency", description: "Use a more structured process for candidate evaluation." },
  { icon: Clock, title: "Save recruiter time", description: "Automate repetitive tasks and focus on higher-value decisions." },
  { icon: Smile, title: "Better candidate experience", description: "Make the process smoother, clearer, and more professional." },
  { icon: GitMerge, title: "Keep your team aligned", description: "Bring job posting, candidate review, and recruitment insights into one workflow." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function WhyTeamsChoose() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Why teams choose us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why teams choose Colossal Hub
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Five reasons recruitment teams switch to Colossal Hub — and stick with it.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-6">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
