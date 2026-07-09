// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-you-need-a-panel-upgrade-waco-tx',
    title:    '7 Signs You Need an Electrical Panel Upgrade in Waco, TX',
    excerpt:  'Tripping breakers, warm panel covers, and aluminum wiring are more than annoyances — they can be safety hazards. Here are the clear signs your panel is outdated or overloaded.',
    category: 'Safety',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Signs you need an electrical panel upgrade in Waco TX',
    featured: true,
  },
  {
    slug:     'ev-charger-installation-guide-waco-tx',
    title:    'What to Know Before Installing a Home EV Charger in Waco, TX',
    excerpt:  'Level 2 chargers, amperage, permits, and panel capacity — an honest guide to installing a home EV charger for Central Texas homeowners.',
    category: 'Installation',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Home EV charger installation guide for Waco TX',
  },
  {
    slug:     'electrical-safety-warning-signs-waco-tx',
    title:    'Electrical Safety Warning Signs Every Waco Homeowner Should Know',
    excerpt:  'Flickering lights, burning smells, and buzzing outlets are early warnings. Learn which electrical red flags mean call a licensed electrician today.',
    category: 'Safety',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Electrical safety warning signs for Waco TX homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
