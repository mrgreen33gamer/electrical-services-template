import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';

export const metadata: Metadata = {
  title: 'Electrical Tips & Insights | BrightVolt Electric Blog',
  description:
    'Electrical safety tips, panel upgrade guides, and EV charger advice for Waco and Central Texas homeowners from BrightVolt Electric.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Electrical Tips & Insights | BrightVolt Electric Blog',
    description: 'Practical electrical guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'BrightVolt Electric',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
