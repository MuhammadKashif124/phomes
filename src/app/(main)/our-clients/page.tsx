import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Clients | PH Homes',
  description: 'Meet the sellers and investors who work with PH Homes — and see what they have to say about our property sourcing service.',
};

const testimonials = [
  {
    quote: "I needed to sell my mother's house quickly after she passed away. PH Homes handled everything — from the legal checks to finding a buyer — and we completed in under five weeks. Couldn't have done it without them.",
    name: 'Sarah M.',
    role: 'Probate Seller, Manchester',
  },
  {
    quote: "I've been investing in property for twelve years and the quality of deals I get through PH Homes is genuinely better than anything I find on the open market. The sourcing fee pays for itself many times over.",
    name: 'James R.',
    role: 'Portfolio Investor, Leeds',
  },
  {
    quote: "We had a buy-to-let we needed to exit quickly due to a change in circumstances. PH Homes found a buyer within two weeks and kept us informed throughout. Completely stress-free.",
    name: 'David & Carol T.',
    role: 'Landlords, Birmingham',
  },
  {
    quote: "As a first-time investor I was nervous about going off-market. The team walked me through every step, introduced me to a great mortgage broker, and I'm now letting out a property that cash-flows from day one.",
    name: 'Priya K.',
    role: 'First-Time Investor, London',
  },
  {
    quote: "I was sceptical about property sourcing agents but PH Homes completely changed my view. Transparent fees, no hidden surprises, and a team that actually picks up the phone.",
    name: 'Mark B.',
    role: 'Buy-to-Let Investor, Edinburgh',
  },
  {
    quote: "We had a portfolio of six properties we wanted to sell all at once. PH Homes found a single buyer who took the lot — simultaneous completion, exactly what we needed.",
    name: 'The Henderson Group',
    role: 'Portfolio Landlord, Yorkshire',
  },
];

const clientTypes = [
  {
    title: 'Motivated Sellers',
    body: 'Homeowners and landlords who need to sell quickly — whether due to financial pressure, relocation, divorce, probate, or simply wanting a straightforward exit.',
  },
  {
    title: 'Buy-to-Let Investors',
    body: 'Investors looking to build or grow a rental portfolio with genuine below-market-value properties that deliver strong yields from day one.',
  },
  {
    title: 'Portfolio Landlords',
    body: 'Experienced landlords adding to an existing portfolio or looking for a clean, fast disposal of multiple units simultaneously.',
  },
  {
    title: 'First-Time Investors',
    body: 'New to property investment and looking for a guided, end-to-end service with trusted introductions to brokers, solicitors, and managing agents.',
  },
];

export default function OurClients() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.eyebrow}>Our Clients</p>
            <h1 className={styles.heroTitle}>People who want results, not promises</h1>
            <p className={styles.heroSubtitle}>
              We work with sellers who need speed and certainty, and investors who want access to deals that actually stack up.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section container">
        <FadeIn>
          <h2 className="title-large">Who we work with</h2>
          <p className="subtitle">Our clients come to us for different reasons, but they all want the same thing: a property transaction that actually goes through.</p>
        </FadeIn>
        <div className={styles.clientTypesGrid}>
          {clientTypes.map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <div className={styles.clientTypeCard}>
                <h3 className={styles.clientTypeTitle}>{c.title}</h3>
                <p className={styles.clientTypeBody}>{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className="title-large">What our clients say</h2>
              <p className="subtitle">Real feedback from real people we have worked with.</p>
            </div>
          </FadeIn>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 80}>
                <div className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Join them</h2>
              <p className={styles.ctaSubtitle}>
                Whether you are looking to sell or invest, get in touch and we will show you exactly how we can help.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary">Get in Touch</Link>
                <Link href="/our-services" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Our Services</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
