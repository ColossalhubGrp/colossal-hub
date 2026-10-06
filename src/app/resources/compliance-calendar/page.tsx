import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Container, PageIntro, Tbc } from "@/components/ui";

export const metadata: Metadata = {
  title: "Statutory compliance calendar for Zimbabwe",
  description:
    "Every PAYE, NSSA, levy and council deadline for the year on one page. Free, no account needed, with WhatsApp reminders.",
};

// Fill in `due` (e.g. "10th of the following month") and `who` once each
// deadline is confirmed against the current regulations. Rows with null show a
// "to be confirmed" marker.
const obligations: { name: string; what: string; who: string | null; due: string | null }[] = [
  { name: "PAYE", what: "Income tax deducted from employees' pay, with the return.", who: "ZIMRA", due: null },
  { name: "AIDS levy", what: "Calculated on PAYE and paid with it.", who: "ZIMRA", due: null },
  { name: "NSSA contributions", what: "Employee and employer social security contributions, with the schedule.", who: "NSSA", due: null },
  { name: "ZIMDEF levy", what: "Manpower development levy on the wage bill.", who: "ZIMDEF", due: null },
  { name: "Sector council contributions", what: "Contributions to your industry's National Employment Council.", who: null, due: null },
  { name: "Annual returns", what: "Year-end employer reconciliations and tax certificates for employees.", who: null, due: null },
];

export default function ComplianceCalendarPage() {
  return (
    <>
      <PageIntro label="Compliance calendar" title="Every statutory deadline you have this year, on one page.">
        <p>
          PAYE, social security, levies and council returns, with the dates. Free, no account needed. Tell us where to
          send reminders and we will message you before each one.
        </p>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-12 sm:py-16">
          <div className="hidden md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-300 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="py-3 pr-6 font-medium">Obligation</th>
                  <th className="py-3 pr-6 font-medium">What it is</th>
                  <th className="py-3 pr-6 font-medium">Paid to</th>
                  <th className="py-3 font-medium">Due</th>
                </tr>
              </thead>
              <tbody>
                {obligations.map((o) => (
                  <tr key={o.name} className="border-b border-slate-200 dark:border-slate-800 align-top">
                    <th className="py-5 pr-6 font-semibold text-slate-900 dark:text-white">{o.name}</th>
                    <td className="py-5 pr-6 leading-7 text-slate-600 dark:text-slate-400">{o.what}</td>
                    <td className="py-5 pr-6 text-slate-700 dark:text-slate-300">{o.who ?? <Tbc>TBC</Tbc>}</td>
                    <td className="py-5 font-semibold text-slate-900 dark:text-white">{o.due ?? <Tbc>TBC</Tbc>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-6 md:hidden">
            {obligations.map((o) => (
              <li key={o.name} className="border-t border-slate-200 dark:border-slate-800 pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-semibold text-slate-900 dark:text-white">{o.name}</h2>
                  <span className="text-right text-sm font-semibold text-slate-900 dark:text-white">{o.due ?? <Tbc>TBC</Tbc>}</span>
                </div>
                <p className="mt-1 leading-7 text-slate-600 dark:text-slate-400">{o.what}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Paid to: {o.who ?? <Tbc>TBC</Tbc>}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            <Tbc>What happens when a deadline falls on a weekend or public holiday</Tbc> This calendar is a guide, not
            tax advice.
          </p>
        </Container>
      </section>

      <section id="reminders" className="scroll-mt-20">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Get reminded on WhatsApp</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              One message before each deadline. Nothing else unless you ask for it.
            </p>
          </div>
          <LeadForm
            intro="Hello Colossal Hub, please send me reminders before statutory deadlines."
            submitLabel="Send me reminders"
            confirmation="Nearly done. Send the message and the reminders start."
            fields={[
              { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
              { name: "business", label: "Business name", type: "text", required: true, autoComplete: "organization" },
              { name: "email", label: "Email", type: "email", required: false, autoComplete: "email" },
              {
                name: "which",
                label: "Which deadlines?",
                type: "checkboxes",
                options: obligations.map((o) => o.name),
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
