// BrightVolt Electric — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBolt, faPlug, faLightbulb, faWrench, faCarBattery, faServer,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faWrench,
      title: "Electrical Repairs",
      body: "Same-day diagnosis on outlets, breakers, switches, and wiring faults. We stock common parts on every truck — most repairs completed in one visit.",
      link: "/services/electrical-repairs",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faBolt,
      title: "Panel Upgrades",
      body: "100A to 200A panel replacements, load calculations, and code-compliant upgrades so your home can handle modern demand safely.",
      link: "/services/panel-upgrades",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faPlug,
      title: "Wiring & Rewiring",
      body: "Whole-home rewiring, aluminum-to-copper remediation, and new circuit runs for kitchens, shops, and additions.",
      link: "/services/wiring-rewiring",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faLightbulb,
      title: "Lighting Installation",
      body: "Recessed cans, outdoor lighting, chandeliers, and smart-switch installs — planned for light, aesthetics, and efficiency.",
      link: "/services/lighting-installation",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faCarBattery,
      title: "EV Charger Installation",
      body: "Level 2 home EV charger installs for Tesla, ChargePoint, and all major brands — including dedicated circuits and permits.",
      link: "/services/ev-charger-installation",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faServer,
      title: "Generator Installation",
      body: "Standby and portable generator install with automatic transfer switches so your home stays powered through Texas storms.",
      link: "/services/generator-installation",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2500, label: "Electrical jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local electrical experience",            suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                    suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we open a panel or pull a wire. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "TECL-Licensed Master Electricians",
      description: "Every electrician on our crew holds a TECL license and works under a bonded, insured contractor. No unlicensed freelancers.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2010",
      description: "We're not a franchise. BrightVolt was founded in Waco by Marcus Hale, a TECL-licensed Master Electrician. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Diagnose On-Site",
      description: "A TECL-licensed electrician inspects the issue, explains it in plain English, and shows you options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warrantied",
      description: "Quality materials, clean workmanship, 2-Year Workmanship Warranty on every install. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Electrical Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, shoes covered, work area protected, home left exactly as we found it. Every single job.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Code-Compliant Materials",
      description: "We install UL-listed panels, breakers, and fixtures that meet current NEC and local code — no gray-market shortcuts.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available electricians in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",             badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",                      badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                         badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",             badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",                  badge: "" },
  ];

  const faq = [
    {
      question: "How much does electrical service cost in Waco?",
      answer: "Most repairs range from $150–$650 depending on the issue. Panel upgrades typically run $1,800–$4,500. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day and emergency electrical service is available 7 days a week including evenings. Call us at (254) 715-4400 anytime.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most repair calls are same-day or next-day. Larger installs (panel upgrades, generators, rewiring) are typically scheduled within 1–2 weeks depending on permits and material lead time.",
    },
    {
      question: "What electrical services do you offer?",
      answer: "Panel upgrades, wiring & rewiring, lighting installation, electrical repairs & troubleshooting, EV charger installation, and generator installation & backup power.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — BrightVolt Electric is TECL-licensed, bonded, and insured. License number available on request. All work is performed by Master Electricians.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — every installation is backed by our 2-Year Workmanship Warranty covering labor and installation defects.",
    },
  ];

  const trustBadges = [
    { icon: faStar,           label: "4.9 Google Rating",    sub: "500+ Reviews" },
    { icon: faShieldHalved,   label: "TECL Licensed",        sub: "Master Electricians" },
    { icon: faTrophy,         label: "Bonded & Insured",     sub: "Full Coverage" },
    { icon: faClipboardCheck, label: "Flat-Rate Quotes",     sub: "Before Work Starts" },
    { icon: faFileAlt,        label: "2,500+ Jobs",          sub: "Completed Since 2010" },
    { icon: faRotateLeft,     label: "2-Year Warranty",      sub: "Workmanship" },
    { icon: faBolt,           label: "Same-Day Service",     sub: "7 Days a Week" },
    { icon: faUsers,          label: "Locally Owned",        sub: "Since 2010" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted electrical contractor — TECL-licensed, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Electrical Services for Your Home"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes BrightVolt Different"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="Power Out? Panel Overloaded? We're Ready Right Now."
        subline="Same-day appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Flat-rate pricing. 2-Year Workmanship Warranty."
        primaryText="Call (254) 715-4400"
        primaryLink="tel:+12547154400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Electrical Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
