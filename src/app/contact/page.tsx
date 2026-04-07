import React from 'react';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <section className="section container">
        <FadeIn>
          <div className={styles.header}>
            <h1 className="title-massive">Contact Us</h1>
            <p className="subtitle" style={{ maxWidth: '600px' }}>
              We're here to help you build wealth through smart property investment. Get in touch with our expert team today.
            </p>
          </div>
        </FadeIn>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <FadeIn delay={200}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Head Office</h3>
                <p className={styles.infoText}>
                  ArcInvest Property Ltd<br />
                  5 South Charlotte Street<br />
                  Edinburgh, EH2 4AN<br />
                  United Kingdom
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Connect</h3>
                <p className={styles.infoText}>
                  WhatsApp us:<br />
                  <a href="tel:+447476870413" className="link-underline">+44 (0)7476 870 413</a>
                </p>
                <p className={styles.infoText} style={{ marginTop: '16px' }}>
                  Email us:<br />
                  <a href="mailto:invest@arc-invest.co.uk" className="link-underline">invest@arc-invest.co.uk</a>
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div className={styles.contactFormContainer}>
            <FadeIn delay={400}>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input type="text" id="firstName" className={styles.input} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input type="text" id="lastName" className={styles.input} required />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" className={styles.input} required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input type="tel" id="phone" className={styles.input} />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" rows={5} className={styles.textarea} required></textarea>
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
