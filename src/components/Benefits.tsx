import { motion } from "framer-motion";
import { IndianRupee, Clock3, BadgeCheck, Smile } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";

const BENEFITS = [
  {
    icon: IndianRupee,
    title: "Save on hospital bills",
    desc: "Bring water-quality context into one place so local teams can coordinate action without overstating what a reading proves.",
  },
  {
    icon: Clock3,
    title: "Hours of advance warning",
    desc: "Surface unusual readings early while keeping risk estimates distinct from confirmed disease outbreaks.",
  },
  {
    icon: BadgeCheck,
    title: "Peace of mind, verified daily",
    desc: "No more guessing if boiled or filtered water is actually safe. Get a clear, trustworthy score every single day.",
  },
  {
    icon: Smile,
    title: "Built for every family member",
    desc: "From toddlers to grandparents — simple alerts anyone at home can understand and act on immediately.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-gradient-to-b from-white to-teal-50/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-200/60 to-indigo-200/40 blur-2xl" />
              <img
                src="/images/family-safe.jpg"
                alt="Happy family enjoying safe drinking water at home"
                className="w-full rounded-[2rem] border border-white/60 object-cover shadow-2xl shadow-teal-900/10"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:w-[75%]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">This week's safety score</p>
                    <p className="text-xs text-slate-500">Updated 4 minutes ago</p>
                  </div>
                  <p className="text-2xl font-bold text-teal-600">96%</p>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
                  />
                </div>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                Why communities choose HydroHealth Tech
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Real protection, real savings, real peace of mind
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                For middle-class households, one hospital visit can undo months of savings.
                HydroHealth Tech was built to make water-quality information easier to understand and act on.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
              {BENEFITS.map((benefit) => (
                <motion.div key={benefit.title} variants={revealItem} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md shadow-slate-200">
                    <benefit.icon className="h-5 w-5 text-teal-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
