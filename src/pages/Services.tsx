import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Wrench, HardHat, Sun, CheckCircle } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Home Maintenance & Repairs",
    description: "Keep your home running smoothly with our comprehensive maintenance and repair services.",
    services: [
      "Roof inspections & repairs",
      "Gutter cleaning & maintenance",
      "Window & door repairs",
      "Flooring repair & installation",
      "Drywall patching & repair",
      "Caulking & weatherproofing",
    ],
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "Skilled professionals for everyday fixes and installations around your home.",
    services: [
      "Furniture assembly",
      "Fixture installations",
      "Minor plumbing repairs",
      "Basic electrical work",
      "Painting & touch-ups",
      "Shelving & storage solutions",
    ],
  },
  {
    icon: HardHat,
    title: "Renovations & Construction",
    description: "Transform your space with our expert renovation and construction teams.",
    services: [
      "Kitchen & bathroom renovations",
      "Basement finishing",
      "Room additions & extensions",
      "New build projects",
      "Structural modifications",
      "Permit management & planning",
    ],
  },
  {
    icon: Sun,
    title: "Seasonal Maintenance",
    description: "Prepare your home for every season with proactive maintenance plans.",
    services: [
      "Spring home inspections",
      "Fall winterization prep",
      "HVAC system checkups",
      "Deck & patio maintenance",
      "Snow guard installation",
      "Outdoor plumbing prep",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-heading py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            From minor repairs to major construction, we offer a full range of home services across Ontario.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container space-y-20">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">{cat.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{cat.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/contact">Request Service</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/membership">Become a Member</Link>
                  </Button>
                </div>
              </div>
              <div className={`rounded-lg border border-border bg-section-bg p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-center text-sm font-medium text-muted-foreground">Gallery Coming Soon</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[1,2,3,4].map((n) => (
                    <div key={n} className="aspect-square rounded-md bg-border/50" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
