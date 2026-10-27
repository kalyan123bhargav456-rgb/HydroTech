import { LockKeyhole, ShieldCheck, Users } from "lucide-react";
import { PageLayout } from "./PageLayout";

export function AdminPage() {
  return (
    <PageLayout eyebrow="Administration" title="Reviewer workspace">
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
        <strong>Prototype admin access:</strong> You are viewing the demo administrator workspace. Replace this client-side sign-in with server authentication, role checks, and database policies before production use.
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <AdminCard icon={ShieldCheck} title="Review queue" text="Triage pending reports and record explicit review states." />
        <AdminCard icon={Users} title="Roles and access" text="Production authorization must be enforced server-side and through database policies." />
        <AdminCard icon={LockKeyhole} title="Audit trail" text="Reviewer identity and timestamps should be persisted in a production database." />
      </div>
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Open the reviewer controls</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">The current prototype keeps the reviewer queue on the dashboard so the demo can be tested end to end. These controls are local-only and are not an authentication boundary.</p>
        <a href="#dashboard" className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-[#102a43] px-5 text-sm font-bold text-white hover:bg-[#0f766e]">Open dashboard queue</a>
      </section>
    </PageLayout>
  );
}

export function AdminSection() {
  return (
    <section id="admin" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Administration</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#102a43] sm:text-4xl">Reviewer workspace</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <AdminCard icon={ShieldCheck} title="Review queue" text="Triage pending reports and record explicit review states." />
          <AdminCard icon={Users} title="Roles and access" text="Production authorization must be enforced server-side and through database policies." />
          <AdminCard icon={LockKeyhole} title="Audit trail" text="Reviewer identity and timestamps should be persisted in a production database." />
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
          <strong className="text-[#102a43]">Demo-only controls:</strong> The reviewer queue is available on the Dashboard section above. These controls are local-only and are not an authentication boundary.
        </div>
      </div>
    </section>
  );
}

function AdminCard({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Icon className="h-6 w-6 text-teal-700" />
      <h2 className="mt-4 font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}
