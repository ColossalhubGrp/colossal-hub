"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  BarChart3,
  Zap,
  Users,
  Globe,
  Shield,
  Headphones,
  Workflow,
  Puzzle,
  LineChart,
  Building2,
  GraduationCap,
  Newspaper,
  ArrowRight,
  Moon,
  Sun,
  Star,
  Rocket,
  Database,
  Cloud,
  Cpu,
  Video,
  MessageSquare,
  FileText,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useTheme } from "./ThemeProvider";

const navItems = [
  {
    label: "Products",
    columns: [
      {
        heading: "Platform",
        items: [
          { icon: BarChart3, title: "Analytics", desc: "Real-time insights and dashboards" },
          { icon: Zap, title: "Automation", desc: "Streamline repetitive workflows" },
          { icon: Users, title: "Collaboration", desc: "Work together seamlessly across teams" },
          { icon: Puzzle, title: "Integrations", desc: "Connect with 100+ tools you love" },
        ],
      },
      {
        heading: "Infrastructure",
        items: [
          { icon: Shield, title: "Security", desc: "Enterprise-grade data protection" },
          { icon: Database, title: "Data Engine", desc: "Unified data layer for all your apps" },
          { icon: Cloud, title: "Cloud Hosting", desc: "Global CDN with 99.99% uptime" },
          { icon: Cpu, title: "Compute", desc: "Serverless functions at the edge" },
        ],
      },
    ],
    featured: {
      title: "What's new",
      desc: "AI-powered workflow builder is here. Automate complex tasks with natural language.",
      cta: "Learn more",
      badge: "New",
    },
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "By company size",
        items: [
          { icon: Rocket, title: "Startups", desc: "Launch and scale from day one" },
          { icon: Building2, title: "Enterprise", desc: "Solutions for large organizations" },
        ],
      },
      {
        heading: "By use case",
        items: [
          { icon: LineChart, title: "SaaS", desc: "Tools built for SaaS businesses" },
          { icon: Globe, title: "E-commerce", desc: "Grow your online store faster" },
          { icon: Workflow, title: "Operations", desc: "Optimize internal workflows" },
          { icon: Star, title: "Customer Success", desc: "Deliver exceptional experiences" },
        ],
      },
    ],
    featured: {
      title: "Customer stories",
      desc: "See how TechFlow reduced reporting time by 60% with Colossal Hub.",
      cta: "Read case study",
    },
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        items: [
          { icon: Newspaper, title: "Blog", desc: "Latest news, tips, and insights" },
          { icon: GraduationCap, title: "Academy", desc: "Free courses and certifications" },
          { icon: Video, title: "Webinars", desc: "Live and on-demand sessions" },
        ],
      },
      {
        heading: "Connect",
        items: [
          { icon: Headphones, title: "Support", desc: "Get help from our expert team" },
          { icon: MessageSquare, title: "Community", desc: "Join 50K+ members on Discord" },
          { icon: FileText, title: "Changelog", desc: "See what's new every week" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const activeNav = navItems.find((i) => i.label === activeDropdown);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm dark:shadow-slate-800/20"
            : "bg-white/0 dark:bg-transparent"
        }`}
      >
        <nav ref={navRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                Colossal Hub
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.columns ? handleMouseEnter(item.label) : undefined
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        activeDropdown === item.label
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4.5 w-4.5" />
                ) : (
                  <Moon className="h-4.5 w-4.5" />
                )}
              </button>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Book Demo
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {activeDropdown && activeNav?.columns && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0"
              onMouseEnter={() =>
                activeDropdown && handleMouseEnter(activeDropdown)
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-black/30 overflow-hidden">
                  <div className="flex">
                    <div className="flex-1 grid grid-cols-2 gap-0 divide-x divide-slate-100 dark:divide-slate-700 p-6">
                      {activeNav.columns.map((col) => (
                        <div key={col.heading} className="px-4 first:pl-0 last:pr-0">
                          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                            {col.heading}
                          </p>
                          <div className="space-y-1">
                            {col.items.map((subItem) => (
                              <a
                                key={subItem.title}
                                href="#"
                                className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  <subItem.icon className="h-4.5 w-4.5" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {subItem.title}
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                    {subItem.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeNav.featured && (
                      <div className="w-64 bg-slate-50 dark:bg-slate-900/50 p-6 border-l border-slate-100 dark:border-slate-700 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              {activeNav.featured.title}
                            </p>
                            {activeNav.featured.badge && (
                              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-300">
                                {activeNav.featured.badge}
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {activeNav.featured.desc}
                          </p>
                        </div>
                        <a
                          href="#"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          {activeNav.featured.cta}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
