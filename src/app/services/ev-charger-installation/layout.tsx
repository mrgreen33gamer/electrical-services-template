import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/ev-charger-installation';

export const metadata: Metadata = {
  title: "EV Charger Installation Waco TX | Level 2 Home Charging | BrightVolt",
  description: "Level 2 home EV charger installation in Waco, TX for Tesla, ChargePoint, and all major brands. Dedicated circuits, permits, TECL-licensed electricians.",
  keywords: [
    "EV charger installation Waco TX",
    "Tesla wall connector install",
    "Level 2 charger electrician",
    "home EV charging Waco",
    "electric car charger install Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "EV Charger Installation Waco TX | Level 2 Home Charging | BrightVolt",
    description: "Level 2 home EV charger installation in Waco, TX for Tesla, ChargePoint, and all major brands. Dedicated circuits, permits, TECL-licensed electricians.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charger Installation Waco TX | Level 2 Home Charging | BrightVolt",
    description: "Level 2 home EV charger installation in Waco, TX for Tesla, ChargePoint, and all major brands. Dedicated circuits, permits, TECL-licensed electricians.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Charger Installation",
  description: "Level 2 home EV charger installation in Waco, TX for Tesla, ChargePoint, and all major brands. Dedicated circuits, permits, TECL-licensed electricians.",
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
  serviceType: "EV Charger Installation",
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
