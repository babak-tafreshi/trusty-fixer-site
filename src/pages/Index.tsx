import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, Wrench, Home, CheckCircle, ArrowRight, Star, Users,
  HardHat, Sparkles, ClipboardList, Calculator, Hammer, Phone,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CoverageArea from "@/components/CoverageArea";
import CTASection from "@/components/CTASection";
import MembershipPromo from "@/components/MembershipPromo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import heroBg from "@/assets/hero-bg.jpg";
import renoKitchen from "@/assets/reno-kitchen.jpg";
import renoBathroom from "@/assets/reno-bathroom.jpg";
import renoBasement from "@/assets/reno-basement.jpg";
import renoExterior from "@/assets/reno-exterior.jpg";

const services = [
  {
    icon: HardHat,
    title: "Renovations",
    description: "Kitchens, bathrooms, basements, additions, and full new builds — managed end-to-end.",
    link: "/renovations",
    bullets: ["Licensed contractors", "Transparent quotes", "On-time delivery"],
  },
  {
    icon: Shield,
    title: "Maintenance Memberships",
    description: "Seasonal inspections, preventive upkeep, and included handyman hours — year-round protection.",
    link: "/maintenance",
    bullets: ["3 plans from $99/mo", "Spring & Fall visits", "Priority scheduling"],
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "On-demand pros for the everyday fixes — mounting, painting, repairs, assembly, and more.",
    link: "/handyman",
    bullets: ["Book by the hour", "Insured & vetted", "No subscription needed"],
  },
];

const trustPoints = [
  { icon: CheckCircle, title: "Licensed & Insured", description: "Every project backed by full insurance and certified trades." },
  { icon: Star, title: "5-Star Service", description: "Hundreds of happy homeowners across the GTA." },
  { icon: Users, title: "One Trusted Partner", description: "Renovation, maintenance, and handyman — all from one team." },
  { icon: Sparkles, title: "Workmanship Warranty", description: "We stand behind every job long after we leave." },
];

const processSteps = [
  { icon: Phone, title: "Tell Us What You Need", description: "Submit a request or call — we respond within one business day." },
  { icon: Calculator, title: "Get a Clear Quote", description: "Transparent, itemized pricing with no surprises." },
  { icon: Hammer, title: "Work Gets Done Right", description: "Vetted pros, clean job sites, daily communication." },
  { icon: ClipboardList, title: "Walkthrough & Warranty", description: "Final review and ongoing support after completion." },
];

const featuredProjects = [
  { src: renoKitchen, label: "Kitchen Renovation", city: "Mississauga" },
  { src: renoBathroom, label: "Bathroom Remodel", city: "Toronto" },
  { src: renoBasement, label: "Basement Finishing", city: "Vaughan" },
  { src: renoExterior, label: "Exterior & Addition", city: "Oakville" },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Member Renewals" },
  { value: "13+", label: "Cities Served" },
];

const Index = () => {
  useDocumentHead({
    title: "Home Fixers Ltd. | Renovation, Maintenance & Handyman in Ontario",
    description: "Trusted home renovation, maintenance memberships, and on-demand handyman services across the GTA and Ontario. Get a free quote today.",
    canonical: "https://trusty-fixer-site.lovable.app/",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          width={1920}
          height={1080}
        />
        {/* Floating service chips */}
        <div className="absolute -right-12 top-20 hidden animate-float lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md shadow-elevated">
            <HardHat className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute right-32 bottom-16 hidden animate-float [animation-delay:1.5s] lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md shadow-elevated">
            <Wrench className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="container relative py-24 md:py-36">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted across the GTA & Ontario
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-secondary sm:text-5xl md:text-6xl lg:text-7xl">
              Your home, in
              <span className="text-gradient-primary"> expert hands.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/80 md:text-xl">
              Renovations, seasonal maintenance, and on-demand handyman services — all from one trusted Ontario team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="shadow-primary">
                <Link to="/contact?type=quote">
                  Request a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                <Link to="/contact?type=book">Book a Service</Link>
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-bold text-secondary md:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-secondary/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Three core services. One trusted team."
            description="Whether you're renovating, protecting, or just need a quick fix — Home Fixers has you covered."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group relative flex flex-col rounded-2xl border border-border bg-gradient-card p-8 shadow-card hover-lift"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Why Home Fixers"
            title="Built on trust, delivered with care."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <tp.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{tp.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple, transparent, stress-free."
            description="From first call to final walkthrough — we make every step easy."
          />
          <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A glimpse of our recent work."
            description="From kitchen makeovers to full additions — quality you can see."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p) => (
              <Link
                key={p.label}
                to="/renovations#our-work"
                className="group relative overflow-hidden rounded-xl shadow-card"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/90 via-heading/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-wider text-primary">{p.city}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-secondary">{p.label}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/renovations">
                View All Projects <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Promo */}
      <MembershipPromo />

      {/* Testimonials */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Reviews"
            title="What our clients say."
            description="Real homeowners. Real projects. Real results."
          />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Coverage */}
      <CoverageArea />

      {/* Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
