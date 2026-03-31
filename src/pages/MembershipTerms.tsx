import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MembershipTermsPage = () => {
  return (
    <Layout>
      <section className="bg-heading py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            Membership <span className="text-primary">Terms & Policies</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-secondary/70">
            Please review the following terms before joining a Home Fixers Maintenance Membership plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/membership"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Membership Plans</Link>
            </Button>

            <div>
              <h2 className="text-2xl font-bold">1. Membership Agreement</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                By enrolling in a Home Fixers Maintenance Membership plan (Essential Care, Elite Care, or Executive Protection),
                you agree to these terms and conditions. The membership is a recurring monthly service agreement between the
                homeowner ("Member") and Home Fixers Ltd. ("Company").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. Membership Term & Billing</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>• Memberships are billed monthly on the date of enrollment.</li>
                <li>• The minimum commitment period is 12 months from the date of activation.</li>
                <li>• After the initial 12-month term, the membership will auto-renew monthly unless cancelled.</li>
                <li>• Prices are subject to annual review. Members will be notified 30 days in advance of any changes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. Services Included</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Each plan includes seasonal maintenance visits (Spring: April–May, Fall: October–November),
                inspections, and handyman hours as outlined in the plan comparison. Services are subject to
                availability and scheduling. Seasonal visits are scheduled by the Company and the Member will
                be given at least 7 days' notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. Handyman Hours</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>• Annual handyman hours are allocated per plan: Essential (2 hrs), Elite (6 hrs), Executive (15 hrs).</li>
                <li>• Unused hours do not roll over to the next membership year.</li>
                <li>• Hours are for general handyman tasks only. Work requiring licensed professionals (e.g., major electrical, plumbing, or structural) will be quoted separately.</li>
                <li>• Additional hours may be purchased at the member discount rate.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Member Discounts</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Members receive discounts on add-on services and additional work as outlined in their plan
                (Essential: 5%, Elite: 10%, Executive: 15%). Discounts apply to labour costs only and cannot
                be combined with other promotions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">6. Cancellation Policy</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>• Members may cancel after the initial 12-month term with 30 days' written notice.</li>
                <li>• Early cancellation (within the first 12 months) is subject to an early termination fee equal to 2 months of the plan rate.</li>
                <li>• Any services already rendered or scheduled within the current billing period will be honoured.</li>
                <li>• Cancellation requests should be emailed to info@homefixers.ca or submitted through the contact form.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">7. Scope of Work & Limitations</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>• Services are limited to the residential property registered at the time of enrollment.</li>
                <li>• The membership covers one single-family home. Multi-unit properties require a custom plan.</li>
                <li>• Work requiring permits, licensed contractors, or specialized equipment may be quoted separately.</li>
                <li>• Home Fixers reserves the right to decline work deemed unsafe or beyond the scope of general maintenance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">8. Liability & Insurance</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Home Fixers Ltd. carries comprehensive general liability insurance and WSIB coverage for all team members.
                Our liability is limited to the cost of services rendered. We are not liable for pre-existing conditions,
                hidden defects, or damage caused by factors outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">9. Privacy Policy</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Member information is collected solely for the purpose of providing maintenance services and
                communication. We do not sell or share personal information with third parties. Service reports
                and records are stored securely and available to the member upon request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">10. Governing Law</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This agreement is governed by the laws of the Province of Ontario, Canada. Any disputes will be
                resolved through good-faith negotiation and, if necessary, through the courts of Ontario.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-section-bg p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last updated:</strong> March 2026. These terms may be updated
                periodically. Members will be notified of material changes via email. Continued use of the membership
                after changes constitutes acceptance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/contact">Join a Membership Plan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/membership">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembershipTermsPage;
