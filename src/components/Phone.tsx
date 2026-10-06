import { CheckCheck } from "lucide-react";

export type Message = {
  from: "them" | "me";
  text: React.ReactNode;
  time: string;
  buttons?: string[];
};

/**
 * A drawn phone showing a WhatsApp-style thread. Purely illustrative: the
 * bubble tints echo WhatsApp so visitors recognise the setting, while the
 * chrome stays in the Colossal Hub palette.
 */
export default function Phone({
  title = "Colossal Hub",
  subtitle = "business account",
  messages,
  caption,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  messages: Message[];
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`mx-auto w-full max-w-[20rem] ${className}`}>
      <div className="rounded-[2.25rem] border border-slate-300 dark:border-slate-700 bg-slate-900 p-2 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.45)]">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#efeae2] dark:bg-[#0b141a]">
          <div className="flex items-center gap-3 bg-slate-900 px-4 pb-3 pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">C</div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-[11px] text-slate-400">{subtitle}</p>
            </div>
          </div>
          <div className="space-y-2 px-3 py-4 text-[13px] leading-snug">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%]">
                  <div
                    className={`rounded-lg px-2.5 pb-1 pt-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${
                      m.from === "me"
                        ? "rounded-tr-none bg-[#d9fdd3] text-slate-900 dark:bg-[#005c4b] dark:text-slate-100"
                        : "rounded-tl-none bg-white text-slate-900 dark:bg-[#202c33] dark:text-slate-100"
                    }`}
                  >
                    <div>{m.text}</div>
                    <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      {m.time}
                      {m.from === "me" && <CheckCheck className="h-3 w-3 text-sky-500" />}
                    </p>
                  </div>
                  {m.buttons && (
                    <div className="mt-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${m.buttons.length}, minmax(0, 1fr))` }}>
                      {m.buttons.map((b) => (
                        <span
                          key={b}
                          className="rounded-lg bg-white py-1.5 text-center text-[12px] font-medium text-sky-600 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] dark:bg-[#202c33] dark:text-sky-400"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-slate-500 dark:text-slate-500">{caption}</figcaption>
      )}
    </figure>
  );
}
