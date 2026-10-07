import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, PageIntro, Tbc } from "@/components/ui";

export const metadata: Metadata = {
  // Hidden for now: not linked from the site and kept out of search results.
  robots: { index: false, follow: false },
  title: "Resources",
  description: "Guides, the statutory compliance calendar and articles from Colossal Hub.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro label="Resources" title="Useful whether or not you buy anything from us." />

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-px py-12 sm:py-16 md:grid-cols-2">
          <Link
            href="/resources/compliance-calendar"
            className="group flex flex-col border-t border-slate-300 dark:border-slate-700 py-6 md:pr-10"
          >
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Free tool</span>
            <span className="mt-2 text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Compliance calendar
            </span>
            <span className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              Every statutory deadline you have this year, on one page, with reminders on WhatsApp.
            </span>
            <ArrowRight className="mt-5 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex flex-col border-t border-slate-300 dark:border-slate-700 py-6 md:pl-10">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Guides and articles</span>
            <span className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Guides</span>
            <span className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              <Tbc>First guides and articles to be added</Tbc>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
