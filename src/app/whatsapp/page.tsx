import type { Metadata } from "next";
import Phone from "@/components/Phone";
import { Button, ClosingCta, Container, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "On WhatsApp",
  description:
    "Payslips, leave, approvals, check-ins and business answers over WhatsApp. Nothing to install, no password, no training day.",
};

const roles = [
  {
    who: "Employees",
    what: "Receive payslips. Request leave and see the balance. Clock in and out. Send an expense claim with a photograph.",
  },
  {
    who: "Managers",
    what: "Approve leave and expenses. See who is in today. Get told when something needs them. Ask business questions.",
  },
  {
    who: "Owners",
    what: "Ask a question about the business and get an answer. Get the numbers that matter without opening anything.",
  },
];

export default function WhatsAppPage() {
  return (
    <>
      <PageIntro
        label="On WhatsApp"
        title="The system your staff already know how to use."
        aside={
          <Phone
            subtitle="Approvals"
            caption="What a manager sees when someone asks for leave."
            messages={[
              {
                from: "them",
                time: "09:12",
                text: (
                  <>
                    <span className="font-semibold">Leave request</span>
                    <br />
                    Rudo Moyo, Dispatch
                    <br />
                    13 to 17 October — 5 days annual leave
                    <br />
                    <span className="text-slate-500 dark:text-slate-400">Two others from Dispatch are off that week.</span>
                  </>
                ),
                buttons: ["Approve", "Decline"],
              },
              { from: "me", time: "09:20", text: "Approve" },
              { from: "them", time: "09:20", text: "Approved. Rudo has been told, and the leave calendar is updated." },
              { from: "me", time: "09:21", text: "Who's in today?" },
              { from: "them", time: "09:21", text: "38 of 42 clocked in. Two on leave, one sick, one not yet in: T. Banda (shift started 07:00)." },
            ]}
          />
        }
      >
        <p>
          Most business software fails quietly. It gets bought, it gets rolled out, and then people go back to what they
          were doing because logging in is one step too many. So we put the things people do often where they already
          are.
        </p>
        <div className="mt-8">
          <Button href="/demo">Book a demo</Button>
        </div>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-3xl">Who does what</h2>
          <div className="mt-10 grid border-t border-slate-200 dark:border-slate-800 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.who} className="border-b border-slate-200 dark:border-slate-800 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{r.who}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">{r.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Nothing to install. No password. Works on the phone your team already carries, on the data bundle they
            already have.
          </p>
        </Container>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-3xl">
              Photograph a receipt. It is read, and posted where it belongs.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Send a photo of a receipt on WhatsApp and Colossal Hub reads the supplier, the amount and the date, shows
              you what it read, and asks one question: supplier invoice or expense claim? If a figure is wrong, reply
              with the correct one. The entry lands in your books as a draft for review — nothing posts itself.
            </p>
          </div>
          <Phone
            subtitle="business account"
            caption="A real thread from the live system."
            image={{
              src: "/screens/whatsapp-receipt.png",
              width: 266,
              height: 242,
              alt: "A real WhatsApp thread: Colossal Hub has read a photographed receipt — supplier, total, date and reference — and asks whether to post it as a supplier invoice or an expense claim.",
            }}
          />
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
