import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, ShieldAlert, Smartphone, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const STEPS = [
  {
    id: "detect",
    label: "Detect",
    icon: Gauge,
    title: "Sensors scan your water every 15 minutes",
    desc: "HydroHealth Tech brings water-quality indicators such as turbidity, TDS, pH and conductivity into one readable monitoring view. Demo readings are labelled clearly and do not confirm disease or an outbreak.",
    points: ["5-minute DIY installation", "Works with tanks, sumps & RO units", "Runs 9 months on battery"],
  },
  {
    id: "predict",
    label: "Contextualise",
    icon: ShieldAlert,
    title: "Signals are reviewed with context",
    desc: "Configured readings can be considered alongside rainfall, local reports and attributable official sources. The platform does not confirm disease or infer an outbreak from readings alone.",
    points: ["Source and timestamp visibility", "Community report context", "Official guidance remains authoritative"],
  },
  {
    id: "alert",
    label: "Alert",
    icon: Smartphone,
    title: "Your family gets warned in under 60 seconds",
    desc: "The moment risk crosses a safe threshold, everyone on your family plan gets a push alert, SMS and regional-language voice call with clear next steps.",
    points: ["Multi-language voice & SMS alerts", "Shareable with helpers & elders", "Daily Water Safety Score"],
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-teal-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            How HydroHealth Tech works
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From the first drop of risk to a protected family — in three steps
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex flex-1 items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300",
                    active === i
                      ? "border-teal-400/40 bg-white/10 shadow-lg shadow-teal-900/30"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                      active === i ? "bg-gradient-to-br from-teal-400 to-cyan-500" : "bg-white/10"
                    )}
                  >
                    <s.icon className={cn("h-5 w-5", active === i ? "text-white" : "text-slate-300")} />
                  </span>
                  <div>
                    <p className={cn("font-semibold", active === i ? "text-white" : "text-slate-200")}>
                      {String(i + 1).padStart(2, "0")} — {s.label}
                    </p>
                    <p className="mt-1 hidden text-sm text-slate-400 sm:block lg:block">
                      {active === i ? s.title : ""}
                    </p>
                  </div>
                  {active === i && (
                    <motion.span
                      layoutId="step-indicator"
                      className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-teal-400 to-cyan-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{step.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/app-dashboard.png"
                  alt="HydroHealth Tech monitoring dashboard showing a demo water-quality score"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
