// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact BrightVolt Electric | Schedule Service in Waco & Central Texas',
  description:
    'Contact BrightVolt Electric to schedule electrical repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 715-4400.',
  keywords: [
    'contact BrightVolt Electric',
    'electrical service Waco TX',
    'schedule electrical repair Waco',
    'electrical estimate Central Texas',
    'BrightVolt contact',
    '254-715-4400',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact BrightVolt Electric | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, 2-Year Workmanship Warranty, TECL-licensed electricians.',
    url,
    siteName: 'BrightVolt Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact BrightVolt Electric | Waco & Central Texas',
    description: 'Schedule electrical service or get a free estimate. Call (254) 715-4400.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
