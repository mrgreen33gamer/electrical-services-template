import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/industries/manufacturing-industrial';

export const metadata: Metadata = {
  title: "Electrical for Manufacturing & Industrial Facilities | BrightVolt Electric",
  description: "Production-aware electrical repairs, equipment power-ups, and distribution upgrades for Central Texas plants and shops.",
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical for Manufacturing & Industrial Facilities | BrightVolt Electric",
    description: "Production-aware electrical repairs, equipment power-ups, and distribution upgrades for Central Texas plants and shops.",
    url,
    siteName: "BrightVolt Electric",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}