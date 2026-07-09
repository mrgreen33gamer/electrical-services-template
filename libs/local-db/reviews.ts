// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for BrightVolt Electric — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Panel Upgrade',
    text:     "Our 60-amp panel was tripping every time we ran the dryer and AC. BrightVolt upgraded us to 200A in one day, pulled the permit, and explained everything clearly. Pricing was upfront and the house has never felt safer. I can't recommend them enough.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Electrical Repair',
    text:     'Woke up to half the house dead. Called BrightVolt and they had someone at my door by 9am. Found a bad breaker and a loose neutral, fixed the same day, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'EV Charger Installation',
    text:     'Had three companies quote a Tesla wall connector install. BrightVolt was honest about the dedicated circuit run we actually needed — not just upselling a whole panel. The install was clean, fast, and our charger has been rock-solid.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Lighting Installation',
    text:     'They rewired our kitchen for recessed cans and under-cabinet lighting. The layout advice was excellent and the finish work was clean — no drywall mess left behind. Worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Generator Installation',
    text:     'After the last ice storm we finally bit the bullet on a standby generator. BrightVolt handled the transfer switch, gas line coordination, and permit. Tested it before they left and walked us through the app. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Wiring & Rewiring',
    text:     'Our 1970s house still had aluminum branch circuits. BrightVolt rewired the kitchen and baths the right way — no shortcuts, no hidden fees. My new go-to electrical company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Electrical',
    text:     'We hired BrightVolt to rework the electrical for our retail buildout over a weekend so we wouldn\'t lose business hours. They finished ahead of schedule and the inspector signed off first pass. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Electrical Repair',
    text:     'Called them about a small outlet issue after a move-in and they treated it like it mattered just as much as a whole-house rewire. Fair pricing, no upselling, and the fix held up. Thank you.',
  },
];

export default reviews;
