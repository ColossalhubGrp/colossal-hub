import Phone from "./Phone";
import Reveal from "./Reveal";

const nav = ["Overview", "People", "Leave", "Attendance", "Payroll", "Intelligence", "Recruit"];

const stats = [
  { label: "Employees", value: "84" },
  { label: "In today", value: "78" },
  { label: "On leave", value: "4" },
  { label: "Next pay run", value: "25 Oct" },
];

// Monthly wage bill, USD thousands. September is the 61.8 used elsewhere on the site.
const wageBill = [
  ["Oct", 55.1], ["Nov", 56.4], ["Dec", 63.0], ["Jan", 54.2], ["Feb", 55.0], ["Mar", 57.3],
  ["Apr", 56.8], ["May", 58.1], ["Jun", 58.9], ["Jul", 59.6], ["Aug", 60.2], ["Sep", 61.8],
] as const;

/** Illustrative desktop overview with the WhatsApp view overlapping it. */
export default function DashboardMock() {
  const max = 70;
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="dot-grid pointer-events-none absolute -inset-x-10 -inset-y-12" aria-hidden />

      <Reveal className="relative lg:pr-48">
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="ml-4 rounded bg-slate-100 dark:bg-slate-800 px-3 py-0.5 text-[11px] text-slate-500 dark:text-slate-400">
              Sample business · Overview
            </span>
          </div>

          <div className="grid grid-cols-[9.5rem_1fr] max-md:grid-cols-1">
            <ul className="border-r border-slate-200 dark:border-slate-800 p-3 text-[13px] max-md:hidden">
              {nav.map((n, i) => (
                <li
                  key={n}
                  className={`rounded-md px-2.5 py-1.5 ${
                    i === 0
                      ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{s.label}</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900 dark:text-white">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-[13px] font-semibold text-slate-900 dark:text-white">Wage bill, last 12 months</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">USD thousands</p>
                </div>
                <div className="mt-4 flex h-36 items-end gap-1.5 sm:gap-2">
                  {wageBill.map(([m, v], i) => (
                    <div key={m} className="flex h-full flex-1 flex-col justify-end gap-1.5">
                      {i === wageBill.length - 1 && (
                        <span className="text-center text-[10px] font-semibold tabular-nums text-blue-700 dark:text-blue-300">{v}</span>
                      )}
                      <div
                        className={`grow-bar w-full rounded-t ${i === wageBill.length - 1 ? "bg-blue-600 dark:bg-blue-500" : "bg-blue-200 dark:bg-blue-900"}`}
                        style={{ "--h": `${(v / max) * 100}%`, "--bar-delay": `${150 + i * 45}ms` } as React.CSSProperties}
                        title={`${m}: ${v}`}
                      />
                      <span className="text-center text-[10px] text-slate-400 dark:text-slate-500">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="float absolute -bottom-10 right-0 hidden w-[14rem] lg:block" style={{ "--float-delay": "0.5s" } as React.CSSProperties}>
        <Phone
          subtitle="Intelligence"
          messages={[
            { from: "me", time: "18:40", text: "Why is September up?" },
            {
              from: "them",
              time: "18:40",
              text: "Mostly night-shift overtime in Production. Two operators were on leave and their shifts were covered.",
            },
          ]}
        />
      </div>
    </div>
  );
}
