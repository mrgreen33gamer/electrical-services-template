import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Electrical Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | BrightVolt',
  description:
    'BrightVolt Electric serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 2-Year Workmanship Warranty.',
  keywords: [
    'electrical service areas Central Texas',
    'electrician Waco TX',
    'electrician Hewitt TX',
    'electrician Killeen TX',
    'electrician Temple TX',
    'BrightVolt Electric service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Electrical Service Areas | BrightVolt Electric — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate electrical repair, panel upgrades, and installation. Same-day service available.',
    url,
    siteName: 'BrightVolt Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical Service Areas | BrightVolt Electric — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — TECL-licensed electrical service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
