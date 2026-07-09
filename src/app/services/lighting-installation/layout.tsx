import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/services/lighting-installation';

export const metadata: Metadata = {
  title: "Lighting Installation Waco TX | Recessed, Outdoor & Smart | BrightVolt",
  description: "Professional lighting installation in Waco and Central Texas — recessed cans, outdoor lighting, chandeliers, and smart switches. TECL-licensed, flat-rate pricing.",
  keywords: [
    "lighting installation Waco TX",
    "recessed lighting Waco",
    "outdoor lighting electrician",
    "smart switch install",
    "chandelier install Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Lighting Installation Waco TX | Recessed, Outdoor & Smart | BrightVolt",
    description: "Professional lighting installation in Waco and Central Texas — recessed cans, outdoor lighting, chandeliers, and smart switches. TECL-licensed, flat-rate pricing.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighting Installation Waco TX | Recessed, Outdoor & Smart | BrightVolt",
    description: "Professional lighting installation in Waco and Central Texas — recessed cans, outdoor lighting, chandeliers, and smart switches. TECL-licensed, flat-rate pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lighting Installation & Design",
  description: "Professional lighting installation in Waco and Central Texas — recessed cans, outdoor lighting, chandeliers, and smart switches. TECL-licensed, flat-rate pricing.",
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
  serviceType: "Lighting Installation",
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
