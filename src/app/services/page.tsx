// BrightVolt Electric — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faBolt, faPlug, faLightbulb, faWrench, faCarBattery, faServer,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faWrench, title: "Electrical Repairs", body: "Same-day diagnosis on outlets, breakers, switches, and wiring faults. Flat-rate pricing and stocked trucks for first-visit fixes.", link: "/services/electrical-repairs" },
    { icon: faBolt, title: "Panel Upgrades", body: "100A to 200A panel replacements, load calculations, and permit-ready installs so your home can handle modern demand safely.", link: "/services/panel-upgrades" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "Whole-home rewiring, aluminum remediation, and new circuit runs for kitchens, shops, and additions.", link: "/services/wiring-rewiring" },
    { icon: faLightbulb, title: "Lighting Installation", body: "Recessed cans, outdoor lighting, chandeliers, and smart-switch installs planned for light quality and efficiency.", link: "/services/lighting-installation" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "Level 2 home EV chargers for Tesla and all major brands — dedicated circuits, permits, TECL-licensed.", link: "/services/ev-charger-installation" },
    { icon: faServer, title: "Generator Installation", body: "Standby and portable backup power with automatic transfer switches for Texas storm season.", link: "/services/generator-installation" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Diagnosis First", description: "We explain what's wrong in plain English and show options — not just the most expensive fix." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing, no surprise add-ons. You approve the price before we start." },
    { icon: faShieldHalved, title: "TECL-Licensed Master Electricians", description: "Every electrician is TECL-licensed. Bonded and insured on every job." },
    { icon: faTag, title: "2-Year Workmanship Warranty", description: "Every installation is backed by our 2-Year Workmanship Warranty." },
  ];

  const metrics = [
    { icon: faTrophy, value: 2500, label: "Electrical jobs completed since 2010", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real BrightVolt team member — not a call center. Same-day dispatch most days." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "There's no subscription or service agreement required. You hire us because the work is done right." },
    { icon: faLock, title: "Licensed, Bonded & Insured", description: "TECL-licensed and fully insured. Proof of insurance available on request for property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. We'll schedule same-day or next-day when possible.", icon: faHeadset },
    { number: 2, title: "Diagnose On-Site", description: "TECL-licensed electrician inspects and explains findings in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Complete & Warranty", description: "Quality materials, clean work, 2-Year Workmanship Warranty on installs.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay — no hourly billing." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Every install is backed for two years. If our workmanship fails, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the result? We'll return to make it right." },
    { icon: faLock, title: "Licensed, Bonded & Insured", description: "TECL-licensed Master Electricians. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available electricians.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and businesses.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "2-Year Workmanship Warranty", us: "✅ Every install", others: "❌ Rare or none" },
    { feature: "TECL-licensed Master Electricians", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Same-day emergency service", us: "✅ 7 days/week", others: "❌ Business hours only" },
  ];

  const faq = [
    { question: "How much does electrical service cost in Waco?", answer: "Repairs typically range from $150–$650. Panel upgrades run $1,800–$4,500. EV charger installs often $600–$1,800. We always provide a flat-rate written quote before starting." },
    { question: "Are you TECL-licensed?", answer: "Yes — BrightVolt Electric is TECL-licensed, bonded, and insured. License number available on request." },
    { question: "Do you offer emergency service?", answer: "Yes — emergency electrical service 7 days a week including evenings. Call (254) 715-4400." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — every installation is backed by our 2-Year Workmanship Warranty." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule an assessment and provide written pricing before any work starts." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Electrical Services for Waco & Central Texas"
        subtitle="Panel upgrades, wiring, lighting, repairs, EV chargers, and generators — done right, priced upfront, backed by a 2-Year Workmanship Warranty."
      />
      <TrustBar headline="Trusted by 2,500+ Central Texas homes and businesses since 2010" />
      <div className={styles.section}><ServiceCardComponent heading="What We Do" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses BrightVolt" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Electrical Service FAQs" /></div>
      <CTABanner
        headline="Ready to Start Your Electrical Project?"
        subline="Same-day service available. Flat-rate pricing, 2-Year Workmanship Warranty, no contracts ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547154400"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="services" spot="services-page-form" formVariant={2} />
      </div>
    </>
  );
}
