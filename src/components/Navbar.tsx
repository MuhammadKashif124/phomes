"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            PH<span>Homes</span>
          </Link>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/sellers" className={styles.link}>Sellers</Link>
          <Link href="/landlords" className={styles.link}>Landlords</Link>
          <Link href="/contact" className={styles.link}>Contact a Branch</Link>
          <Link href="/contact" className={styles.link}>Book a Valuation</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/property-search" className={styles.searchBtn}>Property Search</Link>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
