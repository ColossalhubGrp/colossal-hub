import type { Metadata } from "next";
import { PricingPointer, Problem } from "@/components/product";
import { Button, ClosingCta, Container, DefinitionList, PageIntro, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "AI Recruitment Software | Screen and Shortlist Faster | Colossal Hub" },
  description:
    "Read and rank every application against the role, with the reasoning shown. Works standalone or with your existing HR system.",
};

const shortlist = [
  {
    name: "Candidate 014",
    score: 86,
    why: "Five years running a dispatch yard of similar size. Has the Class 2 licence the advert asks for.",
    gap: "No forklift certificate listed. Worth asking.",
  },
  {
    name: "Candidate 112",
    score: 79,
    why: "Strong stock control experience, including a cycle-count system set up from scratch.",
    gap: "Supervised two people, not the eight the role needs.",
  },
  {
    name: "Candidate 057",
    score: 71,
    why: "Meets the qualifications. Applied for a stores role in March and was second choice.",
    gap: "Lives outside the commuting area stated in the advert.",
  },
];

function Shortlist() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
        <div className="border-b border-slate-200 dark:border-slate-800 px-5 py-4">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Dispatch Supervisor · Shortlist</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">212 applications read · 3 of 12 shown</p>
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {shortlist.map((c) => (
            <li key={c.name} className="px-5 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{c.name}</p>
                <p className="text-sm font-semibold tabular-nums text-blue-600 dark:text-blue-400">{c.score}</p>
              </div>
              <p className="mt-1.5 text-[13px] leading-5 text-slate-600 dark:text-slate-400">{c.why}</p>
              <p className="mt-1 text-[13px] leading-5 text-slate-500 dark:text-slate-500">Gap: {c.gap}</p>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-xs text-slate-500">Illustration of a shortlist with the reasoning attached.</figcaption>
    </figure>
  );
}

export default function RecruitPage() {
  return (
    <>
      <PageIntro label="Recruit" title="Two hundred applications. One afternoon." aside={<Shortlist />}>
        <p>
          AI recruitment that reads every application against the job you actually advertised, ranks them with its
          reasoning shown, and gives you a shortlist you can defend.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/demo">Book a demo</Button>
          <Button href="/pricing" variant="secondary">
            See pricing
          </Button>
        </div>
      </PageIntro>

      <Problem
        lines={[
          "A role goes up and two hundred applications come in.",
          "Somebody reads the first forty properly and skims the rest.",
          "The best candidate may well be in the pile nobody reached.",
        ]}
      />

      <Split title="What it does">
        <DefinitionList
          items={[
            { term: "Openings and applications", detail: "Job openings and applications in one place, with applicants tracked from first contact to offer." },
            {
              term: "Every application scored",
              detail:
                "Each application read and scored against the requirements of the role, with the reasoning attached so you can see why each candidate was placed where they were.",
            },
            {
              term: "Screening and interview guides",
              detail:
                "Screening questions generated from the job description, and interview guides built from the gaps in a specific candidate's application.",
            },
            {
              term: "A pipeline that compounds",
              detail: "Candidates who applied before are kept and resurfaced when a role fits them, so you are not starting from zero each time.",
            },
            { term: "AI interviews", detail: "First-round interviews carried out automatically by AI, with the video saved for your team to watch." },
            { term: "Offer to onboarding", detail: "Offers, acceptance and a handover straight into onboarding if you use our HR application." },
          ]}
        />
      </Split>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Ranking you can explain.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Every score carries its reasoning. You can see what the model weighed, disagree with it, and override it.
              The shortlist you defend to a manager or a candidate is one you can actually account for.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Use it on its own, or don&apos;t.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Recruit works as a standalone product with whatever HR system you already have. If you do run Colossal
              Hub, a hire becomes an employee record without anyone re-typing anything.
            </p>
          </div>
        </Container>
      </section>

      <PricingPointer>
        Recruit on its own is priced per month, by the number of roles you hire for. It is also included in the Complete plan.
      </PricingPointer>

      <ClosingCta
        title="Hiring right now?"
        body="Book a demo with a role you are filling in mind, and see how the shortlist for it gets built."
      />
    </>
  );
}
