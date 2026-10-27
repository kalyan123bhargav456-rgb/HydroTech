import {
  Radar,
  BellRing,
  Smartphone,
  TestTubes,
  Users,
  HeartPulse,
} from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: TestTubes,
    title: "Multi-parameter water testing",
    desc: "Bring configured indicators such as turbidity, TDS, pH and conductivity into one readable monitoring view.",
    accent: "from-teal-500 to-cyan-500",
  },
  {
    icon: Radar,
    title: "Risk context, not diagnosis",
    desc: "Review unusual readings alongside attributable public-health sources without presenting a signal as a confirmed outbreak.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: BellRing,
    title: "Clear review alerts",
    desc: "Surface readings and reports that may need follow-up, with explicit Pending Review and Resolved statuses.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "One simple dashboard",
    desc: "A readable workspace shows demo indicators, locations, timestamps and source context in one place.",
    accent: "from-sky-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Community reporting",
    desc: "Let residents share observations that authorized reviewers can triage without auto-publishing them.",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: HeartPulse,
    title: "Actionable next steps",
    desc: "Give communities clear prompts to seek official testing or guidance when a signal needs investigation.",
    accent: "from-emerald-500 to-teal-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why HydroHealth Tech
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your family needs to stay a step ahead of contaminated water
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built for communities, local teams and public-health partners — HydroHealth Tech combines monitoring,
            data science and human care into one affordable shield.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/60 p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
              />
              <div
                className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg`}
              >
                <feature.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
