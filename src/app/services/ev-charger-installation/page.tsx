// BrightVolt Electric — EV Charger Installation Service Page
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
  faCarBattery, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faBolt, faPlug, faServer,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function EVChargerInstallationPage() {

  const expectations = [
    { icon: faSearch, title: "Panel Capacity Check First", description: "We verify your panel can support a Level 2 charger before selling hardware — no wasted spend." },
    { icon: faFileContract, title: "Flat-Rate Install Quote", description: "Charger mount, dedicated circuit, conduit, and labor in one written number." },
    { icon: faCheckCircle, title: "All Major Brands Supported", description: "Tesla Wall Connector, ChargePoint, JuiceBox, Grizzl-E, and hardwired or NEMA 14-50 setups." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Our install labor is warrantied for two years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Most Installs in Half a Day", description: "Typical garage installs finish in 2–4 hours when the panel has capacity." },
    { icon: faCarBattery, title: "40A–60A Dedicated Circuits", description: "Proper breaker sizing, wire gauge, and GFCI protection per manufacturer and NEC requirements." },
    { icon: faShieldHalved, title: "Permit-Ready Installs", description: "We handle permits where required and leave the install inspection-ready." },
  ];

  const processSteps = [
    { number: 1, title: "Site Visit", description: "Check panel, garage path, and preferred charger location.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Flat-rate price for circuit run and install. Charger can be owner-supplied or sourced.", icon: faSearch },
    { number: 3, title: "Install", description: "Dedicated circuit, mount, land, configure, and test charge session.", icon: faFileContract },
    { number: 4, title: "Hand-Off", description: "App setup tips, load guidance, and warranty paperwork.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 350, label: "EV chargers installed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "Successful first-charge rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years of licensed electrical experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest EV charger installs.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full Level 2 coverage for Hewitt homes.", badge: "" },
    { town: "Woodway", benefit: "Garage and driveway installs available.", badge: "" },
    { town: "Temple", benefit: "Regular Bell County EV installs.", badge: "" },
    { town: "Killeen", benefit: "Full coverage including Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural properties and shop installs.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Panel load calculation first", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "All major charger brands", us: "✅ Supported", others: "❌ Brand-limited" },
    { feature: "Flat-rate written quote", us: "✅ Always", others: "❌ Hourly" },
    { feature: "2-Year Workmanship Warranty", us: "✅ Every install", others: "❌ Rare" },
    { feature: "TECL-licensed Master Electricians", us: "✅ All crews", others: "❌ Varies" },
  ];

  const faq = [
    { question: "How much does EV charger installation cost in Waco?", answer: "Most Level 2 installs run $600–$1,800 depending on circuit length, amperage, and whether a panel upgrade is needed. The charger unit is often separate if you supply it." },
    { question: "Do I need a panel upgrade for an EV charger?", answer: "Not always. We calculate available capacity first. Many 200A panels can support a 40–50A charger; older 100A panels often need an upgrade." },
    { question: "Level 1 vs Level 2 — which do I need?", answer: "Level 1 (120V) is slow overnight topping-off. Level 2 (240V) is what most homeowners want for daily commuting — we specialize in Level 2 hardwired or plug-in installs." },
    { question: "Can you install a Tesla Wall Connector?", answer: "Yes — hardwired Tesla Wall Connectors are one of our most common installs, including Gen 3 units." },
    { question: "Indoor garage vs outdoor mount?", answer: "Both. Outdoor mounts require weather-rated equipment and proper GFCI protection — we install either correctly." },
    { question: "How long does installation take?", answer: "Often 2–4 hours for a straightforward garage run. Longer conduit paths or panel work extend the timeline — we'll tell you upfront." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Panel Upgrades", body: "Add capacity when your service can't support Level 2.", link: "/services/panel-upgrades" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "Long circuit runs and garage rewires.", link: "/services/wiring-rewiring" },
    { icon: faWrench, title: "Electrical Repairs", body: "Fix related outlet and breaker issues.", link: "/services/electrical-repairs" },
    { icon: faServer, title: "Generator Installation", body: "Backup power for home + EV lifestyle.", link: "/services/generator-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "EV Charger Installation" }]} />
      <SectionIntro title="EV Charger Installation in Waco, TX" subtitle="Level 2 home charging for Tesla and all major brands — dedicated circuits, permits, TECL-licensed electricians." />
      <TrustBar headline="2,500+ Central Texas jobs completed by BrightVolt Electric" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on an EV Charger Install" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose BrightVolt for EV Chargers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/ev-charger-installation" title="EV Charger Installs Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="EV Charger Installation FAQs" /></div>
      <CTABanner headline="Ready to Charge at Home?" subline="Free capacity check. Flat-rate quotes. All major brands supported." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Your EV Charger Install" cityName="Waco" slug="services/ev-charger-installation" spot="ev-charger-page-form" formVariant={2} /></div>
    </main>
  );
}
