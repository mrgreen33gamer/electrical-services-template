"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faBolt, faWrench, faServer, faPlug,
} from "@fortawesome/free-solid-svg-icons";

export default function ManufacturingIndustrialPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Machine downtime waiting on electrical repairs", consequence: "Every hour of unplanned downtime costs production. Residential-first electricians aren't built for plant schedules." },
    { icon: faFileInvoiceDollar, problem: "Emergency electrical rates destroy maintenance budgets", consequence: "Without a planned vendor and preventive work, every failure is a premium call-out." },
    { icon: faUsers, problem: "New equipment lands without power ready", consequence: "Late circuit runs and disconnect installs delay commissioning of new lines." },
    { icon: faBuilding, problem: "Aging distribution can't support expansion", consequence: "Panels, feeders, and bus capacity become bottlenecks when you add shifts or machinery." },
    { icon: faClipboardList, problem: "Safety and code gaps create liability", consequence: "Unlabeled panels, missing disconnects, and poor grounding create OSHA and insurance exposure." },
    { icon: faHandshake, problem: "No single electrical partner who understands plants", consequence: "Rotating freelancers leave no continuity of knowledge about your facility's distribution." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Production-Aware Scheduling", description: "We plan shutdowns, night work, and phased cutovers so production keeps moving." },
    { icon: faFileInvoiceDollar, title: "Maintenance & CapEx Clarity", description: "Separate emergency response rates from planned project pricing so budgets stay honest." },
    { icon: faUsers, title: "Equipment Power-Up Support", description: "Disconnects, circuits, and panel work timed to equipment delivery and commissioning." },
  ];

  const processSteps = [
    { number: 1, title: "Facility Walkdown", description: "Map distribution, hazards, and expansion bottlenecks with your maintenance lead.", icon: faSearch },
    { number: 2, title: "Plan Work Windows", description: "Align electrical work with production schedules and planned outages.", icon: faCalendarAlt },
    { number: 3, title: "Execute Safely", description: "LOTO-aware installs, clean labeling, and documented changes.", icon: faRocket },
    { number: 4, title: "Document & Support", description: "As-builts, panel schedules, and ongoing repair response.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 40, label: "Industrial and shop facilities supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 90, label: "Planned work completed in scheduled window", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years of Central Texas electrical experience", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Production-window scheduling", us: "✅ Planned cutovers", others: "❌ Show-up anytime" },
    { feature: "Equipment power-up support", us: "✅ Commissioning-ready", others: "❌ Residential focus" },
    { feature: "Distribution upgrades", us: "✅ Panels & feeders", others: "❌ Small jobs only" },
    { feature: "Documentation & labeling", us: "✅ Standard practice", others: "❌ Inconsistent" },
    { feature: "TECL-licensed industrial crews", us: "✅ Always", others: "❌ Varies" },
  ];

  const faq = [
    { question: "Do you work inside active manufacturing facilities?", answer: "Yes — with safety orientation, LOTO awareness, and scheduling around production." },
    { question: "Can you support new machine installs?", answer: "Yes. We run feeders, install disconnects, and coordinate with equipment vendors during commissioning." },
    { question: "Do you handle 3-phase commercial service work?", answer: "Yes for light industrial and commercial 3-phase distribution common to shops and plants in our service area. Large utility-side work is coordinated as needed." },
    { question: "Can you provide emergency plant electrical response?", answer: "Yes — priority response is available for facilities under a standing relationship. Call (254) 715-4400." },
    { question: "What areas do you cover for industrial work?", answer: "Waco, Temple, Killeen, McGregor, and surrounding Central Texas industrial corridors." },
  ];

  const services = [
    { icon: faWrench, title: "Electrical Repairs", body: "Fast plant and shop electrical troubleshooting.", link: "/services/electrical-repairs" },
    { icon: faBolt, title: "Panel Upgrades", body: "Distribution upgrades for expansion loads.", link: "/services/panel-upgrades" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "Machine circuits, feeders, and shop rewires.", link: "/services/wiring-rewiring" },
    { icon: faServer, title: "Generator Installation", body: "Backup power for critical plant systems.", link: "/services/generator-installation" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for shops and light industrial facilities.", badge: "Home Base" },
    { town: "McGregor", benefit: "Industrial corridor and fabrication shops.", badge: "" },
    { town: "Temple", benefit: "Manufacturing and warehouse facilities.", badge: "" },
    { town: "Killeen", benefit: "Light industrial and logistics buildings.", badge: "" },
    { town: "Bellmead", benefit: "Industrial-adjacent properties.", badge: "" },
    { town: "China Spring", benefit: "Rural shops and equipment barns.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Manufacturing & Industrial" }]} />
      <SectionIntro title="Electrical Services for Manufacturing & Industrial Facilities" subtitle="Production-aware repairs, equipment power-ups, and distribution upgrades — TECL-licensed crews for Central Texas plants and shops." />
      <TrustBar headline="Industrial-ready electrical support for Central Texas facilities" />
      <div className={styles.section}><IndustryPainPoints industry="manufacturing" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Plants & Shops" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Industrial Services We Deliver" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/manufacturing-industrial" title="Industrial Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Manufacturing & Industrial FAQs" /></div>
      <CTABanner headline="Need Electrical Support That Respects Production?" subline="Planned cutovers, equipment power-ups, TECL-licensed industrial crews." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Request a Facility Walkdown" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Schedule a Facility Walkdown" cityName="Waco" slug="industries/manufacturing-industrial" spot="mfg-industry-form" formVariant={2} /></div>
    </main>
  );
}
