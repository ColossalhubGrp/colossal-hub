"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppGlyph } from "./WhatsAppButton";

type Field =
  | { name: string; label: string; type: "text" | "email" | "tel"; required?: boolean; autoComplete?: string; placeholder?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean }
  | { name: string; label: string; type: "checkboxes"; options: string[] }
  | { name: string; label: string; type: "textarea"; required?: boolean; placeholder?: string };

const inputClass =
  "mt-1.5 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-[15px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

/**
 * There is no form backend yet, so a submission is handed to WhatsApp as a
 * pre-filled message to the business number. Swap `onSubmit` for a real
 * endpoint (e.g. a Frappe Lead) when one exists.
 */
export default function LeadForm({
  intro,
  fields,
  submitLabel,
  confirmation,
}: {
  intro: string;
  fields: Field[];
  submitLabel: string;
  confirmation: React.ReactNode;
}) {
  const [sentTo, setSentTo] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = fields
      .map((f) => {
        const value = f.type === "checkboxes" ? data.getAll(f.name).join(", ") : String(data.get(f.name) ?? "").trim();
        return value ? `${f.label}: ${value}` : null;
      })
      .filter(Boolean);
    const href = whatsappLink(`${intro}\n\n${lines.join("\n")}`);
    window.open(href, "_blank", "noopener,noreferrer");
    setSentTo(href);
  }

  if (sentTo) {
    return (
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8">
        <div className="text-lg font-semibold text-slate-900 dark:text-white">{confirmation}</div>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          WhatsApp should have opened with your details filled in. Press send and we will reply in the same chat. If
          it did not open,{" "}
          <a href={sentTo} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 underline underline-offset-2">
            open it here
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-blue-600 dark:text-blue-400 underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => {
        const wide = f.type === "textarea" || f.type === "checkboxes";
        const label = (
          <>
            {f.label}
            {"required" in f && !f.required && <span className="font-normal text-slate-400"> (optional)</span>}
          </>
        );
        return (
          <div key={f.name} className={wide ? "sm:col-span-2" : ""}>
            {f.type === "checkboxes" ? (
              <fieldset>
                <legend className="text-sm font-medium text-slate-800 dark:text-slate-200">{f.label}</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {f.options.map((o) => (
                    <label
                      key={o}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-800 dark:has-[:checked]:bg-blue-950/50 dark:has-[:checked]:text-blue-200"
                    >
                      <input type="checkbox" name={f.name} value={o} className="accent-blue-600" />
                      {o}
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                {label}
                {f.type === "textarea" ? (
                  <textarea name={f.name} rows={3} required={f.required} placeholder={f.placeholder} className={`${inputClass} resize-y`} />
                ) : f.type === "select" ? (
                  <select name={f.name} required={f.required} defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Choose one
                    </option>
                    {f.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    className={inputClass}
                  />
                )}
              </label>
            )}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors sm:w-auto"
        >
          <WhatsAppGlyph className="h-4 w-4" />
          {submitLabel}
        </button>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
          This opens WhatsApp with your answers filled in, ready to send to us.
        </p>
      </div>
    </form>
  );
}
