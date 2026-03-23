"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Colossal Hub transformed how our team works. We cut our reporting time by 60% in the first month.",
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow",
    color: "bg-blue-600",
  },
  {
    quote:
      "The automation features alone saved us 20 hours per week. It's like having an extra team member.",
    name: "Marcus Johnson",
    role: "CTO",
    company: "Nexus Digital",
    color: "bg-emerald-600",
  },
  {
    quote:
      "Finally, a platform that scales with us. From 10 to 500 employees, Colossal Hub just works.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "ScalePoint",
    color: "bg-purple-600",
  },
  {
    quote:
      "The integrations are seamless. We connected all our tools in under an hour — no engineering needed.",
    name: "David Park",
    role: "Head of Product",
    company: "CloudSync",
    color: "bg-amber-600",
  },
  {
    quote:
      "Their analytics dashboard gives us insights we never had before. Data-driven decisions are now easy.",
    name: "Lisa Thompson",
    role: "Director of Analytics",
    company: "DataVerse",
    color: "bg-pink-600",
  },
  {
    quote:
      "Best-in-class security and compliance. Our legal team was impressed by how thorough the platform is.",
    name: "James Wright",
    role: "CISO",
    company: "SecureFlow",
    color: "bg-indigo-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            See what teams are saying about how Colossal Hub helps them work
            better, faster, and smarter.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <svg
                className="h-8 w-8 text-slate-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-4 text-sm text-slate-600 leading-6">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
