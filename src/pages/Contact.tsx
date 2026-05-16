import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useDocumentHead } from "@/hooks/useDocumentHead";

const baseSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(30),
});

const ContactPage = () => {
  useDocumentHead({
    title: "Contact Home Fixers Ltd. | Ontario Renovations & Maintenance",
    description: "Contact Home Fixers Ltd. for renovations, maintenance memberships, and handyman services across the GTA and Ontario.",
    canonical: "https://trusty-fixer-site.lovable.app/contact",
  });

  const [params] = useSearchParams();
  const initialType = params.get("type");

  const tabFromType = (t: string | null) => {
    if (t === "handyman" || t === "book") return "handyman";
    if (t === "membership") return "membership";
    return "general";
  };

  const [tab, setTab] = useState(tabFromType(initialType));
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    setTab(tabFromType(initialType));
  }, [initialType]);

  const handleSubmit = (formName: string) => (e: React.FormEvent) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    const r = baseSchema.safeParse(data);
    if (!r.success) {
      toast.error(r.error.errors[0]?.message || "Please review your inputs");
      return;
    }
    toast.success("Thanks! We'll be in touch within one business day.");
    setSubmitted(formName);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(null), 3000);
  };

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-gradient-hero py-20 md:py-28">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="container relative text-center animate-fade-in-up">
          <h1 className="font-display text-4xl font-extrabold text-secondary md:text-5xl lg:text-6xl">
            Get in <span className="text-gradient-primary">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/75">
            Request a quote, book a service, or ask us about membership — we usually reply within one business day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="font-display text-xl font-bold">Contact information</h2>
              {[
                { icon: Phone, label: "Phone", value: "(123) 456-7890" },
                { icon: Mail, label: "Email", value: "info@homefixers.ca" },
                { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM\nSat: 9AM–3PM" },
                { icon: MapPin, label: "Location", value: "Ontario, Canada" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="whitespace-pre-line text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-section-bg p-6">
                <p className="text-sm font-semibold">Service area</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Toronto, Mississauga, Vaughan, Markham, Richmond Hill, Brampton, Oakville, Burlington, Ajax,
                  Pickering, Oshawa, Aurora, Newmarket, and surrounding Ontario.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">Quote</TabsTrigger>
                  <TabsTrigger value="handyman">Handyman</TabsTrigger>
                  <TabsTrigger value="membership">Membership</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <form onSubmit={handleSubmit("general")} className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><Label htmlFor="g-name">Name *</Label><Input id="g-name" name="name" required maxLength={100} placeholder="Your full name" /></div>
                      <div><Label htmlFor="g-email">Email *</Label><Input id="g-email" name="email" type="email" required maxLength={255} placeholder="email@example.com" /></div>
                      <div><Label htmlFor="g-phone">Phone *</Label><Input id="g-phone" name="phone" type="tel" required maxLength={30} placeholder="(123) 456-7890" /></div>
                      <div><Label htmlFor="g-address">Address</Label><Input id="g-address" name="address" maxLength={200} placeholder="Your address" /></div>
                    </div>
                    <div>
                      <Label>Service type</Label>
                      <Select name="service">
                        <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="renovation">Renovation</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="handyman">Handyman</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="g-desc">Project description</Label><Textarea id="g-desc" name="description" maxLength={2000} placeholder="Tell us about your project…" rows={4} /></div>
                    <Button type="submit" size="lg">{submitted === "general" ? "Sent ✓" : "Submit Request"}</Button>
                  </form>
                </TabsContent>

                <TabsContent value="handyman">
                  <form onSubmit={handleSubmit("handyman")} className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><Label htmlFor="h-name">Name *</Label><Input id="h-name" name="name" required maxLength={100} /></div>
                      <div><Label htmlFor="h-phone">Phone *</Label><Input id="h-phone" name="phone" type="tel" required maxLength={30} /></div>
                      <div><Label htmlFor="h-email">Email *</Label><Input id="h-email" name="email" type="email" required maxLength={255} /></div>
                      <div><Label htmlFor="h-date">Preferred date</Label><Input id="h-date" name="date" type="date" /></div>
                    </div>
                    <div>
                      <Label>Hours needed</Label>
                      <Select name="hours">
                        <SelectTrigger><SelectValue placeholder="Select hours" /></SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,8].map((h) => (<SelectItem key={h} value={String(h)}>{h} hour{h>1?"s":""}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="h-desc">Task description *</Label><Textarea id="h-desc" name="description" maxLength={2000} required placeholder="What needs to get done?" rows={4} /></div>
                    <Button type="submit" size="lg">{submitted === "handyman" ? "Sent ✓" : "Book Handyman"}</Button>
                  </form>
                </TabsContent>

                <TabsContent value="membership">
                  <form onSubmit={handleSubmit("membership")} className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><Label htmlFor="m-name">Name *</Label><Input id="m-name" name="name" required maxLength={100} /></div>
                      <div><Label htmlFor="m-email">Email *</Label><Input id="m-email" name="email" type="email" required maxLength={255} /></div>
                      <div><Label htmlFor="m-phone">Phone *</Label><Input id="m-phone" name="phone" type="tel" required maxLength={30} /></div>
                      <div>
                        <Label>Plan</Label>
                        <Select name="plan" defaultValue={params.get("plan") || undefined}>
                          <SelectTrigger><SelectValue placeholder="Select a plan" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Basic Plan">Basic — $99/mo</SelectItem>
                            <SelectItem value="Pro Plan">Pro — $149/mo</SelectItem>
                            <SelectItem value="Elite Plan">Elite — $199/mo</SelectItem>
                            <SelectItem value="not-sure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Property type</Label>
                        <Select name="propertyType">
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Home size</Label>
                        <Select name="homeSize">
                          <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Under 1,500 sqft</SelectItem>
                            <SelectItem value="medium">1,500–3,000 sqft</SelectItem>
                            <SelectItem value="large">3,000+ sqft</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div><Label htmlFor="m-notes">Anything else?</Label><Textarea id="m-notes" name="description" maxLength={2000} rows={3} /></div>
                    <Button type="submit" size="lg">{submitted === "membership" ? "Sent ✓" : "Join Membership"}</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
