import type { Metadata } from 'next';
import { getPostBySlug } from '../../../../libs/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brightvoltelectric.com';
const slug     = 'signs-you-need-a-panel-upgrade-waco-tx';
const post     = getPostBySlug(slug)!;
const url      = `${BASE_URL}/blogs/${slug}`;
const imgUrl   = `${BASE_URL}${post.imageSrc}`;

export const metadata: Metadata = {
  title: `${post.title} | BrightVolt Electric`,
  description: post.excerpt,
  keywords: ['panel upgrade signs', 'electrical panel upgrade Waco TX', 'outdated breaker box', 'when to upgrade electrical panel texas'],
  authors: [{ name: 'Marcus Hale', url: BASE_URL }],
  alternates: { canonical: url },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url,
    siteName: 'BrightVolt Electric',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-07-03T08:00:00-05:00',
    authors: ['Marcus Hale'],
    images: [{ url: imgUrl, width: 1200, height: 630, alt: post.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt,
    images: [imgUrl],
  },
  robots: { index: true, follow: true },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: '2026-07-03T08:00:00-05:00',
  dateModified: '2026-07-03T08:00:00-05:00',
  author: {
    '@type': 'Person',
    name: 'Marcus Hale',
    url: BASE_URL,
    jobTitle: 'Owner & TECL-Licensed Master Electrician, BrightVolt Electric',
  },
  publisher: {
    '@type': 'Organization',
    name: 'BrightVolt Electric',
    url: BASE_URL,
  },
  image: imgUrl,
  url,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  articleSection: 'Safety',
  inLanguage: 'en-US',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  );
}
