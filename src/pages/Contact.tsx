import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (formName: string) => (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
    setSubmitted(formName);
    setTimeout(() => setSubmitted(null), 3000);
  };

  return (
    <Layout>
      <section className="bg-heading py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Get in touch for a free quote or to learn more about our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Get In Touch</h2>
              {[
                { icon: Phone, label: "Phone", value: "(123) 456-7890" },
                { icon: Mail, label: "Email", value: "info@homefixers.ca" },
                { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM\nSat: 9AM–3PM" },
                { icon: MapPin, label: "Location", value: "Ontario, Canada" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-8 aspect-video rounded-lg border border-border bg-section-bg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Map Coming Soon</p>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">Service Request</TabsTrigger>
                  <TabsTrigger value="handyman">Handyman</TabsTrigger>
                  <TabsTrigger value="membership">Membership</TabsTrigger>
                </TabsList>

                {/* General Service Request */}
                <TabsContent value="general">
                  <form onSubmit={handleSubmit("general")} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><Label htmlFor="g-name">Name *</Label><Input id="g-name" required placeholder="Your full name" /></div>
                      <div><Label htmlFor="g-email">Email *</Label><Input id="g-email" type="email" required placeholder="email@example.com" /></div>
                      <div><Label htmlFor="g-phone">Phone *</Label><Input id="g-phone" type="tel" required placeholder="(123) 456-7890" /></div>
                      <div><Label htmlFor="g-address">Address</Label><Input id="g-address" placeholder="Your address" /></div>
                    </div>
                    <div>
                      <Label>Service Type</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenance">Home Maintenance</SelectItem>
                          <SelectItem value="handyman">Handyman Services</SelectItem>
                          <SelectItem value="renovation">Renovations & Construction</SelectItem>
                          <SelectItem value="seasonal">Seasonal Maintenance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="g-desc">Description</Label><Textarea id="g-desc" placeholder="Tell us about your project..." rows={4} /></div>
                    <Button type="submit" size="lg">{submitted === "general" ? "Sent ✓" : "Submit Request"}</Button>
                  </form>
                </TabsContent>

                {/* Handyman */}
                <TabsContent value="handyman">
                  <form onSubmit={handleSubmit("handyman")} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label>Task Type</Label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select task" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="repair">Repairs</SelectItem>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="carpentry">Carpentry</SelectItem>
                            <SelectItem value="painting">Painting</SelectItem>
                            <SelectItem value="outdoor">Outdoor Work</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Urgency</Label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select urgency" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low — Flexible timing</SelectItem>
                            <SelectItem value="medium">Medium — Within a week</SelectItem>
                            <SelectItem value="high">High — ASAP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div><Label htmlFor="h-date">Preferred Date</Label><Input id="h-date" type="date" /></div>
                    <div><Label htmlFor="h-desc">Description</Label><Textarea id="h-desc" placeholder="Describe the task..." rows={4} /></div>
                    <Button type="submit" size="lg">{submitted === "handyman" ? "Sent ✓" : "Request Handyman"}</Button>
                  </form>
                </TabsContent>

                {/* Membership */}
                <TabsContent value="membership">
                  <form onSubmit={handleSubmit("membership")} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><Label htmlFor="m-name">Name *</Label><Input id="m-name" required placeholder="Your full name" /></div>
                      <div><Label htmlFor="m-email">Email *</Label><Input id="m-email" type="email" required placeholder="email@example.com" /></div>
                      <div><Label htmlFor="m-phone">Phone *</Label><Input id="m-phone" type="tel" required placeholder="(123) 456-7890" /></div>
                      <div>
                        <Label>Property Type</Label>
                        <Select>
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
                        <Label>Home Size</Label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (under 1,500 sqft)</SelectItem>
                            <SelectItem value="medium">Medium (1,500–3,000 sqft)</SelectItem>
                            <SelectItem value="large">Large (3,000+ sqft)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Plan</Label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select plan" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Care — $99/mo</SelectItem>
                            <SelectItem value="premium">Premium Care — $149/mo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label>Preferred Schedule</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select preference" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning</SelectItem>
                          <SelectItem value="afternoon">Afternoon</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
