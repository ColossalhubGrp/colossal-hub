import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import DashboardMock from "@/components/DashboardMock";
import HeroHeadline from "@/components/HeroHeadline";
import Hub from "@/components/Hub";
import Marquee from "@/components/Marquee";
import Phone from "@/components/Phone";
import Reveal from "@/components/Reveal";
import { Button, ClosingCta, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Colossal Hub | HR, Payroll and Business Intelligence for African Businesses" },
  description:
    "HR, payroll and intelligence built around your country's wage grids, tax tables and filing deadlines. Run it from WhatsApp. Start with one application.",
};

const capabilities = [
  "NEC grades",
  "PAYE and AIDS levy",
  "NSSA ceilings",
  "ZIMDEF",
  "USD and ZiG pay",
  "Payslips on WhatsApp",
  "Leave and balances",
  "Clock-in with location",
  "Expense claims",
  "Shift management",
  "Appraisals",
  "Returns ready to file",
  "AI shortlisting",
  "Plain-language answers",
];

const onWhatsApp = [
  ["Transactions", "are captured as a message."],
  ["Payslips", "arrive as a message."],
  ["Leave requests", "are a reply."],
  ["Approvals", "are a button."],
  ["Clock-in", "is a tap."],
  ["Business intelligence", "arrives as a message."],
];

// Floating labels around the local-rules heading, positioned on large screens.
const rules = [
  { label: "NEC grades", pos: "left-[4%] top-[12%]", delay: "0s" },
  { label: "PAYE tax tables", pos: "right-[6%] top-[8%]", delay: "1.2s" },
  { label: "NSSA ceilings", pos: "left-[0%] top-[52%]", delay: "2.1s" },
  { label: "ZIMDEF levy", pos: "right-[1%] top-[48%]", delay: "0.6s" },
  { label: "AIDS levy", pos: "left-[12%] bottom-[6%]", delay: "1.6s" },
  { label: "Filing deadlines", pos: "right-[12%] bottom-[4%]", delay: "2.6s" },
];

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-3xl p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1";

function LearnMore({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
        dark ? "text-blue-300" : "text-blue-600 dark:text-blue-400"
      }`}
    >
      Learn more
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Container className="pt-16 text-center sm:pt-20">
          <Reveal>
            <Link
              href="/whatsapp"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300"
            >
              Nothing to install. Your team uses it from WhatsApp.
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <div className="mt-6">
            <HeroHeadline />
          </div>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              HR, Payroll and Intelligence for formal and informal small to medium businesses. Start with one. Add the
              rest when you are ready.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/demo">Book a demo</Button>
              <Button href="/whatsapp" variant="secondary">
                See how it works on WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>

        <div className="mt-14">
          <Marquee items={capabilities} />
        </div>

        <Container className="pb-24 pt-16 sm:pb-28">
          <DashboardMock />
          <p className="mt-16 text-center text-xs text-slate-500">Illustration with sample figures.</p>
        </Container>
      </section>

      {/* The problem */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-8 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Every month is the same month.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <p>
              Wages calculated against a grade structure in a spreadsheet somebody built years ago. PAYE, NSSA and
              levies each with their own form and their own deadline. Payslips printed and handed out. Leave balances
              that nobody quite trusts. And at the end of it, no clear answer to the simplest question of all:{" "}
              <span className="text-slate-900 dark:text-white">how is the business actually doing?</span>
            </p>
            <p>
              International software does not know your rules. Local software stops at payroll. So the work goes back
              to the spreadsheet, the bookkeeper and the WhatsApp thread. And the first sign that it stopped working is
              usually a penalty.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The applications */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-4xl">
              Start with the application you need today.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Each one is worth choosing on its own. Grow into the others as the business does.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Link href="/hr" className={`${cardBase} h-full bg-blue-50 dark:bg-blue-950/30`}>
                <div className="grid gap-8 sm:grid-cols-[1fr_15rem] sm:items-end">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">People</h3>
                    <p className="mt-3 max-w-sm leading-7 text-slate-600 dark:text-slate-400">
                      Everyone you employ, in one place. Records, contracts, leave, attendance, performance.
                    </p>
                    <LearnMore />
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900" aria-hidden>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Today · Dispatch</p>
                    <ul className="mt-2 space-y-2 text-[13px]">
                      {[
                        ["R. Moyo", "In 06:58", "text-blue-700 bg-blue-50 dark:bg-blue-950 dark:text-blue-300"],
                        ["T. Banda", "Late", "text-amber-700 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-300"],
                        ["P. Ndlovu", "On leave", "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300"],
                      ].map(([n, s, c]) => (
                        <li key={n} className="flex items-center justify-between">
                          <span className="text-slate-800 dark:text-slate-200">{n}</span>
                          <span className={`rounded px-1.5 py-0.5 text-[11px] font-medium ${c}`}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <Link href="/payroll" className={`${cardBase} h-full bg-slate-100 dark:bg-slate-900`}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Payroll</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  Wages and statutory returns, calculated to the rules that actually apply to you.
                </p>
                <ul className="mt-6 space-y-2 text-[13px] text-slate-700 dark:text-slate-300" aria-hidden>
                  {["PAYE against the current table", "NSSA capped at the ceiling", "Returns ready to file"].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      {c}
                    </li>
                  ))}
                </ul>
                <LearnMore />
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={50}>
              <Link href="/intelligence" className={`${cardBase} h-full bg-slate-900 dark:bg-slate-900/80 dark:ring-1 dark:ring-slate-800`}>
                <div className="grid gap-8 sm:grid-cols-[1fr_17rem] sm:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Intelligence</h3>
                    <p className="mt-3 max-w-sm leading-7 text-slate-400">
                      Ask your business a question and get an answer. A business analyst for your business.
                    </p>
                    <LearnMore dark />
                  </div>
                  <div className="space-y-2 text-[13px]" aria-hidden>
                    <p className="ml-auto w-fit max-w-[90%] rounded-lg rounded-tr-none bg-blue-600 px-3 py-2 text-white">
                      Which section is driving the increase in labour cost?
                    </p>
                    <p className="w-fit max-w-[90%] rounded-lg rounded-tl-none bg-slate-800 px-3 py-2 text-slate-200">
                      Production. Night-shift overtime is up 22% on August.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link
                href="/accounting"
                className={`${cardBase} h-full border border-dashed border-slate-300 dark:border-slate-700`}
              >
                <span className="w-fit rounded border border-slate-300 px-1.5 py-px text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  Coming soon
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Accounting</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  Books that build themselves from what you already do. Join the waiting list.
                </p>
                <LearnMore />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* One foundation */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-transparent">
        <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-4xl">
              Each one works on its own. Together, they stop repeating each other.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Every application sits on one shared record of your people, your money and your transactions. A hire in
              Recruit becomes an employee in People. Leave and overtime from People arrive in Payroll already counted.
              And Intelligence reads across all of it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Hub />
          </Reveal>
        </Container>
      </section>

      {/* WhatsApp */}
      <section className="overflow-hidden bg-slate-900 dark:bg-slate-950">
        <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr_1fr] lg:gap-12">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your team already knows how to use it.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              There is nothing to install, no password to reset, and no training day, because your people are already
              in WhatsApp all day.
            </p>
            <Link href="/whatsapp" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300">
              What each person can do on WhatsApp
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="float order-last lg:order-none">
            <Phone
              messages={[
                {
                  from: "them",
                  time: "07:02",
                  text: (
                    <>
                      Morning Rudo. Your September payslip is ready.
                      <br />
                      <span className="font-semibold">Net pay: USD 414.02</span>
                    </>
                  ),
                  buttons: ["View payslip"],
                },
                { from: "me", time: "07:15", text: "Leave balance" },
                { from: "them", time: "07:15", text: "You have 11.5 days of annual leave. Reply with the dates you want." },
                { from: "me", time: "07:16", text: "13 to 17 October" },
                { from: "them", time: "07:16", text: "That's 5 days. Sent to Tendai for approval." },
              ]}
            />
          </div>

          <ul className="divide-y divide-slate-800 border-y border-slate-800">
            {onWhatsApp.map(([thing, how], i) => (
              <Reveal as="li" key={thing} delay={i * 70} className="flex items-baseline justify-between gap-6 py-4">
                <span className="font-semibold text-white">{thing}</span>
                <span className="text-right text-slate-400">{how}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Local rules */}
      <section className="overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <ul className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            {rules.map((r) => (
              <li
                key={r.label}
                className={`float absolute ${r.pos} rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300`}
                style={{ "--float-delay": r.delay } as React.CSSProperties}
              >
                {r.label}
              </li>
            ))}
          </ul>

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl">
              Built for where you operate, not adapted for it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Sector wage structures. Tax tables. Social security ceilings and their contribution limits. Training and
              development levies. Filing formats and the deadlines attached to them. We encode them properly, version
              them by the date they take effect, and update them before they bite. So a payroll re-run for last quarter
              is still correct, not just current.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
              {rules.map((r) => (
                <li
                  key={r.label}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300"
                >
                  {r.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Intelligence */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <Phone
              subtitle="Intelligence"
              caption="Illustration. Figures are for a sample business."
              messages={[
                { from: "me", time: "18:40", text: "What did overtime cost us last month, by department?" },
                {
                  from: "them",
                  time: "18:40",
                  text: (
                    <>
                      USD 6,240 in September.
                      <br />
                      Production 3,910 · Dispatch 1,480 · Maintenance 850.
                    </>
                  ),
                },
                { from: "me", time: "18:42", text: "What does next month look like if the order lands?" },
                {
                  from: "them",
                  time: "18:42",
                  text: "You'd need about 900 extra overtime hours in Production, roughly USD 4,100 on top of a normal month.",
                },
              ]}
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-4xl">
              Most systems tell you what happened. Ask ours why.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Because your people, your pay and your money sit on one foundation, the intelligence layer can see the
              whole business at once. Which department is carrying your labour cost. What overtime is really costing
              you by section. What next month looks like if the order lands. Asked in plain language, answered the
              same way.
            </p>
            <Link href="/intelligence" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
              More on Intelligence
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Partner strip */}
      <section>
        <Container className="py-16">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-3xl bg-blue-50 p-8 dark:bg-blue-950/30 sm:p-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Do you run HR, payroll and accounting for other people&apos;s businesses?
                </h2>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Manage every client from one place, keep your own branding, and stop rebuilding the same spreadsheet
                  for the twentieth time.
                </p>
              </div>
              <Button href="/partners" className="shrink-0">
                For accountants and consultants
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
