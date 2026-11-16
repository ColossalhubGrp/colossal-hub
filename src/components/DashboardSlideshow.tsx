"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type SlideshowFrame = {
  src: string;
  alt: string;
  label: string;
};

const INTERVAL_MS = 5000;

/**
 * Crossfading slideshow of real product screens inside a browser frame.
 * All frames are ~2:1 screenshots, so one fixed aspect-ratio box holds
 * them without layout shift. Auto-advances every 5s and pauses while
 * the pointer is over it; the dots jump straight to a frame.
 */
export default function DashboardSlideshow({ frames }: { frames: SlideshowFrame[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || frames.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % frames.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused, frames.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_40px_80px_-40px_rgba(20,26,34,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="ml-4 rounded bg-slate-100 dark:bg-slate-800 px-3 py-0.5 text-[11px] text-slate-500 dark:text-slate-400">
            app.colossalhub.com
          </span>
          <span aria-live="polite" className="ml-auto text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {frames[index].label}
          </span>
        </div>
        <div className="relative w-full" style={{ aspectRatio: "1920 / 955" }}>
          {frames.map((frame, i) => (
            <Image
              key={frame.src}
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {frames.map((frame, i) => (
          <button
            key={frame.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${frame.label}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-slate-700 dark:bg-slate-300"
                : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
