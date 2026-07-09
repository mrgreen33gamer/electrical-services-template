// BrightVolt Electric — Lighting Installation Service Page
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
  faLightbulb, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faBolt, faPlug, faCarBattery,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function LightingInstallationPage() {

  const expectations = [
    { icon: faSearch, title: "Layout Consultation", description: "We plan fixture placement for even light, task zones, and curb appeal — not just random can lights." },
    { icon: faFileContract, title: "Flat-Rate Install Quote", description: "Fixtures, wiring, dimmers, and labor in one written number before work starts." },
    { icon: faCheckCircle, title: "Clean Cut-Ins & Finishes", description: "Tight cans, level chandeliers, sealed outdoor boxes — no messy drywall disasters." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Every lighting install is backed by our workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Most Rooms Done in a Day", description: "Typical kitchen recessed packages and outdoor packages finish the same day they're started." },
    { icon: faLightbulb, title: "Indoor, Outdoor & Smart", description: "Recessed, pendants, landscape, security, and smart-switch installs under one crew." },
    { icon: faShieldHalved, title: "TECL-Licensed Installers", description: "Proper box support, load ratings, and GFCI protection outdoors — always code-correct." },
  ];

  const processSteps = [
    { number: 1, title: "Plan the Layout", description: "Walk the space, mark fixture locations, confirm dimmers and switches.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Flat-rate price for labor and materials. You supply fixtures or we can source them.", icon: faSearch },
    { number: 3, title: "Install", description: "Cut-ins, wiring, hanging, aiming, and testing every circuit.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "We demo controls, clean up, and leave you with a warrantied install.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1200, label: "Lighting projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years lighting Central Texas homes", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest lighting installs.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential lighting coverage.", badge: "" },
    { town: "Woodway", benefit: "Indoor and outdoor packages available.", badge: "" },
    { town: "Temple", benefit: "Regular Bell County lighting service.", badge: "" },
    { town: "Bellmead", benefit: "Quick turnaround for Bellmead homes.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Lighting layout guidance", us: "✅ Included", others: "❌ Hang-only" },
    { feature: "Smart switch & dimmer setup", us: "✅ Supported", others: "❌ Extra / skipped" },
    { feature: "Outdoor wet-location installs", us: "✅ Code-correct", others: "❌ Mixed quality" },
    { feature: "2-Year Workmanship Warranty", us: "✅ Every job", others: "❌ Rare" },
    { feature: "Flat-rate written quote", us: "✅ Always", others: "❌ Hourly" },
  ];

  const faq = [
    { question: "How much does recessed lighting cost in Waco?", answer: "Most kitchen recessed packages run $150–$300 per can installed depending on access and ceiling type. We quote the full room as a flat rate." },
    { question: "Can you install fixtures I already bought?", answer: "Yes — bring your fixtures and we'll install them, provided they're UL-listed and appropriate for the location (especially outdoors)." },
    { question: "Do you install landscape and security lighting?", answer: "Yes — pathway, uplighting, flood, and camera-ready outdoor circuits with proper weatherproofing." },
    { question: "Can you add dimmers and smart switches?", answer: "Absolutely. We install compatible dimmers and smart switches (Lutron, Leviton, and others) and test them before we leave." },
    { question: "Will installing cans destroy my ceiling?", answer: "We use clean cut-ins and protect floors. Remodel cans are designed for finished ceilings; major patching is rarely needed on standard installs." },
    { question: "How long does outdoor lighting take?", answer: "A typical front-yard package is often a single day. Larger landscape designs may span two days." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Electrical Repairs", body: "Fix flickering or dead lighting circuits first.", link: "/services/electrical-repairs" },
    { icon: faBolt, title: "Panel Upgrades", body: "Add capacity before expanding lighting loads.", link: "/services/panel-upgrades" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "New dedicated lighting circuits where needed.", link: "/services/wiring-rewiring" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "While we're on-site for electrical upgrades.", link: "/services/ev-charger-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Lighting Installation" }]} />
      <SectionIntro title="Lighting Installation in Waco, TX" subtitle="Recessed, outdoor, chandeliers, and smart controls — planned for light quality, aesthetics, and code compliance." />
      <TrustBar headline="2,500+ Central Texas jobs completed by BrightVolt Electric" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on a Lighting Install" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BrightVolt for Lighting" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/lighting-installation" title="Lighting Installation Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Lighting Installation FAQs" /></div>
      <CTABanner headline="Ready to Brighten Your Home?" subline="Free layout consult. Flat-rate quotes. TECL-licensed installers." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Your Lighting Consult" cityName="Waco" slug="services/lighting-installation" spot="lighting-installation-page-form" formVariant={2} /></div>
    </main>
  );
}
