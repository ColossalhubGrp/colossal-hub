import Phone from "./Phone";
import Reveal from "./Reveal";
import DashboardSlideshow from "./DashboardSlideshow";

/**
 * The real product, not a drawing: live dashboards as they run at
 * app.colossalhub.com, with the live WhatsApp receipt thread overlapping
 * them. Brief 6.4: "a real screen beats a false photograph" — and a real
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
        <DashboardSlideshow
          frames={[
            {
              src: "/screens/overall-dashboard.png",
              alt: "The overall dashboard: 725 employees, new hires, separations, turnover and 12-month movement charts.",
              label: "Overview",
            },
            {
              src: "/screens/overall-dashboard-payroll.png",
              alt: "Further down the overview: departments, age bands, the gender mix and the month's payroll cost.",
              label: "Workforce & cost",
            },
            {
              src: "/screens/hr-dashboard.png",
              alt: "The HR dashboard: headcount growth, hires against exits, age bands and length of service.",
              label: "People",
            },
            {
              src: "/screens/payroll-dashboard.png",
              alt: "The payroll dashboard: this run's net pay, what is owed to ZIMRA, NSSA and ZIMDEF, and when it falls due.",
              label: "Payroll",
            },
          ]}
        />
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
