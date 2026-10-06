import Link from "next/link";
import { BarChart3, BookOpen, MessageCircle, UserSearch, Users, Wallet } from "lucide-react";

// Positions are percentages of a square box; the SVG uses the same 0–100 space.
const nodes = [
  { name: "People", href: "/hr", icon: Users, x: 50, y: 9 },
  { name: "Payroll", href: "/payroll", icon: Wallet, x: 87, y: 30 },
  { name: "Intelligence", href: "/intelligence", icon: BarChart3, x: 87, y: 72 },
  { name: "Accounting", href: "/accounting", icon: BookOpen, x: 50, y: 92, soon: true },
  { name: "Recruit", href: "/recruit", icon: UserSearch, x: 13, y: 72 },
  { name: "WhatsApp", href: "/whatsapp", icon: MessageCircle, x: 13, y: 30 },
];

/** The applications arranged around the shared foundation they sit on. */
export default function Hub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="41" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="0.3" />
        {nodes.map((n, i) => (
          <line
            key={n.name}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            strokeWidth="0.5"
            className={`flow ${n.soon ? "stroke-slate-300 dark:stroke-slate-700" : "stroke-blue-500/70 dark:stroke-blue-400/70"}`}
            style={{ animationDelay: `${i * -0.25}s` }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_20px_40px_-16px_rgba(37,99,235,0.7)] sm:h-28 sm:w-28">
        {/* Shared open-C arc — same mark used in the Header + favicon. */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
          aria-hidden
        >
          <path d="M19 6.5A8.5 8.5 0 1 0 19 17.5" />
        </svg>
        <span className="mt-1.5 text-[10px] font-medium text-blue-100">One record</span>
      </div>

      {nodes.map((n, i) => (
        <Link
          key={n.name}
          href={n.href}
          className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span
            className={`float flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors dark:bg-slate-900 sm:h-14 sm:w-14 ${
              n.soon
                ? "border-dashed border-slate-300 text-slate-400 dark:border-slate-700"
                : "border-slate-200 text-blue-600 group-hover:border-blue-600 dark:border-slate-800 dark:text-blue-400"
            }`}
            style={{ "--float-delay": `${i * 0.7}s` } as React.CSSProperties}
          >
            <n.icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className="whitespace-nowrap text-xs font-semibold text-slate-700 dark:text-slate-300">
            {n.name}
            {n.soon && <span className="font-normal text-slate-400"> · soon</span>}
          </span>
        </Link>
      ))}
    </div>
  );
}
