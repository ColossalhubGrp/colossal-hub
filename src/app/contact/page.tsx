import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Colossal Hub in Harare. WhatsApp, phone or email.",
};

export default function ContactPage() {
  const rows = [
    {
      label: "WhatsApp",
      value: site.phone,
      href: whatsappLink("Hello Colossal Hub, I found you through your website."),
      note: "The quickest way to reach us.",
    },
    { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Office", value: site.address.join(", ") },
  ];

  return (
    <section>
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Get in touch</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            If you run a business and keep its records by hand, we would like to see how your month actually works, on
            your premises, during a real cycle. That is how we build.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/demo">Book a demo</Button>
            <Button href="/partners" variant="secondary">
              I run a practice
            </Button>
          </div>
        </div>

        <dl className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800 self-start">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{r.label}</dt>
              <dd>
                {r.href ? (
                  <a
                    href={r.href}
                    {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="font-semibold text-slate-900 dark:text-white">{r.value}</span>
                )}
                {r.note && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{r.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
