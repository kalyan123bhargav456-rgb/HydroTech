import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "How is HydroHealth Tech different from a regular water filter?",
    a: "A filter treats water; HydroHealth Tech is an information layer for monitoring and community reports. It helps teams review signals and context, but a reading alone does not establish that water is safe or that an outbreak exists.",
  },
  {
    q: "Do I need a plumber or electrician to install it?",
    a: "No. HydroHealth Tech is a monitoring prototype. Any sensor installation, calibration, or connection to a live source must be configured and verified for the specific deployment.",
  },
  {
    q: "What exactly does it detect?",
    a: "The prototype can present indicators such as turbidity, TDS, pH, temperature, and conductivity when configured. These indicators do not diagnose disease; any public-health alert should be reviewed against attributable official sources.",
  },
  {
    q: "How fast will I be alerted if something is wrong?",
    a: "Alerts are sent within 60 seconds of a reading crossing a safe threshold, via app push notification, SMS and an optional voice call in your preferred regional language.",
  },
  {
    q: "Does it work during power or internet outages?",
    a: "Yes. The sensor pod stores readings locally and syncs the moment connectivity returns. Critical alerts are also sent via SMS, which works even on basic 2G networks.",
  },
  {
    q: "Can I share alerts with my parents or domestic help?",
    a: "Yes — the Family Shield plan lets you add up to 6 members to receive the same real-time alerts, so everyone in the household stays informed, not just the primary user.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are billed monthly and you can cancel anytime. The hardware pod is included at no upfront cost for as long as you remain subscribed.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Frequently asked questions
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything you were about to ask
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors duration-300",
                  isOpen ? "border-teal-200 bg-teal-50/40" : "border-slate-200 bg-white"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-medium text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-teal-600 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p id={`faq-answer-${i}`} className="px-6 pb-5 text-[15px] leading-relaxed text-slate-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
