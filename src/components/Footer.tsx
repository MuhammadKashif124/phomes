import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h3 className={styles.logo}>PH<span>Homes</span></h3>
            <p className={styles.description}>
              Connecting sellers and investors through smart property sourcing. Fast completions, exclusive deals, full support.
            </p>
            <p className={styles.address}>
              PH Homes Property Ltd<br />
              5 South Charlotte Street<br />
              Edinburgh, EH2 4AN
            </p>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.heading}>Services</h4>
            <Link href="/sellers">Sellers</Link>
            <Link href="/landlords">Landlords</Link>
            <Link href="/buyers">Buyers</Link>
            <Link href="/mortgages">Mortgages</Link>
            <Link href="/">Property Sourcing</Link>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.heading}>About</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact a Branch</Link>
            <Link href="/contact">Book a Valuation</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Cookie Policy</Link>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.heading}>Get in Touch</h4>
            <p className={styles.phone}>Call us:<br /><a href="tel:+447476870413">+44 (0)7476 870 413</a></p>
            <p className={styles.phone} style={{ marginTop: '12px' }}>Email us:<br /><a href="mailto:hello@phhomes.co.uk">hello@phhomes.co.uk</a></p>
            <div className={styles.subscribe}>
              <h4 className={styles.heading}>Stay Updated</h4>
              <p>Sign up for exclusive property deals.</p>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Email Address" className={styles.input} />
                <button className={styles.submitBtn}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© PH Homes {new Date().getFullYear()} | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
