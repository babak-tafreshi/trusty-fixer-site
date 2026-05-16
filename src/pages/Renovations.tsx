import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  HardHat, Home, Bath, ChefHat, ArrowRight, ArrowDown, CheckCircle, Search,
  ClipboardList, Calculator, Hammer, Sparkles, FileText, Phone, Building2,
  TreePalm, Paintbrush, LayoutGrid, Construction, Warehouse, Store, Car, Layers,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CoverageArea from "@/components/CoverageArea";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { toast } from "sonner";
import renoKitchen from "@/assets/reno-kitchen.jpg";
import renoBathroom from "@/assets/reno-bathroom.jpg";
import renoBasement from "@/assets/reno-basement.jpg";
import renoExterior from "@/assets/reno-exterior.jpg";

type Category = "Interior" | "Exterior" | "Commercial" | "Specialty";

const services: { icon: any; title: string; category: Category; scale: string; description: string; details: string }[] = [
  { icon: ChefHat, title: "Kitchen Renovation", category: "Interior", scale: "2–8 weeks", description: "Custom cabinetry, countertops, backsplash, plumbing & electrical.", details: "Complete kitchen transformations including layout redesign, custom or pre-fab cabinetry, quartz/granite/butcher block countertops, tile backsplashes, plumbing relocations, lighting upgrades, and appliance integration." },
  { icon: Bath, title: "Bathroom Renovation", category: "Interior", scale: "1–4 weeks", description: "Tiling, vanity, plumbing, accessibility upgrades.", details: "Full bathroom remodels — tile floors and walls, walk-in showers, soaker tubs, vanities, fixtures, ventilation, waterproofing, and aging-in-place modifications." },
  { icon: Home, title: "Basement Finishing", category: "Interior", scale: "3–8 weeks", description: "Framing, insulation, drywall, lighting, egress windows.", details: "Convert unfinished basements into livable spaces — in-law suites, rec rooms, home offices, theatres. Includes framing, insulation, vapor barriers, drywall, flooring, lighting, and code-compliant egress." },
  { icon: Layers, title: "Full Home Remodel", category: "Interior", scale: "2–6 months", description: "Whole-house redesigns and modernizations.", details: "Top-to-bottom renovations — open up walls, modernize systems, redesign layouts, refresh every room. Full project management from design to final walkthrough." },
  { icon: Building2, title: "Condo Renovation", category: "Interior", scale: "2–6 weeks", description: "Building-compliant updates for condos & lofts.", details: "Specialized condo work — coordinating with property management, scheduling around quiet hours, soundproofing, smaller-footprint kitchens and baths." },
  { icon: HardHat, title: "Home Additions", category: "Exterior", scale: "2–5 months", description: "Room additions, second storeys, secondary suites.", details: "Expand your home — rear extensions, second-storey additions, garage-to-living conversions, sunrooms, and ARU/laneway suites with full permitting." },
  { icon: TreePalm, title: "Exterior Renovation", category: "Exterior", scale: "1–4 weeks", description: "Siding, decks, patios, fences, landscaping touches.", details: "Refresh your home's exterior — siding replacement, deck and patio builds, fence installations, exterior trim, soffits, fascia, and weatherproofing." },
  { icon: LayoutGrid, title: "Flooring", category: "Interior", scale: "1–2 weeks", description: "Hardwood, engineered, tile, luxury vinyl.", details: "Professional flooring installation across any space — hardwood, engineered, laminate, LVT, tile, and underlayment with subfloor leveling." },
  { icon: Paintbrush, title: "Painting", category: "Interior", scale: "2–10 days", description: "Interior, exterior, trim, cabinets.", details: "Premium painting services — full interior repaints, accent walls, exterior houses, trim and door enameling, and cabinet refinishing." },
  { icon: Construction, title: "Structural Renovation", category: "Specialty", scale: "1–4 months", description: "Load-bearing changes, framing, foundation work.", details: "Remove load-bearing walls with engineered beams, foundation repairs, underpinning, structural framing, and code-compliant inspections." },
  { icon: Store, title: "Commercial Renovation", category: "Commercial", scale: "1–4 months", description: "Retail, office, and small business fit-outs.", details: "Commercial space build-outs and renovations — retail, offices, restaurants — with attention to accessibility, permits, and minimal business disruption." },
  { icon: Car, title: "Garage Renovation", category: "Exterior", scale: "1–4 weeks", description: "Finishing, insulation, conversions to living space.", details: "Finish, insulate, or convert your garage — epoxy floors, drywall, heating, lighting, and full conversions to studios or workshops." },
];

const processSteps = [
  { icon: Phone, title: "Consultation", description: "Free chat to understand your goals, scope, and timeline." },
  { icon: ClipboardList, title: "Site Evaluation", description: "On-site visit to measure, assess existing systems, and identify constraints." },
  { icon: FileText, title: "Planning & Design", description: "Drawings, material selections, and permit preparation." },
  { icon: Calculator, title: "Quote & Approval", description: "Itemized, transparent quote with clear timelines — no surprises." },
  { icon: Hammer, title: "Construction Phase", description: "Licensed crews on-site with daily updates and clean job sites." },
  { icon: Warehouse, title: "Final Inspection", description: "Walkthrough with you, deficiency list resolved, all systems tested." },
  { icon: Sparkles, title: "Completion & Support", description: "Workmanship warranty and ongoing support after handover." },
];

const projects = [
  { src: renoKitchen, title: "Modern Open-Concept Kitchen", category: "Interior", location: "Mississauga, ON", timeline: "5 weeks", scope: "Demo, custom cabinetry, quartz counters, tile backsplash, lighting, appliance install." },
  { src: renoBathroom, title: "Spa-Style Master Bathroom", category: "Interior", location: "Toronto, ON", timeline: "3 weeks", scope: "Walk-in shower, freestanding tub, double vanity, heated floor, full retile." },
  { src: renoBasement, title: "Basement In-Law Suite", category: "Interior", location: "Vaughan, ON", timeline: "7 weeks", scope: "Framing, insulation, full bathroom, kitchenette, egress, separate entrance." },
  { src: renoExterior, title: "Second-Storey Addition", category: "Exterior", location: "Oakville, ON", timeline: "4 months", scope: "Structural engineering, permits, framing, roofing, siding, interior fit-out." },
];

const categories: ("All" | Category)[] = ["All", "Interior", "Exterior", "Commercial", "Specialty"];
const galleryCategories = ["All", "Interior", "Exterior"];

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  type: z.string().min(1, "Select a renovation type"),
  budget: z.string().min(1, "Select a budget"),
  timeline: z.string().min(1, "Select a timeline"),
  description: z.string().trim().min(10, "Add a short description").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
});

const RenovationsPage = () => {
  useDocumentHead({
    title: "Home Renovations in Ontario | Home Fixers Ltd.",
    description: "Kitchen, bathroom, basement, additions and full home renovations across the GTA. Licensed, insured, and on-time. Get a free quote.",
    canonical: "https://trusty-fixer-site.lovable.app/renovations",
  });

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<"All" | Category>("All");
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<typeof projects[number] | null>(null);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCat = activeCat === "All" || s.category === activeCat;
      const matchesSearch =
        !search.trim() ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, activeCat]);

  const filteredProjects = useMemo(() => {
    return galleryFilter === "All" ? projects : projects.filter((p) => p.category === galleryFilter);
  }, [galleryFilter]);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    type: "", budget: "", timeline: "", description: "", consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Please review your inputs");
      return;
    }
    toast.success("Quote request received! We'll be in touch within 1 business day.");
    setForm({ name: "", email: "", phone: "", address: "", type: "", budget: "", timeline: "", description: "", consent: false });
    setStep(1);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero py-24 md:py-32">
        <img src={renoExterior} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="container relative text-center animate-fade-in-up">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Renovations & Construction
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-secondary md:text-5xl lg:text-6xl">
            Complete Home Renovation <span className="text-gradient-primary">Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/75">
            From minor updates to full new builds — licensed professionals, transparent pricing, on-time delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="shadow-primary">
              <a href="#quote">Get Renovation Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href="#our-work">View Projects <ArrowDown className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Explorer */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Service Explorer"
            title="Find the right renovation for your home."
            description="Search or filter by category to explore what we offer."
          />
          {/* Search + Filters */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search renovations (e.g. kitchen, basement, painting)…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 pl-10"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCat === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Service cards */}
          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted-foreground">No services match your search.</p>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <Dialog key={s.title}>
                  <DialogTrigger asChild>
                    <button className="group flex flex-col rounded-xl border border-border bg-gradient-card p-6 text-left shadow-card hover-lift">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <s.icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                          {s.scale}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <DialogTitle className="mt-3 font-display text-2xl">{s.title}</DialogTitle>
                      <DialogDescription className="text-sm">
                        Typical scale: {s.scale} · Category: {s.category}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-sm leading-relaxed text-foreground/80">{s.details}</p>
                    <div className="mt-4 flex gap-2">
                      <Button asChild className="flex-1">
                        <a href="#quote">Request a Quote</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="tel:+1234567890"><Phone className="mr-1 h-4 w-4" /> Call</a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="Seven steps. Zero surprises."
            description="A clear, repeatable process from first call to warranty support."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon className="mt-2 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Gallery */}
      <section id="our-work" className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Past Projects"
            title="See our craftsmanship in action."
            description="A small selection of renovations our clients are proud to call home."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setGalleryFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  galleryFilter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.map((p) => (
              <button
                key={p.title}
                onClick={() => setActiveProject(p)}
                className="group relative overflow-hidden rounded-2xl text-left shadow-card hover-lift"
              >
                <img src={p.src} alt={p.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/90 via-heading/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-wider text-primary">{p.location}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-secondary">{p.title}</h3>
                  <p className="mt-1 text-sm text-secondary/80">{p.timeline} · {p.category}</p>
                </div>
              </button>
            ))}
          </div>

          <Dialog open={!!activeProject} onOpenChange={(o) => !o && setActiveProject(null)}>
            <DialogContent className="max-w-2xl">
              {activeProject && (
                <>
                  <img src={activeProject.src} alt={activeProject.title} className="aspect-video w-full rounded-lg object-cover" />
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">{activeProject.title}</DialogTitle>
                    <DialogDescription>
                      {activeProject.location} · {activeProject.timeline} · {activeProject.category}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    <strong className="text-foreground">Scope of work:</strong> {activeProject.scope}
                  </p>
                  <Button asChild>
                    <a href="#quote" onClick={() => setActiveProject(null)}>Start Your Project</a>
                  </Button>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <CoverageArea />

      {/* Quote Form */}
      <section id="quote" className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Tell us about your project."
            description="Three quick steps. We'll respond within one business day with a clear next step."
          />
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-card md:p-10"
          >
            {/* Stepper */}
            <div className="mb-8 flex items-center justify-between">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex flex-1 items-center">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      step >= n ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {n}
                  </div>
                  {n < 3 && (
                    <div className={`mx-2 h-0.5 flex-1 ${step > n ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="r-name">Name *</Label>
                    <Input id="r-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
                  </div>
                  <div>
                    <Label htmlFor="r-phone">Phone *</Label>
                    <Input id="r-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="r-email">Email *</Label>
                  <Input id="r-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
                </div>
                <div>
                  <Label htmlFor="r-address">Property Address</Label>
                  <Input id="r-address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} maxLength={200} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4">
                <div>
                  <Label>Type of renovation *</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Budget range *</Label>
                    <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                      <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10-25k">$10,000–$25,000</SelectItem>
                        <SelectItem value="25-50k">$25,000–$50,000</SelectItem>
                        <SelectItem value="50-100k">$50,000–$100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred timeline *</Label>
                    <Select value={form.timeline} onValueChange={(v) => setForm({ ...form, timeline: v })}>
                      <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3mo">In 1–3 months</SelectItem>
                        <SelectItem value="3-6mo">In 3–6 months</SelectItem>
                        <SelectItem value="planning">Just planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="r-desc">Project description *</Label>
                  <Textarea id="r-desc" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={2000} placeholder="Tell us about your vision, scope, materials, must-haves…" required />
                </div>
                <div>
                  <Label htmlFor="r-files">Photos (optional)</Label>
                  <Input id="r-files" type="file" multiple accept="image/*" />
                  <p className="mt-1 text-xs text-muted-foreground">Add reference photos or photos of your current space.</p>
                </div>
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4"
                  />
                  <span>I agree to be contacted by Home Fixers regarding this request.</span>
                </label>
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
              >
                Back
              </Button>
              {step < 3 ? (
                <Button type="button" onClick={() => setStep((s) => s + 1)}>
                  Next <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit">Submit Request</Button>
              )}
            </div>
          </form>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Book a free 15-minute consultation. We'll help you scope your project and budget."
        primaryLabel="Book a Consultation"
        primaryHref="/contact?type=renovation"
      />
    </Layout>
  );
};

export default RenovationsPage;
