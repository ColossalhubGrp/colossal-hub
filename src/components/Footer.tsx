import Link from "next/link";
import { Logo } from "./Header";
import { products, site, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.soon ? `${p.name} (soon)` : p.name, href: p.href })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Colossal Hub", href: "/why" },
      { label: "For accountants", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "/demo" },
      { label: "Compliance calendar", href: "/resources/compliance-calendar" },
      { label: "Resources", href: "/resources" },
      { label: "Join the Accounting waiting list", href: "/accounting#waiting-list" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Terms of use", href: "/legal/terms" },
      { label: "Security and data", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-6">{site.oneLiner}</p>
            <div className="mt-6 space-y-1 text-sm">
              <a
                href={whatsappLink("Hello Colossal Hub, I found you through your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-200 hover:text-white"
              >
                WhatsApp {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-white">
                {site.email}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-6">
            &copy; {new Date().getFullYear()} {site.legalName}. Registered in Zimbabwe, company no. {site.companyNumber}.
            <br className="hidden sm:block" /> {site.address.join(", ")}.
          </p>
          <p className="font-medium text-slate-300">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
