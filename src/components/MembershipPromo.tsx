import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  "2 seasonal maintenance visits",
  "Annual handyman hours included",
  "Priority scheduling",
  "Up to 15% off add-on services",
];

const MembershipPromo = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-10 rounded-2xl border border-primary/20 bg-gradient-card p-8 shadow-card md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Home Fixers Club
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Save more, worry less — join the club.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three flexible plans starting at $99/month (billed annually). Includes seasonal maintenance,
              handyman hours, and exclusive member discounts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/membership">
                  Compare Plans <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact?type=membership">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4 text-sm font-medium shadow-card"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MembershipPromo;
