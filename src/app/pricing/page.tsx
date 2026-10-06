import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { ClosingCta, Container, PageIntro, Tbc } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Colossal Hub pricing. A free plan for employee records and WhatsApp payslips, then per employee, per month. No setup fee, no minimum term.",
};

// TODO: replace the price descriptions with published numbers.
const tiers = [
  {
    name: "Free",
    contains: "Employee records, payslip delivery on WhatsApp, leave requests and balances.",
    price: "No charge, no card",
    cta: { label: "Book a demo", href: "/demo" },
  },
  {
    name: "Payroll",
    contains: "Everything in Free, plus payroll processing, statutory calculations and returns.",
    price: "Per employee, per month",
    cta: { label: "Book a demo", href: "/demo" },
  },
  {
    name: "Complete",
    contains: "People, Payroll, Intelligence and Recruit together.",
    price: "Per employee, per month",
    cta: { label: "Book a demo", href: "/demo" },
  },
  {
    name: "Recruit",
    contains: "AI recruitment on its own, with any HR system.",
    price: "Per month, by role volume",
    cta: { label: "Book a demo", href: "/demo" },
  },
  {
    name: "Practices",
    contains: "Multi-client view for accountants and bureaus.",
    price: "Talk to us",
    cta: { label: "Talk to us", href: whatsappLink("Hello Colossal Hub. I'd like to know about pricing for practices.") },
  },
];

// Answers are placeholders until the business confirms them. Replace each
// `null` with the answer text; rows still null show a "to be confirmed" marker.
const faqs: { q: string; a: string | null }[] = [
  { q: "What happens when our headcount changes from month to month?", a: null },
  { q: "Are seasonal and casual workers charged?", a: null },
  { q: "Which currency do we pay in?", a: null },
  { q: "How is payment made?", a: null },
  { q: "What happens to our data if we leave?", a: null },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro label="Pricing" title="Start free. Pay for what you add.">
        <p>Every plan works on its own. Move up, or down, when the business needs it.</p>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-12 sm:py-16">
          <div className="border-t border-slate-300 dark:border-slate-700">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="grid gap-3 border-b border-slate-200 dark:border-slate-800 py-6 md:grid-cols-[10rem_1fr_14rem_9rem] md:items-center md:gap-8"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.name}</h2>
                <p className="leading-7 text-slate-600 dark:text-slate-400">{t.contains}</p>
                <p className="font-semibold text-slate-900 dark:text-white">{t.price}</p>
                <Link
                  href={t.cta.href}
                  {...(t.cta.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 md:text-right"
                >
                  {t.cta.label} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-800 dark:text-slate-200">
            No setup fee. No implementation project. No minimum term. If it is not working, leave, and take your data
            with you.
          </p>
        </Container>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Pricing questions</h2>
          <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            {faqs.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <div className="pb-5 leading-7 text-slate-600 dark:text-slate-400">{f.a ?? <Tbc>Answer to be confirmed</Tbc>}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta title="Not sure which plan fits?" body="Tell us how many people you employ and what you want to fix first. We will tell you which plan, and what it costs." />
    </>
  );
}
