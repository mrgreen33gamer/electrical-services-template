// BrightVolt Electric — Wiring & Rewiring Service Page
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
  faPlug, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faBolt, faLightbulb, faCarBattery,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function WiringRewiringPage() {

  const expectations = [
    { icon: faSearch,       title: "Full Wiring Assessment", description: "We map existing circuits, identify aluminum or knob-and-tube issues, and prioritize the highest-risk rooms first." },
    { icon: faFileContract, title: "Phased or Whole-Home Options", description: "Not every home needs a full rewire on day one. We quote room-by-room phases or a complete project — your choice." },
    { icon: faCheckCircle,  title: "Code-Compliant Copper", description: "New NM-B copper runs, proper boxes, AFCI/GFCI protection where required, clean terminations." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "All wiring work is backed by our 2-Year Workmanship Warranty." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Minimal Disruption Planning", description: "We stage work so kitchens and baths stay usable as long as possible, with clear daily progress." },
    { icon: faPlug,         title: "Aluminum & Legacy Wiring Experts", description: "Safe remediation and rewiring for 1960s–1970s homes common across Central Texas." },
    { icon: faShieldHalved, title: "TECL-Licensed, Permit-Ready", description: "All rewires are permitted and inspection-ready. No shortcuts on grounding or protection." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect & Plan", description: "Walkthrough, circuit mapping, and a written scope for partial or whole-home work.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "Flat-rate quote with timeline. We pull permits before any walls open.", icon: faSearch },
    { number: 3, title: "Pull & Land", description: "New copper runs, boxes set, devices landed, circuits labeled.", icon: faFileContract },
    { number: 4, title: "Test & Warranty", description: "Full circuit testing, inspection, and walkthrough with you.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 600, label: "Rewire and circuit projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,  label: "Years wiring Central Texas homes",      suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest rewire scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential wiring coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Bell County wiring and rewiring.", badge: "" },
    { town: "China Spring", benefit: "Rural shops, barns, and home additions.", badge: "" },
    { town: "McGregor", benefit: "Full service for McGregor properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written scope before walls open", us: "✅ Always", others: "❌ Verbal only" },
    { feature: "Phased rewire options", us: "✅ Available", others: "❌ All-or-nothing" },
    { feature: "Aluminum wiring remediation", us: "✅ Experienced", others: "❌ Often declined" },
    { feature: "2-Year Workmanship Warranty", us: "✅ Every job", others: "❌ Rare" },
    { feature: "TECL-licensed Master Electricians", us: "✅ All crews", others: "❌ Varies" },
  ];

  const faq = [
    { question: "How much does whole-home rewiring cost in Waco?", answer: "Whole-home rewires often run $8,000–$20,000+ depending on square footage, access, and device count. Partial rewires (kitchen/bath) are significantly less. We quote after an on-site assessment." },
    { question: "Do I need to move out during a rewire?", answer: "Usually no for partial rewires. Full-home rewires may require staged power outages — we'll plan the schedule with you." },
    { question: "Is aluminum wiring dangerous?", answer: "Aluminum branch circuits from the 1960s–70s can be a fire risk if not properly terminated. We evaluate condition and recommend COPALUM, AlumiConn, or full copper replacement as appropriate." },
    { question: "Can you add circuits without a full rewire?", answer: "Yes — dedicated circuits for kitchens, workshops, EV chargers, and HVAC are common add-ons when the panel has capacity." },
    { question: "How long does a rewire take?", answer: "A single room can be a day. Whole-home rewires typically take several days to a couple of weeks depending on access and finishes." },
    { question: "Do you handle drywall patching?", answer: "We make clean openings and can coordinate patch/paint referrals. Full finish carpentry is outside our electrical scope unless arranged separately." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Panel Upgrades", body: "Pair rewiring with a modern panel for full capacity.", link: "/services/panel-upgrades" },
    { icon: faWrench, title: "Electrical Repairs", body: "Targeted fixes when a full rewire isn't needed yet.", link: "/services/electrical-repairs" },
    { icon: faLightbulb, title: "Lighting Installation", body: "New lighting layouts as part of your rewire.", link: "/services/lighting-installation" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "Dedicated EV circuits during the project.", link: "/services/ev-charger-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Wiring & Rewiring" }]} />
      <SectionIntro title="Wiring & Rewiring in Waco, TX" subtitle="Whole-home and partial rewires, aluminum remediation, and new circuits — TECL-licensed, flat-rate, code-compliant." />
      <TrustBar headline="2,500+ Central Texas jobs completed by BrightVolt Electric" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on a Wiring Project" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BrightVolt for Wiring" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/wiring-rewiring" title="Wiring Services Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Wiring & Rewiring FAQs" /></div>
      <CTABanner headline="Ready to Rewire Safely?" subline="Free assessment. Flat-rate quotes. TECL-licensed Master Electricians." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Your Wiring Assessment" cityName="Waco" slug="services/wiring-rewiring" spot="wiring-rewiring-page-form" formVariant={2} /></div>
    </main>
  );
}
