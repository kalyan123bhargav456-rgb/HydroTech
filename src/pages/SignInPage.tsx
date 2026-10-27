import { useState } from "react";
import { ArrowRight, Languages, LockKeyhole, ShieldCheck } from "lucide-react";
import type { FormEvent } from "react";
import { PageLayout } from "./PageLayout";

const STATES_AND_UTS = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry",
];

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !state) {
      setError("Enter your email and choose your state or Union Territory.");
      return;
    }
    window.localStorage.setItem("hydrohealth-demo-admin", "true");
    window.location.hash = "/admin";
  };

  return (
    <PageLayout eyebrow="Secure access" title="Sign in to HydroHealth Tech">
      <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-2xl font-bold">Admin sign in</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Admin access is enabled for your current prototype so you can test the reviewer experience. This is not production authentication.
          </p>
          <label className="mt-6 block text-sm font-semibold">
            Email address
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" required className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 font-normal focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" placeholder="admin@example.in" />
          </label>
          <label className="mt-4 block text-sm font-semibold">
            State or Union Territory
            <select value={state} onChange={(event) => setState(event.target.value)} required className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 font-normal focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200">
              <option value="">Select your location</option>
              {STATES_AND_UTS.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <button type="submit" className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 text-sm font-bold text-white hover:bg-[#102a43]">
            Continue to admin workspace <ArrowRight className="h-4 w-4" />
          </button>
          {error && <p role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
        </form>

        <div className="space-y-5">
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
            <ShieldCheck className="h-6 w-6 text-teal-700" />
            <h2 className="mt-4 font-bold">Designed for every Indian state and UT</h2>
            <p className="mt-2 text-sm leading-relaxed text-teal-950">
              Choose your state or Union Territory to keep future deployments organized across India. Local language, official sources, and live integrations must be configured and verified per deployment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Languages className="h-6 w-6 text-teal-700" />
            <h2 className="mt-4 font-bold">Language-ready foundation</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">The demo currently includes English and Telugu. Additional Indian languages can be added through reviewed translations rather than machine-generated medical advice.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
