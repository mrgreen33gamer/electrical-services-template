import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Electrical for Property Management Companies | BrightVolt Electric",
  description: "Multi-unit make-ready, CapEx panel upgrades, and tenant-ticket electrical response for Central Texas property managers. TECL-licensed.",
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical for Property Management Companies | BrightVolt Electric",
    description: "Multi-unit make-ready, CapEx panel upgrades, and tenant-ticket electrical response for Central Texas property managers. TECL-licensed.",
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