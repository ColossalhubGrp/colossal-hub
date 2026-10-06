import type { Metadata } from "next";
import Phone from "@/components/Phone";
import { Different, PricingPointer, Problem, WorksWith } from "@/components/product";
import { Button, ClosingCta, DefinitionList, PageIntro, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "HR Software for Growing Businesses | Colossal Hub" },
  description:
    "Employee records, leave, attendance, shifts and performance in one place — with self-service for your staff over WhatsApp.",
};

export default function HrPage() {
  return (
    <>
      <PageIntro
        label="People (HR)"
        title="Everyone you employ, in one place."
        aside={
          <Phone
            subtitle="People"
            caption="Clock-in and an expense claim, from the phone your staff already carry."
            messages={[
              { from: "me", time: "06:58", text: "In" },
              {
                from: "them",
                time: "06:58",
                text: "Clocked in at 06:58, Main Yard. Your shift today is 07:00 to 16:00.",
              },
              {
                from: "me",
                time: "12:31",
                text: (
                  <>
                    <span className="mb-1 block rounded bg-slate-900/10 dark:bg-white/10 px-2 py-4 text-center text-[11px] text-slate-600 dark:text-slate-300">
                      receipt.jpg
                    </span>
                    Fuel for the delivery van, USD 35
                  </>
                ),
              },
              {
                from: "them",
                time: "12:31",
                text: "Expense claim for USD 35 (Fuel) submitted. Sent to Chipo for approval.",
              },
            ]}
          />
        }
      >
        <p>
          Records, recruitment, contracts, leave, attendance, performance and the whole employee journey. On a screen
          for your HR team, and on WhatsApp for your staff.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/demo">Book a demo</Button>
          <Button href="/payroll" variant="secondary">
            See Payroll
          </Button>
        </div>
      </PageIntro>

      <Problem
        lines={[
          "Staff records live in a filing cabinet, a spreadsheet and somebody's memory.",
          "Leave balances get argued about instead of looked up.",
          "Every payslip query, leave request and contract question turns into a call to HR.",
        ]}
      />

      <Split title="What it does">
        <DefinitionList
          items={[
            {
              term: "Employee lifecycle",
              detail:
                "Onboarding, transfers, promotions, and exits with documented feedback, so the record of a person's time with you is complete and in one place.",
            },
            {
              term: "Leave and attendance",
              detail:
                "Leave policies configured to your rules, public holidays pulled in, check-in and check-out with location captured, and balances your team can actually see.",
            },
            {
              term: "Shift management",
              detail:
                "Shift types, assignments and requests, with attendance marked against the shift the person actually worked.",
            },
            {
              term: "Expense claims and advances",
              detail:
                "Employee advances, claims with supporting documents, and multi-level approval routed to the right person.",
            },
            {
              term: "Performance",
              detail:
                "Goals aligned to the performance management framework you use, self-evaluation, and appraisal cycles that finish.",
            },
            {
              term: "Employee self-service",
              detail: "Profiles, payslips, leave and timesheets, reachable by your staff without a call to HR.",
            },
            {
              term: "Training, fleet and assets",
              detail:
                "Training programmes and attendance, vehicle logs and running costs, and assets assigned to the people holding them.",
            },
          ]}
        />
      </Split>

      <Different
        items={[
          {
            title: "Your staff never log in.",
            body: "Payslips, leave requests and approvals all work over WhatsApp, which is where your team already is.",
          },
          {
            title: "It knows your leave rules.",
            body: "Statutory leave entitlements and sector agreements are built in, not configured by you and hoped for.",
          },
          {
            title: "It feeds payroll directly.",
            body: "Hours worked, leave taken and shift premiums arrive in the payroll run without anyone re-typing them.",
          },
        ]}
      />

      <Split
        title="On WhatsApp"
        intro="The things people do every week happen in the app they already have open."
      >
        <DefinitionList
          items={[
            { term: "Employees", detail: "Receive payslips. Request leave and see the balance. Clock in and out. Submit an expense with a photograph." },
            { term: "Managers", detail: "Approve leave and expenses. See who is in today. Get told when something needs them." },
          ]}
        />
      </Split>

      <WorksWith
        items={[
          { name: "Payroll", href: "/payroll", how: "Attendance, leave and shift premiums flow into the pay run." },
          { name: "Recruit", href: "/recruit", how: "A hire becomes an employee record without anyone re-typing anything." },
          { name: "Intelligence", href: "/intelligence", how: "Ask who is on leave next week, or who is due for a contract renewal." },
        ]}
      />

      <PricingPointer>
        Employee records, payslip delivery on WhatsApp, and leave requests and balances are in the Free plan. No charge, no card.
      </PricingPointer>

      <ClosingCta secondary={{ label: "See Payroll", href: "/payroll" }} />
    </>
  );
}
