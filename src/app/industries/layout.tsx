// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries Served | Property Management, Commercial & Industrial | BrightVolt",
  description:
    "BrightVolt Electric serves property management companies, commercial & retail developers, and manufacturing & industrial facilities across Waco and Central Texas. TECL-licensed commercial electrical.",
  keywords: [
    "commercial electrician Waco TX",
    "property management electrician",
    "retail TI electrical contractor",
    "industrial electrician Central Texas",
    "multi-unit electrical Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries Served | BrightVolt Electric",
    description: "Electrical programs for property managers, commercial developers, and industrial facilities in Central Texas.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
