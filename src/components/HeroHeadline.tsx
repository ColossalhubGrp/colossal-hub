"use client";

import { useEffect, useState } from "react";

const subjects = ["people", "pay", "numbers"];
const tail = "Or from WhatsApp.";

/**
 * The home headline, with the copy kept exactly as written: the three
 * subjects take turns being highlighted, and the closing line types itself in.
 * Screen readers and no-JS visitors get the full sentence straight away.
 */
export default function HeroHeadline() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(tail.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= tail.length) clearInterval(typer);
    }, 55);
    // Start from empty on the first tick rather than in the effect body.
    const start = setTimeout(() => setTyped(0), 0);

    const cycle = setInterval(() => setActive((a) => (a + 1) % subjects.length), 2200);
    return () => {
      clearInterval(typer);
      clearTimeout(start);
      clearInterval(cycle);
    };
  }, []);

  const word = (w: string, i: number) => (
    <span className="relative inline-block">
      <span className={`transition-colors duration-500 ${active === i ? "text-blue-600 dark:text-blue-400" : ""}`}>{w}</span>
      <span
        aria-hidden
        className={`absolute inset-x-0 -bottom-0.5 h-[0.12em] origin-left rounded-full bg-blue-600/80 dark:bg-blue-400/80 transition-transform duration-500 ${
          active === i ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </span>
  );

  return (
    <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.08] lg:text-[4rem]">
      <span className="sr-only">Run your people, your pay and your numbers from one place. {tail}</span>
      <span aria-hidden>
        Run your {word("people", 0)}, your {word("pay", 1)} and your {word("numbers", 2)} from one place.{" "}
        <span className="whitespace-nowrap text-blue-600 dark:text-blue-400">
          {tail.slice(0, typed)}
          <span className="caret ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-current" />
          {/* Reserve the line's width so the layout doesn't jump while typing. */}
          <span className="invisible">{tail.slice(typed)}</span>
        </span>
      </span>
    </h1>
  );
}
