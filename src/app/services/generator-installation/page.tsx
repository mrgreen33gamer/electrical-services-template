// BrightVolt Electric — Generator Installation Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faServer, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faBolt, faPlug, faCarBattery,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function GeneratorInstallationPage() {

  const expectations = [
    { icon: faSearch, title: "Load & Fuel Planning", description: "We size the generator to critical loads (or whole-home), and coordinate gas/propane requirements." },
    { icon: faFileContract, title: "Flat-Rate Project Quote", description: "Generator pad recommendations, transfer switch, electrical labor, and permits in a clear written scope." },
    { icon: faCheckCircle, title: "Automatic Transfer Switch", description: "Properly installed ATS so backup power kicks in safely without backfeeding the grid." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Our electrical install work is covered for two years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Storm-Season Ready Scheduling", description: "We prioritize generator installs before peak storm season and give honest lead times on equipment." },
    { icon: faServer, title: "Standby & Portable Interlock", description: "Whole-home standby systems or portable generator interlock kits — right-sized for your budget." },
    { icon: faShieldHalved, title: "Code-Safe, Utility-Safe", description: "No dangerous double-pole dryer plug hacks. We install transfer equipment the legal, safe way." },
  ];

  const processSteps = [
    { number: 1, title: "Site Assessment", description: "Load review, placement options, fuel source, and noise setbacks.", icon: faHeadset },
    { number: 2, title: "Quote & Order", description: "Flat-rate electrical scope. We coordinate generator delivery timing.", icon: faSearch },
    { number: 3, title: "Install ATS & Wire", description: "Transfer switch, feeders, grounding, and panel connections.", icon: faFileContract },
    { number: 4, title: "Startup & Train", description: "Commissioning, test under load, and walkthrough of the system.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 200, label: "Generator systems installed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest generator project starts.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full standby and portable interlock coverage.", badge: "" },
    { town: "Woodway", benefit: "Quiet-placement planning for Woodway lots.", badge: "" },
    { town: "Temple", benefit: "Bell County generator electrical installs.", badge: "" },
    { town: "China Spring", benefit: "Rural properties and larger standby units.", badge: "" },
    { town: "McGregor", benefit: "Full coverage for McGregor homes and shops.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Proper automatic transfer switch", us: "✅ Always", others: "❌ Sometimes improvised" },
    { feature: "Load calculation & right-sizing", us: "✅ Included", others: "❌ Upsell the biggest unit" },
    { feature: "Permit-ready electrical work", us: "✅ Standard", others: "❌ Varies" },
    { feature: "2-Year Workmanship Warranty", us: "✅ Every install", others: "❌ Rare" },
    { feature: "TECL-licensed Master Electricians", us: "✅ All crews", others: "❌ Varies" },
  ];

  const faq = [
    { question: "How much does generator installation cost in Waco?", answer: "Electrical install for a standby system (ATS + wiring) often runs $2,000–$6,000 depending on size and distance. The generator unit itself is separate. Portable interlock kits are significantly less." },
    { question: "Standby vs portable — which is right for me?", answer: "Standby auto-starts for whole-home or critical circuits. Portable + interlock is cheaper and manual. We'll recommend based on budget and which loads you need during outages." },
    { question: "Do you sell the generator unit?", answer: "We primarily handle electrical installation and can coordinate with equipment suppliers. Many customers purchase the unit through a dealer and hire us for the electrical package." },
    { question: "Is a transfer switch required?", answer: "Yes for safe connection. Backfeeding through a dryer outlet is illegal and deadly for utility workers. We only install proper transfer equipment." },
    { question: "How long does installation take?", answer: "Electrical work for many standby installs is 1–2 days once the pad and unit are ready. Lead time on generators can be the longer wait." },
    { question: "Do I need a panel upgrade first?", answer: "Sometimes — especially for whole-home standby on older 100A service. We assess during the site visit." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Panel Upgrades", body: "Often needed before whole-home standby power.", link: "/services/panel-upgrades" },
    { icon: faWrench, title: "Electrical Repairs", body: "Fix panel and service issues discovered on site.", link: "/services/electrical-repairs" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "Critical-load subpanels and feeder runs.", link: "/services/wiring-rewiring" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "Plan EV + generator loads together.", link: "/services/ev-charger-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Generator Installation" }]} />
      <SectionIntro title="Generator Installation in Waco, TX" subtitle="Standby and portable backup power with proper transfer switches — TECL-licensed, flat-rate electrical installs." />
      <TrustBar headline="2,500+ Central Texas jobs completed by BrightVolt Electric" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on a Generator Install" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BrightVolt for Generators" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/generator-installation" title="Generator Installs Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Generator Installation FAQs" /></div>
      <CTABanner headline="Don't Wait for the Next Outage" subline="Free site assessment. Flat-rate electrical quotes. Safe transfer switch installs." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Your Generator Assessment" cityName="Waco" slug="services/generator-installation" spot="generator-installation-page-form" formVariant={2} /></div>
    </main>
  );
}
