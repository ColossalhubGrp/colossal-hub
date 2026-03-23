"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/50 blur-3xl" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-400/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-600/30 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get started today
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
          Join thousands of teams already using Colossal Hub to transform their
          workflows. Start your free 14-day trial — no credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start your free trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact sales
          </a>
        </div>
      </motion.div>
    </section>
  );
}
