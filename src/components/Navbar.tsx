import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-placeholder.svg";

const navLinks = [
  { label: "Renovation", href: "/renovations" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Handyman", href: "/handyman" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-card border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="Home Fixers — Home" className="flex items-center">
          {/* Replace src/assets/logo-placeholder.svg with your real logo */}
          <img src={logo} alt="Home Fixers logo" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button variant="outline" asChild>
            <Link to="/contact?type=quote">Request Quote</Link>
          </Button>
          <Button asChild className="shadow-primary">
            <Link to="/contact?type=book">Book Service</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary-soft text-primary"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-2">
              <Button variant="outline" asChild>
                <Link to="/contact?type=quote">Request Quote</Link>
              </Button>
              <Button asChild>
                <Link to="/contact?type=book">Book Service</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
