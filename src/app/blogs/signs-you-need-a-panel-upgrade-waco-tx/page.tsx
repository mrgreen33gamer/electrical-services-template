'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faTemperatureHigh, faPlug, faExclamationTriangle, faLightbulb, faHouseChimney, faFire } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Many Waco homes still run on 60A or 100A panels built for a different era — before two ACs, EV chargers, home offices, and induction ranges. An overloaded or outdated panel isn't just inconvenient; it can be a fire hazard. Here are the seven signs we see most often on panel assessments across Central Texas.",
  },
  {
    type: 'cards',
    heading: '7 Signs You Need a Panel Upgrade',
    cards: [
      { icon: faBolt, title: 'Breakers trip under normal load', body: 'If running the dryer and microwave together kills a circuit, your service may not have enough capacity — or breakers are failing.' },
      { icon: faTemperatureHigh, title: 'Warm panel cover or burning smell', body: 'Heat at the panel is never normal. Warm metal, discolored breakers, or a plastic/burn smell means call a licensed electrician immediately.' },
      { icon: faPlug, title: 'You still have a fuse box or 60A service', body: 'Fuse boxes and 60A services are legacy gear. Modern homes almost always need 150–200A for safe capacity.' },
      { icon: faExclamationTriangle, title: 'Federal Pacific, Zinsco, or Pushmatic panel', body: 'These brands have well-documented failure modes. Replacement is the recommended path, not more band-aids.' },
      { icon: faLightbulb, title: 'Flickering lights when large loads start', body: 'Lights dimming when the AC or well pump kicks on can signal undersized service or poor connections in the panel.' },
      { icon: faHouseChimney, title: 'You want an EV charger or whole-home generator', body: 'Level 2 EV chargers and standby generators often require a panel capacity check — and many 100A services come up short.' },
      { icon: faFire, title: 'Aluminum branch wiring or double-tapped breakers', body: 'Improper terminations and double-taps are common in older panels and should be corrected as part of a proper upgrade.' },
    ],
  },
  {
    type: 'table',
    heading: 'Repair vs. Panel Upgrade — What Fits',
    tableHeaders: ['Factor', 'Targeted Repair', 'Full Panel Upgrade'],
    tableRows: [
      ['Issue scope', 'One bad breaker or outlet', 'Chronic trips, heat, or capacity shortfall'],
      ['Panel age / brand', 'Modern UL-listed panel', 'Fuse box, FPE, Zinsco, or 60A service'],
      ['Future loads planned', 'No major new equipment', 'EV charger, generator, shop tools'],
      ['Typical cost (Waco)', '$150–$650', '$1,800–$4,500'],
      ['Longevity', 'Fixes the symptom', '10–30+ years of safe capacity'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your panel cover is warm to the touch after a normal evening of AC + cooking, stop using non-essential loads and call a TECL-licensed electrician the same day.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Get a free panel assessment before symptoms escalate into a fire hazard',
      'Ask for a written load calculation — not just a sales pitch for 200A',
      'Confirm permits and inspection are included in the quote',
      'If you plan an EV charger or generator, size the panel for those loads now',
      'Never ignore burning smells or scorched breakers — treat them as emergencies',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs You Need an Electrical Panel Upgrade in Waco, TX"
        description="Tripping breakers, warm panel covers, and aluminum wiring are more than annoyances — they can be safety hazards. Here are the clear signs your panel is outdated or overloaded."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Signs you need an electrical panel upgrade in Waco TX"
        category="Safety"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Think Your Panel Needs Attention?"
        body="Get a free panel assessment from BrightVolt Electric — Waco's TECL-licensed electrical contractor."
        buttonText="Schedule a Panel Assessment"
        buttonHref="/services/panel-upgrades"
      />
      <NewsletterSignup variant={1} spot="panel-upgrade-signs-blog" />
    </>
  );
}
