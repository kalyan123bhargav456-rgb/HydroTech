import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Droplets, ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Reports", href: "#reports" },
  { label: "Admin", href: "#admin" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-2" : "pt-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5",
            scrolled
              ? "border-white/60 bg-white/70 shadow-[0_8px_30px_rgb(15,76,92,0.08)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#top");
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-indigo-600 shadow-md shadow-teal-900/20">
              <Droplets className="h-5 w-5 text-white" strokeWidth={2.2} />
              <span className="absolute inset-0 rounded-xl bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Hydro<span className="text-teal-600">Health</span> Tech
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-900/5 hover:text-slate-900"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/#/signin"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Sign in
            </a>
            <button
              onClick={() => handleNavClick("#cta")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-teal-600/30"
            >
              Protect My Family
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-900/5"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/#/signin"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
                >
                  Sign in
                </a>
                <button
                  onClick={() => handleNavClick("#cta")}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/30"
                >
                  Protect My Family
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
