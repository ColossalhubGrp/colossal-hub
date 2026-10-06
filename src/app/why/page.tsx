import type { Metadata } from "next";
import { ClosingCta, Container, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Why Colossal Hub",
  description: "How Colossal Hub compares with spreadsheets and a bookkeeper, and with international software.",
};

const columns = ["Spreadsheets and a bookkeeper", "International software", "Colossal Hub"];

const rows: { label: string; values: [string, string, string] }[] = [
  { label: "Knows your sector's wage grids", values: ["Only if the person does", "No", "Yes"] },
  { label: "Dual currency", values: ["By hand, in a second sheet", "Rarely, and awkwardly", "Built in"] },
  { label: "Staff can use it without training", values: ["N/A", "Rarely", "Yes, on WhatsApp"] },
  { label: "Statutory returns produced", values: ["Manually", "Not in your format", "Yes"] },
  { label: "Cost when you grow", values: ["Rises with headcount", "High, and in hard currency", "Per user, monthly"] },
];

export default function WhyPage() {
  return (
    <>
      <PageIntro label="Why Colossal Hub" title="Approximately right is worse than useless.">
        <p>
          When a deadline and a penalty are attached, software that treats your country&apos;s rules as configuration
          will always be approximately right. Here is how the usual options compare.
        </p>
      </PageIntro>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-16 sm:py-20">
          {/* Table on wider screens */}
          <div className="hidden md:block">
            <table className="w-full table-fixed text-left">
              <thead>
                <tr className="border-b border-slate-300 dark:border-slate-700">
                  <th className="w-[28%] py-4" />
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      className={`py-4 pr-4 text-sm font-semibold ${
                        i === 2 ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-slate-200 dark:border-slate-800">
                    <th className="py-5 pr-6 font-semibold text-slate-900 dark:text-white">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`py-5 pr-4 ${i === 2 ? "font-semibold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked on phones */}
          <div className="space-y-8 md:hidden">
            {rows.map((r) => (
              <div key={r.label} className="border-t border-slate-200 dark:border-slate-800 pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">{r.label}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  {r.values.map((v, i) => (
                    <div key={i} className="flex justify-between gap-4">
                      <dt className="text-slate-500 dark:text-slate-400">{columns[i]}</dt>
                      <dd className={`text-right ${i === 2 ? "font-semibold text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"}`}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">International software does not know your rules.</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Wage tables, tax tables, social security ceilings, levies, filing formats and deadlines differ by country
              and by sector, and they change without warning. We encode them, version them by the date they take
              effect, and keep them current.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Local software stops at payroll.</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              People, pay and money sit on one foundation here, so HR feeds payroll, payroll feeds the books, and the
              intelligence layer can answer questions that need all three.
            </p>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
