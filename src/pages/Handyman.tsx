import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  Wrench, Paintbrush, Hammer, Tv, Package, TreePine, Drill, DoorClosed,
  Frame, Lightbulb, Search, Clock, CheckCircle, ArrowRight, ShieldCheck,
  Phone, Calendar, MessageSquare, ListChecks, BadgeCheck,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MembershipPromo from "@/components/MembershipPromo";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { toast } from "sonner";

const tasks = [
  { icon: Package, title: "Furniture Assembly", category: "Assembly", duration: "30–90 min", hours: 1 },
  { icon: Tv, title: "TV Mounting", category: "Mounting", duration: "45–90 min", hours: 1 },
  { icon: Frame, title: "Drywall Repair", category: "Repairs", duration: "1–3 hrs", hours: 2 },
  { icon: Paintbrush, title: "Painting Touch-Ups", category: "Painting", duration: "1–4 hrs", hours: 2 },
  { icon: DoorClosed, title: "Door Repairs", category: "Repairs", duration: "30–90 min", hours: 1 },
  { icon: Drill, title: "Shelf Installation", category: "Mounting", duration: "30–60 min", hours: 1 },
  { icon: Wrench, title: "Caulking", category: "Repairs", duration: "30–90 min", hours: 1 },
  { icon: Lightbulb, title: "Fixture Replacement", category: "Mounting", duration: "30–60 min", hours: 1 },
  { icon: Hammer, title: "Minor Repairs", category: "Repairs", duration: "30 min+", hours: 1 },
  { icon: Frame, title: "Mounting & Hanging", category: "Mounting", duration: "30 min+", hours: 1 },
  { icon: Hammer, title: "Small Carpentry", category: "Carpentry", duration: "1–4 hrs", hours: 2 },
  { icon: TreePine, title: "General Home Fixes", category: "Repairs", duration: "Varies", hours: 1 },
];

const categories = ["All", "Repairs", "Mounting", "Assembly", "Painting", "Carpentry"];

const bookingSteps = [
  { icon: Calendar, title: "Choose Date & Time", description: "Pick a slot that works for your schedule." },
  { icon: Clock, title: "Select Hours Needed", description: "Estimate the hours your tasks will take." },
  { icon: MessageSquare, title: "Describe Tasks", description: "Tell us what needs to get done and share any photos." },
  { icon: ListChecks, title: "Submit Request", description: "We confirm and schedule the right handyman for the job." },
  { icon: BadgeCheck, title: "Confirmation & Visit", description: "Our pro arrives on time, ready to work." },
];

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  date: z.string().min(1, "Pick a date"),
  hours: z.string().min(1, "Select hours"),
  description: z.string().trim().min(10, "Add a brief description").max(2000),
});

const HandymanPage = () => {
  useDocumentHead({
    title: "Handyman Services in Ontario | Home Fixers Ltd.",
    description: "Fast, reliable handyman services across the GTA — assembly, mounting, drywall, painting touch-ups, and general home repairs.",
    canonical: "https://trusty-fixer-site.lovable.app/handyman",
  });

  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () =>
      tasks.filter((t) => {
        const inCat = cat === "All" || t.category === cat;
        const inSearch = !search.trim() || t.title.toLowerCase().includes(search.toLowerCase());
        return inCat && inSearch;
      }),
    [search, cat]
  );

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", date: "", hours: "", description: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = bookingSchema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.errors[0]?.message || "Please review your inputs");
      return;
    }
    toast.success("Booking request received! We'll confirm shortly.");
    setForm({ name: "", email: "", phone: "", address: "", date: "", hours: "", description: "" });
  };

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-gradient-hero py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="container relative text-center animate-fade-in-up">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            On-Demand Handyman
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-secondary md:text-5xl lg:text-6xl">
            Fast & Reliable <span className="text-gradient-primary">Handyman Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary/75">
            Book vetted, insured handymen for the everyday fixes — by the hour, no subscription required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="shadow-primary">
              <a href="#book">Book a Handyman</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href="tel:+1234567890"><Phone className="mr-1 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Task Explorer */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Task Explorer"
            title="What our handymen can do."
            description="Any task that doesn't require a professional trade licence — we've got it covered."
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tasks (e.g. TV, drywall, painting)…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 pl-10"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    cat === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((t) => (
              <div key={t.title} className="rounded-xl border border-border bg-gradient-card p-5 shadow-card hover-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{t.title}</h3>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {t.duration}</p>
                  <p className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> ~{t.hours} hr recommended</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Booking Process"
            title="Book in under two minutes."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {bookingSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon className="mt-2 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Reviews" title="Trusted by GTA homeowners." />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="bg-section-bg py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Book a Handyman"
            title="Tell us what you need."
            description="We'll confirm scheduling and pricing within one business day."
          />
          <form onSubmit={submit} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-card md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="hm-name">Name *</Label>
                <Input id="hm-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="hm-phone">Phone *</Label>
                <Input id="hm-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} required />
              </div>
              <div>
                <Label htmlFor="hm-email">Email *</Label>
                <Input id="hm-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
              </div>
              <div>
                <Label htmlFor="hm-address">Address</Label>
                <Input id="hm-address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} maxLength={200} />
              </div>
              <div>
                <Label htmlFor="hm-date">Preferred date *</Label>
                <Input id="hm-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div>
                <Label>Hours needed *</Label>
                <Select value={form.hours} onValueChange={(v) => setForm({ ...form, hours: v })}>
                  <SelectTrigger><SelectValue placeholder="Select hours" /></SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,8].map((h) => (
                      <SelectItem key={h} value={String(h)}>{h} hour{h>1?"s":""}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="hm-desc">Tasks description *</Label>
              <Textarea id="hm-desc" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={2000} placeholder="List the tasks you'd like done…" required />
            </div>
            <div className="mt-4">
              <Label htmlFor="hm-files">Upload photos (optional)</Label>
              <Input id="hm-files" type="file" multiple accept="image/*" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Submit Booking Request <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Note about licensed work */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 text-center shadow-card">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold">Need licensed work?</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              For advanced plumbing, major electrical, HVAC, or structural work we'll connect you with our network of
              licensed contractors and provide a separate quote.
            </p>
            <Button className="mt-6" asChild>
              <Link to="/contact?type=quote">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <MembershipPromo />
    </Layout>
  );
};

export default HandymanPage;
