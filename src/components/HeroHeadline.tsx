"use client";

import { useEffect, useState } from "react";

const words = ["people", "pay", "numbers"];
const longest = words.reduce((a, b) => (b.length > a.length ? b : a));

const TYPE_MS = 95;
const DELETE_MS = 50;
const HOLD_MS = 1800;
const GAP_MS = 350;

/**
 * Home headline with a typewriter word slot: each subject types in, holds,
 * deletes, and the next one types in. The slot reserves the width of the
 * longest word so the line never reflows. Screen readers, and visitors who
 * prefer reduced motion, get the full sentence instead.
 */
export default function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay: number;
    let next: () => void;

    if (!deleting && length === word.length) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (deleting && length === 0) {
      delay = GAP_MS;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
      next = () => setLength((l) => l + (deleting ? -1 : 1));
    }

    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [index, length, deleting]);

  return (
    <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:leading-[1.1] md:text-[2.5rem] lg:text-[3.6rem]">
      <span className="sr-only">Run your people, your pay and your numbers from one place. Or from WhatsApp.</span>

      {/* Reduced motion: the original sentence, unanimated. */}
      <span aria-hidden className="hidden motion-reduce:inline">
        Run your people, your pay and your numbers from one place.{" "}
        <span className="text-blue-600 dark:text-blue-400">Or from WhatsApp.</span>
      </span>

      <span aria-hidden className="motion-reduce:hidden">
        Run your{" "}
        <span className="inline-grid text-left align-baseline">
          <span className="invisible col-start-1 row-start-1">{longest}</span>
          <span className="col-start-1 row-start-1 whitespace-nowrap text-blue-600 dark:text-blue-400">
            {words[index].slice(0, length)}
            <span className="caret ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.06em] rounded-full bg-current" />
          </span>
        </span>{" "}
        from one place.
        <br />
        <span className="text-blue-600 dark:text-blue-400">Or from WhatsApp.</span>
      </span>
    </h1>
  );
}
