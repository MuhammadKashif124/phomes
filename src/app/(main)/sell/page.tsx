import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Sell | Pennylane Sourcing',
  description: 'Quick property sales through our off-market investor network. No selling fees — only pay if you sell.',
};

const sellOptions = [
  { id: 'vacant', label: 'Vacant Property' },
  { id: 'tenanted', label: 'Tenanted Property' },
  { id: 'upgrade', label: 'Needs Upgrade' },
  { id: 'assisted', label: 'Assisted Sale (we pay for upgrade)' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'open-market', label: 'Sell on Open Market (Pennylane Homes)' },
];

export default function Sell() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <span className="eyebrow">Sell</span>
            <h1 className={styles.headerTitle}>Quick Sales</h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section container">
        <div className={styles.introSection}>
          <FadeIn>
            <div className={styles.introText}>
              <h2 className={styles.sectionTitle}>Sell your property fast, off-market</h2>
              <p className={styles.bodyText}>
                There are a wide variety of reasons for selling quickly. An off-market option where we can match with one of our qualified investors who are looking to expand their portfolios.
              </p>
              <div className={styles.nofeeTag}>
                <span className={styles.nofeeIcon}>✓</span>
                <div>
                  <strong>No Selling Fees</strong>
                  <p>Only pay our fee if you sell</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Sell Options Card */}
          <FadeIn delay={200}>
            <div className={styles.optionsCard}>
              <h3 className={styles.optionsTitle}>I Want To Sell My:</h3>
              <div className={styles.optionsList}>
                {sellOptions.map((opt) => (
                  <label key={opt.id} className={styles.optionItem}>
                    <input type="checkbox" className={styles.checkbox} name={opt.id} />
                    <span className={styles.checkmark}></span>
                    <span className={styles.optionLabel}>{opt.label}</span>
                  </label>
                ))}
              </div>
              <Link href="/sell/form" className="btn-primary" style={{ width: '100%', marginTop: '2rem', display: 'block', textAlign: 'center' }}>
                Get My Free Valuation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why sell with us */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Why Us</span>
            <h2 className="title-large" style={{ marginBottom: '3rem' }}>Why sell through Pennylane Sourcing?</h2>
          </FadeIn>
          <div className={styles.benefitsGrid}>
            {[
              { icon: '⚡', title: 'Fast Completion', desc: 'Complete your sale in as little as four weeks — no chains, no delays.' },
              { icon: '💰', title: 'No Upfront Fees', desc: 'You only pay our sourcing fee when your sale successfully completes.' },
              { icon: '🤐', title: 'Off-Market', desc: 'Discreet sales with no listings, no viewings from the public — just qualified buyers.' },
              { icon: '📋', title: 'Any Condition', desc: 'We accept properties in any condition — no need to spend money on repairs.' },
            ].map((b, i) => (
              <FadeIn key={b.title} delay={i * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{b.icon}</div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section container">
        <FadeIn>
          <span className="eyebrow">The Process</span>
          <h2 className="title-large">How the process works</h2>
          <p className="subtitle">Simple steps from enquiry to completion.</p>
        </FadeIn>
        <div className={styles.stepsGrid}>
          {[
            { step: '01', title: 'Get in touch', desc: 'Our property sourcing team will call you back within 24 hours.' },
            { step: '02', title: 'Property visit', desc: "We'll arrange a property visit to assess its potential — no matter the condition." },
            { step: '03', title: 'Due diligence', desc: 'We check for any debts linked to the sale to ensure a smooth transaction.' },
            { step: '04', title: 'Leave it to us', desc: 'We handle everything, connecting you with a serious buyer ready to proceed.' },
            { step: '05', title: 'Complete your sale', desc: 'Your sale can be completed within as little as four weeks.' },
          ].map((s, i) => (
            <FadeIn key={s.step} delay={i * 80}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{s.step}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaInner}>
              <span className="eyebrow">Get in Touch</span>
              <h2 className={styles.ctaTitle}>Ready to sell?</h2>
              <p className={styles.ctaText}>Fill in our quick form and we'll be in touch within 24 hours.</p>
              <Link href="/sell/form" className="btn-primary">Submit Your Property</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
