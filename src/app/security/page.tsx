import type { Metadata } from "next";
import { ClosingCta, Container, PageIntro, Tbc } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security and data",
  description:
    "Where Colossal Hub keeps your payroll and employee data, who can see it, how it is protected and what happens when you leave.",
};

// Each answer marked <Tbc> needs confirming by whoever runs the infrastructure.
const sections: { q: string; a: React.ReactNode }[] = [
  {
    q: "Where is the data hosted?",
    a: <Tbc>Hosting provider and data centre location to be confirmed</Tbc>,
  },
  {
    q: "Who can see it?",
    a: (
      <>
        Your data belongs to your business. An employee can only ever see their own records, never another
        employee&apos;s, whether on WhatsApp or on screen. <Tbc>What managers and payroll staff can see</Tbc> On our side, we never disclose client
        information to undesignated persons, during or after we have been engaged. <Tbc>Which Colossal Hub staff can access client data, and under what conditions</Tbc>
      </>
    ),
  },
  {
    q: "How is it encrypted?",
    a: <Tbc>Encryption in transit and at rest to be confirmed</Tbc>,
  },
  {
    q: "Backup and recovery",
    a: <Tbc>Backup frequency, retention period and recovery time to be confirmed</Tbc>,
  },
  {
    q: "What happens if we leave?",
    a: (
      <>
        There is no minimum term. If it is not working, leave, and take your data with you.{" "}
        <Tbc>Export format, and how long data is kept before deletion</Tbc>
      </>
    ),
  },
  {
    q: "What about WhatsApp?",
    a: (
      <>
        Colossal Hub only talks to the WhatsApp number held on an employee&apos;s record. Any other number is turned
        away completely, with a reply saying the number is not associated with any employee. Nothing else is said to
        it.{" "}
        <Tbc>What payslip detail is sent in the message itself</Tbc>
      </>
    ),
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageIntro label="Security and data" title="You are handing us your payroll. Here is what happens to it.">
        <p>
          Wages, ID numbers and bank details are the most sensitive records a business keeps. This page sets out where they
          live, who can see them, and what happens when you leave.
        </p>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-12 sm:py-16">
          <dl className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            {sections.map((s) => (
              <div key={s.q} className="grid gap-2 py-6 md:grid-cols-[16rem_1fr] md:gap-10">
                <dt className="font-semibold text-slate-900 dark:text-white">{s.q}</dt>
                <dd className="leading-7 text-slate-600 dark:text-slate-400">{s.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-4 py-12 md:grid-cols-[16rem_1fr] md:gap-10">
          <h2 className="font-semibold text-slate-900 dark:text-white">Security questions</h2>
          <div className="leading-7 text-slate-600 dark:text-slate-400">
            <p>
              Ask a named person, not a ticket queue: <Tbc>Name and role of security contact</Tbc>, at{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-blue-600 dark:text-blue-400 underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
            <p className="mt-3">
              {site.legalName} is registered in Zimbabwe, company number {site.companyNumber}.
            </p>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
