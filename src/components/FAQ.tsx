"use client";

import { motion } from "framer-motion";

const faqs = [
  { question: "How does the AI shortlisting work?", answer: "Our system helps identify applicants that best match your hiring standards, so your team can review the most relevant candidates first." },
  { question: "Can multiple team members collaborate on hiring?", answer: "Yes. Recruiters and hiring managers can work together in one shared recruitment workflow." },
  { question: "Do candidates need to install anything for video interviews?", answer: "No. Everything is done online on the platform." },
  { question: "How quickly can we get started?", answer: "Just sign in, buy credits and start recruiting." },
  { question: "Can Colossal Hub support growing companies?", answer: "Yes. The platform is designed to help teams streamline hiring as recruitment demand increases." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

export default function FAQ() {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Can&apos;t find what you&apos;re looking for? Reach out to our support team and we&apos;ll get back to you within 24 hours.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <motion.div key={faq.question} variants={fadeUp}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-6">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
