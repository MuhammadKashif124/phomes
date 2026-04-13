import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Services | PH Homes',
  description: 'Property sourcing services for sellers and investors — off-market deals, fast completions, and full end-to-end support.',
};

const services = [
  {
    id: 'sellers',
    tag: 'For Sellers',
    title: 'Fast, Hassle-Free Property Sales',
    body: 'If you need to sell quickly — whether due to financial pressure, relocation, probate, or simply wanting a straightforward sale — we offer a direct route to a serious buyer without the uncertainty of the open market.',
    bullets: [
      'No estate agent fees or lengthy listings',
      'Sales completed in as little as four weeks',
      'We handle solicitors, surveys, and due diligence',
      'Any condition accepted — no remedial work required',
      'Flexible completion dates to suit your timeline',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Property sale',
    cta: 'Sell your property',
    ctaHref: '/contact',
    reverse: false,
  },
  {
    id: 'investors',
    tag: 'For Investors',
    title: 'Exclusive Off-Market Investment Deals',
    body: 'Register with our investor network and receive a curated feed of below-market-value properties before they reach anyone else. From single BTL units to full portfolio acquisitions, we source deals that deliver real returns.',
    bullets: [
      'Access to genuine off-market opportunities',
      'Properties sourced, vetted, and packaged for you',
      'Transparent sourcing fee of £3,000–£5,000 per deal',
      'Introductions to mortgage brokers and solicitors',
      'Support through to let or resale after completion',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Property investment',
    cta: 'Join our investor list',
    ctaHref: '/contact',
    reverse: true,
  },
  {
    id: 'portfolio',
    tag: 'Portfolio & Bulk Disposals',
    title: 'Selling Multiple Properties at Once',
    body: 'Landlords and developers looking to exit quickly can benefit from our bulk acquisition network. We work with buyers who can purchase multiple units simultaneously, giving you a clean, fast exit at a fair price.',
    bullets: [
      'Simultaneous multi-unit completions',
      'Discreet, off-market process',
      'Suitable for any portfolio size',
      'Experienced in probate and estate disposals',
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Portfolio of properties',
    cta: 'Discuss a portfolio sale',
    ctaHref: '/contact',
    reverse: false,
  },
];

export default function OurServices() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.eyebrow}>What we offer</p>
            <h1 className={styles.heroTitle}>Services built around your goals</h1>
            <p className={styles.heroSubtitle}>
              Whether you are selling, buying, or investing, we have a service that cuts out the friction and gets you to the result faster.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section key={s.id} className={i % 2 !== 0 ? 'section-alt' : 'section'}>
          <div className="container">
            <div className={`${styles.serviceGrid} ${s.reverse ? styles.reversed : ''}`}>
              <FadeIn>
                <div className={styles.serviceText}>
                  <span className={styles.serviceTag}>{s.tag}</span>
                  <h2 className="title-large">{s.title}</h2>
                  <p className="subtitle">{s.body}</p>
                  <ul className={styles.bulletList}>
                    {s.bullets.map((b) => (
                      <li key={b} className={styles.bulletItem}>
                        <span className={styles.bulletMark} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.ctaHref} className="btn-primary" style={{ marginTop: '32px' }}>{s.cta}</Link>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className={styles.serviceImageWrap}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Not sure which service is right for you?</h2>
              <p className={styles.ctaSubtitle}>
                Our team will listen to your situation and point you in the right direction — no pressure, no obligation.
              </p>
              <Link href="/contact" className="btn-primary">Speak to us today</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
