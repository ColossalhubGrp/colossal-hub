"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const logos = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Stark",
  "Wayne",
  "Umbrella",
  "Hooli",
  "Pied Piper",
  "Soylent",
  "Massive",
];

// Duplicate for seamless infinite loop
const marqueeLogos = [...logos, ...logos];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
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
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        ref={trackRef}
        className="flex items-center gap-8 sm:gap-14 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {marqueeLogos.map((name, i) => (
          <div
            key={`${name}-${i}`}
            data-logo
            className="flex-shrink-0 flex items-center justify-center h-10 px-2"
          >
            <span className="text-sm sm:text-base font-semibold text-slate-400 whitespace-nowrap transition-all duration-300">
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
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Scale your business with{" "}
          <span className="text-blue-600">Colossal Hub</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-8"
        >
          The all-in-one platform that helps you manage analytics, automate
          workflows, and collaborate with your team — so you can focus on what
          matters most: growing your business.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Get started free
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            <Play className="h-4 w-4 fill-slate-600 text-slate-600" />
            Watch demo
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 sm:mt-20">
          <p className="text-sm font-medium text-slate-500 mb-8">
            Trusted by 1,000+ companies worldwide
          </p>
          <LogoMarquee />
        </motion.div>
      </motion.div>
    </section>
  );
}
