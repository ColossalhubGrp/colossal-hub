import type { Metadata } from "next";
import Screen from "@/components/Screen";
import { Different, PricingPointer, Problem, WorksWith } from "@/components/product";
import { Button, ClosingCta, DefinitionList, PageIntro, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Colossal Hub Payroll | Payroll software for Zimbabwe — NEC grades, PAYE, NSSA" },
  description:
    "Payroll that calculates against current tax tables, sector wage grids and contribution ceilings, in single or dual currency, with returns ready to file.",
};

export default function PayrollPage() {
  return (
    <>
      <PageIntro
        label="Colossal Hub Payroll"
        title="Stop calculating. Start checking."
        aside={
          <Screen
            src="/screens/payroll-run.png"
            alt="A processed pay run: gross, PAYE, AIDS levy, NSSA, ZIMDEF and net pay in US$ and ZiG, with every employee's payslip in the register below."
            width={1920}
            height={955}
            priority
            caption="A real pay run: gross to net in both currencies, with every payslip in the register."
          />
        }
      >
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

      <Split
        title="One screen before pay day"
        intro="This run's net pay, what is owed to ZIMRA, NSSA and ZIMDEF, and the date each amount falls due — before anyone has to ask."
      >
        <Screen
          src="/screens/payroll-dashboard.png"
          alt="The payroll dashboard: net pay against previous months, statutory obligations with their deadlines, and which departments carry the pay bill."
          width={1917}
          height={969}
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
            body: "Split pay between US$ and ZiG per employee, and report across both without a second sheet.",
          },
          {
            title: "We run it alongside you first.",
            body: "Keep whatever you use today. We run the same month in parallel and reconcile the results before you commit to anything.",
          },
        ]}
      />

      <Split title="On WhatsApp" intro="Payslip day stops being a printing job.">
        <div className="space-y-10">
          <DefinitionList
            items={[
              { term: "Employees", detail: "Get their payslip as a message, with the breakdown, the day pay goes out." },
              { term: "Whoever runs payroll", detail: "Fewer “where is my payslip” and “why is my pay different” questions, because the answer is already in the thread." },
            ]}
          />
          <div className="max-w-md">
            <Screen
              src="/screens/payslip.png"
              alt="A payslip: earnings, PAYE, AIDS levy, NSSA, pension and sector council dues itemised, with net pay shown in US$ and ZiG."
              width={770}
              height={805}
              caption="The payslip behind the message: every earning and deduction itemised, in both currencies."
            />
          </div>
        </div>
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
