import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Pennylane Sourcing',
  description: '22 years of quietly sourcing properties for landlords. Over 300 properties sourced to date.',
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <span className="eyebrow">About Us</span>
            <h1 className={styles.headerTitle}>
              22 Years of Buying<br />and Selling Properties
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="section container">
        <div className={styles.contentGrid}>
          <FadeIn>
            <div className={styles.mainText}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.bodyText}>
                We have been quietly sourcing properties for our landlords for 22 years. That is more than 300 properties to date.
              </p>
              <p className={styles.bodyText}>
                We are now offering this service to all our investors and any registering investors.
              </p>
              <p className={styles.bodyText}>
                We deal with every new property opportunity with integrity, honesty and transparency.
              </p>
              <Link href="/register" className="btn-primary" style={{ marginTop: '2.5rem', display: 'inline-block' }}>
                Register Now
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className={styles.statsPanel}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>22</span>
                <span className={styles.statLabel}>Years of Experience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>300+</span>
                <span className={styles.statLabel}>Properties Sourced</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Integrity &amp; Transparency</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className={`section-alt`}>
        <div className="container">
          <FadeIn>
            <span className="eyebrow">How We Work</span>
            <h2 className="title-large" style={{ marginBottom: '3rem' }}>Our Core Principles</h2>
          </FadeIn>
          <div className={styles.valuesGrid}>
            {[
              { num: '01', title: 'Integrity', desc: 'We always act in the best interest of our clients, never compromising on ethical standards or taking shortcuts.' },
              { num: '02', title: 'Honesty', desc: 'Straightforward advice and transparent communication at every stage — no surprises, no hidden agendas.' },
              { num: '03', title: 'Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly what is happening with your deal.' },
            ].map((v, i) => (
              <FadeIn key={v.num} delay={i * 100}>
                <div className={styles.valueCard}>
                  <span className={styles.valueNumber}>{v.num}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaInner}>
              <span className="eyebrow">Get Started</span>
              <h2 className={styles.ctaTitle}>Ready to work with us?</h2>
              <p className={styles.ctaText}>
                Join our growing network of investors and sellers. Register today to access exclusive off-market opportunities.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/register" className="btn-primary">Register as Investor</Link>
                <Link href="/sell" className="btn-secondary">Sell Your Property</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
