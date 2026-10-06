export const site = {
  name: "Colossal Hub",
  legalName: "Colossal Hub (Private) Limited",
  companyNumber: "70176A02112025",
  tagline: "Empowering Growth",
  oneLiner: "The operating system African businesses grow on.",
  email: "info@colossalhub.com",
  phone: "+263 712 123 039",
  whatsappNumber: "263712123039",
  address: ["First Floor, B2C, Batanai Gardens", "Cnr Jason Moyo & First Street", "Harare, Zimbabwe"],
  /** This marketing site. */
  url: "https://colossalhub.com",
  /** The applications themselves (sign-in, HR, payroll and so on). */
  appUrl: "https://app.colossalhub.com",
};

/** Link into the applications, e.g. appLink("/hr") → https://app.colossalhub.com/hr */
export function appLink(path = "/") {
  return `${site.appUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const loginUrl = appLink("/login");

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  name: string;
  href: string;
  line: string;
  soon?: boolean;
};

export const products: Product[] = [
  { name: "People (HR)", href: "/hr", line: "Everyone you employ, in one place." },
  { name: "Payroll", href: "/payroll", line: "Wages and statutory returns, to the rules that apply to you." },
  { name: "Intelligence", href: "/intelligence", line: "Ask your business a question and get an answer." },
  { name: "Recruit", href: "/recruit", line: "Every application read and ranked, with the reasoning shown." },
  { name: "On WhatsApp", href: "/whatsapp", line: "Payslips, leave and approvals where your team already is." },
  { name: "Accounting", href: "/accounting", line: "Books that build themselves. Join the waiting list.", soon: true },
];

export const navLinks = [
  { label: "Why Colossal", href: "/why" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

// Used by the floating WhatsApp button to say which page the visitor came from.
export const pageNames: Record<string, string> = {
  "/": "the home page",
  "/hr": "the People (HR) page",
  "/payroll": "the Payroll page",
  "/intelligence": "the Intelligence page",
  "/recruit": "the Recruit page",
  "/accounting": "the Accounting page",
  "/whatsapp": "the WhatsApp page",
  "/why": "the Why Colossal Hub page",
  "/partners": "the Partners page",
  "/pricing": "the Pricing page",
  "/about": "the About page",
  "/demo": "the Book a demo page",
  "/contact": "the Contact page",
  "/security": "the Security page",
  "/resources": "the Resources page",
  "/resources/compliance-calendar": "the Compliance calendar",
  "/legal/privacy": "the Privacy policy",
  "/legal/terms": "the Terms of use",
};

export const employeeBands = ["1 to 19", "20 to 49", "50 to 199", "200 to 500", "More than 500"];
