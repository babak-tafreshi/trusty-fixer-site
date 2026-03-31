import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, Shield, Clock, Wrench, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanFeature {
  text: string;
  essential: string | boolean;
  elite: string | boolean;
  executive: string | boolean;
}

const comparisonFeatures: PlanFeature[] = [
  { text: "Seasonal Inspections (Spring/Fall)", essential: true, elite: true, executive: true },
  { text: "Seasonal Maintenance Visits", essential: "Standard", elite: "Enhanced", executive: "Full + Priority" },
  { text: "Handyman Hours (Annual)", essential: "2 hrs", elite: "6 hrs", executive: "15 hrs" },
  { text: "Priority Scheduling", essential: false, elite: true, executive: "VIP Level" },
  { text: "Member Discount on Add-ons", essential: "5%", elite: "10%", executive: "15%" },
  { text: "HVAC, Electrical, Plumbing Checkups", essential: false, elite: "Spring Only", executive: "Spring & Fall" },
  { text: "Digital Service Report", essential: false, elite: true, executive: true },
];

const seasonalTasks = [
  "Roof and gutter inspection + cleaning",
  "HVAC filter check/replacement",
  "Caulking windows and doors",
  "Deck/patio cleaning",
  "Attic & basement inspection",
  "Smoke/CO detector testing",
  "Foundation check",
  "Plumbing system check",
  "Exterior safety checks (handrails, stairs)",
];

const optionalAddOns = [
  "Gutter guards installation",
  "Insulation upgrades",
  "Weatherproofing & sealing",
  "Power washing",
];

const handymanExamples = [
  { category: "General Repairs", tasks: "Drywall, doors, trim, flooring" },
  { category: "Small Plumbing", tasks: "Faucets, drains, toilets" },
  { category: "Basic Electrical", tasks: "Light fixtures, outlets, smoke detectors" },
  { category: "Seasonal Tasks", tasks: "Holiday lights, garden prep, storm-proofing" },
  { category: "Mounting & Assembly", tasks: "TVs, shelves, furniture, child/pet-proofing" },
];

const plans = [
  {
    name: "Essential Care",
    price: "$99",
    tagline: "Core protection for your home",
    popular: false,
    highlights: ["2 seasonal visits/year", "2 handyman hours", "5% member discount"],
  },
  {
    name: "Elite Care",
    price: "$149",
    tagline: "Enhanced coverage & priority service",
    popular: true,
    highlights: ["Enhanced maintenance visits", "6 handyman hours", "10% discount + priority scheduling"],
  },
  {
    name: "Executive Protection",
    price: "$199",
    tagline: "Complete peace of mind",
    popular: false,
    highlights: ["Full priority maintenance", "15 handyman hours", "15% discount + VIP scheduling"],
  },
];

const MembershipPage = () => {
  const renderCellValue = (val: string | boolean) => {
    if (val === true) return <CheckCircle className="h-5 w-5 text-primary" />;
    if (val === false) return <X className="h-5 w-5 text-muted-foreground/30" />;
    return <span className="text-sm font-medium">{val}</span>;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-heading py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Home Maintenance Membership
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl lg:text-6xl">
            Your Home, Protected <span className="text-primary">Year-Round</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/70">
            Proactive seasonal maintenance plans that prevent costly repairs, improve safety, and
            keep every system in your home running at its best.
          </p>
        </div>
      </section>

      {/* Why Membership */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Preventive Care", desc: "Catch small issues before they become expensive emergencies." },
              { icon: Clock, title: "Priority Access", desc: "Members get scheduled first when you need service." },
              { icon: Wrench, title: "Included Hours", desc: "Use your handyman hours for any small fix or install." },
              { icon: Star, title: "Member Savings", desc: "Up to 15% off all add-on services and additional work." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-section-bg py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Choose Your Plan</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              All plans include two seasonal maintenance visits per year (Spring & Fall).
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
                  plan.popular ? "border-primary shadow-md" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-heading">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <Button asChild className={plan.popular ? "" : "bg-heading hover:bg-heading/90"}>
                    <Link to="/contact">Join Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Plan Comparison</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              See exactly what's included in each plan side by side.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 text-sm font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Essential<br /><span className="font-normal text-muted-foreground">$99/mo</span></th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-primary">Elite<br /><span className="font-normal text-muted-foreground">$149/mo</span></th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Executive<br /><span className="font-normal text-muted-foreground">$199/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f) => (
                  <tr key={f.text} className="border-b border-border/50">
                    <td className="py-4 pr-6 text-sm">{f.text}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.essential)}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.elite)}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.executive)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included in Seasonal Maintenance */}
      <section className="bg-section-bg py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">What's Included in Seasonal Maintenance</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every Spring (April–May) and Fall (October–November), our team visits your home for a comprehensive
                inspection and maintenance session covering all critical systems.
              </p>
              <ul className="mt-8 space-y-3">
                {seasonalTasks.map((task) => (
                  <li key={task} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Optional Add-Ons</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Available at your member discount rate during any visit:
              </p>
              <ul className="mt-4 space-y-3">
                {optionalAddOns.map((addon) => (
                  <li key={addon} className="flex items-start gap-2.5 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {addon}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-xl font-bold">Handyman Task Examples</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Use your included hours for tasks like these:
              </p>
              <div className="mt-4 space-y-3">
                {handymanExamples.map((ex) => (
                  <div key={ex.category} className="rounded-lg border border-border bg-card p-4">
                    <h4 className="text-sm font-semibold">{ex.category}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{ex.tasks}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                Advanced work requiring licensed trades will be quoted separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Link & CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to Protect Your Home?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join the Home Fixers Maintenance Membership and never worry about unexpected home repairs again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Join a Plan Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/membership/terms">View Terms & Policies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembershipPage;
