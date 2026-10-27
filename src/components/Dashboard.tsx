import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  Languages,
  MapPin,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { cn } from "../utils/cn";

type Language = "en" | "te";
type ReportStatus = "Pending Review" | "Under Review" | "Resolved";

type Report = {
  id: string;
  location: string;
  issue: string;
  submitted: string;
  status: ReportStatus;
};

const READINGS = [
  { day: "Mon", value: 72 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 74 },
  { day: "Thu", value: 84 },
  { day: "Fri", value: 81 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 86 },
];

const LOCATIONS = [
  { name: "Karnataka · Bengaluru", status: "Within expected range", score: 86, x: "32%", y: "38%" },
  { name: "Telangana · Hyderabad", status: "Review recommended", score: 64, x: "67%", y: "57%" },
  { name: "Maharashtra · Pune", status: "Within expected range", score: 91, x: "48%", y: "74%" },
];

const INITIAL_REPORTS: Report[] = [
  { id: "HHT-1042", location: "Lakeview Ward", issue: "Unusual colour reported", submitted: "Today, 10:42", status: "Under Review" },
  { id: "HHT-1038", location: "Green Park", issue: "Odour after rainfall", submitted: "Yesterday, 16:20", status: "Pending Review" },
];

const copy = {
  en: {
    dashboard: "Monitoring dashboard",
    subtitle: "A transparent view of demo readings and community reports.",
    demo: "Demo data",
    lastUpdated: "Last updated 10 minutes ago",
    score: "Community water-quality score",
    indicators: "5 indicators tracked",
    review: "Review recommended",
    locations: "Monitored locations",
    reports: "Community reports",
    trend: "Seven-day signal trend",
    map: "Location overview",
    mapNote: "Simulated locations · not live sensor coverage",
    reportTitle: "Share a community observation",
    reportNote: "Reports start as Pending Review and are not published automatically.",
    location: "Location",
    issue: "What did you observe?",
    submit: "Submit report",
    submitted: "Report submitted",
    reference: "Reference",
    admin: "Reviewer queue",
    adminNote: "Demo-only review controls. Production authorization requires a server and database policy.",
    noReports: "No reports match this filter.",
  },
  te: {
    dashboard: "పర్యవేక్షణ డాష్‌బోర్డ్",
    subtitle: "డెమో రీడింగ్‌లు మరియు కమ్యూనిటీ నివేదికల పారదర్శక వీక్షణ.",
    demo: "డెమో డేటా",
    lastUpdated: "10 నిమిషాల క్రితం నవీకరించబడింది",
    score: "కమ్యూనిటీ నీటి నాణ్యత స్కోర్",
    indicators: "5 సూచికలు పర్యవేక్షణలో",
    review: "సమీక్ష అవసరం",
    locations: "పర్యవేక్షణ ప్రాంతాలు",
    reports: "కమ్యూనిటీ నివేదికలు",
    trend: "ఏడు రోజుల సిగ్నల్ ట్రెండ్",
    map: "ప్రాంతాల అవలోకనం",
    mapNote: "సిమ్యులేటెడ్ ప్రాంతాలు · ప్రత్యక్ష సెన్సర్ కవరేజ్ కాదు",
    reportTitle: "కమ్యూనిటీ పరిశీలనను పంచుకోండి",
    reportNote: "నివేదికలు ముందుగా సమీక్ష పెండింగ్‌లో ఉంటాయి; స్వయంచాలకంగా ప్రచురించబడవు.",
    location: "ప్రాంతం",
    issue: "మీరు ఏమి గమనించారు?",
    submit: "నివేదిక పంపండి",
    submitted: "నివేదిక పంపబడింది",
    reference: "రిఫరెన్స్",
    admin: "సమీక్ష క్యూలో",
    adminNote: "డెమో సమీక్ష నియంత్రణలు మాత్రమే. ఉత్పత్తి అనుమతులకు సర్వర్ మరియు డేటాబేస్ విధానం అవసరం.",
    noReports: "ఈ ఫిల్టర్‌కు నివేదికలు లేవు.",
  },
};

export function Dashboard() {
  const [language, setLanguage] = useState<Language>("en");
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [filter, setFilter] = useState<"All" | ReportStatus>("All");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const t = copy[language];

  const filteredReports = useMemo(
    () => (filter === "All" ? reports : reports.filter((report) => report.status === filter)),
    [filter, reports]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location || !issue.trim()) return;
    const id = `HHT-${1043 + reports.length}`;
    setReports((current) => [
      { id, location, issue: issue.trim(), submitted: "Just now", status: "Pending Review" },
      ...current,
    ]);
    setSubmittedReference(id);
    setLocation("");
    setIssue("");
  };

  const updateStatus = (id: string, status: ReportStatus) => {
    setReports((current) => current.map((report) => (report.id === id ? { ...report, status } : report)));
  };

  return (
    <section id="dashboard" className="border-y border-slate-200 bg-[#f7fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-600" /> {t.demo}
              </span>
              <span className="text-sm text-slate-500">{t.lastUpdated}</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102a43] sm:text-4xl">{t.dashboard}</h2>
            <p className="mt-3 max-w-2xl text-lg text-[#526477]">{t.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={() => setLanguage((current) => (current === "en" ? "te" : "en"))}
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-[#102a43] transition hover:border-teal-500 hover:text-teal-700 lg:self-auto"
            aria-label="Switch language"
          >
            <Languages className="h-4 w-4" /> {language === "en" ? "తెలుగు" : "English"}
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric icon={ShieldCheck} label={t.score} value="86 / 100" detail={t.indicators} tone="teal" />
          <Metric icon={AlertTriangle} label={t.review} value="1" detail="Location flagged for review" tone="amber" />
          <Metric icon={MapPin} label={t.locations} value="3" detail="Simulated locations" tone="blue" />
          <Metric icon={ClipboardList} label={t.reports} value={String(reports.length)} detail="Pending and reviewed" tone="slate" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Panel title={t.trend} icon={BarChart3}>
            <div className="flex h-56 items-end gap-3 border-b border-l border-slate-200 px-3 pb-0 pt-5 sm:gap-6">
              {READINGS.map((reading) => (
                <div key={reading.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="text-xs font-semibold text-slate-500">{reading.value}</span>
                  <div className="w-full max-w-10 rounded-t-lg bg-teal-500 transition-all hover:bg-teal-600" style={{ height: `${reading.value}%` }} />
                  <span className="text-xs text-slate-500">{reading.day}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Prototype score combines configured demo indicators for visualisation only. It does not diagnose illness or confirm an outbreak.
            </p>
          </Panel>

          <Panel title={t.map} icon={MapPin}>
            <div className="relative h-56 overflow-hidden rounded-xl border border-teal-100 bg-[#e8f7f2]">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(30deg, transparent 48%, #8ecfc4 49%, transparent 51%), linear-gradient(120deg, transparent 48%, #8ecfc4 49%, transparent 51%)", backgroundSize: "70px 70px" }} />
              {LOCATIONS.map((item) => (
                <div key={item.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: item.x, top: item.y }}>
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-full border-4 border-white shadow-lg", item.score < 70 ? "bg-amber-500" : "bg-teal-600")}>
                    <MapPin className="h-4 w-4 text-white" />
                  </span>
                  <span className="absolute left-1/2 top-9 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#102a43] px-2 py-1 text-[10px] font-semibold text-white sm:block">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">{t.mapNote}</p>
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Panel title={t.reportTitle} icon={Send}>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">{t.reportNote}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-semibold text-[#102a43]">
                {t.location}
                <select value={location} onChange={(event) => setLocation(event.target.value)} required className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 font-normal text-slate-700 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200">
                  <option value="">Select a location</option>
                  {LOCATIONS.map((item) => <option key={item.name}>{item.name}</option>)}
                </select>
              </label>
              <label className="block text-sm font-semibold text-[#102a43]">
                {t.issue}
                <textarea value={issue} onChange={(event) => setIssue(event.target.value)} required maxLength={240} rows={3} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 font-normal text-slate-700 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" placeholder="Example: cloudy water after heavy rain" />
              </label>
              <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 text-sm font-bold text-white transition hover:bg-[#102a43]">
                <Send className="h-4 w-4" /> {t.submit}
              </button>
            </form>
            {submittedReference && (
              <div role="status" className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="flex items-center gap-2 font-bold"><CheckCircle2 className="h-4 w-4" /> {t.submitted}</p>
                <p className="mt-1">{t.reference}: {submittedReference} · Pending Review</p>
              </div>
            )}
          </Panel>

          <Panel title={t.admin} icon={Users}>
            <p className="mb-4 text-xs leading-relaxed text-slate-500">{t.adminNote}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {(["All", "Pending Review", "Under Review", "Resolved"] as const).map((value) => (
                <button key={value} type="button" onClick={() => setFilter(value)} className={cn("inline-flex min-h-9 items-center gap-1 rounded-lg px-3 text-xs font-semibold transition", filter === value ? "bg-[#102a43] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}>
                  {value === "All" && <SlidersHorizontal className="h-3 w-3" />} {value}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredReports.length === 0 && <p className="rounded-xl bg-slate-50 p-6 text-center text-sm text-slate-500">{t.noReports}</p>}
              {filteredReports.map((report) => (
                <div key={report.id} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="font-semibold text-[#102a43]">{report.issue}</p>
                      <p className="mt-1 text-xs text-slate-500">{report.location} · {report.id} · {report.submitted}</p>
                    </div>
                    <Status status={report.status} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {report.status !== "Under Review" && <button type="button" onClick={() => updateStatus(report.id, "Under Review")} className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-600 hover:text-teal-700">Start review</button>}
                    {report.status !== "Resolved" && <button type="button" onClick={() => updateStatus(report.id, "Resolved")} className="rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#102a43]">Mark resolved</button>}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
          <FileText className="mt-0.5 h-5 w-5 shrink-0" />
          <p><strong>Safety note:</strong> Water-quality indicators can signal that further testing or official guidance may be appropriate. They cannot establish a disease diagnosis or outbreak on their own.</p>
        </div>
      </div>
    </section>
  );
}

function Panel({ title, icon: Icon, children }: { title: string; icon: typeof BarChart3; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="flex items-center gap-2 text-lg font-bold text-[#102a43]"><Icon className="h-5 w-5 text-teal-700" /> {title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Metric({ icon: Icon, label, value, detail, tone }: { icon: typeof ShieldCheck; label: string; value: string; detail: string; tone: "teal" | "amber" | "blue" | "slate" }) {
  const colors = { teal: "bg-teal-100 text-teal-700", amber: "bg-amber-100 text-amber-700", blue: "bg-sky-100 text-sky-700", slate: "bg-slate-100 text-slate-700" };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", colors[tone])}><Icon className="h-5 w-5" /></div>
      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-[#102a43]">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

function Status({ status }: { status: ReportStatus }) {
  const styles = { "Pending Review": "bg-amber-100 text-amber-800", "Under Review": "bg-sky-100 text-sky-800", Resolved: "bg-emerald-100 text-emerald-800" };
  return <span className={cn("inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold", styles[status])}>{status}</span>;
}
