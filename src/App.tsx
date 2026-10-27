import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
import { AdminSection } from "./pages/AdminPage";
import { ReportsSection } from "./pages/ReportsPage";
import { AdminPage } from "./pages/AdminPage";
import { SignInPage } from "./pages/SignInPage";

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "#/signin") return <SignInPage />;
  if (route === "#/admin") return <AdminPage />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Dashboard />
        <ReportsSection />
        <AdminSection />
        <Features />
        <ProductShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
import { useEffect, useState } from "react";
