# BrightVolt Electric — Implementation Plan

**Goal:** Re-skin the forked `hvac-template` codebase (now `electrical-services-template`) into a complete "BrightVolt Electric" marketing site, reusing 100% of the existing architecture and component library. Business identity, services, industries, and page list are locked in `docs/superpowers/specs/2026-07-08-electrical-services-design.md` — read that first.

**Method:** Sibling-reference pattern. Every new page/section is a 1:1 structural clone of an existing HVAC-era sibling of the same shape (same components, same prop shapes), with only copy/data/slugs changed. No new component primitives.

**Slug/content mapping (services, 6):**
| Old (HVAC) slug | New slug | New service |
|---|---|---|
| ac-repair | electrical-repairs | Electrical Repairs & Troubleshooting |
| heating | panel-upgrades | Electrical Panel Upgrades |
| installation | wiring-rewiring | Wiring & Rewiring |
| duct-cleaning | lighting-installation | Lighting Installation & Design |
| indoor-air-quality | ev-charger-installation | EV Charger Installation |
| maintenance | generator-installation | Generator Installation & Backup Power |

Each old service dir also has `waco-tx/temple-tx/killeen-tx` city subpages — **delete these**, per spec's "no per-city SEO subpages" standing decision.

**Slug/content mapping (industries, 3):**
| Old slug | New slug | New industry |
|---|---|---|
| automotive | property-management | Property Management Companies |
| manufacturing | commercial-retail-developers | Commercial & Retail Developers |
| oil-gas | manufacturing-industrial | Manufacturing & Industrial Facilities |

**Blog posts (3, new topics, Central Texas locale kept):**
| Old slug | New slug | New topic |
|---|---|---|
| heat-pump-vs-traditional-hvac-texas | signs-you-need-a-panel-upgrade-waco-tx | Signs your electrical panel is outdated/overloaded |
| how-often-should-you-replace-hvac-filter | ev-charger-installation-guide-waco-tx | What to know before installing a home EV charger |
| signs-ac-needs-replacement-waco-tx | electrical-safety-warning-signs-waco-tx | Warning signs of faulty home wiring |

**Global constraints:** business identity, colors, phone/email/address all come verbatim from the spec's "Business Identity (locked)" block — do not re-derive or vary them per task. After every task: `npm run typecheck` from `electrical-services-template/` must pass before committing.

## Tasks

1. **Brand tokens** — `src/app/globalVariables.scss`: swap navy/orange HVAC palette for electric cyan (`#06b6d4`-ish) + charcoal, keep token *names* unchanged so no component SCSS needs touching.
2. **Header & Footer rebrand** — logo text, tagline, marquee items, phone/email/address, licensing line ("TECL-Licensed Master Electrician").
3. **Vendor/infra sweep** — `robots.ts`, `sitemap.xml/route.ts`, `llms.txt/route.ts`, `not-found.tsx`, `privacy-policy`, root `layout.tsx` metadata, admin login/dashboard header strings — remove all HVAC/Arctic-Air and any Scott-Apps-agency identity leaks; delete `src/app/projects/`.
4. **Homepage hero** — `Pages/Home/WelcomePage` content.
5. **Homepage body** — `src/app/page.tsx`: services array (6, new), metrics, WhyChooseUs, process steps, expectations, local areas, FAQ, trust badges, CTA banner copy.
6–11. **Service pages ×6** — per slug map above, sibling-cloned from the matching old HVAC service page; delete each old service dir's city subpages.
12. **Services index** — `services/page.tsx` + `services/layout.tsx`.
13–15. **Industry pages ×3** — per slug map above.
16. **Industries index** — `industries/page.tsx` + `industries/layout.tsx`.
17. **Reviews data** — `libs/local-db/reviews.ts`, electrical-flavored review copy, same shape.
18–20. **Blog posts ×3** — per slug map above; delete old HVAC blog dirs, create new ones (layout + page + module.scss), sibling-cloned structure.
21. **About / Contact / Service Areas** — copy pass only, same component composition.
22. **Final sweep** — grep for leftover HVAC/Arctic-Air/vendor-identity strings repo-wide; `npm run typecheck` + `npm run lint`; dev-server visual QA at 375/768/1440px across home, services index, one service page, industries index, about, contact, blog index; confirm cyan/charcoal accent color via rendered screenshot (not just the SCSS var); zero console errors.

Each task = one commit, prefixed `brand:`, `feat:`, or `content:` as appropriate, matching the convention used in prior reskin runs.
