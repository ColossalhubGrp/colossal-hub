import type { Metadata } from "next";
import { ClosingCta, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Colossal Hub is a technology company in Harare that helps African businesses grow. Our vision, mission, values and how we build.",
};

const reasons = [
  {
    title: "They cannot see themselves.",
    body: "An owner who does not know which product actually makes money, which customer is quietly unprofitable, or what next month's wage bill will be is making every important decision on instinct. Not because the instinct is poor, but because nothing better is available.",
  },
  {
    title: "Their attention goes to obligations rather than to growth.",
    body: "The hours a business spends calculating wages, chasing returns and reconciling by hand are hours not spent on customers, product or people. For a business of this size, those hours belong to the owner, and they are its scarcest resource.",
  },
  {
    title: "They cannot reach the capital that would let them expand.",
    body: "Not because they are bad risks, but because they are invisible. They have no record of themselves that anyone can lend against.",
  },
];

const values = [
  {
    title: "We believe in thinking in other terms",
    body: "We see and think differently. We approach every problem with fresh thinking. We improve our products, services and ideas every day.",
  },
  {
    title: "We believe in doing the right thing always",
    body: "We do the right thing regardless of the consequences. Our ethics are unbending. We take responsibility for individual and collective actions, and our practice is such that there is great trust between our business partners and us.",
  },
  {
    title: "We strive to exceed the expectations of our stakeholders",
    body: "We do not aim to satisfy our stakeholders; we aim to amaze them. For our clients, we provide solutions that adapt to an ever-changing business environment.",
  },
  {
    title: "We believe in deep collaboration",
    body: "Each member of our team complements the talent and competencies of the others. We see further and do more by moving as a unit.",
  },
  {
    title: "We do not disclose client information",
    body: "Client information is never disclosed to undesignated persons, during or after we have been engaged by our clients.",
  },
  {
    title: "We believe in moving fast",
    body: "We make decisions fast and put the plan into action. Everything we do, we execute with a sense of urgency.",
  },
];

const principles = [
  {
    title: "Every product must make a business grow, not just make it tidy.",
    body: "We hold each application to a harder question: what can this owner now do that they could not do before? If the honest answer is only that the paperwork is neater, the product is not finished.",
  },
  {
    title: "Intelligence belongs to the owner, not to an analyst.",
    body: "Not dashboards nobody opens, but answers to the questions owners actually ask. Delivered in plain language, on the phone in their hand, without anyone having to build a report.",
  },
  {
    title: "Software that does not know the local rules is not worth installing.",
    body: "Wage tables, tax tables, social security ceilings, levies, filing formats and deadlines differ by country and by sector, and they change without warning. Approximately right is worse than useless when a deadline and a penalty are attached.",
  },
  {
    title: "Meet businesses where they already are.",
    body: "Our customers run their businesses on the phones in their pockets. If a task can be a message, it is a message. Nothing requires a training day.",
  },
  {
    title: "Start small, and compound.",
    body: "No business should have to buy a whole system to solve a problem. Every application must be worth choosing on its own, judged against the best specialist product in its category.",
  },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <Container className="grid gap-6 py-14 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 lg:pt-1.5">{label}</h2>
        <div className="max-w-3xl">{children}</div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">About Colossal Hub</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.05]">
            The operating system African businesses grow on.
          </h1>
        </Container>
      </section>

      <Row label="Who we are">
        <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          <p>Colossal Hub is a technology company that helps African businesses grow.</p>
          <p>
            We are building a single foundation: one shared record of a business&apos;s people, money and transactions,
            a growing family of applications on top of it, and an intelligence layer running through all of it. A
            business adopts the application it needs today and grows into the others as it scales.
          </p>
          <p>
            That architecture is why we can serve a company with hundreds of employees and a trader with a single stall
            from the same platform, and why every application we add makes the ones already there more useful.
          </p>
        </div>
      </Row>

      <Row label="Why we exist">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          Most African businesses do not fail for lack of ambition, effort or customers. They stall for three reasons.
        </p>
        <ol className="mt-8 space-y-7">
          {reasons.map((r, i) => (
            <li key={r.title} className="grid grid-cols-[2rem_1fr] gap-3">
              <span className="pt-0.5 font-semibold text-slate-400 dark:text-slate-600">{String.fromCharCode(97 + i)}.</span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{r.title}</h3>
                <p className="mt-1.5 leading-7 text-slate-600 dark:text-slate-400">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          <p>
            We exist to remove all three. We take the routine work off a business&apos;s hands, turn what it does every
            day into a record it did not have before, and hand back the intelligence in that record so the owner can act
            on it.
          </p>
          <p>
            That is what we mean by <strong className="text-slate-900 dark:text-white">Empowering Growth</strong>. It is
            not a slogan attached to the company; it is the test every product has to pass.
          </p>
        </div>
      </Row>

      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30">
        <Container className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">Our vision</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">
              A world where every individual or company has the power and chance to intentionally grow their business
              using world-class technology.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">Our mission</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">
              To help companies grow by providing them with useful, intelligent and easy-to-use integrated business
              systems.
            </p>
          </div>
        </Container>
      </section>

      <Row label="How we think about building">
        <ol className="space-y-8">
          {principles.map((p) => (
            <li key={p.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1.5 leading-7 text-slate-600 dark:text-slate-400">{p.body}</p>
            </li>
          ))}
        </ol>
      </Row>

      <Row label="Our values">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-slate-200 dark:border-slate-800 pt-4">
              <dt className="font-semibold text-slate-900 dark:text-white">
                <span className="mr-2 tabular-nums text-slate-400 dark:text-slate-600">{i + 1}</span>
                {v.title}
              </dt>
              <dd className="mt-2 leading-7 text-slate-600 dark:text-slate-400">{v.body}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row label="Who we serve">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          Businesses at two very different points on the same chain. The connection between them is deliberate.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Established companies</h3>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              Formal businesses of roughly twenty to five hundred people: manufacturers, contractors, farms,
              transporters, retail, service firms. Large enough to carry real obligations, small enough that those
              obligations land on one or two people.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Small informal traders</h3>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              The shops, stalls and resellers who move goods from established companies, running on memory and a
              notebook. This is where empowering growth means the most, because the distance between what they are and
              what they could be is the widest.
            </p>
          </div>
        </div>
      </Row>

      <Row label="Where we operate">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          Zimbabwe today, with Zambia, Botswana, Malawi and Mozambique to follow. We enter one market at a time, and
          only once its rules are built and proven, because a system that is approximately right about somebody&apos;s
          obligations is worse than no system at all.
        </p>
      </Row>

      <ClosingCta
        title="Keep your records by hand?"
        body="We would like to see how your month actually works, on your premises, during a real cycle. That is how we build."
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
