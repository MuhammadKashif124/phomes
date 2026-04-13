import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'What We Do | PH Homes',
  description: 'Learn how PH Homes connects sellers and investors through expert property sourcing across the UK.',
};

const pillars = [
  {
    number: '01',
    title: 'We Source Off-Market Properties',
    body: 'Our team actively scouts for properties that never reach the open market — distressed sales, probate, motivated sellers, and portfolio disposals. These deals offer genuine value that you simply cannot find on Rightmove.',
  },
  {
    number: '02',
    title: 'We Vet Every Opportunity',
    body: 'Every property goes through a rigorous due diligence process. We check title, outstanding debts, planning history, and investment potential before presenting anything to our investor network.',
  },
  {
    number: '03',
    title: 'We Match Buyers to Sellers',
    body: 'Our large, active list of investors and buyers means we can move quickly. When the right property comes in, the right buyer is already waiting — cutting out months of open-market uncertainty.',
  },
  {
    number: '04',
    title: 'We Support You End-to-End',
    body: 'From your first call to completion, we stay with you. We introduce you to trusted solicitors, mortgage brokers, and surveyors — and we make sure the deal crosses the line.',
  },
];

export default function WhatWeDo() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.eyebrow}>About PH Homes</p>
            <h1 className={styles.heroTitle}>A smarter way to buy, sell, and invest in property</h1>
            <p className={styles.heroSubtitle}>
              We are a specialist property sourcing company built on one principle: connecting the right people with the right properties, faster than anyone else.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section container">
        <div className={styles.introGrid}>
          <FadeIn>
            <div className={styles.introText}>
              <h2 className="title-large">We sit at the centre of the market</h2>
              <p className="subtitle">
                Most estate agents wait for sellers to come to them. We go looking. We have built relationships with solicitors, developers, landlords, and homeowners who need to sell quickly and discreetly — and we bring those deals directly to our investor network before they ever go public.
              </p>
              <p className="subtitle">
                The result is a two-sided market that works faster and more efficiently for everyone involved.
              </p>
              <Link href="/contact" className="btn-primary">Talk to our team</Link>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className={styles.introImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
                alt="Property team meeting"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className="title-large">How we operate</h2>
              <p className="subtitle">Four things we do better than anyone else.</p>
            </div>
          </FadeIn>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <FadeIn key={p.number} delay={i * 100}>
                <div className={styles.pillarCard}>
                  <span className={styles.pillarNumber}>{p.number}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarBody}>{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section container">
        <FadeIn>
          <div className={styles.statsRow}>
            {[
              { value: '4 weeks', label: 'Average time to complete a sale' },
              { value: '£3–5k', label: 'Transparent sourcing fee for investors' },
              { value: '100%', label: 'Off-market deals — no open-market listing' },
              { value: '24 hrs', label: 'Response time from first enquiry' },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to work with us?</h2>
              <p className={styles.ctaSubtitle}>
                Whether you want to sell quickly or grow your portfolio, we have the network, the expertise, and the deal flow to make it happen.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/our-services" className="btn-primary">See Our Services</Link>
                <Link href="/contact" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Get in Touch</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
