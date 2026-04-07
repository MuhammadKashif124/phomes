import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

const sellerSteps = [
  { step: '01', title: 'Get in touch', desc: 'Our property sourcing team will call you back within 24 hours.' },
  { step: '02', title: 'Visiting the property', desc: "We'll arrange a property visit to assess its potential — no matter the condition." },
  { step: '03', title: 'Due diligence check', desc: 'We check for any debts linked to the sale to ensure a smooth transaction.' },
  { step: '04', title: 'Leave it to us', desc: 'We handle everything, connecting you with a serious buyer ready to proceed.' },
  { step: '05', title: 'Complete your sale', desc: 'Your sale can be completed within as little as four weeks.' },
];

const investorSteps = [
  { step: '01', title: 'Sign up', desc: 'Register with our Property Sourcing team to start receiving exclusive property opportunities.' },
  { step: '02', title: 'Match-making', desc: 'You will be sent relevant properties and investment deals as they come in.' },
  { step: '03', title: 'Pay a sourcing fee', desc: 'Pay a sourcing fee of £3,000–£5,000, split between the start and completion of the deal.' },
  { step: '04', title: 'Secure your purchase', desc: 'Time to secure below-market-value properties with strong investment potential.' },
  { step: '05', title: 'Mortgages and support', desc: 'Benefit from expert guidance and introductions to mortgage brokers and solicitors.' },
  { step: '06', title: 'Maximise your return', desc: 'Once complete, let or sell your property quickly through our trusted network.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <FadeIn>
            <h1 className={styles.heroTitle}>Sell fast, invest smart with Property Sourcing</h1>
            <p className={styles.heroSubtitle}>
              Whether you're an investor looking for exclusive off-market opportunities or a seller wanting a fast, simple sale, our Property Sourcing service links our large active list of investors and home buyers instantly to your property.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">Tell Me More</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is Property Sourcing */}
      <section className="section container">
        <div className={styles.infoGrid}>
          <div className={styles.infoContent}>
            <FadeIn>
              <h2 className="title-large">What is Property Sourcing?</h2>
              <p className="subtitle">
                Property Sourcing is all about unlocking great opportunities for buyers and sellers. For investors, we offer exclusive access to off-market deals, sourced and vetted by our expert team.
              </p>
              <p className="subtitle">
                For sellers, we provide a fast, hassle-free route to sale — no waiting, no uncertainty. Our extensive network of active buyers means we can match the right property to the right investor quickly and efficiently, often completing deals within weeks.
              </p>
              <Link href="/contact" className="link-underline">Get in touch →</Link>
            </FadeIn>
          </div>
          <div className={styles.infoImage}>
            <FadeIn delay={200}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Property investment"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why use our service */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className="title-large">Why use our Property Sourcing service?</h2>
              <p className="subtitle">
                Selling on the open market isn't always the best option — especially if you need a fast, hassle-free sale. Our service offers a smarter, faster alternative.
              </p>
            </div>
          </FadeIn>
          <div className={styles.benefitsGrid}>
            {[
              { icon: '🏡', title: 'Off-Market Access', desc: 'Exclusive properties not available on the open market, giving investors a competitive edge.' },
              { icon: '⚡', title: 'Fast Completions', desc: 'Sales completed in as little as four weeks — ideal for sellers who need to move quickly.' },
              { icon: '🤝', title: 'Expert Matching', desc: 'We connect serious buyers and motivated sellers from our large, active buyer network.' },
              { icon: '📋', title: 'Full Support', desc: 'From due diligence to mortgages and solicitors — we guide you every step of the way.' },
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

      {/* How it works — Sellers */}
      <section className="section container">
        <FadeIn>
          <div className={styles.sectionHeader}>
            <h2 className="title-large">How Property Sourcing works for sellers</h2>
            <p className="subtitle">A quick guide to selling your property through our sourcing service.</p>
          </div>
        </FadeIn>
        <div className={styles.stepsGrid}>
          {sellerSteps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 80}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{item.step}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How it works — Investors */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className="title-large">How Property Sourcing works for investors</h2>
              <p className="subtitle">A quick guide to growing your portfolio through our sourcing service.</p>
            </div>
          </FadeIn>
          <div className={styles.stepsGrid}>
            {investorSteps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 80}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>{item.step}</div>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDesc}>{item.desc}</p>
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
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
              <p className={styles.ctaSubtitle}>
                Whether you're looking to sell fast or invest smart, our property sourcing service makes it happen. Get in touch with our team today.
              </p>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
