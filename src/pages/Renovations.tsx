import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  HardHat, Home, Bath, ChefHat, ArrowDown, CheckCircle, ArrowRight,
  ClipboardList, Calculator, Hammer, Sparkles, FileText, Phone
} from "lucide-react";
import renoKitchen from "@/assets/reno-kitchen.jpg";
import renoBathroom from "@/assets/reno-bathroom.jpg";
import renoBasement from "@/assets/reno-basement.jpg";
import renoExterior from "@/assets/reno-exterior.jpg";

const renoServices = [
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    description: "Complete kitchen remodels — custom cabinetry, countertops, backsplash, flooring, plumbing, and electrical upgrades.",
    image: renoKitchen,
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description: "Full bathroom transformations — tiling, shower/tub installs, vanity upgrades, plumbing, and accessibility modifications.",
    image: renoBathroom,
  },
  {
    icon: Home,
    title: "Basement Finishing",
    description: "Turn unfinished basements into livable spaces — framing, insulation, drywall, flooring, lighting, and egress windows.",
    image: renoBasement,
  },
  {
    icon: HardHat,
    title: "Additions & New Builds",
    description: "Room additions, garage builds, secondary suites, and full new-build construction managed from foundation to finish.",
    image: renoExterior,
  },
];

const additionalServices = [
  "Interior & exterior painting",
  "Flooring installation (hardwood, tile, vinyl)",
  "Window & door replacements",
  "Deck & patio construction",
  "Structural modifications",
  "Permit management & planning",
  "Siding & roofing replacement",
  "Custom built-ins & millwork",
];

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Free Consultation",
    description: "Contact us to discuss your project. We visit your property, understand your vision, and assess the scope of work.",
  },
  {
    icon: Calculator,
    step: "02",
    title: "Detailed Quote",
    description: "We provide a transparent, itemized quote with clear timelines, materials breakdown, and no hidden costs.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Planning & Permits",
    description: "Our team handles design finalization, material selection, and all required permits and inspections.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Construction",
    description: "Our licensed professionals execute the work with daily updates, clean job sites, and quality craftsmanship.",
  },
  {
    icon: ClipboardList,
    step: "05",
    title: "Final Walkthrough",
    description: "We walk through every detail with you, address any concerns, and ensure your complete satisfaction.",
  },
  {
    icon: Sparkles,
    step: "06",
    title: "Warranty & Support",
    description: "Enjoy peace of mind with our workmanship warranty and ongoing support for any questions after completion.",
  },
];

const galleryImages = [
  { src: renoKitchen, alt: "Kitchen renovation by Home Fixers" },
  { src: renoBathroom, alt: "Bathroom renovation by Home Fixers" },
  { src: renoBasement, alt: "Basement finishing by Home Fixers" },
  { src: renoExterior, alt: "New build project by Home Fixers" },
];

const RenovationsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-heading py-20 md:py-32">
        <div className="absolute inset-0">
          <img src={renoExterior} alt="Renovation project" className="h-full w-full object-cover opacity-20" width={800} height={600} />
        </div>
        <div className="relative container text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Renovations & Construction
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Your Home with <span className="text-primary">Expert Renovations</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/70">
            From minor updates to major builds — our licensed professionals deliver quality craftsmanship
            across Ontario with transparent pricing and on-time completion.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href="#our-work">View Our Work <ArrowDown className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Renovation Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We handle projects of every size — whether you're updating a single room or building from the ground up.
            </p>
          </div>
          <div className="mt-16 space-y-20">
            {renoServices.map((service, i) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button className="mt-6" asChild>
                    <Link to="/contact">
                      Request Quote <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover aspect-[4/3] rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-section-bg py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">More Renovation Services</h2>
            <p className="mt-4 text-muted-foreground">
              Beyond our core specialties, we offer a wide range of renovation and construction services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {additionalServices.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From first call to final walkthrough — here's how we deliver your project with precision and transparency.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="relative rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="our-work" className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Work</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Browse a selection of our completed renovation and construction projects across Ontario.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            More project photos coming soon. Contact us to see examples relevant to your project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-10 text-center md:p-14">
            <h2 className="text-2xl font-bold md:text-3xl">Ready to Start Your Renovation?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Get a free, no-obligation quote from our team. We'll visit your property, discuss your vision, and
              provide a transparent estimate with clear timelines.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+1234567890">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RenovationsPage;
