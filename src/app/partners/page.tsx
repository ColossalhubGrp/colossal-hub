import type { Metadata } from "next";
import { Button, Container, PageIntro } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Payroll Software for Accounting Practices | Colossal Hub" },
  description:
    "Run every client's payroll from one place, with statutory rules kept current and returns produced ready to file.",
};

const gets = [
  {
    title: "Every client in one place",
    body: "Their payrolls, deadlines and filings visible together, under one login.",
  },
  {
    title: "Statutory rules kept current for you",
    body: "A change in a tax table or a wage grid is not your research problem.",
  },
  {
    title: "Returns produced in the format they are filed in",
    body: "Not an export you then reformat by hand.",
  },
  {
    title: "Fewer payslip queries",
    body: "Your clients' staff are served over WhatsApp, so the questions stop reaching you.",
  },
  {
    title: "Terms that make it worth your while",
    body: "And no attempt to go around you to your client.",
  },
];

const partnerMessage = whatsappLink("Hello Colossal Hub. I run a practice and would like to talk about partnering.");

export default function PartnersPage() {
  return (
    <>
      <PageIntro label="For accountants and consultants" title="Run every client's payroll from one place.">
        <p>
          You already carry the payroll for businesses that will never buy software themselves. We built the practice
          view for that: every client in one list, one login, and the statutory work already done.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={partnerMessage}>Talk to us about partnering</Button>
        </div>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">What a practice gets</h2>
          <ol className="mt-10 border-t border-slate-200 dark:border-slate-800">
            {gets.map((g, i) => (
              <li key={g.title} className="grid gap-2 border-b border-slate-200 dark:border-slate-800 py-6 sm:grid-cols-[3rem_18rem_1fr] sm:gap-6">
                <span className="text-sm font-semibold tabular-nums text-blue-600 dark:text-blue-400">0{i + 1}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{g.title}</h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">{g.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-slate-900 dark:bg-slate-950">
        <Container className="flex flex-col gap-8 py-16 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stop rebuilding the same spreadsheet for the twentieth time.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Tell us how many clients you run payroll for and how you do it today. We will tell you honestly whether it
              fits.
            </p>
          </div>
          <Button href={partnerMessage} className="md:shrink-0">
            Talk to us about partnering
          </Button>
        </Container>
      </section>
    </>
  );
}
