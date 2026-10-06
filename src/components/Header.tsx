"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useTheme } from "./ThemeProvider";
import { loginUrl, navLinks, products, site } from "@/lib/site";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* Open-C arc mark — shared with the HR app's brand mark
          (smart_hr_web app/icon.svg) and the favicon this site now
          ships. SVG so it stays crisp at every size and inlines
          without an asset round-trip. */}
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"
        aria-label={site.name}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden
        >
          <path d="M19 6.5A8.5 8.5 0 1 0 19 17.5" />
        </svg>
      </span>
      <span className={`text-lg font-semibold ${inverse ? "text-white" : "text-slate-900 dark:text-white"}`}>
        {site.name}
      </span>
    </Link>
  );
}

export default function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Close any open menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setProductsOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const linkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href
        ? "text-slate-900 dark:text-white"
        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
    }`;

  const themeButton = (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
    </button>
  );

  return (
    <>
      {barOpen && (
        <div className="relative bg-slate-900 text-slate-200 dark:bg-slate-950">
          <Link
            href="/accounting#waiting-list"
            className="group mx-auto flex max-w-6xl items-center justify-center gap-2 px-10 py-2.5 text-center text-[13px]"
          >
            <span className="hidden rounded bg-blue-600 px-1.5 py-px text-[11px] font-semibold text-white sm:inline">New</span>
            <span>Accounting is next. Join the waiting list and help decide what gets built first.</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setBarOpen(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-slate-400 hover:text-white"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center lg:flex">
            <div className="relative" onMouseEnter={open} onMouseLeave={close}>
              <button
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                className={`flex items-center gap-1 ${linkClass("")} ${productsOpen ? "!text-slate-900 dark:!text-white" : ""}`}
              >
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div id="products-menu" className="absolute left-0 top-full pt-2">
                  <div className="w-[34rem] rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-lg shadow-slate-900/5 dark:shadow-black/40">
                    <ul className="grid grid-cols-2">
                      {products.map((p) => (
                        <li key={p.href}>
                          <Link
                            href={p.href}
                            className="block rounded-md px-3 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/70"
                          >
                            <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                              {p.name}
                              {p.soon && (
                                <span className="rounded border border-slate-300 dark:border-slate-600 px-1.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                  Coming soon
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-5 text-slate-500 dark:text-slate-400">{p.line}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {themeButton}
            <a href={loginUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Log in
            </a>
            <Link
              href="/demo"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Book a demo
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            {themeButton}
            <button
              className="rounded-md p-2 text-slate-700 dark:text-slate-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
