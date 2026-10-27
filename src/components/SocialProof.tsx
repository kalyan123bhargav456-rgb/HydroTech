import { Reveal } from "./Reveal";

export function SocialProof() {
  return (
    <section className="relative border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Built for transparent community water-quality work
          </p>
        </Reveal>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-14 whitespace-nowrap">
          {["Demo readings", "Community reports", "Public-health context", "Explicit review states", "Demo readings", "Community reports", "Public-health context", "Explicit review states"].map((name, i) => (
            <span
              key={i}
              className="text-lg font-semibold tracking-tight text-slate-300 transition-colors duration-300 hover:text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
