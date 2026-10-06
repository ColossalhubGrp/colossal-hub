import type { Metadata } from "next";
import { Check, CircleAlert } from "lucide-react";
import { Different, PricingPointer, Problem, WorksWith } from "@/components/product";
import { Button, ClosingCta, DefinitionList, PageIntro, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Payroll Software for Zimbabwe | NEC Grades, PAYE, NSSA | Colossal Hub" },
  description:
    "Payroll that calculates against current tax tables, sector wage grids and contribution ceilings, in single or dual currency, with returns ready to file.",
};

const checks = [
  "Earnings calculated against the grade structure",
  "PAYE and AIDS levy against the current tax table",
  "NSSA contributions capped at the ceiling",
  "ZIMDEF and sector council contributions",
  "USD and ZiG portions split per employee",
];

function PayRunReview() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Pay run · September 2026</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">84 employees · Ready for review</p>
          </div>
          <span className="rounded bg-blue-50 dark:bg-blue-950/60 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
            Draft
          </span>
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-800 px-5">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-3 py-3 text-sm text-slate-700 dark:text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              {c}
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 px-5 py-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <CircleAlert className="h-4 w-4 text-amber-500" />3 employees to check before you approve
          </p>
          <ul className="mt-2 space-y-1.5 pl-6 text-sm text-slate-600 dark:text-slate-400">
            <li>2 people worked more overtime than their contract allows</li>
            <li>1 new starter has no tax number on file</li>
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-slate-500">Illustration of a pay run review.</figcaption>
    </figure>
  );
}

export default function PayrollPage() {
  return (
    <>
      <PageIntro label="Payroll" title="Stop calculating. Start checking." aside={<PayRunReview />}>
        <p>
          Wages, deductions and statutory returns calculated against the grades, tax tables and ceilings that actually
          apply to your sector and your country. In one currency or two.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/demo">Book a demo</Button>
          <Button href="/why" variant="secondary">
            Compare the alternatives
          </Button>
        </div>
      </PageIntro>

      <Problem
        lines={[
          "The grade structure lives in a spreadsheet somebody built years ago.",
          "PAYE, NSSA and levies each have their own form and their own deadline.",
          "A table changes, and nobody notices until the penalty arrives.",
        ]}
      />

      <Split title="What it does">
        <DefinitionList
          items={[
            {
              term: "Salary structures",
              detail:
                "Build the structure once, by grade, with earnings and deductions that behave the way your agreements say they should.",
            },
            {
              term: "Statutory deductions",
              detail:
                "PAYE against current tax tables, social security to the correct ceiling, training and development levies, and sector council contributions.",
            },
            {
              term: "Dual currency",
              detail:
                "Pay partly in one currency and partly in another, revalue, and report across both without a parallel spreadsheet.",
            },
            {
              term: "Off-cycle payments",
              detail:
                "Bonuses, back-pay, terminal benefits and corrections, handled inside the run rather than beside it.",
            },
            {
              term: "Returns, ready to file",
              detail: "The forms your obligations require, produced in the format they are required in.",
            },
            {
              term: "Payslips over WhatsApp",
              detail: "Delivered to each employee, with the breakdown, on the day.",
            },
            {
              term: "Date-effective rules",
              detail: "Re-run a prior period and get what was correct then, not what is correct now.",
            },
          ]}
        />
      </Split>

      <Different
        items={[
          {
            title: "The rules are the product, not a settings page.",
            body: "Sector wage tables, tax tables, NSSA ceilings, levies and filing deadlines are encoded, versioned by the date they take effect, and updated before they bite.",
          },
          {
            title: "Two currencies in one run.",
            body: "Split pay between USD and ZiG per employee, and report across both without a second sheet.",
          },
          {
            title: "We run it alongside you first.",
            body: "Keep whatever you use today. We run the same month in parallel and reconcile the results before you commit to anything.",
          },
        ]}
      />

      <Split title="On WhatsApp" intro="Payslip day stops being a printing job.">
        <DefinitionList
          items={[
            { term: "Employees", detail: "Get their payslip as a message, with the breakdown, the day pay goes out." },
            { term: "Whoever runs payroll", detail: "Fewer “where is my payslip” and “why is my pay different” questions, because the answer is already in the thread." },
          ]}
        />
      </Split>

      <WorksWith
        items={[
          { name: "People (HR)", href: "/hr", how: "Hours worked, leave taken and shift premiums arrive in the run already counted." },
          { name: "Intelligence", href: "/intelligence", how: "Ask what overtime cost by department, or what the wage bill does if you hire twelve more people." },
          { name: "Accounting (coming soon)", href: "/accounting", how: "Payroll journals posted to the books without re-entry." },
        ]}
      />

      <PricingPointer>
        Payroll is priced per employee, per month, and includes everything in the Free plan. No setup fee and no minimum term.
      </PricingPointer>

      <ClosingCta />
    </>
  );
}
