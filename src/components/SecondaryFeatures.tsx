"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Shield, Workflow, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Generate detailed reports in seconds. Track KPIs, visualize trends, and export data in any format your team needs.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Manage roles, permissions, and team structures with ease. Keep everyone aligned with shared goals and transparent progress.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with SOC 2 compliance, SSO, and end-to-end encryption. Your data stays safe, always.",
  },
  {
    icon: Workflow,
    title: "Workflow Builder",
    description:
      "Design custom workflows with our visual drag-and-drop builder. No code required to automate complex business processes.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description:
      "Deploy across 30+ regions worldwide with built-in CDN, automatic failover, and 99.99% uptime guarantee.",
  },
  {
    icon: Layers,
    title: "Custom Dashboards",
    description:
      "Build personalized dashboards with drag-and-drop widgets. Monitor what matters most to your role and team.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SecondaryFeatures() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simplify every aspect of your workflow
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From reporting to security, every tool you need is built right in —
            no extra plugins or third-party services required.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
