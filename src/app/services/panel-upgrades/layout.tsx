import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/panel-upgrades';

export const metadata: Metadata = {
  title: "Electrical Panel Upgrades Waco TX | 100A–200A Service | BrightVolt",
  description: "Electrical panel upgrades in Waco and Central Texas. 100A to 200A replacements, load calculations, permits handled. TECL-licensed, flat-rate quotes.",
  keywords: [
    "panel upgrade Waco TX",
    "electrical panel replacement Waco",
    "200 amp panel upgrade",
    "service upgrade electrician",
    "breaker box upgrade Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical Panel Upgrades Waco TX | 100A–200A Service | BrightVolt",
    description: "Electrical panel upgrades in Waco and Central Texas. 100A to 200A replacements, load calculations, permits handled. TECL-licensed, flat-rate quotes.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Panel Upgrades Waco TX | 100A–200A Service | BrightVolt",
    description: "Electrical panel upgrades in Waco and Central Texas. 100A to 200A replacements, load calculations, permits handled. TECL-licensed, flat-rate quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Panel Upgrades",
  description: "Electrical panel upgrades in Waco and Central Texas. 100A to 200A replacements, load calculations, permits handled. TECL-licensed, flat-rate quotes.",
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
  serviceType: "Panel Upgrade",
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
