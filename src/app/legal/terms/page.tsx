import type { Metadata } from "next";
import Link from "next/link";
import { Container, Prose, Tbc } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for using the Colossal Hub website.",
};

// Draft website terms. Terms for the applications themselves belong in the
// customer agreement. Have a lawyer review before launch.
export default function TermsPage() {
  return (
    <section>
      <Container className="py-16 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Terms of use</h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Last updated: <Tbc>Date of publication</Tbc>
        </p>

        <div className="mt-10">
          <Prose>
            <h2>About these terms</h2>
            <p>
              These terms cover your use of this website. It is run by {site.legalName}, company number{" "}
              {site.companyNumber}, {site.address.join(", ")}. By using the site you accept these terms.
            </p>
            <p>
              Using the Colossal Hub applications is covered by a separate customer agreement.{" "}
              <Tbc>Link to the customer agreement</Tbc>
            </p>

            <h2>Information on this site</h2>
            <p>
              We describe our products as accurately as we can. Screens, conversations and figures shown on this site
              are illustrations with sample data, not records of a real business. Prices and features can change; the
              terms in your customer agreement are the ones that apply to you.
            </p>
            <p>
              Nothing on this website is tax, legal or payroll advice for your particular business.
            </p>

            <h2>Acceptable use</h2>
            <p>
              Do not try to break, overload or gain unauthorised access to this website or the systems behind it, and
              do not use it to send anything unlawful.
            </p>

            <h2>Our content</h2>
            <p>
              The text, design and the Colossal Hub name and mark belong to {site.legalName}. You may share links to
              our pages; please ask before reusing our content.
            </p>

            <h2>Links to other services</h2>
            <p>
              Some links open services we do not run, such as WhatsApp. Their own terms apply when you use them.
            </p>

            <h2>Liability</h2>
            <p>
              <Tbc>Limitation of liability wording, to be supplied by your lawyer</Tbc>
            </p>

            <h2>Law</h2>
            <p>These terms are governed by the laws of Zimbabwe.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
              <Link href="/legal/privacy">privacy policy</Link>.
            </p>
          </Prose>
        </div>
      </Container>
    </section>
  );
}
