"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

const propertyTypes = [
  { value: '', label: 'Select Property Type' },
  { value: 'vacant', label: 'Vacant' },
  { value: 'tenanted', label: 'Tenanted' },
  { value: 'hmo', label: 'HMO' },
  { value: 'distressed', label: 'Distressed' },
  { value: 'portfolio', label: 'Portfolio' },
  { value: 'land', label: 'Other Land' },
];

export default function Invest() {
  const [selectedType, setSelectedType] = useState('');

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <span className="eyebrow">Invest</span>
            <h1 className={styles.headerTitle}>Sourced Investments</h1>
          </FadeIn>
        </div>
      </section>

      {/* What is Property Sourcing */}
      <section className="section container">
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>What is Property Sourcing?</h2>
              <p className={styles.bodyText}>
                Property Sourcing is all about unlocking great opportunities for buyers and sellers. For investors, we offer exclusive access to off-market deals, sourced and vetted by our expert team. For sellers, we provide a fast, hassle-free route to sale — no waiting, no uncertainty.
              </p>
              <p className={styles.bodyText}>
                With 22 years of experience and over 300 properties sourced, our team knows how to identify and deliver the best investment opportunities in the market.
              </p>
            </FadeIn>
          </div>

          {/* Property Type Selector */}
          <div className={styles.selectorPanel}>
            <FadeIn delay={200}>
              <div className={styles.selectorCard}>
                <h3 className={styles.selectorTitle}>Browse by Property Type</h3>
                <p className={styles.selectorDesc}>Select the type of investment you are looking for and we'll match you with available deals.</p>

                <div className={styles.selectWrapper}>
                  <select
                    className={styles.select}
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {propertyTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▾</span>
                </div>

                {selectedType && (
                  <div className={styles.typeInfo}>
                    {selectedType === 'vacant' && (
                      <p>Empty properties ready for immediate occupation or renovation — ideal for buy-to-let or flip strategies.</p>
                    )}
                    {selectedType === 'tenanted' && (
                      <p>Income-producing properties with existing tenants in place — start earning from day one.</p>
                    )}
                    {selectedType === 'hmo' && (
                      <p>Houses in Multiple Occupation offering higher rental yields across multiple rooms.</p>
                    )}
                    {selectedType === 'distressed' && (
                      <p>Below-market-value properties requiring work — perfect for investors seeking maximum equity uplift.</p>
                    )}
                    {selectedType === 'portfolio' && (
                      <p>Multiple property deals acquired together — scale your portfolio quickly with one transaction.</p>
                    )}
                    {selectedType === 'land' && (
                      <p>Development land and other land opportunities with planning potential.</p>
                    )}
                  </div>
                )}

                <Link href="/register" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', display: 'block', textAlign: 'center' }}>
                  Register to See Deals
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Property Type Grid */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">What We Source</span>
            <h2 className="title-large" style={{ marginBottom: '3rem' }}>Types of Investments We Source</h2>
          </FadeIn>
          <div className={styles.typeGrid}>
            {[
              { label: 'Vacant', icon: '🏚️', desc: 'Empty properties for immediate purchase and occupation or renovation.' },
              { label: 'Tenanted', icon: '🏠', desc: 'Income-generating properties with existing tenants already in place.' },
              { label: 'HMO', icon: '🏘️', desc: 'Multi-occupancy properties delivering higher rental yields.' },
              { label: 'Distressed', icon: '🔧', desc: 'Below-market-value properties offering excellent equity upside.' },
              { label: 'Portfolio', icon: '📁', desc: 'Multi-property deals to grow your portfolio efficiently.' },
              { label: 'Other Land', icon: '🌱', desc: 'Development land, plots, and land opportunities with potential.' },
            ].map((t, i) => (
              <FadeIn key={t.label} delay={i * 80}>
                <div className={styles.typeCard}>
                  <div className={styles.typeIcon}>{t.icon}</div>
                  <h3 className={styles.typeLabel}>{t.label}</h3>
                  <p className={styles.typeDesc}>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section container">
        <FadeIn>
          <span className="eyebrow">The Process</span>
          <h2 className="title-large">How it works for investors</h2>
          <p className="subtitle">A simple process to get you into great property deals.</p>
        </FadeIn>
        <div className={styles.stepsGrid}>
          {[
            { step: '01', title: 'Register', desc: 'Sign up with our Property Sourcing team to start receiving exclusive property opportunities.' },
            { step: '02', title: 'Match-making', desc: 'You will be sent relevant properties and investment deals as they come in.' },
            { step: '03', title: 'Sourcing Fee', desc: 'Pay a sourcing fee of £3,000–£5,000, split between the start and completion of the deal.' },
            { step: '04', title: 'Secure Purchase', desc: 'Time to secure below-market-value properties with strong investment potential.' },
            { step: '05', title: 'Support', desc: 'Benefit from expert guidance and introductions to mortgage brokers and solicitors.' },
            { step: '06', title: 'Maximise Return', desc: 'Once complete, let or sell your property quickly through our trusted network.' },
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
              <span className="eyebrow">Get Started</span>
              <h2 className={styles.ctaTitle}>Start investing today</h2>
              <p className={styles.ctaText}>Register now to access exclusive off-market property deals sourced and vetted by our expert team.</p>
              <Link href="/register" className="btn-primary">Register as Investor</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
