import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/generator-installation';

export const metadata: Metadata = {
  title: "Generator Installation Waco TX | Standby & Backup Power | BrightVolt",
  description: "Standby and portable generator installation in Waco and Central Texas. Automatic transfer switches, permits, TECL-licensed. Stay powered through storms.",
  keywords: [
    "generator installation Waco TX",
    "standby generator electrician",
    "backup power install Waco",
    "transfer switch installation",
    "whole house generator Central Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Generator Installation Waco TX | Standby & Backup Power | BrightVolt",
    description: "Standby and portable generator installation in Waco and Central Texas. Automatic transfer switches, permits, TECL-licensed. Stay powered through storms.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generator Installation Waco TX | Standby & Backup Power | BrightVolt",
    description: "Standby and portable generator installation in Waco and Central Texas. Automatic transfer switches, permits, TECL-licensed. Stay powered through storms.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generator Installation & Backup Power",
  description: "Standby and portable generator installation in Waco and Central Texas. Automatic transfer switches, permits, TECL-licensed. Stay powered through storms.",
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
  serviceType: "Generator Installation",
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
