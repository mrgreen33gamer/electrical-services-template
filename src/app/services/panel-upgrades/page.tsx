// BrightVolt Electric — Panel Upgrades Service Page
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
  faBolt, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faPlug, faCarBattery, faServer,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function PanelUpgradesPage() {

  const expectations = [
    { icon: faSearch,       title: "Load Calculation First", description: "We calculate your actual demand before recommending amperage — no selling a 200A panel when 150A is enough." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Permits, materials, labor, and disposal are all in the number. No surprise change orders mid-install." },
    { icon: faCheckCircle,  title: "Clean, Code-Compliant Install", description: "UL-listed panels and breakers, proper grounding, labeled circuits, inspector-ready on the first pass." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Every panel upgrade is backed by our 2-Year Workmanship Warranty on labor and installation." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Typically 1-Day Install", description: "Most residential panel upgrades are completed in a single day with minimal downtime for your home." },
    { icon: faBolt,         title: "100A to 200A+ Capacity", description: "We handle service upgrades for modern HVAC, EV chargers, workshops, and whole-home demand." },
    { icon: faShieldHalved, title: "Permits & Inspection Included", description: "We pull the city/county permit and schedule inspection so you don't have to chase paperwork." },
  ];

  const processSteps = [
    { number: 1, title: "Free Assessment", description: "We inspect your existing panel, service entrance, and load, then recommend the right amperage.", icon: faHeadset },
    { number: 2, title: "Quote & Permit",  description: "You get a flat-rate quote. We pull the permit and order the panel and breakers.", icon: faSearch },
    { number: 3, title: "Install Day",     description: "Old panel removed, new panel landed, circuits labeled, grounding verified.", icon: faFileContract },
    { number: 4, title: "Inspect & Warranty", description: "We walk you through the new panel, schedule inspection, and back the work with our warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 800, label: "Panel upgrades completed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99,  label: "First-pass inspection rate",                suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,  label: "Years upgrading Central Texas homes",       suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for panel upgrades.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full panel upgrade coverage throughout Hewitt.",     badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway service upgrades.", badge: "" },
    { town: "Temple",       benefit: "Bell County panel upgrades — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger homes and shops.",          badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Load calculation before recommending size", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Permits & inspection coordinated",          us: "✅ Included", others: "❌ Homeowner handles" },
    { feature: "Flat-rate quote (parts + labor + permit)",  us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "2-Year Workmanship Warranty",               us: "✅ Every upgrade", others: "❌ Rare" },
    { feature: "TECL-licensed Master Electricians",         us: "✅ All crews", others: "❌ Varies" },
  ];

  const faq = [
    { question: "How much does a panel upgrade cost in Waco?", answer: "Most residential panel upgrades run $1,800–$4,500 depending on amperage, service entrance condition, and permit requirements. We provide a flat-rate written quote after an on-site assessment." },
    { question: "How long does a panel upgrade take?", answer: "Most homes are done in one day. Complex service upgrades (new meter base, underground feeders) can take longer — we'll give you a realistic timeline at the quote." },
    { question: "Will I be without power?", answer: "Yes, during the swap — typically a few hours. We'll coordinate the outage window with you and restore power before we leave." },
    { question: "Do I need a panel upgrade for an EV charger?", answer: "Often yes if you're on 100A or less and already running modern HVAC. We calculate load first and only recommend an upgrade when it's truly needed." },
    { question: "What brands of panels do you install?", answer: "We install major UL-listed brands common to Central Texas (Square D, Siemens, Eaton, and others) and match breakers to code requirements." },
    { question: "Do you replace Federal Pacific / Zinsco panels?", answer: "Yes — these legacy panels are a known safety concern. We recommend full replacement and can usually complete the swap in a day." },
  ];

  const crossServices = [
    { icon: faWrench,     title: "Electrical Repairs",      body: "Same-day fixes for outlets, breakers, and wiring faults.", link: "/services/electrical-repairs" },
    { icon: faPlug,       title: "Wiring & Rewiring",       body: "New circuits and whole-home rewiring for modern loads.",   link: "/services/wiring-rewiring" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "Level 2 chargers that pair perfectly with a new panel.",   link: "/services/ev-charger-installation" },
    { icon: faServer,     title: "Generator Installation",  body: "Standby generators need adequate service capacity.",       link: "/services/generator-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Panel Upgrades" },
      ]} />
      <SectionIntro
        title="Electrical Panel Upgrades in Waco, TX"
        subtitle="100A to 200A service upgrades, load calculations, permits handled — TECL-licensed, flat-rate, 2-Year Workmanship Warranty."
      />
      <TrustBar headline="2,500+ Central Texas homes trust BrightVolt for electrical upgrades" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on a Panel Upgrade" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose BrightVolt for Panels" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/panel-upgrades" title="Panel Upgrades Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Panel Upgrade FAQs" /></div>
      <CTABanner
        headline="Ready for a Safer, Higher-Capacity Panel?"
        subline="Free assessment. Flat-rate quotes. Permits handled. TECL-licensed Master Electricians."
        primaryText="Call Us Now"
        primaryLink="tel:+12547154400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Panel Upgrade Assessment" cityName="Waco" slug="services/panel-upgrades" spot="panel-upgrades-page-form" formVariant={2} />
      </div>
    </main>
  );
}
