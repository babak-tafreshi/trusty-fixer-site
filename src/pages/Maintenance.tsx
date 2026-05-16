import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Droplets, Zap, Wind, Snowflake, Home, ShieldCheck, Search, Clock,
  Wrench, Hammer, Sparkles, ArrowRight, CheckCircle, Phone,
  Calendar, ClipboardList, MessageSquare, ThermometerSun,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MembershipPromo from "@/components/MembershipPromo";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Droplets, title: "Plumbing", response: "24–48 hrs", description: "Leaks, drains, fixtures, water heater checks." },
  { icon: Zap, title: "Electrical", response: "24–48 hrs", description: "Outlets, switches, lighting, detector testing." },
  { icon: Wind, title: "HVAC", response: "Same week", description: "Filter changes, system tune-ups, vent cleaning." },
  { icon: Snowflake, title: "Seasonal Maintenance", response: "Scheduled", description: "Spring & Fall whole-home prep visits." },
  { icon: Home, title: "Exterior Maintenance", response: "Same week", description: "Siding checks, weatherproofing, deck care." },
  { icon: ShieldCheck, title: "Roofing Inspection", response: "Same week", description: "Visual inspections, leak detection, minor patches." },
  { icon: Sparkles, title: "Gutter Cleaning", response: "Same week", description: "Clean, flush, and inspect downspouts." },
  { icon: ThermometerSun, title: "Appliance Checks", response: "Same week", description: "Operational checks for major home appliances." },
  { icon: ClipboardList, title: "Safety Inspections", response: "Scheduled", description: "Smoke/CO detectors, railings, stair safety." },
  { icon: Wrench, title: "Caulking & Sealing", response: "Same week", description: "Windows, doors, tubs — keep water out." },
  { icon: Hammer, title: "Preventive Maintenance", response: "Scheduled", description: "Catch issues before they turn into emergencies." },
  { icon: Home, title: "Property Upkeep", response: "Ongoing", description: "Recurring service for landlords & busy owners." },
];

const processSteps = [
  { icon: MessageSquare, title: "Submit Request", description: "Tell us what needs attention through the form or a call." },
  { icon: Phone, title: "Contact & Scheduling", description: "We confirm details and book a time that works for you." },
  { icon: ClipboardList, title: "Evaluation", description: "On-site assessment of the issue and required parts." },
  { icon: Calendar, title: "Quote Approval", description: "Clear pricing before any work begins." },
  { icon: Wrench, title: "Service Completion", description: "Work performed by vetted, insured professionals." },
  { icon: CheckCircle, title: "Follow-Up Support", description: "We check in to confirm everything is working as it should." },
];

const MaintenancePage = () => {
  useDocumentHead({
    title: "Home Maintenance Services in Ontario | Home Fixers Ltd.",
    description: "Reliable property maintenance services across the GTA — plumbing, electrical, HVAC, seasonal, and preventive care. Memberships available.",
    canonical: "https://trusty-fixer-site.lovable.app/maintenance",
  });

  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      services.filter((s) =>
        !search.trim() ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-gradient-hero py-24 md:py-32">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="container relative text-center animate-fade-in-up">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Maintenance Services
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-secondary md:text-5xl lg:text-6xl">
            Reliable Property <span className="text-gradient-primary">Maintenance Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/75">
            Protect your home with proactive, professional maintenance — one-time or as part of a membership.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="shadow-primary">
              <Link to="/contact?type=maintenance">Book a Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary">
              <Link to="/membership">Compare Memberships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Service Explorer"
            title="What we keep running smoothly."
            description="From quick fixes to recurring upkeep — we cover the systems that matter most."
          />
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search maintenance services…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 pl-10"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted-foreground">No services match your search.</p>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <div key={s.title} className="group rounded-xl border border-border bg-gradient-card p-6 shadow-card hover-lift">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      <Clock className="h-3 w-3" /> {s.response}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <Button size="sm" variant="ghost" asChild className="mt-4 -ml-3 text-primary hover:bg-primary-soft">
                    <Link to="/contact?type=maintenance">
                      Request service <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="From request to resolution."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon className="mt-2 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="What Members Say"
            title="Homeowners who trust us, year after year."
          />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <MembershipPromo />

      <CTASection
        title="Book a maintenance visit today."
        description="Same-week scheduling for most services. Members get priority access."
        primaryLabel="Request a Service"
        primaryHref="/contact?type=maintenance"
      />
    </Layout>
  );
};

export default MaintenancePage;
