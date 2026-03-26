import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanFeature {
  text: string;
  included: boolean;
  note?: string;
}

interface Plan {
  name: string;
  price: string;
  popular?: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: "Basic Care",
    price: "$99",
    features: [
      { text: "Seasonal Inspections", included: true },
      { text: "Seasonal Maintenance", included: true },
      { text: "2 Handyman Hours Annually", included: true },
      { text: "Member Discount on Add-ons (5%)", included: true },
      { text: "Digital Service Report", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "HVAC, Electrical, Plumbing Checkups", included: false },
    ],
  },
  {
    name: "Premium Care",
    price: "$149",
    popular: true,
    features: [
      { text: "Seasonal Inspections", included: true },
      { text: "Seasonal Maintenance", included: true },
      { text: "6 Handyman Hours Annually", included: true },
      { text: "Member Discount on Add-ons (10%)", included: true },
      { text: "Digital Service Report", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "HVAC, Electrical, Plumbing Checkups", included: true, note: "Spring Only" },
    ],
  },
];

const MembershipPage = () => {
  return (
    <Layout>
      <section className="bg-heading py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            Home Fixers <span className="text-primary">Club</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Seasonal maintenance plans to keep your home in top condition year-round.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">What's Included</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Two scheduled visits per year (Spring and Fall) with comprehensive visual inspections
              of key areas like roof, gutters, HVAC, plumbing, and structure. Preventive maintenance
              tasks including cleaning gutters, sealing windows, checking heating/cooling systems,
              and preparing your home for each season.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-section-bg py-20">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border bg-card p-8 shadow-sm ${
                  plan.popular ? "border-primary shadow-md" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-heading">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/60"}>
                        {f.text}
                        {f.note && <span className="ml-1 text-xs text-muted-foreground">({f.note})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <Button asChild className={plan.popular ? "" : "bg-heading hover:bg-heading/90"}>
                    <Link to="/contact">Join Now</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    See the contract
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to Protect Your Home?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join the Home Fixers Club and never worry about unexpected home repairs again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Join Membership</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembershipPage;
