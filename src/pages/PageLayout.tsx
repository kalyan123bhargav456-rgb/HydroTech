import { ArrowLeft, Droplets } from "lucide-react";
import type { ReactNode } from "react";

export function PageLayout({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7fafc] text-[#102a43]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#/" className="flex items-center gap-2.5 font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f766e]">
              <Droplets className="h-5 w-5 text-white" />
            </span>
            <span>Hydro<span className="text-teal-700">Health</span> Tech</span>
          </a>
          <a href="#/" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-[#102a43]">
            <ArrowLeft className="h-4 w-4" /> Back home
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {children}
      </main>
    </div>
  );
}

