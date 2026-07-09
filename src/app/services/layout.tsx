// src/app/services/layout.tsx
// BrightVolt Electric — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Electrical Services | Panel Upgrades, Wiring, EV Chargers & More | BrightVolt",
  description:
    "BrightVolt Electric offers panel upgrades, wiring & rewiring, lighting installation, electrical repairs, EV charger installation, and generator installation for Waco and Central Texas. TECL-licensed, 2-Year Workmanship Warranty.",
  keywords: [
    "electrician Waco TX",
    "electrical services Waco",
    "panel upgrade Central Texas",
    "EV charger installation Waco TX",
    "electrical repair contractor Texas",
    "generator installation Waco",
    "TECL licensed electrician Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical Services | BrightVolt Electric",
    description:
      "Panel upgrades, wiring, lighting, repairs, EV chargers, and generators for Waco and Central Texas. TECL-licensed, 2-Year Workmanship Warranty.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Services | BrightVolt Electric",
    description: "Panel upgrades, wiring, lighting, EV chargers & more for Central Texas. TECL-licensed.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "BrightVolt Electric — Electrical Services",
  description:
    "Residential and commercial electrical services for Waco and Central Texas: panel upgrades, wiring, lighting, repairs, EV chargers, and generators.",
  provider: {
    "@type": "Electrician",
    name: "BrightVolt Electric",
    url: BASE_URL,
    telephone: "+12547154400",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Repairs & Troubleshooting", url: `${BASE_URL}/services/electrical-repairs` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Panel Upgrades", url: `${BASE_URL}/services/panel-upgrades` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wiring & Rewiring", url: `${BASE_URL}/services/wiring-rewiring` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation & Design", url: `${BASE_URL}/services/lighting-installation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV Charger Installation", url: `${BASE_URL}/services/ev-charger-installation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generator Installation & Backup Power", url: `${BASE_URL}/services/generator-installation` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
