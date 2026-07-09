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
  faBolt, faWrench, faLightbulb, faPlug,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialRetailDevelopersPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Tenant TI electrical work slips the open date", consequence: "Missed electrical inspections push grand openings and burn landlord/tenant relationships." },
    { icon: faFileInvoiceDollar, problem: "Change orders pile up after rough-in", consequence: "Vague scopes leave developers fighting invoices instead of opening on schedule." },
    { icon: faUsers, problem: "Retail power needs outgrow the shell", consequence: "Restaurants, salons, and medical tenants need more capacity than the base building planned for." },
    { icon: faBuilding, problem: "Common-area lighting looks dated and expensive to run", consequence: "Inefficient parking lot and corridor lighting hurts curb appeal and OpEx." },
    { icon: faClipboardList, problem: "Too many electrical vendors on one site", consequence: "Shell electrician, TI electrician, and lighting vendor don't coordinate — rework multiplies." },
    { icon: faHandshake, problem: "Inspectors fail first-pass because of sloppy documentation", consequence: "Delays compound when plans, load calcs, and as-builts aren't ready." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Schedule-Driven Commercial Work", description: "We plan around open dates, after-hours access, and GC schedules so electrical never becomes the long pole." },
    { icon: faFileInvoiceDollar, title: "Clear TI & Shell Scopes", description: "Written scopes for base building and tenant improvement electrical — fewer change-order fights." },
    { icon: faUsers, title: "Retail & Restaurant Load Expertise", description: "Kitchen equipment, HVAC tie-ins, and high-load tenant fit-outs planned correctly the first time." },
  ];

  const processSteps = [
    { number: 1, title: "Plans & Load Review", description: "We review drawings, tenant equipment lists, and existing service capacity.", icon: faSearch },
    { number: 2, title: "Scope & Schedule", description: "Shell vs TI scope, milestones, and after-hours work windows.", icon: faCalendarAlt },
    { number: 3, title: "Rough-In & Finish", description: "Rough, trim, lighting, and equipment connections coordinated with the GC.", icon: faRocket },
    { number: 4, title: "Inspect & Hand-Off", description: "First-pass inspection support and as-built documentation for ownership.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "Commercial and retail projects completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 95, label: "On-schedule completion rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years of Central Texas commercial work", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Open-date driven scheduling", us: "✅ Built into plan", others: "❌ Best-effort only" },
    { feature: "Shell + TI scope clarity", us: "✅ Written scopes", others: "❌ Vague T&M" },
    { feature: "Retail / restaurant load planning", us: "✅ Experienced", others: "❌ Residential-first crews" },
    { feature: "After-hours capability", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "TECL-licensed commercial crews", us: "✅ Always", others: "❌ Varies" },
  ];

  const faq = [
    { question: "Do you handle tenant improvement electrical?", answer: "Yes — TI packages for retail, restaurant, office, and medical tenants including panels, circuits, lighting, and equipment connections." },
    { question: "Can you work after hours so stores stay open?", answer: "Yes. After-hours and weekend windows are available for occupied retail and office buildings." },
    { question: "Do you coordinate with GCs and architects?", answer: "Yes — we work as part of the project team and provide the documentation inspectors expect." },
    { question: "Can you upgrade service for a high-load tenant?", answer: "Yes. We evaluate existing service and design panel/service upgrades when restaurants or medical tenants need more capacity." },
    { question: "What markets do you cover?", answer: "Waco, Temple, Killeen, and surrounding Central Texas commercial corridors." },
  ];

  const services = [
    { icon: faBolt, title: "Panel Upgrades", body: "Service and distribution upgrades for commercial shells.", link: "/services/panel-upgrades" },
    { icon: faPlug, title: "Wiring & Rewiring", body: "TI rough-in and equipment circuits.", link: "/services/wiring-rewiring" },
    { icon: faLightbulb, title: "Lighting Installation", body: "Retail, parking, and common-area lighting.", link: "/services/lighting-installation" },
    { icon: faWrench, title: "Electrical Repairs", body: "Fast response for occupied commercial properties.", link: "/services/electrical-repairs" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for retail corridors and mixed-use projects.", badge: "Home Base" },
    { town: "Temple", benefit: "Growing commercial and medical development.", badge: "" },
    { town: "Killeen", benefit: "Retail and service-business TI packages.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial centers.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and retail strips.", badge: "" },
    { town: "Bellmead", benefit: "Industrial-adjacent commercial properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Commercial & Retail Developers" }]} />
      <SectionIntro title="Electrical Services for Commercial & Retail Developers" subtitle="Shell, TI, and open-date driven electrical work — clear scopes, TECL-licensed crews, inspection-ready installs." />
      <TrustBar headline="Schedule-first commercial electrical for Central Texas developers" />
      <div className={styles.section}><IndustryPainPoints industry="commercial development" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Developers & Retail Landlords" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Commercial Services We Deliver" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/commercial-retail-developers" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Developer FAQs" /></div>
      <CTABanner headline="Need Electrical That Hits the Open Date?" subline="Clear TI scopes, after-hours options, TECL-licensed commercial crews." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Request a Proposal" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Talk About Your Development" cityName="Waco" slug="industries/commercial-retail-developers" spot="commercial-industry-form" formVariant={2} /></div>
    </main>
  );
}
