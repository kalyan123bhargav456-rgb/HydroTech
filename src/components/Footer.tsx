import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import type { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
  </svg>
);

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4A3 3 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12Zm-13.5 3V9l5.5 3-5.5 3Z" />
  </svg>
);

const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Features", "How it works", "Pricing", "For Societies", "App Download"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Careers", "Press Kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Water Safety Guide", "Disease Prevention", "Help Center", "Community Forum", "API for NGOs"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Warranty", "Refund Policy"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-20 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-indigo-600">
                <Droplets className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Hydro<span className="text-teal-400">Health</span> Tech
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              HydroHealth Tech is a water-quality awareness and early-warning prototype for
              healthier communities. Readings and alerts are labelled as demo data where applicable.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>hello@hydrohealth.tech</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>HSR Layout, Bengaluru, India</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition-colors duration-200 hover:text-teal-400">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} HydroHealth Tech. All rights reserved.</p>
          <p className="text-slate-500">Made with care, for every Indian household.</p>
        </div>
      </div>
    </footer>
  );
}
