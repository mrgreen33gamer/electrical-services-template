// BrightVolt Electric — Electrical Repairs Service Page
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
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faBolt, faPlug, faLightbulb, faCarBattery,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function ElectricalRepairsPage() {

  const expectations = [
    { icon: faSearch,       title: "Same-Day Diagnosis",                      description: "We arrive on time, run a full electrical diagnosis, and explain what's wrong in plain English — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Touch Anything", description: "You get a written price before any work starts. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Fix It Right the First Time",             description: "We stock common breakers, outlets, and switches on every truck — most repairs are completed in a single visit." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty",             description: "Every repair we complete is backed by our workmanship warranty. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Emergency Service — Any Time",           description: "We answer 7 days a week, including evenings and weekends. Electrical hazards and outages can't wait until Monday." },
    { icon: faWrench,       title: "All Makes & Systems Serviced",           description: "Residential and light commercial — breakers, outlets, switches, GFCI/AFCI, lighting circuits, and more." },
    { icon: faShieldHalved, title: "TECL-Licensed Master Electricians",      description: "Every electrician is TECL-licensed. You're never dealing with an unlicensed subcontractor on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",      description: "Contact us by phone, text, or online. We'll schedule you in — usually same-day during business hours.", icon: faHeadset },
    { number: 2, title: "Tech Arrives",      description: "On time, in uniform, with a fully stocked truck. Diagnosis starts immediately.",                         icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",   description: "We show you the exact price before any work begins. You decide — zero pressure.",                        icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "Repaired with quality parts, tested before we leave, and backed by our workmanship warranty.",           icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2500, label: "Electrical jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "First-visit fix rate",                            suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners",              suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available electricians.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full electrical repair coverage throughout Hewitt.",         badge: "" },
    { town: "Woodway",      benefit: "Same-day electrical service for Woodway neighborhoods.",     badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.",     badge: "" },
    { town: "Temple",       benefit: "Full electrical service coverage for Bell County homes.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts",  us: "✅ Always written",      others: "❌ Hourly + estimate only" },
    { feature: "2-Year Workmanship Warranty",         us: "✅ Every job",            others: "❌ Rare or none" },
    { feature: "TECL-licensed Master Electricians",   us: "✅ All techs",            others: "❌ Not always" },
    { feature: "Emergency service 7 days/week",       us: "✅ Always available",     others: "❌ M–F business hours" },
    { feature: "Parts on truck — same-visit repair",  us: "✅ Most repairs",         others: "❌ Often a return trip" },
  ];

  const faq = [
    { question: "How much does electrical repair cost in Waco?", answer: "Most electrical repairs range from $150–$650. Outlet or switch replacement often runs $150–$300. Breaker replacement is typically $150–$400. We quote flat-rate before starting." },
    { question: "Can you fix my electrical issue the same day I call?", answer: "In most cases, yes — especially during business hours. We dispatch from Waco and keep common parts on every truck. Call before noon and same-day service is usually available." },
    { question: "What are common signs I need an electrician?", answer: "Tripping breakers, warm outlets, flickering lights, buzzing panels, burning smells, or dead circuits are all signals to call us immediately." },
    { question: "Do you handle GFCI and AFCI issues?", answer: "Yes — we diagnose and replace GFCI/AFCI breakers and outlets, and explain why they tripped so the problem doesn't keep coming back." },
    { question: "Is my issue a repair or a full panel upgrade?", answer: "If breakers trip under normal load, the panel is warm, or you're still on a 60–100A service with modern appliances, an upgrade may be safer. We'll give you an honest recommendation either way." },
    { question: "Do you service commercial properties?", answer: "Yes — light commercial and multi-unit properties are within our scope. Call to discuss your building and timeline." },
  ];

  const crossServices = [
    { icon: faBolt,       title: "Panel Upgrades",         body: "100A to 200A panel replacements and service upgrades.", link: "/services/panel-upgrades" },
    { icon: faPlug,       title: "Wiring & Rewiring",      body: "Whole-home rewiring and new circuit runs.",             link: "/services/wiring-rewiring" },
    { icon: faLightbulb,  title: "Lighting Installation",  body: "Recessed, outdoor, and smart lighting installs.",       link: "/services/lighting-installation" },
    { icon: faCarBattery, title: "EV Charger Installation", body: "Level 2 home EV charger installs, all major brands.",  link: "/services/ev-charger-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Electrical Repairs" },
      ]} />

      <SectionIntro
        title="Electrical Repairs in Waco, TX"
        subtitle="Same-day diagnosis, flat-rate pricing, and a 2-Year Workmanship Warranty — for outlets, breakers, switches, and wiring faults."
      />

      <TrustBar headline="2,500+ Central Texas homeowners trust BrightVolt for electrical service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Electrical Repair" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls BrightVolt First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/electrical-repairs" title="Electrical Repair Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Electrical Repair FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Power Out? We're Ready Right Now."
        subline="Same-day service available. Flat-rate pricing, 2-Year Workmanship Warranty, TECL-licensed."
        primaryText="Call Us Now"
        primaryLink="tel:+12547154400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Electrical Repair"
          cityName="Waco"
          slug="services/electrical-repairs"
          spot="electrical-repairs-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
