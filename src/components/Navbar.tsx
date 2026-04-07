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
          <Link href="/what-we-do" className={styles.link}>What We Do</Link>
          <Link href="/our-services" className={styles.link}>Our Services</Link>
          <Link href="/our-clients" className={styles.link}>Our Clients</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
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
