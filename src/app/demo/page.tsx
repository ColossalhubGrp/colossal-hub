import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { employeeBands, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "See Colossal Hub run against your own month. HR, Payroll, Intelligence and Recruit.",
};

const steps = [
  "We reply on WhatsApp to agree a time that suits you.",
  "We look at how your month actually works: who calculates what, from which spreadsheet, filed where.",
  "If it fits, we run one cycle alongside whatever you use today and reconcile the results before you commit to anything.",
];

export default function DemoPage() {
  return (
    <section>
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Book a demo</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Tell us a little about the business and what you want to fix first. We would rather see how your month
            actually works than show you slides.
          </p>

          <h2 className="mt-12 text-sm font-semibold text-slate-900 dark:text-white">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[1.5rem_1fr] gap-3 leading-7 text-slate-600 dark:text-slate-400">
                <span className="font-semibold tabular-nums text-blue-600 dark:text-blue-400">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <p className="mt-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Prefer to just talk?{" "}
            <a
              href={whatsappLink("Hello Colossal Hub, I'd like to book a demo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-900 dark:text-white underline underline-offset-2"
            >
              Message us on WhatsApp
            </a>{" "}
            or call {site.phone}.
          </p>
        </div>

        <div className="lg:pt-3">
          <LeadForm
            intro="Hello Colossal Hub, I'd like to book a demo."
            submitLabel="Send demo request"
            confirmation="Thanks. One more step."
            fields={[
              { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
              { name: "business", label: "Business name", type: "text", required: true, autoComplete: "organization" },
              { name: "whatsapp", label: "WhatsApp number", type: "tel", required: true, autoComplete: "tel", placeholder: "+263" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "employees", label: "Number of employees", type: "select", options: employeeBands, required: true },
              {
                name: "applications",
                label: "Which applications interest you?",
                type: "checkboxes",
                options: ["People (HR)", "Payroll", "Intelligence", "Recruit", "Accounting (coming soon)"],
              },
              {
                name: "current",
                label: "What are you using today?",
                type: "textarea",
                required: false,
                placeholder: "Spreadsheets, a bookkeeper, another system…",
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
