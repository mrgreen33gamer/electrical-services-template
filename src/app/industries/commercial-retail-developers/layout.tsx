import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = BASE_URL + '/industries/commercial-retail-developers';

export const metadata: Metadata = {
  title: "Electrical for Commercial & Retail Developers | BrightVolt Electric",
  description: "Shell, TI, and open-date driven commercial electrical for developers and retail landlords in Waco and Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Electrical for Commercial & Retail Developers | BrightVolt Electric",
    description: "Shell, TI, and open-date driven commercial electrical for developers and retail landlords in Waco and Central Texas.",
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