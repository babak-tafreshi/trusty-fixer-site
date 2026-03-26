import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Paintbrush, Droplets, Zap, Hammer, TreePine, CheckCircle } from "lucide-react";

const tasks = [
  { icon: Wrench, title: "General Repairs", description: "Fix anything that's broken — doors, locks, hinges, fixtures, and more." },
  { icon: Droplets, title: "Minor Plumbing", description: "Leaky faucets, running toilets, pipe fixes, and basic plumbing repairs." },
  { icon: Zap, title: "Basic Electrical", description: "Light fixture installs, outlet repairs, and switch replacements." },
  { icon: Hammer, title: "Carpentry", description: "Shelving, trim work, furniture assembly, and custom woodwork." },
  { icon: Paintbrush, title: "Painting", description: "Interior & exterior painting, touch-ups, and staining." },
  { icon: TreePine, title: "Outdoor Work", description: "Deck repairs, fence fixes, pressure washing, and seasonal yard prep." },
];

const HandymanPlansPage = () => {
  return (
    <Layout>
      <section className="bg-heading py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            Handyman <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Skilled professionals for repairs, installations, and everyday fixes around your home.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((t) => (
              <div key={t.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border bg-section-bg p-8 text-center">
            <h2 className="text-2xl font-bold">Need a Handyman?</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Tell us what you need and we'll match you with the right professional.
            </p>
            <Button className="mt-6" size="lg" asChild>
              <Link to="/contact">Request Handyman Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HandymanPlansPage;
