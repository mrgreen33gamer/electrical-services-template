// Electrical Hero — Live Panel + Voltage Ring
// Asymmetric dark industrial layout. Circular animated voltage dial +
// breaker-panel photography. Spark particles (not snowflakes).
// Distinct from HVAC (climate photo) and Plumbing (light collage).
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function SparkCanvas({ color = '#06b6d4' }: { color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    type Pt = { x: number; y: number; life: number; max: number; vx: number; vy: number; w: number };
    const sparks: Pt[] = [];
    const spawn = () => {
      sparks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.85,
        life: 0,
        max: 18 + Math.random() * 28,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 1,
        w: 0.6 + Math.random() * 1.4,
      });
    };
    for (let i = 0; i < 12; i++) spawn();
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() > 0.72) spawn();
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04;
        const t = s.life / s.max;
        if (t >= 1) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = (1 - t) * 0.7;
        ctx.strokeStyle = color;
        ctx.lineWidth = s.w;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 2.2, s.y - s.vy * 2.2);
        ctx.stroke();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [color]);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

function VoltageRing({ value = 240, label = 'VAC' }: { value?: number; label?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  const r = 88;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, n / Math.max(value, 1));
  const dash = c * 0.75 * pct;

  return (
    <div className={styles.voltageRing} aria-hidden="true">
      <svg viewBox="0 0 220 220" className={styles.ringSvg}>
        <circle cx="110" cy="110" r={r} className={styles.ringTrack} />
        <motion.circle
          cx="110"
          cy="110"
          r={r}
          className={styles.ringFill}
          strokeDasharray={`${dash} ${c}`}
          initial={{ strokeDasharray: `0 ${c}` }}
          animate={{ strokeDasharray: `${c * 0.75} ${c}` }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className={styles.ringCenter}>
        <span className={styles.ringValue}>{n}</span>
        <span className={styles.ringUnit}>{label}</span>
        <span className={styles.ringStatus}>
          <span className={styles.liveDot} /> Live
        </span>
      </div>
    </div>
  );
}

const JOB_SHOTS = [
  { src: '/pages/home/welcome/hero-panel.jpg', alt: 'Residential breaker panel upgrade', label: 'Panels' },
  { src: '/pages/home/welcome/hero-tech.jpg', alt: 'Licensed electrician on site', label: 'Repairs' },
  { src: '/pages/home/welcome/hero-lines.jpg', alt: 'Power infrastructure', label: 'Power' },
];

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Electrician — Since 2010";
  const headlineLines = ['Power Done.', 'Done Right.'];
  const headlineAccent = 'BrightVolt.';
  const subheadline =
    'Flat-rate pricing. Same-day service. 2-Year Workmanship Warranty on every install. Serving Waco and Central Texas with TECL-licensed Master Electricians.';
  const primaryCta = { label: 'Call (254) 715-4400', href: 'tel:+12547154400' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Same-Day Service', 'No Contracts', 'TECL Licensed', '15+ Yrs Local', '2-Yr Warranty'];
  const stats = [
    { value: '2,500+', label: 'Jobs Completed' },
    { value: '4.9 ★', label: 'Google Rating' },
    { value: '2-Year', label: 'Workmanship Warranty' },
    { value: 'Same-Day', label: 'Service Available' },
  ];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.panelBg} aria-hidden="true">
        <img src="/pages/home/welcome/hero-panel.jpg" alt="" className={styles.panelBgImg} />
        <div className={styles.panelScrim} />
        <div className={styles.gridLines} />
      </div>

      <SparkCanvas color="#00d4ff" />

      <div className={styles.layout}>
        {/* Left: copy + job photo rail */}
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            className={styles.jobRail}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
          >
            {JOB_SHOTS.map((j) => (
              <figure key={j.label} className={styles.jobCard}>
                <img src={j.src} alt={j.alt} className={styles.jobImg} />
                <figcaption className={styles.jobCaption}>{j.label}</figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        {/* Right: voltage dial + stat list (vertical, not 2x2 grid) */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.dialCard}>
            <div className={styles.dialHeader}>
              <span className={styles.dialEyebrow}>System Status</span>
              <span className={styles.dialOnline}>ONLINE</span>
            </div>
            <VoltageRing value={240} label="VAC" />
            <ul className={styles.statList}>
              {stats.map((s, i) => (
                <motion.li
                  key={s.label}
                  className={styles.statRow}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                >
                  <span className={styles.statLabel}>{s.label}</span>
                  <span className={styles.statValue}>{s.value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
