"use client";

import { motion } from "framer-motion";
import { FileText, ListFilter, Video, Users, Workflow, BarChart3 } from "lucide-react";

const features = [
  { icon: FileText, title: "Publish openings faster", description: "Create job posts in minutes and manage your open roles from one central dashboard. Give your hiring team a clear, organised way to launch and track recruitment activity without unnecessary admin work." },
  { icon: ListFilter, title: "Focus on the most relevant candidates first", description: "Let AI help your team review applications faster by surfacing candidates that best match your job description. Spend less time manually screening and more time speaking with the right people." },
  { icon: Video, title: "Run structured interviews without scheduling chaos", description: "Use AI to conduct video interviews and screen candidates more efficiently, and move promising applicants through the funnel faster. Create a more flexible experience for both your team and your candidates." },
  { icon: Users, title: "Keep recruiters and hiring managers aligned", description: "Make it easier for your team to review candidates, watch interviews at their own time, share feedback, and make hiring decisions from one place. No more scattered notes, missed updates, or disconnected tools." },
  { icon: Workflow, title: "Reduce delays at every stage of hiring", description: "From job creation to candidate review and interview progression, Colossal Hub helps your team move with more speed and consistency. That means less time lost in admin and more time spent closing quality hires." },
  { icon: BarChart3, title: "Stay smart with real-time insights", description: "See detailed reviews for each candidate, track costs per recruitment stage, identify drop-offs, and monitor your entire hiring funnel in real time. Every metric recruiters need, in one dashboard." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function SecondaryFeatures() {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Product features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to hire smarter
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Six tools that work together to move every role through your funnel — from posting to offer.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 sm:p-8 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-50 dark:hover:shadow-blue-950/20 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-6">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
