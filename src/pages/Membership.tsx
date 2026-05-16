import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, Shield, Clock, Wrench, Star, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { useDocumentHead } from "@/hooks/useDocumentHead";

interface PlanFeature {
  text: string;
  basic: string | boolean;
  pro: string | boolean;
  elite: string | boolean;
}

const comparisonFeatures: PlanFeature[] = [
  { text: "Seasonal Maintenance Visits (Spring/Fall)", basic: "2 visits", pro: "2 visits enhanced", elite: "2 visits + priority" },
  { text: "Annual Handyman Hours", basic: "3 hrs", pro: "6 hrs", elite: "15 hrs" },
  { text: "Preventive Maintenance Tasks", basic: "Basic", pro: "Enhanced", elite: "Premium" },
  { text: "Priority Booking", basic: "Standard", pro: "Faster", elite: "Highest" },
  { text: "House Hygiene Report", basic: false, pro: true, elite: true },
  { text: "Comprehensive Home Inspection", basic: false, pro: false, elite: true },
  { text: "Dedicated Support", basic: false, pro: false, elite: true },
  { text: "Member Discount on Add-ons", basic: "5%", pro: "10%", elite: "15%" },
];

const plans = [
  {
    name: "Basic Plan",
    price: "$99",
    tagline: "Essential protection for your home",
    popular: false,
    features: [
      "3 handyman hours / year",
      "2 seasonal checkups (Spring & Fall)",
      "Basic preventive maintenance",
      "Priority support",
      "5% member discount",
    ],
  },
  {
    name: "Pro Plan",
    price: "$149",
    tagline: "Enhanced care and faster booking",
    popular: true,
    features: [
      "6 handyman hours / year",
      "Enhanced seasonal maintenance",
      "House hygiene report",
      "Faster booking priority",
      "Preventive inspections",
      "10% member discount",
    ],
  },
  {
    name: "Elite Plan",
    price: "$199",
    tagline: "Complete peace of mind, year-round",
    popular: false,
    features: [
      "15 handyman hours / year",
      "Full seasonal maintenance",
      "Comprehensive home inspection",
      "Highest priority booking",
      "Dedicated support",
      "Premium preventive care",
      "15% member discount",
    ],
  },
];

const faqs = [
  {
    q: "How is the membership billed?",
    a: "All plans are billed annually. Your annual rate equals the monthly price × 12. You can cancel before renewal.",
  },
  {
    q: "Do unused handyman hours roll over?",
    a: "Handyman hours are valid for the membership year. Unused hours expire at renewal — we'll remind you in advance so you can use them.",
  },
  {
    q: "What's covered in a seasonal maintenance visit?",
    a: "Each visit covers roof and gutter inspection, HVAC filter checks, plumbing checks, caulking, detector tests, foundation and attic checks, and an exterior walkthrough.",
  },
  {
    q: "What if I need licensed trade work?",
    a: "Major plumbing, electrical, HVAC, or structural work requiring licensed trades is quoted separately. Members receive their plan discount on those quotes.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes — you can upgrade at any time and we'll pro-rate the difference.",
  },
  {
    q: "Is there a service area limit?",
    a: "We serve the GTA and surrounding Ontario. Some remote areas may have a small travel fee — we'll always confirm before scheduling.",
  },
];

const MembershipPage = () => {
  useDocumentHead({
    title: "Home Fixers Club Membership | Maintenance Plans in Ontario",
    description: "Premium home maintenance memberships in Ontario. Three plans starting at $99/month with handyman hours, seasonal visits, and member discounts.",
    canonical: "https://trusty-fixer-site.lovable.app/membership",
  });

  const renderCellValue = (val: string | boolean) => {
    if (val === true) return <CheckCircle className="mx-auto h-5 w-5 text-primary" />;
    if (val === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/30" />;
    return <span className="text-sm font-medium">{val}</span>;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="container relative text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Home Fixers Club
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-secondary md:text-5xl lg:text-6xl">
            Your home, protected <span className="text-gradient-primary">year-round.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/75">
            Premium maintenance memberships that prevent costly repairs, improve safety, and keep every
            system in your home running at its best.
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
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-section-bg py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Choose Your Plan"
            title="Three plans. All billed annually."
            description="Pick the level of protection that fits your home. Upgrade anytime."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-card transition-all ${
                  plan.popular
                    ? "border-primary shadow-elevated md:-translate-y-2"
                    : "border-border hover:border-primary/30 hover:shadow-elevated"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5">
                  <span className="font-display text-5xl font-extrabold text-heading">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                  <p className="mt-1 text-xs text-muted-foreground">Billed annually</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 ${plan.popular ? "shadow-primary" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to={`/contact?type=membership&plan=${encodeURIComponent(plan.name)}`}>
                    Join Membership
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Need a tailored plan for a large property or portfolio?{" "}
            <Link to="/contact?type=membership" className="font-medium text-primary hover:underline">
              Talk to us
            </Link>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Plan Comparison"
            title="See what's included, side by side."
          />
          <div className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-xl border border-border bg-card shadow-card">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-section-bg">
                  <th className="px-6 py-4 text-sm font-semibold">Feature</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Basic<br /><span className="font-normal text-muted-foreground">$99/mo</span></th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-primary">Pro<br /><span className="font-normal text-muted-foreground">$149/mo</span></th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Elite<br /><span className="font-normal text-muted-foreground">$199/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f) => (
                  <tr key={f.text} className="border-b border-border/50 last:border-0">
                    <td className="px-6 py-4 text-sm">{f.text}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.basic)}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.pro)}</td>
                    <td className="px-4 py-4 text-center">{renderCellValue(f.elite)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-bg py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Membership questions, answered."
          />
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Terms link */}
      <section className="py-16">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Review our{" "}
            <Link to="/membership/terms" className="font-medium text-primary hover:underline">
              membership terms, policies and contract
            </Link>{" "}
            for full details.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to protect your home?"
        description="Join the Home Fixers Club today — or book a free consultation to find your perfect plan."
        primaryLabel="Join Membership"
        primaryHref="/contact?type=membership"
        secondaryLabel="Schedule Consultation"
        secondaryHref="/contact?type=membership"
      />
    </Layout>
  );
};

export default MembershipPage;
