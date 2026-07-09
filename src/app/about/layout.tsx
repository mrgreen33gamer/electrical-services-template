import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About BrightVolt Electric — Waco TX Electrical Contractor Since 2010",
  description:
    "Meet the BrightVolt Electric team. Locally owned and operated in Waco, Texas since 2010. TECL-licensed Master Electricians, bonded & insured, honest pricing, and a 2-Year Workmanship Warranty on every install. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about BrightVolt Electric",
    "Waco electrician",
    "electrical contractor Waco TX",
    "locally owned electrician Waco",
    "TECL licensed electrician Waco Texas",
    "electrical company history Waco",
    "Marcus Hale BrightVolt Electric",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About BrightVolt Electric — Waco TX Electrical Contractor Since 2010",
    description:
      "Locally owned electrical contractor in Waco, TX. TECL-licensed, flat-rate pricing, 2-Year Workmanship Warranty.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BrightVolt Electric — Waco TX Since 2010",
    description: "Locally owned electrician in Waco, TX. TECL-licensed, flat-rate pricing, 2-Year Workmanship Warranty.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${BASE_URL}/#organization`,
  name: "BrightVolt Electric",
  url: BASE_URL,
  telephone: "+12547154400",
  email: "hello@brightvoltelectric.com",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Marcus Hale",
    jobTitle: "Owner & TECL-Licensed Master Electrician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "822 Colcord Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76707",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/brightvoltelectric",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
