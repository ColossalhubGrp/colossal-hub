import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

// Brand brief 6.3: one family does everything — Inter. Self-hosted
// via next/font/google so there's no runtime round trip to
// fonts.googleapis.com and FOIT doesn't flash the default.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// PREVIEW — headline variant 1 from the homepage mock-up PDF
// (2026-11-02): serif display for h1/h2, matched to Source Serif 4.
// Body, nav and buttons stay Inter. Applied in globals.css under
// "Headline preview". Note: brief 6.3 says one family (Inter), so if
// this look is adopted the brief needs Benjamin's amendment.
const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Colossal Hub | The operating system African businesses grow on",
    template: "%s | Colossal Hub",
  },
  description:
    "HR, payroll and intelligence built around your country's wage grids, tax tables and filing deadlines. Run it from WhatsApp. Start with one application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.add('js');
              try {
                if (localStorage.getItem('theme') === 'dark' ||
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0f]">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
