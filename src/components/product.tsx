import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Split, TextLink } from "./ui";

/** "The problem in three lines" block on product pages. */
export function Problem({ lines }: { lines: string[] }) {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <Container className="py-14 sm:py-16">
        <ol className="grid gap-6 md:grid-cols-3 md:gap-10">
          {lines.map((line, i) => (
            <li key={i} className="border-l-2 border-slate-200 dark:border-slate-800 pl-5">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{line}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Numbered "what makes ours different" points. */
export function Different({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Split title="What makes ours different">
      <ol className="space-y-8">
        {items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-4">
            <span className="pt-0.5 text-sm font-semibold tabular-nums text-blue-600 dark:text-blue-400">{i + 1}.</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-1.5 leading-7 text-slate-600 dark:text-slate-400">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Split>
  );
}

export function WorksWith({ items }: { items: { name: string; href: string; how: string }[] }) {
  return (
    <Split title="Works with" intro="Every application stands on its own. Used together, nobody types the same thing twice.">
      <ul className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group flex items-start justify-between gap-6 py-5">
              <span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.name}
                </span>
                <span className="mt-1 block leading-7 text-slate-600 dark:text-slate-400">{item.how}</span>
              </span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </Split>
  );
}

export function PricingPointer({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl leading-7 text-slate-700 dark:text-slate-300">{children}</p>
        <TextLink href="/pricing" className="shrink-0">
          See pricing
        </TextLink>
      </Container>
    </section>
  );
}
