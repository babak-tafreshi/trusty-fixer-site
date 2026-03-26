import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Wrench, Home, Clock, CheckCircle, ArrowRight, Star, Users, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: Home,
    title: "Home Maintenance",
    description: "Comprehensive maintenance services to keep your home in perfect condition year-round.",
    link: "/services",
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "Skilled professionals for repairs, installations, and everyday fixes around your home.",
    link: "/handyman-plans",
  },
  {
    icon: Shield,
    title: "Renovations & Construction",
    description: "Major and minor renovations, new builds, and remodeling projects handled with precision.",
    link: "/services",
  },
];

const steps = [
  { number: "01", title: "Submit Request", description: "Fill out a simple form with your service needs and property details." },
  { number: "02", title: "Get a Quote", description: "We'll contact you promptly with a transparent quote or membership options." },
  { number: "03", title: "Service Completed", description: "Our certified professionals complete the work to your satisfaction." },
];

const trustPoints = [
  { icon: CheckCircle, title: "Certified Professionals", description: "All our team members are licensed and certified." },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden fees. Clear quotes before work begins." },
  { icon: Star, title: "Quality Guaranteed", description: "We stand behind every job with our satisfaction guarantee." },
  { icon: Users, title: "All-in-One Platform", description: "One point of contact for all your home service needs." },
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-heading">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Home construction" className="h-full w-full object-cover opacity-30" width={1920} height={1080} />
        </div>
        <div className="relative container py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary sm:text-5xl md:text-6xl">
              Your One-Stop Solution for Home Maintenance, Repairs &{" "}
              <span className="text-primary">Construction</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary/80 md:text-xl">
              Reliable, certified professionals for every home need in Ontario, Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Request Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary">
                <Link to="/membership">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From minor repairs to major construction projects, we cover all your home needs.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group rounded-lg border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Highlight */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Membership
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Home Fixers Club</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Seasonal maintenance plans designed to keep your home in top condition year-round.
                Prevent damage, improve safety, and extend the life of your home systems.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Two scheduled visits per year (Spring & Fall)",
                  "Comprehensive visual inspections",
                  "Preventive maintenance tasks",
                  "Priority scheduling for members",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8" size="lg" asChild>
                <Link to="/membership">View Membership Plans</Link>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Proactive, Not Reactive</h3>
                  <p className="text-sm text-muted-foreground">Avoid emergencies and unexpected expenses</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Roof & Gutters", "HVAC Systems", "Plumbing Check", "Window Sealing", "Structure Inspection", "Seasonal Prep"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md bg-section-bg p-3 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Getting started is simple. Three easy steps to a better home.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose Home Fixers?</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tp.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold">{tp.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Get maintenance tips, seasonal reminders, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletter} className="mt-8 flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
