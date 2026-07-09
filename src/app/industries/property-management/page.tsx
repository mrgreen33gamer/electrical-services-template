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
  faBolt, faWrench, faLightbulb, faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No proactive electrical maintenance schedule", consequence: "Units fail reactively at turnover or after tenant complaints — driving emergency rates and bad reviews instead of planned, budgeted work." },
    { icon: faFileInvoiceDollar, problem: "Electrical costs blow up the CapEx budget with no warning", consequence: "Without a multi-unit plan and locked pricing, a panel upgrade or rewire lands as one enormous line item instead of a forecastable expense." },
    { icon: faUsers, problem: "Tenants disrupted by no-show or late electricians", consequence: "Missed access windows create complaints to the PM office that could have been avoided with reliable scheduling and clear communication." },
    { icon: faBuilding, problem: "Different units get different quality of work", consequence: "Rotating freelancers leave inconsistent panels, labeling, and code compliance across the portfolio — a liability at inspection and sale." },
    { icon: faClipboardList, problem: "No single point of contact for multi-property work", consequence: "Coordinating separate quotes and crews for each building wastes management time that should sit with one dedicated vendor." },
    { icon: faHandshake, problem: "Vendors don't understand property management workflows", consequence: "Access notices, owner approvals, and turnover timelines all move on their own schedule. A contractor unfamiliar with that process creates friction." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Electrical Planning", description: "We build phased schedules across units and buildings — turnovers, common areas, and CapEx upgrades — so you can budget years ahead." },
    { icon: faFileInvoiceDollar, title: "Locked-In, Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes so ownership sees predictable numbers instead of surprise emergency invoices." },
    { icon: faUsers, title: "Tenant-Friendly Scheduling", description: "We coordinate access windows, notices, and same-day turnarounds so your office isn't fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk units/common areas, document panels and hazards, and prioritize risk.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-unit pricing and a schedule synced to turnovers and CapEx cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move unit-by-unit with consistent quality and labeled work.", icon: faRocket },
    { number: 4, title: "Standing Maintenance", description: "Optional standing service so electrical issues stay on a plan.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 80, label: "Multi-unit properties serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 15, label: "PM companies on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit electrical planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated project lead", others: "❌ Different tech each time" },
    { feature: "Tenant communication support", us: "✅ Built into scheduling", others: "❌ Minimal notice" },
    { feature: "TECL-licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common areas, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule electrical make-ready work around your turnover calendar and can often turn units same-week." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you standardize panels and labeling across a complex?", answer: "Yes. Consistent panel labeling, device standards, and documentation are part of our multi-unit approach." },
    { question: "What areas do you cover for PM work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faWrench, title: "Electrical Repairs", body: "Fast make-ready and tenant ticket resolution.", link: "/services/electrical-repairs" },
    { icon: faBolt, title: "Panel Upgrades", body: "CapEx panel replacements across units.", link: "/services/panel-upgrades" },
    { icon: faLightbulb, title: "Lighting Installation", body: "Common-area and unit lighting packages.", link: "/services/lighting-installation" },
    { icon: faServer, title: "Generator Installation", body: "Backup power for critical common systems.", link: "/services/generator-installation" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and scattered-site PM work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Residential PM coverage on our regular route.", badge: "" },
    { town: "Woodway", benefit: "Premium SFH rental portfolios.", badge: "" },
    { town: "Bellmead", benefit: "Multi-unit and light commercial properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Electrical Services for Property Management Companies" subtitle="Multi-unit make-ready, CapEx panel upgrades, and reliable tenant-ticket response — TECL-licensed, portfolio-ready." />
      <TrustBar headline="Trusted by Central Texas property managers for reliable electrical work" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Managers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="PM Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <CTABanner headline="Need a Reliable Electrical Vendor for Your Portfolio?" subline="Multi-unit pricing, COIs on request, TECL-licensed crews." primaryText="Call Us Now" primaryLink="tel:+12547154400" secondaryText="Request a Proposal" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Talk to Us About Your Portfolio" cityName="Waco" slug="industries/property-management" spot="pm-industry-form" formVariant={2} /></div>
    </main>
  );
}
