import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  children: React.ReactNode;
};

const buttonStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/60",
  inverse: "bg-white text-slate-900 hover:bg-slate-100",
};

export function Button({ href, variant = "primary", className = "", children }: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Page-level opening block used by every inner page. */
export function PageIntro({
  label,
  title,
  children,
  aside,
}: {
  label?: string;
  title: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <Container className={`py-16 sm:py-24 ${aside ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""}`}>
        <Reveal>
          {label && <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{label}</p>}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.1]">
            {title}
          </h1>
          {children && (
            <div className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">{children}</div>
          )}
        </Reveal>
        {aside && <Reveal delay={150}>{aside}</Reveal>}
      </Container>
    </section>
  );
}

/** Two-column section: short heading on the left, content on the right. */
export function Split({
  title,
  intro,
  children,
  className = "",
}: {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-b border-slate-200 dark:border-slate-800 ${className}`}>
      <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
          {intro && <div className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{intro}</div>}
        </Reveal>
        <Reveal delay={100}>{children}</Reveal>
      </Container>
    </section>
  );
}

/** A list of "Name — description" rows separated by hairlines. */
export function DefinitionList({ items }: { items: { term: string; detail: React.ReactNode }[] }) {
  return (
    <dl className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
      {items.map((item) => (
        <div key={item.term} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
          <dt className="font-semibold text-slate-900 dark:text-white">{item.term}</dt>
          <dd className="leading-7 text-slate-600 dark:text-slate-400">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ClosingCta({
  title = "Start with the one thing costing you sleep.",
  body = "We will run it alongside whatever you use today and reconcile the results before you commit to anything.",
  secondary,
}: {
  title?: string;
  body?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-slate-900 dark:bg-slate-950">
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <Button href="/demo">Book a demo</Button>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
              >
                {secondary.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Marks copy that is still waiting on the business. Search the codebase for
 * "<Tbc" to find every open item before launch.
 */
export function Tbc({ children = "To be confirmed" }: { children?: React.ReactNode }) {
  return (
    <span className="rounded border border-dashed border-slate-400 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-1.5 py-0.5 text-[0.9em] italic text-slate-500 dark:text-slate-400">
      {children}
    </span>
  );
}

/** Long-form text layout for legal and policy pages. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 leading-7 text-slate-700 dark:text-slate-300 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2">
      {children}
    </div>
  );
}
