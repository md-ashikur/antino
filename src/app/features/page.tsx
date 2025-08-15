"use client";

import React from 'react';
import styles from './features.module.css';

const FeatureCard: React.FC<{ title: string; desc: string; accent?: 'cyan' | 'magenta' | 'green' }> = ({ title, desc, accent = 'cyan' }) => {
  return (
    <article className={`${styles.card} ${styles[`accent-${accent}`]}`} tabIndex={0} aria-label={`${title} feature`}>
      <div className={styles.badge} aria-hidden>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.meta}>{desc}</p>
      <div className={styles.cardFooter}>
        <button className={styles.btn} aria-label={`Explore ${title}`}>Explore</button>
        <span className={styles.kicker}>Live • Beta</span>
      </div>
    </article>
  );
};

export default function FeaturesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Features — Neon Grid</h1>
            <p className={styles.lead}>A cyberpunk UI kit with animated neon panels, motion-led interactions and eye-catching micro effects.</p>
            <div className={styles.heroActions}>
              <button className={styles['btn-neon']}>Get Started</button>
              <button className={styles['btn-ghost']}>Documentation</button>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.neoGlobe} />
          </div>
        </div>
        <div className={styles.underline} />
      </section>

      <section className={styles.gridWrap}>
        <div className={styles.grid}>
          <FeatureCard title="Realtime Analytics" desc="Low-latency telemetry with neon streams and spark charts." accent="cyan" />
          <FeatureCard title="Secure Vault" desc="AES-backed vaults with subtle glow-key UX for confirmations." accent="magenta" />
          <FeatureCard title="AI Assistants" desc="Contextual smart suggestions with privacy-first defaults." accent="green" />
          <FeatureCard title="Integrations" desc="Out-of-the-box connectors and modern webhooks." accent="cyan" />
          <FeatureCard title="Customize Theme" desc="Designer tokens and runtime theming engine." accent="magenta" />
          <FeatureCard title="Offline Mode" desc="Seamless background sync and graceful fallbacks." accent="green" />
        </div>
      </section>

      <section className={styles.ctaRow}>
        <div className={styles.ctaCard}>
          <h2>Ready to deploy?</h2>
          <p>Spin up a project with this UI, or export the theme tokens to your design system.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className={styles['btn-neon']}>Create Project</button>
            <button className={styles['btn-ghost']}>Try Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
