import { FileText, Info, ShieldCheck } from "lucide-react";
import { PageLayout } from "./PageLayout";

export function ReportsPage() {
  return (
    <PageLayout eyebrow="Community reporting" title="Share and follow up on local observations">
      <ReportsContent />
    </PageLayout>
  );
}

export function ReportsSection() {
  return (
    <section id="reports" className="bg-[#f7fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Community reporting</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#102a43] sm:text-4xl">Share and follow up on local observations</h2>
        <ReportsContent />
      </div>
    </section>
  );
}

function ReportsContent() {
  return (
    <PageLayout eyebrow="Community reporting" title="Share and follow up on local observations">
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <FileText className="mt-1 h-5 w-5 text-teal-700" />
            <div>
              <h2 className="text-xl font-bold">Report workflow</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Use the submission form on the Monitoring Dashboard to create a report. Every report starts as <strong>Pending Review</strong>, receives a reference, and must be explicitly reviewed before it can be resolved.
              </p>
              <a href="#dashboard" className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-[#0f766e] px-5 text-sm font-bold text-white hover:bg-[#102a43]">Open report form</a>
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-3 text-amber-900">
            <Info className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <h2 className="font-bold">Privacy and safety</h2>
              <p className="mt-2 text-sm leading-relaxed">Do not include medical records or unnecessary personal information. A community observation is not a diagnosis and should not be treated as confirmation of an outbreak.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-6 text-sm leading-relaxed text-teal-950">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
        <p><strong>Demo mode:</strong> submissions are stored in the current browser session only. A production deployment needs a configured database, server-side validation, access controls, retention policy, and audit logging.</p>
      </div>
    </PageLayout>
  );
}
