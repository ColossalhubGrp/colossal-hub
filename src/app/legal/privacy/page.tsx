import type { Metadata } from "next";
import { Container, Prose, Tbc } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Colossal Hub (Private) Limited collects and uses personal information.",
};

// Draft. The website sections describe what this site actually does today;
// have a lawyer review the whole policy before launch.
export default function PrivacyPage() {
  return (
    <section>
      <Container className="py-16 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Last updated: <Tbc>Date of publication</Tbc>
        </p>

        <div className="mt-10">
          <Prose>
            <h2>Who we are</h2>
            <p>
              This website is run by {site.legalName}, a company registered in Zimbabwe under company number{" "}
              {site.companyNumber}, with its registered office at {site.address.join(", ")}. In this policy,
              &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {site.legalName}.
            </p>
            <p>
              We handle personal information in line with the Cyber and Data Protection Act [Chapter 12:07] of
              Zimbabwe.
            </p>

            <h2>What this website collects</h2>
            <ul>
              <li>
                <strong>Forms.</strong> The demo request and waiting-list forms do not store anything on this website.
                When you press send, they open WhatsApp with your answers filled in. We receive them only if you send
                that message.
              </li>
              <li>
                <strong>WhatsApp and email.</strong> If you message or email us, we receive your name, number or address
                and whatever you choose to tell us. WhatsApp is run by WhatsApp LLC, and its own privacy policy applies
                to the messages it carries.
              </li>
              <li>
                <strong>Your theme choice.</strong> If you switch between light and dark mode, your browser remembers
                the choice on your own device. It is not sent to us.
              </li>
            </ul>
            <p>
              This website does not use advertising or analytics cookies. <Tbc>Update if analytics are added</Tbc>
            </p>

            <h2>How we use it</h2>
            <p>
              We use what you send us to reply to you, arrange a demo, and tell you when a product you asked about is
              ready. We do not sell personal information, and we do not disclose client information to undesignated
              persons.
            </p>

            <h2>Data held in the Colossal Hub applications</h2>
            <p>
              When a business uses our HR, Payroll, Intelligence or Recruit applications, the employee and applicant
              records in them belong to that business. We process them on the business&apos;s behalf and on its
              instructions. <Tbc>Processing terms, sub-processors, and hosting location</Tbc>
            </p>

            <h2>How long we keep it</h2>
            <p>
              <Tbc>Retention period for enquiries and for client data after an account closes</Tbc>
            </p>

            <h2>Your rights</h2>
            <p>
              You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it.
              Write to <a href={`mailto:${site.email}`}>{site.email}</a>. If you are not satisfied with our answer, you
              can complain to the Data Protection Authority (POTRAZ).
            </p>

            <h2>Changes</h2>
            <p>If we change this policy, we will update it here and change the date at the top.</p>
          </Prose>
        </div>
      </Container>
    </section>
  );
}
