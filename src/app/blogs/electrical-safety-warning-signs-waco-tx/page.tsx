'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFire, faBolt, faLightbulb, faPlug, faExclamationTriangle, faHouseCrack, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Faulty home wiring rarely fails without warning. Central Texas heat, aging homes, and DIY electrical work create a perfect mix for problems that start small and become dangerous. If you notice any of the following, treat it as a reason to call a TECL-licensed electrician — not a wait-and-see.",
  },
  {
    type: 'cards',
    heading: 'Warning Signs of Faulty Wiring',
    cards: [
      { icon: faFire, title: 'Burning smell or scorch marks', body: 'Plastic or ozone smells near outlets, switches, or the panel are emergency-level symptoms. Cut power to the circuit and call immediately.' },
      { icon: faLightbulb, title: 'Flickering or dimming lights', body: 'Occasional flicker can be a loose bulb — repeated dimming when appliances start often points to loose connections or capacity issues.' },
      { icon: faPlug, title: 'Warm outlets or plugs', body: 'Outlets and cords should never feel hot. Warmth usually means overload, poor contact, or failing devices.' },
      { icon: faBolt, title: 'Frequent breaker trips', body: 'Breakers protect you. If one trips repeatedly, something is wrong — don\'t keep resetting it without a diagnosis.' },
      { icon: faVolumeHigh, title: 'Buzzing switches or panels', body: 'Audible buzzing or crackling is a sign of arcing or loose terminals. That\'s a fire risk, not background noise.' },
      { icon: faHouseCrack, title: 'Dead zones or intermittent power', body: 'Rooms that lose power randomly can indicate failing breakers, damaged wiring, or connection issues in junction boxes.' },
      { icon: faExclamationTriangle, title: 'GFCI/AFCI that won\'t reset', body: 'Protection devices trip for a reason. If they won\'t reset, there may be a ground fault, arc fault, or failed device.' },
    ],
  },
  {
    type: 'table',
    heading: 'How Urgent Is It?',
    tableHeaders: ['Symptom', 'Urgency', 'Recommended Action'],
    tableRows: [
      ['Burning smell / smoke', 'Emergency', 'Leave if unsafe, call electrician / 911 if fire'],
      ['Hot outlet or scorched faceplate', 'Same day', 'Stop using circuit, call licensed electrician'],
      ['Repeated breaker trips', 'Within 24–48 hrs', 'Diagnosis before reset habit continues'],
      ['Mild flicker with large loads', 'This week', 'Panel/load assessment'],
      ['Old aluminum or cloth wiring', 'Plan soon', 'Inspection and remediation plan'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Never \"solve\" a tripping breaker with a higher-amp breaker. That bypasses protection and can turn a wiring problem into a structure fire.",
  },
  {
    type: 'tips',
    heading: 'Stay Safe Until Help Arrives',
    items: [
      'Unplug non-essential loads on the affected circuit',
      'Do not open the panel or tighten terminals yourself',
      'Photograph scorch marks or tripped breakers for the tech',
      'Keep kids and pets away from warm outlets',
      'Call (254) 715-4400 for same-day emergency electrical service in Central Texas',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Electrical Safety Warning Signs Every Waco Homeowner Should Know"
        description="Flickering lights, burning smells, and buzzing outlets are early warnings. Learn which electrical red flags mean call a licensed electrician today."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Electrical safety warning signs for Waco TX homes"
        category="Safety"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Seeing Any of These Warning Signs?"
        body="Don't wait. BrightVolt Electric provides same-day electrical diagnostics across Waco and Central Texas."
        buttonText="Schedule Electrical Repair"
        buttonHref="/services/electrical-repairs"
      />
      <NewsletterSignup variant={1} spot="electrical-safety-blog" />
    </>
  );
}
