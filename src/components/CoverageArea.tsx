import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cities = [
  "Toronto", "Mississauga", "Vaughan", "Markham", "Richmond Hill",
  "Brampton", "Oakville", "Burlington", "Ajax", "Pickering",
  "Oshawa", "Aurora", "Newmarket",
];

const CoverageArea = () => {
  return (
    <section className="bg-section-bg py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Service Area"
          title="Serving the GTA & Surrounding Ontario"
          description="Trusted by homeowners across the Greater Toronto Area. Don't see your city? Reach out — we likely cover it."
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-card transition-all hover:border-primary/40 hover:shadow-primary"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
