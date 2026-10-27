import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Activity, BellRing } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#f4faf9] via-white to-white pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Ambient animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-teal-300/40 via-cyan-200/30 to-transparent blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-300/30 via-violet-200/20 to-transparent blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,76,92,0.08)_1px,transparent_0)] bg-[size:28px_28px] opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
            </span>
            Community water-quality awareness
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Know your water is
            <span className="relative mx-2 inline-block whitespace-nowrap bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              safe
            </span>
            before it makes your family sick.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            HydroHealth Tech helps communities understand water-quality signals, share
            reports, and respond early to potential risks. This prototype uses clearly
            labelled demo data and is not a medical diagnostic or outbreak-confirmation system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              onClick={() =>
                document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-600/30"
            >
              Get Early Access — ₹49/mo
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() =>
                document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50/60"
            >
              <PlayCircle className="h-5 w-5 text-teal-600" />
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 pt-7"
          >
            <div>
              <p className="text-2xl font-bold text-slate-900">Demo</p>
              <p className="text-sm text-slate-500">monitoring workspace</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">5</p>
              <p className="text-sm text-slate-500">water indicators</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500">community visibility</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-200/50 via-cyan-100/40 to-indigo-200/40 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-2xl shadow-teal-900/10 backdrop-blur-xl sm:p-7">
            <img
              src="/images/hero-device.png"
              alt="HydroHealth Tech water-quality monitoring device"
              className="w-full rounded-2xl"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Water Safe</p>
                <p className="text-[11px] text-slate-500">Score: 94/100</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 top-1/2 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                <Activity className="h-5 w-5 text-amber-600" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">TDS Normal</p>
                <p className="text-[11px] text-slate-500">214 ppm</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 left-10 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100">
                <BellRing className="h-5 w-5 text-teal-600" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Live Alerts</p>
                <p className="text-[11px] text-slate-500">24/7 monitoring</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
