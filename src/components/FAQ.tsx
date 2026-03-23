"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to all Professional features for 14 days. No credit card required. At the end of your trial, choose a plan or downgrade to free.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely. Upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We support 100+ integrations including Slack, Salesforce, HubSpot, GitHub, Google Workspace, Jira, and many more. Custom integrations are available on Enterprise.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use AES-256 encryption at rest and TLS 1.3 in transit. We're SOC 2 Type II certified and GDPR compliant. Your data is backed up across multiple regions.",
  },
  {
    question: "Do you offer custom contracts?",
    answer:
      "Yes, our Enterprise plan includes custom contracts, SLAs, and dedicated support. Contact our sales team to discuss your specific requirements.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans include email support. Professional plans get priority support with 4-hour response times. Enterprise includes 24/7 dedicated support.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export all your data at any time in CSV, JSON, or Excel format. We believe your data belongs to you.",
  },
  {
    question: "How does team billing work?",
    answer:
      "You're billed per seat on your plan. Add or remove team members anytime and billing adjusts automatically.",
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer:
      "Yes! We offer 50% off for verified nonprofit organizations. Contact our sales team with your organization's details.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function FAQ() {
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
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.question} variants={fadeUp}>
              <h3 className="text-sm font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
