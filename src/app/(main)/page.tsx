import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

const stats = [
  { number: '22', label: 'Years in the market' },
  { number: '300+', label: 'Properties sourced' },
  { number: '100%', label: 'Integrity guaranteed' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <FadeIn>
            <span className="eyebrow">Pennylane Sourcing</span>
            <h1 className={styles.heroTitle}>
              22 Years of Buying<br />and Selling Properties
            </h1>
            <p className={styles.heroPrompt}>I Want To:</p>
          </FadeIn>
          <div className={styles.pathGrid}>
            <FadeIn delay={100}>
              <Link href="/sell" className={styles.pathCard}>
                <div className={styles.pathInner}>
                  <span className={styles.pathLabel}>Sell</span>
                  <span className={styles.pathSub}>Fast, off-market sale matched to our investor network</span>
                  <span className={styles.pathArrow}>→</span>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={200}>
              <Link href="/invest" className={styles.pathCard}>
                <div className={styles.pathInner}>
                  <span className={styles.pathLabel}>Invest</span>
                  <span className={styles.pathSub}>Exclusive off-market deals sourced and vetted by our team</span>
                  <span className={styles.pathArrow}>→</span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is Property Sourcing ──────────────────────────────── */}
      <section className="section container">
        <div className={styles.splitGrid}>
          <FadeIn>
            <div className={styles.splitText}>
              <span className="eyebrow">What We Do</span>
              <h2 className="title-large">What is Property Sourcing?</h2>
              <p className="subtitle">
                Property Sourcing is all about unlocking great opportunities for buyers and sellers.
                For investors, we offer exclusive access to off-market deals, sourced and vetted by
                our expert team. For sellers, we provide a fast, hassle-free route to sale —
                no waiting, no uncertainty.
              </p>
              <p className="subtitle">
                With 22 years of experience and over 300 properties sourced, we know how to
                identify and deliver outstanding deals — quietly and efficiently.
              </p>
              <div className={styles.splitActions}>
                <Link href="/about" className="btn-secondary">Our Story</Link>
                <Link href="/register" className="btn-primary">Register Now</Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className={styles.pillarList}>
              {[
                { num: '01', title: 'Off-Market Access', desc: 'Exclusive properties not listed publicly — giving investors a real competitive edge.' },
                { num: '02', title: 'Fast Completions', desc: 'Sales completed in as little as four weeks. No chains, no delays.' },
                { num: '03', title: 'Expert Matching', desc: 'We connect motivated sellers with serious, qualified investors from our active network.' },
                { num: '04', title: 'Full Support', desc: 'Due diligence, mortgages, solicitors — we guide every step of the way.' },
              ].map((p) => (
                <div key={p.num} className={styles.pillarItem}>
                  <span className={styles.pillarNum}>{p.num}</span>
                  <div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Path CTA strip ─────────────────────────────────────────── */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripGrid}>
            <FadeIn>
              <div className={styles.ctaStripCard}>
                <span className="eyebrow">Sellers</span>
                <h3 className={styles.ctaStripTitle}>Need a quick sale?</h3>
                <p className={styles.ctaStripText}>No fees unless you sell. Off-market. Fast.</p>
                <Link href="/sell" className="btn-primary">Sell Your Property</Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className={`${styles.ctaStripCard} ${styles.ctaStripCardAlt}`}>
                <span className="eyebrow">Investors</span>
                <h3 className={styles.ctaStripTitle}>Looking for deals?</h3>
                <p className={styles.ctaStripText}>Register to access exclusive off-market opportunities.</p>
                <Link href="/register" className="btn-outline">Register as Investor</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
