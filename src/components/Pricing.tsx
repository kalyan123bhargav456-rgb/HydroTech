import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { cn } from "../utils/cn";

const PLANS = [
  {
    name: "Essential",
    price: "₹49",
    period: "/month",
    tagline: "For single-tap homes just getting started",
    cta: "Start Essential",
    highlighted: false,
    features: [
      "1 monitoring workspace",
      "Daily Water Safety Score",
      "App push notifications",
      "7-day water quality history",
      "Community report overview",
    ],
  },
  {
    name: "Family Shield",
    price: "₹99",
    period: "/month",
    tagline: "Our most popular plan for full-home protection",
    cta: "Get Family Shield",
    highlighted: true,
    features: [
      "Up to 3 community locations",
      "Real-time SMS + voice alerts",
      "90-day water quality history",
      "Family sharing (up to 6 members)",
      "Public-health context prompts",
      "Priority device replacement",
    ],
  },
  {
    name: "Society & Community",
    price: "Custom",
    period: "pricing",
    tagline: "For housing societies, RWAs & apartment complexes",
    cta: "Talk to Us",
    highlighted: false,
    features: [
      "Unlimited sensor pods",
      "Building-wide monitoring dashboard",
      "Dedicated health advisor",
      "Municipal data integration",
      "On-site installation support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-teal-50/40 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Simple, honest pricing
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Less than the cost of a single doctor's visit — for a full year of protection
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Prototype plans are illustrative. Confirm data sources, deployment scope, and support before production use.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3" stagger={0.1}>
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={cn(
                "relative flex flex-col rounded-[2rem] border p-8",
                plan.highlighted
                  ? "border-transparent bg-slate-900 text-white shadow-2xl shadow-slate-900/30"
                  : "border-slate-200 bg-white shadow-sm"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-slate-900")}>
                {plan.name}
              </h3>
              <p className={cn("mt-1.5 text-sm", plan.highlighted ? "text-slate-300" : "text-slate-500")}>
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className={cn("text-sm", plan.highlighted ? "text-slate-300" : "text-slate-500")}>
                  {plan.period}
                </span>
              </div>

              <button
                onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
                  plan.highlighted
                    ? "bg-white text-slate-900 hover:-translate-y-0.5 hover:bg-teal-50"
                    : "bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-teal-600"
                )}
              >
                {plan.cta}
              </button>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.highlighted ? "text-teal-300" : "text-teal-600"
                      )}
                    />
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
