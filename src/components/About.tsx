"use client";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-driven",
    desc: "We exist to help businesses of every size unlock their full potential through smarter technology.",
  },
  {
    icon: Heart,
    title: "Customer-first",
    desc: "Every feature we build starts with listening to the people who use our platform every day.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We invest heavily in R&D so our customers always have access to cutting-edge tools.",
  },
  {
    icon: TrendingUp,
    title: "Growth-minded",
    desc: "We measure our success by the growth we help create — for our customers and our team.",
  },
];

const stats = [
  { value: "10K+", label: "Companies worldwide" },
  { value: "50M+", label: "Tasks automated" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "150+", label: "Team members" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              About Colossal Hub
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building the future of work, together
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-7">
              Founded in 2020, Colossal Hub started with a simple idea: teams
              deserve tools that are as powerful as they are easy to use. What
              began as a small analytics dashboard has grown into a
              comprehensive platform trusted by thousands of businesses
              worldwide.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-7">
              Today, our team of 150+ engineers, designers, and customer
              advocates works across four continents to deliver the platform
              that modern teams rely on to move faster, collaborate better, and
              make smarter decisions every day.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
