import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench, Paintbrush, Droplets, Zap, Hammer, TreePine,
  Tv, ShieldCheck, Package, CheckCircle, ArrowRight, Clock, DollarSign, Phone
} from "lucide-react";

const serviceCategories = [
  {
    icon: Wrench,
    title: "General Repairs",
    tasks: ["Drywall patching & repair", "Door adjustments & replacements", "Lock & hardware installations", "Trim & baseboard repairs", "Flooring fixes & transitions", "Caulking & sealing"],
  },
  {
    icon: Droplets,
    title: "Small Plumbing",
    tasks: ["Faucet repairs & replacements", "Drain cleaning & unclogging", "Toilet repairs & installs", "Showerhead & fixture swaps", "Under-sink leak repairs", "Hose bib replacements"],
  },
  {
    icon: Zap,
    title: "Basic Electrical",
    tasks: ["Light fixture installations", "Outlet & switch replacements", "Smoke & CO detector installs", "Ceiling fan installations", "Dimmer switch upgrades", "Doorbell installations"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishing",
    tasks: ["Interior wall painting", "Exterior touch-ups", "Trim & door painting", "Staining decks & fences", "Wallpaper removal", "Cabinet refinishing"],
  },
  {
    icon: Hammer,
    title: "Carpentry & Assembly",
    tasks: ["Shelf & storage installation", "Furniture assembly", "Custom shelving solutions", "Closet organizer installs", "Picture & mirror hanging", "Child & pet safety proofing"],
  },
  {
    icon: Tv,
    title: "Mounting & Installation",
    tasks: ["TV wall mounting", "Curtain rod & blind installs", "Towel bar & accessory mounting", "Coat hook & rack installs", "Garage storage systems", "Smart home device installs"],
  },
  {
    icon: TreePine,
    title: "Outdoor & Seasonal",
    tasks: ["Deck & fence repairs", "Pressure washing", "Holiday light installation", "Garden bed prep", "Storm-proofing & winterization", "Gutter cleaning"],
  },
  {
    icon: Package,
    title: "Moving & Setup",
    tasks: ["Appliance hookups", "Moving-day support", "Furniture rearrangement", "Wall patching (post-move)", "Fixture & hardware swaps", "New home setup assistance"],
  },
];

const whyChooseUs = [
  { icon: Clock, title: "On-Demand Service", desc: "Book when you need us — no subscriptions required." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Clear hourly rates with no hidden fees or surprises." },
  { icon: ShieldCheck, title: "Insured & Reliable", desc: "Fully insured professionals with background checks." },
  { icon: CheckCircle, title: "Satisfaction Guaranteed", desc: "We stand behind our work — every time." },
];

const HandymanPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-heading py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            On-Demand Service
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl lg:text-6xl">
            Professional <span className="text-primary">Handyman Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/70">
            Skilled, reliable handymen for everyday repairs, installations, and fixes around your home.
            No job too small — book on demand, no membership required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Handyman</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href="tel:+1234567890"><Phone className="mr-1.5 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-section-bg py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What Our Handymen Can Do</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our handymen handle a wide range of general tasks that don't require a professional trade licence.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{cat.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note About Licensed Work */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Need Licensed Work?</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
              For advanced plumbing, major electrical, HVAC, or structural work that requires a professional licence,
              we'll connect you with our network of licensed contractors and provide a separate quote.
            </p>
            <Button className="mt-6" asChild>
              <Link to="/contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Upsell */}
      <section className="bg-section-bg py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-8 text-center md:p-10">
            <h3 className="text-2xl font-bold">Save on Handyman Services</h3>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Home Fixers Maintenance Members get included handyman hours (2–15 hrs/year) plus up to 15% off
              additional work. Combine preventive maintenance with on-demand repairs for the best value.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link to="/membership">View Membership Plans <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to Get Things Fixed?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tell us what you need and we'll match you with the right handyman. Fast, reliable, guaranteed.
          </p>
          <Button className="mt-8" size="lg" asChild>
            <Link to="/contact">Book a Handyman</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HandymanPage;
