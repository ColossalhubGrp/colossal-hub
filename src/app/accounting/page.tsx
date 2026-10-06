import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Container, PageIntro } from "@/components/ui";
import { employeeBands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting (coming soon)",
  description:
    "Books that build themselves from what your business is already doing. Join the Colossal Hub Accounting waiting list.",
};

const willCover = [
  ["Invoicing and receipts", "Raised, sent and matched to payment as it happens."],
  ["Supplier payments", "What you owe, to whom, and when it falls due."],
  ["Expenses", "Flowing in from claims already approved in the HR application."],
  ["Bank reconciliation", "Statements matched to what the system already knows."],
  ["Management accounts", "Ready at month-end without a scramble."],
  ["Tax position", "Where you stand, before the return is due."],
];

export default function AccountingPage() {
  return (
    <>
      <PageIntro label="Accounting · Coming soon" title="Accounting is next.">
        <p>
          Books that build themselves from what your business is already doing: payroll already run, expenses already
          claimed, invoices already raised. Join the waiting list, and we will bring you in early.
        </p>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">What it will cover</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {willCover.map(([name, detail]) => (
              <li key={name} className="border-t border-slate-200 dark:border-slate-800 pt-4">
                <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
                <p className="mt-1 leading-7 text-slate-600 dark:text-slate-400">{detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="waiting-list" className="scroll-mt-20">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Join the waiting list</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Early access members help decide what gets built first.
            </p>
          </div>
          <LeadForm
            intro="Hello Colossal Hub, please add me to the Accounting waiting list."
            submitLabel="Join the waiting list"
            confirmation="You're nearly on the list. We'll message you on WhatsApp before we open it up."
            fields={[
              { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
              { name: "business", label: "Business name", type: "text", required: true, autoComplete: "organization" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "whatsapp", label: "WhatsApp number", type: "tel", required: true, autoComplete: "tel", placeholder: "+263" },
              { name: "employees", label: "Number of employees", type: "select", options: employeeBands, required: true },
              { name: "current", label: "What do you use for accounts today?", type: "textarea", required: false },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
