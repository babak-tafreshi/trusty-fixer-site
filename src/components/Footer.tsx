import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  "Toronto", "Mississauga", "Vaughan", "Markham", "Richmond Hill",
  "Brampton", "Oakville", "Burlington", "Ajax", "Pickering",
  "Oshawa", "Aurora", "Newmarket",
];

const Footer = () => {
  return (
    <footer className="bg-heading text-secondary">
      <div className="container py-16">
        {/* Membership CTA banner */}
        <div className="mb-14 rounded-2xl bg-gradient-primary p-8 shadow-elevated md:flex md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              Join the Home Fixers Club
            </h3>
            <p className="mt-2 max-w-xl text-primary-foreground/85">
              Seasonal maintenance, included handyman hours, and member discounts — starting at $99/month.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="mt-5 md:mt-0">
            <Link to="/membership">View Plans</Link>
          </Button>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-secondary">
                Home<span className="text-primary">Fixers</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary/70">
              Trusted construction, maintenance, and handyman services across the GTA and surrounding Ontario.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-secondary/20 text-secondary/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Renovation", href: "/renovations" },
                { label: "Maintenance", href: "/maintenance" },
                { label: "Handyman", href: "/handyman" },
                { label: "Membership", href: "/membership" },
                { label: "Membership Terms", href: "/membership/terms" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-secondary/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@homefixers.ca" className="hover:text-primary">info@homefixers.ca</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Ontario, Canada
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-secondary/15 px-2.5 py-1 text-xs text-secondary/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary/15 pt-8 text-xs text-secondary/50 md:flex-row">
          <p>© {new Date().getFullYear()} Home Fixers Ltd. All rights reserved.</p>
          <p>Ontario, Canada · Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
