# Electrical Services Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `hvac-template` and re-skinned. This is run #6 in that series (after landscaping, roofing, painting, construction-hub, and automotive), forking `hvac-template` into `electrical-services-template`, following the established template re-skin playbook.

`hvac-template` also still carries an orphaned `src/app/projects/` page and unused sibling components (`BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`, `InsuredBadge`, `ProjectCardGrid`) — leftover Scott-Apps-own-agency portfolio scaffolding. There is no known catalog requirement for a project gallery on the electrical template, so per the landscaping/roofing/painting precedent (not construction-hub's, which repurposed them), the `projects` route is deleted as dead weight; the orphan components themselves are left in place unwired, matching the majority of prior runs.

## Business Identity (locked, reuse verbatim in every task dispatch)

- **Business name:** BrightVolt Electric
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead (Central Texas cluster, consistent with existing builds)
- **Founded:** 2010
- **Credential/license line:** "TECL-Licensed Master Electrician" (Texas Electrical Contractor License) + "Bonded & Insured"
- **Guarantee:** 2-Year Workmanship Warranty on all installations
- **Social proof:** 4.9★, 500+ reviews, "2,500+ jobs completed"
- **Brand accent color:** electric cyan (`#06b6d4`-ish) paired with charcoal — distinct from HVAC orange, roofing blue, landscaping green, painting purple, construction amber, automotive red, flooring orange
- **Phone:** (254) 715-4400 / `tel:+12547154400`
- **Email:** hello@brightvoltelectric.com
- **Address:** 822 Colcord Ave, Waco, TX 76707
- No per-city SEO subpages (same standing decision as prior runs)

## Services (6)

1. Electrical Panel Upgrades
2. Wiring & Rewiring
3. Lighting Installation & Design
4. Electrical Repairs & Troubleshooting
5. EV Charger Installation
6. Generator Installation & Backup Power

## Industries Served (3, B2B vertical pattern — same shape as prior runs)

1. Property Management Companies
2. Commercial & Retail Developers
3. Manufacturing & Industrial Facilities

## Pages

Standard set carried from the template: Home, Services (index + 6 detail pages), Industries (index + 3 detail pages), About, Contact, Service Areas, Blog (index + 3 posts). No new page types. `src/app/projects/` route removed (see Context above).

## Non-goals

- No per-city SEO subpages.
- No new component primitives — every page is a sibling-clone of an existing HVAC-era page of the same shape.
- No project-gallery/case-study feature (no known catalog requirement for this trade; differs from construction-hub's build).
- No deploy/marketplace-catalog-flip work — out of scope for this build pass.

## Process

Follow the established playbook exactly:

1. **Step 0 sweep** (before any page content): brand tokens (`globalVariables.scss`), Header/Footer, shared components, root `layout.tsx`/`page.tsx`, `robots.ts`/`llms.txt`/`sitemap.xml`, vendor-identity leaks (admin/legal/API-infra files), delete `src/app/projects/`.
2. **Page-by-page content**, sibling-reference pattern: services ×6, industries ×3, services/industries index pages, reviews data, blog posts ×3, about/contact/service-areas.
3. **Final sweep + QA** — grep repo-wide for leftover HVAC/Arctic-Air/vendor-identity strings; `npm run typecheck` + `npm run lint`; dev-server visual QA at 375/768/1440px across home, services index, one service page, industries index, about, contact, blog index; confirm the cyan/charcoal accent color via rendered screenshot (not just the SCSS variable, per the roofing run's accent-color miss); zero console errors.

## Success Criteria

- Zero old-trade (HVAC) or vendor-identity (Scott Apps agency) content remaining anywhere in the codebase, including admin/legal/infra files.
- Correct accent color verified via rendered screenshot, not just the SCSS variable.
- Dev server boots clean, zero horizontal overflow at 375/768/1440px, zero console errors across the QA page set.
