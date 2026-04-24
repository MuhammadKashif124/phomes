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
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <p className={styles.eyebrow}>About Us</p>
            <h1 className={styles.headerTitle}>22 Years of Buying and Selling Properties</h1>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="section container">
        <div className={styles.contentGrid}>
          <div className={styles.mainText}>
            <FadeIn>
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
              <Link href="/register" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Register
              </Link>
            </FadeIn>
          </div>

          <div className={styles.statsPanel}>
            <FadeIn delay={200}>
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
                <span className={styles.statLabel}>Integrity & Transparency</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <h2 className="title-large text-center">How We Work</h2>
            <p className="subtitle text-center" style={{ margin: '0 auto 3rem', maxWidth: '640px' }}>
              Our approach to every property deal is built on three core principles.
            </p>
          </FadeIn>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Integrity', desc: 'We always act in the best interest of our clients, never compromising on ethical standards.' },
              { title: 'Honesty', desc: 'Straightforward advice and transparent communication at every stage of the process.' },
              { title: 'Transparency', desc: 'No hidden fees, no surprises — you always know exactly what is happening with your deal.' },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 120}>
                <div className={styles.valueCard}>
                  <div className={styles.valueNumber}>0{i + 1}</div>
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
              <h2 className={styles.ctaTitle}>Ready to work with us?</h2>
              <p className={styles.ctaText}>Join our growing network of investors and sellers.</p>
              <Link href="/register" className="btn-primary">Register Now</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
