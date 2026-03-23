"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects.",
    featured: false,
    features: [
      "Up to 5 team members",
      "Basic analytics dashboard",
      "10 automated workflows",
      "Email support",
      "1 GB storage",
    ],
  },
  {
    name: "Professional",
    price: "$29",
    description: "Best for growing teams that need more power.",
    featured: true,
    features: [
      "Up to 50 team members",
      "Advanced analytics & reports",
      "Unlimited workflows",
      "Priority support",
      "50 GB storage",
      "Custom integrations",
      "SSO & 2FA",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with custom needs.",
    featured: false,
    features: [
      "Unlimited team members",
      "Custom analytics suite",
      "Unlimited workflows",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "SSO, SCIM & 2FA",
      "Full API access",
      "SLA guarantee",
      "Dedicated account manager",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            No hidden fees, no surprises. Pick the plan that fits your team and
            scale as you grow.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? "bg-blue-600 ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20 scale-105"
                  : "bg-slate-800 border border-slate-700"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-400 px-4 py-1 text-xs font-semibold text-blue-950">
                  Most popular
                </span>
              )}

              <h3
                className={`text-lg font-semibold ${
                  plan.featured ? "text-white" : "text-white"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? "text-white" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  /month
                </span>
              </div>

              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-blue-100" : "text-slate-400"
                }`}
              >
                {plan.description}
              </p>

              <a
                href="#"
                className={`mt-6 block w-full rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get started
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        plan.featured ? "text-blue-200" : "text-blue-400"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-blue-100" : "text-slate-300"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
