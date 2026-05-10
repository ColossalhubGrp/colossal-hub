"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Sparkles, Video, BarChart3 } from "lucide-react";

const features = [
  {
    id: "post-job",
    icon: FileText,
    title: "Post your job",
    subtitle: "Step 1",
    description:
      "Create and publish job openings quickly from one dashboard. Give your hiring team a clear, organised way to launch and track recruitment activity without unnecessary admin work.",
    color: "from-blue-600 to-indigo-600",
    mockup: {
      bg: "from-blue-500/20 to-indigo-500/20",
      accent: "bg-blue-500",
      items: [
        { label: "Open Roles", value: "12", change: "+3 this week" },
        { label: "Applications", value: "284", change: "+47 today" },
        { label: "Time to Post", value: "3 min", change: "avg" },
      ],
    },
  },
  {
    id: "ai-shortlist",
    icon: Sparkles,
    title: "Let AI shortlist candidates",
    subtitle: "Step 2",
    description:
      "Automatically identify the most relevant applicants based on your hiring criteria. Spend less time manually screening and more time speaking with the right people.",
    color: "from-emerald-600 to-teal-600",
    mockup: {
      bg: "from-emerald-500/20 to-teal-500/20",
      accent: "bg-emerald-500",
      items: [
        { label: "Screened", value: "1,420", change: "automated" },
        { label: "Top Matches", value: "38", change: "high fit" },
        { label: "Time Saved", value: "18 hrs", change: "/role" },
      ],
    },
  },
  {
    id: "ai-interview",
    icon: Video,
    title: "Let AI interview candidates",
    subtitle: "Step 3",
    description:
      "Let AI run structured video interviews and then evaluate recommended candidates faster with your team. Move promising applicants through the funnel without scheduling chaos.",
    color: "from-amber-500 to-orange-600",
    mockup: {
      bg: "from-amber-500/20 to-orange-500/20",
      accent: "bg-amber-500",
      items: [
        { label: "Interviews", value: "96", change: "completed" },
        { label: "Avg. Score", value: "8.4", change: "/10" },
        { label: "Scheduling", value: "0 min", change: "no friction" },
      ],
    },
  },
  {
    id: "insights",
    icon: BarChart3,
    title: "Read the insights and analytics",
    subtitle: "Step 4",
    description:
      "See your detailed reviews per candidate, cost per recruitment stage, track completion rates, identify drop-offs, and monitor your entire hiring funnel in real-time. Every metric recruiters need, in one dashboard.",
    color: "from-purple-600 to-pink-600",
    mockup: {
      bg: "from-purple-500/20 to-pink-500/20",
      accent: "bg-purple-500",
      items: [
        { label: "Cost / Hire", value: "$412", change: "-22%" },
        { label: "Completion", value: "87%", change: "+9%" },
        { label: "Top Drop-off", value: "Stage 3", change: "flagged" },
      ],
    },
  },
];

export default function PrimaryFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const active = features[activeTab];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A simpler way to hire in 3 steps
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            From posting a role to making the offer — Colossal Hub guides every
            stage of recruitment with AI doing the heavy lifting.
          </p>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 flex flex-wrap justify-center gap-2"
        >
          {features.map((feature, i) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(i)}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <feature.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{feature.title}</span>
              <span className="sm:hidden">{feature.subtitle}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left - Text */}
              <div className="order-2 md:order-1">
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${active.color} px-3 py-1 text-xs font-semibold text-white`}
                >
                  <active.icon className="h-3.5 w-3.5" />
                  {active.subtitle}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 text-base text-slate-400 leading-7">
                  {active.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Start Hiring Smarter
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    Book Demo
                  </a>
                </div>
              </div>

              {/* Right - Mockup */}
              <div className="order-1 md:order-2">
                <div
                  className={`relative rounded-2xl bg-gradient-to-br ${active.mockup.bg} border border-white/10 p-6 sm:p-8 backdrop-blur-sm`}
                >
                  {/* Mock Dashboard */}
                  <div className="rounded-xl bg-slate-800/80 border border-white/5 p-5 shadow-2xl">
                    {/* Top bar */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <div className="h-3 w-3 rounded-full bg-green-400/80" />
                      <div className="flex-1" />
                      <div className="h-2 w-20 rounded-full bg-slate-700" />
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {active.mockup.items.map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-lg bg-slate-700/50 p-3"
                        >
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="mt-1 text-lg font-bold text-white">
                            {item.value}
                          </p>
                          {item.change && (
                            <p className="text-xs text-emerald-400">
                              {item.change}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="rounded-lg bg-slate-700/30 p-4">
                      <div className="flex items-end gap-1.5 h-24">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const heights = [40, 55, 35, 65, 50, 75, 60, 80, 45, 70, 85, 90];
                          return (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{
                                height: `${heights[i]}%`,
                              }}
                              transition={{
                                delay: 0.3 + i * 0.05,
                                duration: 0.4,
                                ease: "easeOut",
                              }}
                              className={`flex-1 rounded-sm ${active.mockup.accent} opacity-70`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom rows */}
                    <div className="mt-4 space-y-2">
                      {[70, 55, 85].map((w, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                          <div
                            className="h-2 rounded-full bg-slate-700"
                            style={{ width: `${w}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
