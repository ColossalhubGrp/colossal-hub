import Image from "next/image";
import Phone from "./Phone";
import Reveal from "./Reveal";

/**
 * The real product, not a drawing: the Overall Dashboard as it runs at
 * app.colossalhub.com, with the live WhatsApp receipt thread overlapping
 * it. Brief 6.4: "a real screen beats a false photograph" — and a real
 * screen beats an invented mock-up for the same reason.
 *
 * To refresh: retake the screenshots, re-crop, replace the files in
 * public/screens/. Nothing here is generated.
 */
export default function DashboardMock() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="dot-grid pointer-events-none absolute -inset-x-10 -inset-y-12" aria-hidden />

      <Reveal className="relative lg:pr-48">
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_40px_80px_-40px_rgba(20,26,34,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
            <span className="ml-4 rounded bg-slate-100 dark:bg-slate-800 px-3 py-0.5 text-[11px] text-slate-500 dark:text-slate-400">
              app.colossalhub.com
            </span>
          </div>
          <Image
            src="/screens/overall-dashboard.png"
            alt="The Colossal Hub overall dashboard: employee numbers, new hires, turnover and 12-month movement charts."
            width={1366}
            height={640}
            priority
            className="w-full"
          />
        </div>
      </Reveal>

      <div
        className="float absolute -bottom-10 right-0 hidden w-[15rem] lg:block"
        style={{ "--float-delay": "0.5s" } as React.CSSProperties}
      >
        <Phone
          subtitle="business account"
          image={{
            src: "/screens/whatsapp-receipt.png",
            width: 266,
            height: 242,
            alt: "A real WhatsApp thread: Colossal Hub has read a photographed receipt and asks whether to post it as a supplier invoice or an expense claim.",
          }}
        />
      </div>
    </div>
  );
}
