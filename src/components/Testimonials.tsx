import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Mother of two, Lucknow",
    initials: "PS",
    color: "from-teal-500 to-cyan-500",
    quote:
      "The prototype made it easier for our team to discuss water-quality readings and document follow-up actions without confusing them with confirmed cases.",
  },
  {
    name: "Ramesh Iyer",
    role: "Senior citizen, Pune",
    initials: "RI",
    color: "from-indigo-500 to-violet-500",
    quote:
      "I live alone and can't always tell if the RO is working properly. The app tells me in simple language every morning. My daughter abroad gets the same alerts, so she worries less too.",
  },
  {
    name: "Fatima Khan",
    role: "Homemaker, Hyderabad",
    initials: "FK",
    color: "from-amber-500 to-orange-500",
    quote:
      "Installation took five minutes, no electrician needed. In three months it caught two chlorine spikes before our water supplier even acknowledged the issue.",
  },
  {
    name: "Arvind Deshmukh",
    role: "Father & small business owner, Nagpur",
    initials: "AD",
    color: "from-rose-500 to-pink-500",
    quote:
      "For the price of one hospital visit we got a full year of protection. The community alert warned our entire building about a supply issue a day before the municipal notice.",
  },
  {
    name: "Sunita Reddy",
    role: "School teacher, Chennai",
    initials: "SR",
    color: "from-emerald-500 to-teal-500",
    quote:
      "The shared view gives our community a simple place to review demo readings and decide when to contact the appropriate authority.",
  },
  {
    name: "Vikram Nair",
    role: "IT professional, Bengaluru",
    initials: "VN",
    color: "from-sky-500 to-blue-500",
    quote:
      "As someone who travels often, the remote alerts give me real confidence that my parents at home are safe, even when I can't check in myself.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Trusted by families like yours
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Stories from communities using HydroHealth Tech
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/60 p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <Quote className="h-7 w-7 text-teal-300" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-5">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
