/** Endless strip of short labels. Pauses on hover; static under reduced motion. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) =>
    items.map((item, i) => (
      <li
        key={`${hidden ? "b" : "a"}-${i}`}
        aria-hidden={hidden || undefined}
        className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-700 dark:text-slate-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
        {item}
      </li>
    ));

  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="marquee-track flex w-max gap-3">
        {row(false)}
        {row(true)}
      </ul>
    </div>
  );
}
