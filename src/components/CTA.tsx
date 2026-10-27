import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 px-6 py-16 text-center shadow-2xl sm:px-16">
            <motion.div
              className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-teal-500/30 blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-teal-200 backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                30-day money-back guarantee
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Turn water-quality signals into community action.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Explore a transparent monitoring prototype built for safer water and healthier communities.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() =>
                    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-teal-500/40"
                >
                  Start Protecting My Family
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a href="mailto:hello@hydrohealth.tech?subject=HydroHealth%20Tech%20demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10">
                  Book a Free Demo
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-400">
                Demo data is clearly labelled &middot; No medical diagnosis &middot; Public-health sources should be verified
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
