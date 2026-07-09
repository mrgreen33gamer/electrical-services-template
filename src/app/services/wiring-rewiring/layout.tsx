import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/wiring-rewiring';

export const metadata: Metadata = {
  title: "Wiring & Rewiring Waco TX | Whole-Home Electrical | BrightVolt",
  description: "Residential wiring and whole-home rewiring in Waco, TX. Aluminum remediation, new circuits, code-compliant installs by TECL-licensed Master Electricians.",
  keywords: [
    "home rewiring Waco TX",
    "electrical wiring Waco",
    "aluminum wiring repair",
    "new circuit install Waco",
    "whole house rewire Central Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Wiring & Rewiring Waco TX | Whole-Home Electrical | BrightVolt",
    description: "Residential wiring and whole-home rewiring in Waco, TX. Aluminum remediation, new circuits, code-compliant installs by TECL-licensed Master Electricians.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiring & Rewiring Waco TX | Whole-Home Electrical | BrightVolt",
    description: "Residential wiring and whole-home rewiring in Waco, TX. Aluminum remediation, new circuits, code-compliant installs by TECL-licensed Master Electricians.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wiring & Rewiring",
  description: "Residential wiring and whole-home rewiring in Waco, TX. Aluminum remediation, new circuits, code-compliant installs by TECL-licensed Master Electricians.",
  provider: {
    "@type": "Electrician",
    name: "BrightVolt Electric",
    url: BASE_URL,
    telephone: "+12547154400",
    address: {
      "@type": "PostalAddress",
      streetAddress: "822 Colcord Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Electrical Wiring",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
