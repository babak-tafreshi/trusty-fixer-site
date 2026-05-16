import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTASection = ({
  title = "Ready to Start? Let's Talk About Your Home.",
  description = "Get a free, no-obligation quote. Our team responds within one business day.",
  primaryLabel = "Request a Quote",
  primaryHref = "/contact?type=quote",
  secondaryLabel = "Call (123) 456-7890",
  secondaryHref = "tel:+1234567890",
}: Props) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-10 text-center shadow-elevated md:p-16">
          <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-secondary md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary/75">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild className="shadow-primary">
                <Link to={primaryHref}>
                  {primaryLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                <a href={secondaryHref}>
                  <Phone className="mr-1.5 h-4 w-4" />
                  {secondaryLabel}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
