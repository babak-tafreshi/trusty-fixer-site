
# Home Fixers Ltd. — Full Site Enhancement Plan

Keep current orange (#F36F21) / gray (#6D6E71) palette and bright white theme. Upgrade UX, structure, and visuals across all pages.

## 1. Global / Shared

- **Navbar (`src/components/Navbar.tsx`)**
  - Sticky, white with subtle shadow on scroll
  - Logo slot: `src/assets/logo-placeholder.svg` (simple placeholder, user replaces)
  - Links: Home (logo) · Renovation · Maintenance · Handyman · Membership · Contact
  - Two CTAs: "Request Quote" (outline) and "Book Service" (filled orange)
  - Mobile hamburger with slide-down sheet
- **Footer**: company info, contact, coverage area chips, quick links, social, membership CTA, copyright
- **Design tokens** (`src/index.css`, `tailwind.config.ts`):
  - Add gradient utilities (`--gradient-hero`, `--gradient-card`), shadow tokens, section spacing scale
  - Animations: fade-in, slide-up, hover-lift, count-up, gradient-shift
- **Shared components** (new in `src/components/`):
  - `SectionHeading.tsx`, `ServiceCard.tsx`, `ProcessTimeline.tsx`, `TestimonialsCarousel.tsx`, `CoverageArea.tsx`, `CTASection.tsx`, `SearchFilterBar.tsx`, `ProjectGallery.tsx`, `MembershipPromo.tsx`, `FAQ.tsx`
- **SEO**: install `react-helmet-async`, add per-page titles/descriptions/canonical; update `index.html` sitewide meta + Organization JSON-LD with Ontario/GTA keywords

## 2. Homepage (`src/pages/Index.tsx`)

Sections (in order):
1. Hero — bold headline, animated gradient backdrop, floating service icons, stats counters (years/projects/members), dual CTAs
2. Services overview (3 main cards: Renovation, Maintenance, Handyman)
3. Why Choose Us (4–6 trust badges with icons)
4. Process overview (4 steps)
5. Featured projects gallery (6 tiles, hover zoom, link to renovations)
6. Membership highlight (3-plan teaser → /membership)
7. Testimonials carousel
8. Coverage area (GTA city chips on stylized map background)
9. Final CTA section
10. Footer (global)

## 3. Renovation (`src/pages/Renovations.tsx` — rebuild)

- Hero with reno visuals, dual CTAs
- Service Explorer: search bar + category filter chips + 12 category cards (Home Additions, Basement, Kitchen, Bathroom, Full Remodel, Condo, Exterior, Flooring, Painting, Structural, Commercial, Garage). Each card opens detail Dialog modal
- Process timeline (7 steps)
- Past Projects gallery: filter by type, hover overlay, modal with details (location, type, timeline, scope, photos). Use existing reno-*.jpg assets
- Coverage area component
- Multi-step renovation quote form (3 steps: Contact → Project → Details/Upload) with zod validation

## 4. Maintenance (`src/pages/Maintenance.tsx` — NEW)

- Hero
- Searchable maintenance services (12 categories with icons + response time)
- Process flow (6 steps)
- Testimonials carousel
- Membership promo CTA → /membership

## 5. Handyman (`src/pages/Handyman.tsx` — rebuild)

- Hero
- Task Explorer with search + categories (12 tasks, duration + recommended hours)
- Booking process (5 steps)
- Testimonials
- Booking form with date/time picker, hours, task description, photo upload, zod validation
- Membership promo banner

## 6. Membership (`src/pages/Membership.tsx` — refine)

- Premium hero
- Three pricing cards: Basic $99, Pro $149 (Most Popular highlight), Elite $199 — all "billed annually"
- Feature comparison table
- FAQ accordion
- Dual CTAs: Join Membership / Schedule Consultation
- Link to `/membership/terms` (keep existing)

## 7. Contact (`src/pages/Contact.tsx`)

- Keep tabbed forms; polish layout, add validation messages, success state, contact info sidebar with hours + coverage

## 8. Routing (`src/App.tsx`)

Add `/maintenance`. Keep legacy redirects.

## Technical notes

- All forms use `react-hook-form` + `zod` (already available via shadcn `form`)
- All carousels use existing shadcn `carousel`
- Modals use shadcn `dialog`
- Use semantic HSL tokens only — no raw colors in components
- Images: reuse existing `src/assets/reno-*.jpg` and `hero-bg.jpg`; generate 2–3 new ones if needed (handyman, maintenance hero) — keep generation minimal for speed
- Logo: small SVG placeholder file with text "LOGO" so user can swap

## Out of scope (future)

User accounts, real booking backend, admin dashboard, live map — structure prepared but no backend wired (no Lovable Cloud activation requested).
