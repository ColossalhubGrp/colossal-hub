"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Sparkles, Users, Lock, Zap, Eye, Compass } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Think in other terms", desc: "We see and think differently. We approach every problem with fresh thinking. We improve our products, services and ideas every day." },
  { icon: ShieldCheck, title: "Do the right thing always", desc: "We do the right thing regardless of the consequences. Our ethics are unbending. We take responsibility for individual and collective actions." },
  { icon: Sparkles, title: "Exceed expectations", desc: "Excellence is our DNA. We do not aim to satisfy our stakeholders; we aim to amaze them. We provide tailor-made solutions that adapt to the ever-changing business environment." },
  { icon: Users, title: "Deep collaboration", desc: "Each member of our team complements the talents of others. We see further and do more by moving as a unit." },
  { icon: Lock, title: "Confidentiality", desc: "We do not disclose client information to undesignated persons during or after we have been engaged." },
  { icon: Zap, title: "Move fast", desc: "We make decisions fast and put the plan into action. Everything we do, we execute with a sense of urgency." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">About Colossal Hub</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Empowering Growth</h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-7">
              Colossal Hub is a distinct brand that empowers individuals and companies to grow. A large proportion of small and large companies struggle to find affordable enterprise systems that can perfectly connect their different operations and provide actionable business insights.
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-7">
              We provide well-connected Artificial Intelligence-powered enterprise systems that enable every company to operate, deliver value to their customers and grow smoothly. Whether the company is just getting started or already at scale, we have a wide range of software products they can use to expand to the next level.
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-6">
                We envision a world where every company has the power and chance to intentionally grow their business in extraordinary ways.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-6">
                To help companies grow by providing them with useful, intelligent and easy-to-use integrated business systems.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Our values</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">How we work</h3>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{v.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-6">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
