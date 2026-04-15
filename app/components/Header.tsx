'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.brandName}>R&Y</span>
            <span className={styles.brandSub}>Auto Transport</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className={styles.headerActions}>
          <a href="tel:+19546438989" className={styles.phoneLink}>
            <Phone size={18} />
            <span>(954) 643-8989</span>
          </a>
          <Link href="/quote" className={`btn btn-primary ${styles.quoteBtn}`}>
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.mobileNavLink} ${pathname === link.path ? styles.activeMobile : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/quote" 
              className={`btn btn-primary ${styles.mobileQuoteBtn}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
