import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! We'll keep you updated.");
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-heading text-secondary">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo-full.png"
                alt="Home Fixers"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display text-xl font-bold text-secondary">
                Home<span className="text-primary">Fixers</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary/70">
              Your trusted partner for home maintenance, repairs, and construction in Ontario, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Renovations", href: "/renovations" },
                { label: "Maintenance Membership", href: "/membership" },
                { label: "Handyman Services", href: "/handyman" },
                { label: "Membership Terms", href: "/membership/terms" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-secondary/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                (123) 456-7890
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                info@homefixers.ca
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Ontario, Canada
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Stay Updated</h4>
            <p className="mb-3 text-sm text-secondary/70">Get tips and exclusive offers.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/10 border-secondary/20 text-secondary placeholder:text-secondary/40"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary/20 pt-8 text-center text-xs text-secondary/50">
          © {new Date().getFullYear()} Home Fixers Ltd. All rights reserved. | Ontario, Canada
        </div>
      </div>
    </footer>
  );
};

export default Footer;
