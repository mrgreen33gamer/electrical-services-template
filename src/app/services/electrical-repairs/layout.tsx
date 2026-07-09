import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/electrical-repairs';

export const metadata: Metadata = {
  title: "Electrical Repairs Waco TX | Troubleshooting & Same-Day Fixes | BrightVolt",
  description: "Same-day electrical repairs in Waco and Central Texas. Outlets, breakers, switches, wiring faults — flat-rate pricing, TECL-licensed, 2-Year Workmanship Warranty.",
  keywords: [
    "electrical repair Waco TX",
    "electrician Waco",
    "breaker repair Central Texas",
    "outlet repair Waco",
    "emergency electrician Waco TX",
    "BrightVolt Electric",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical Repairs Waco TX | Troubleshooting & Same-Day Fixes | BrightVolt",
    description: "Same-day electrical repairs in Waco and Central Texas. Outlets, breakers, switches, wiring faults — flat-rate pricing, TECL-licensed, 2-Year Workmanship Warranty.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Repairs Waco TX | Troubleshooting & Same-Day Fixes | BrightVolt",
    description: "Same-day electrical repairs in Waco and Central Texas. Outlets, breakers, switches, wiring faults — flat-rate pricing, TECL-licensed, 2-Year Workmanship Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Repairs & Troubleshooting",
  description: "Same-day electrical repairs in Waco and Central Texas. Outlets, breakers, switches, wiring faults — flat-rate pricing, TECL-licensed, 2-Year Workmanship Warranty.",
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
  serviceType: "Electrical Repair",
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
