"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const logos = [
  "Acme Corp", "Globex", "Initech", "Stark", "Wayne",
  "Umbrella", "Hooli", "Pied Piper", "Soylent", "Massive",
];

const marqueeLogos = [...logos, ...logos];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateCenter = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    const items = track.querySelectorAll<HTMLElement>("[data-logo]");
    let closestEl: HTMLElement | null = null;
    let closestDist = Infinity;

    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - centerX);
      if (dist < closestDist) {
        closestDist = dist;
        closestEl = el;
      }
    });

    items.forEach((el) => {
      const span = el.querySelector("span");
      if (!span) return;
      if (el === closestEl) {
        span.style.color = "#2563EB";
        span.style.transform = "scale(1.1)";
      } else {
        span.style.color = "";
        span.style.transform = "scale(1)";
      }
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const loop = () => {
      updateCenter();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [updateCenter]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 z-10 bg-gradient-to-r from-white dark:from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 z-10 bg-gradient-to-l from-white dark:from-[#0a0a0f] to-transparent" />

      <motion.div
        ref={trackRef}
        className="flex items-center gap-6 sm:gap-10 lg:gap-14 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ x: { duration: 25, repeat: Infinity, ease: "linear" } }}
      >
        {marqueeLogos.map((name, i) => (
          <div key={`${name}-${i}`} data-logo className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 px-1">
            <span className="text-xs sm:text-sm lg:text-base font-semibold text-slate-400 dark:text-slate-600 whitespace-nowrap transition-all duration-300">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center px-4 sm:px-0 pt-20 pb-8 sm:pt-16 sm:pb-0">
      {/* Background - sized for viewport */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20 to-white dark:to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[400px] sm:h-[500px] sm:w-[700px] lg:h-[600px] lg:w-[900px] rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
            AI recruitment software for growing businesses
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl"
        >
          Hire faster with{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">AI-powered recruitment</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-7 sm:leading-8"
        >
          Post jobs, automatically shortlist top candidates, and run structured
          video interviews from one intelligent platform. Colossal Hub helps
          your team reduce manual hiring work, move faster, and make better
          hiring decisions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all">
            Start Hiring Smarter
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <Play className="h-4 w-4 fill-slate-600 dark:fill-slate-300 text-slate-600 dark:text-slate-300" />
            See How It Works
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 sm:mt-16 lg:mt-20">
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500 mb-5 sm:mb-8">
            Trusted by 1,000+ companies worldwide
          </p>
          <LogoMarquee />
        </motion.div>
      </motion.div>
    </section>
  );
}
