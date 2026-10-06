import type { Metadata } from "next";
import Phone from "@/components/Phone";
import { PricingPointer, Problem, WorksWith } from "@/components/product";
import { Button, ClosingCta, Container, DefinitionList, PageIntro, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "AI Business Intelligence for SMEs | Colossal Hub" },
  description:
    "Ask a question about your business in plain language and get an answer drawn from your people, pay and money together.",
};

const depth = [
  { uses: "Payroll", answers: "Payroll questions" },
  { uses: "+ Attendance", answers: "Cost questions" },
  { uses: "+ Accounting", answers: "Margin questions" },
];

export default function IntelligencePage() {
  return (
    <>
      <PageIntro label="Intelligence" title="Ask your business a question. Get an answer.">
        <p>
          Not another dashboard. Intelligence that reads across your people, your pay and your money together, and
          replies in plain language.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/demo">Book a demo</Button>
        </div>
      </PageIntro>

      <Problem
        lines={[
          "The answer to most of an owner's questions is already somewhere in the business.",
          "It is spread across payroll, attendance and the books, and nobody has time to pull it together.",
          "So the important decisions get made on instinct. Not because the instinct is poor, but because nothing better is available.",
        ]}
      />

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Thin data gives thin answers.
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <p>
                Reporting built on payroll alone is thin. Reporting built on sales alone is thin. Most business software
                can only give you thin, because thin is all its data allows.
              </p>
              <p>
                Because everything here sits on one foundation, the intelligence layer sees the whole business at once:
                labour, attendance, cost, trade and cash. That is when the useful questions become answerable.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                It gets sharper the more of Colossal Hub you use.
              </h3>
              <table className="mt-4 w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                    <th className="py-2 pr-4 font-medium">With</th>
                    <th className="py-2 font-medium">It can answer</th>
                  </tr>
                </thead>
                <tbody>
                  {depth.map((row) => (
                    <tr key={row.uses} className="border-b border-slate-200 dark:border-slate-800">
                      <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">{row.uses}</td>
                      <td className="py-3 text-slate-600 dark:text-slate-400">{row.answers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Phone
            subtitle="Intelligence"
            caption="Illustration. Names and figures are for a sample business."
            messages={[
              { from: "me", time: "08:05", text: "How many people are on leave next week, and where?" },
              { from: "them", time: "08:05", text: "Seven. Four in Production, two in Dispatch, one in Finance. Dispatch will be at half strength on Wednesday." },
              { from: "me", time: "08:07", text: "What happens to the wage bill if we take on twelve more people at the mill?" },
              {
                from: "them",
                time: "08:07",
                text: "At Grade A2 with the mill's usual overtime, about USD 5,300 more a month, plus around USD 480 in employer NSSA and levies. September would have been roughly 67,600 instead of 61,800.",
              },
              { from: "me", time: "08:09", text: "Who is due for a contract renewal in the next sixty days?" },
              { from: "them", time: "08:09", text: "Four people. The first is R. Chikwanha in Stores on 14 October." },
            ]}
          />
        </Container>
      </section>

      <Split title="On WhatsApp" intro="Owners and managers ask where they already are.">
        <DefinitionList
          items={[
            { term: "Owners", detail: "Ask a question about the business and get an answer. Get the numbers that matter without opening anything." },
            { term: "Managers", detail: "Ask about their own section: who is in, what overtime is running at, what needs approving." },
          ]}
        />
      </Split>

      <WorksWith
        items={[
          { name: "Payroll", href: "/payroll", how: "Wage bill, overtime and statutory cost, by department or section." },
          { name: "People (HR)", href: "/hr", how: "Leave, attendance, headcount and contract dates." },
          { name: "Accounting (coming soon)", href: "/accounting", how: "Margin, cash and what is costing more than it returns." },
        ]}
      />

      <PricingPointer>Intelligence is part of the Complete plan, alongside People, Payroll and Recruit.</PricingPointer>

      <ClosingCta />
    </>
  );
}
