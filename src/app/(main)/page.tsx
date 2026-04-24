import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroEyebrow}>Pennylane Sourcing</p>
            <h1 className={styles.heroTitle}>22 Years of Buying and Selling Properties</h1>
            <p className={styles.heroSubtitle}>I Want To:</p>
            <div className={styles.heroActions}>
              <Link href="/sell" className={styles.heroBtn}>SELL</Link>
              <Link href="/invest" className={styles.heroBtn}>INVEST</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is Property Sourcing */}
      <section className="section container">
        <FadeIn>
          <div className={styles.sectionHeader}>
            <h2 className="title-large">What is Property Sourcing?</h2>
            <p className="subtitle">
              Property Sourcing is all about unlocking great opportunities for buyers and sellers. For investors, we offer exclusive access to off-market deals, sourced and vetted by our expert team. For sellers, we provide a fast, hassle-free route to sale — no waiting, no uncertainty.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className={styles.featuresRow}>
            {[
              { icon: '🏠', title: 'Off-Market Access', desc: 'Exclusive properties not listed on the open market, giving investors a competitive edge.' },
              { icon: '⚡', title: 'Fast Completions', desc: 'Sales completed in as little as four weeks — ideal for sellers who need to move quickly.' },
              { icon: '🤝', title: 'Expert Matching', desc: 'We connect serious buyers and motivated sellers through our active investor network.' },
              { icon: '🛡️', title: 'Full Support', desc: 'From due diligence to mortgages and solicitors — we guide you every step of the way.' },
            ].map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
              <p className={styles.ctaSubtitle}>
                Whether you're looking to sell fast or invest smart, our property sourcing team is here to help.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/sell" className="btn-primary">Sell Your Property</Link>
                <Link href="/register" className={styles.ctaSecondary}>Register as Investor</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
