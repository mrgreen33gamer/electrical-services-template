'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCarBattery, faBolt, faFileContract, faGaugeHigh, faHouse, faWrench } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Home EV charging is one of the most popular electrical upgrades in Central Texas — but a good install starts with panel capacity, amperage choice, and permit requirements, not just picking a wall unit on Amazon. Here's what Waco homeowners should know before booking an install.",
  },
  {
    type: 'cards',
    heading: 'What to Know Before You Install',
    cards: [
      { icon: faBolt, title: 'Level 1 vs Level 2', body: 'Level 1 (120V) is slow. Level 2 (240V) is what most daily drivers need — typically a 40–50A dedicated circuit.' },
      { icon: faGaugeHigh, title: 'Panel capacity first', body: 'A load calculation tells you if your panel can support a charger without upgrading service. Skip this step and you risk nuisance trips — or unsafe installs.' },
      { icon: faCarBattery, title: 'Hardwired vs plug-in', body: 'Many wall connectors are hardwired. NEMA 14-50 plug-in setups are flexible but still need a properly installed dedicated circuit.' },
      { icon: faHouse, title: 'Indoor vs outdoor mount', body: 'Outdoor mounts need weather-rated equipment and correct GFCI protection. Garage installs are simpler when the panel is nearby.' },
      { icon: faFileContract, title: 'Permits matter', body: 'Most cities require a permit for new 240V circuits. A TECL-licensed electrician handles this so the install is inspection-ready.' },
      { icon: faWrench, title: 'Brand compatibility', body: 'Tesla Wall Connector, ChargePoint, JuiceBox, and others all install fine when the circuit and mounting match manufacturer specs.' },
    ],
  },
  {
    type: 'table',
    heading: 'Typical Cost Ranges in Waco',
    tableHeaders: ['Scenario', 'What\'s Involved', 'Typical Range'],
    tableRows: [
      ['Simple garage install', 'Short circuit run, panel has capacity', '$600–$1,200'],
      ['Long conduit path', 'Panel far from parking, exterior conduit', '$1,000–$1,800'],
      ['With panel upgrade', '100A → 200A plus charger circuit', '$2,400–$5,500+'],
      ['Outdoor pedestal', 'Weather-rated mount + longer run', '$1,200–$2,500'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Don't buy the highest-amp charger by default. Match amperage to your panel capacity and daily driving needs — a correctly sized 40A circuit often charges overnight with room to spare.",
  },
  {
    type: 'tips',
    heading: 'Homeowner Checklist',
    items: [
      'Get a free panel capacity check before buying hardware',
      'Decide hardwired vs NEMA 14-50 based on future flexibility',
      'Confirm permit and inspection are in the electrician\'s quote',
      'Plan conduit path for clean aesthetics — especially outdoor runs',
      'If you also want a generator later, size the panel with both loads in mind',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="What to Know Before Installing a Home EV Charger in Waco, TX"
        description="Level 2 chargers, amperage, permits, and panel capacity — an honest guide to installing a home EV charger for Central Texas homeowners."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Home EV charger installation guide for Waco TX"
        category="Installation"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Install a Level 2 Charger?"
        body="BrightVolt Electric installs Tesla and all major brands — capacity check included, TECL-licensed."
        buttonText="Get an EV Charger Quote"
        buttonHref="/services/ev-charger-installation"
      />
      <NewsletterSignup variant={1} spot="ev-charger-guide-blog" />
    </>
  );
}
