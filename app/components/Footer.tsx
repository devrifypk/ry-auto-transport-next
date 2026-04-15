import Link from 'next/link';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoText}>
              <span className={styles.brandName}>R&Y</span>
              <span className={styles.brandSub}>Auto Transport</span>
            </div>
          </Link>
          <p className={styles.brandDesc}>
            Reliable auto transport brokerage working with licensed and insured carriers nationwide. Your vehicle's safety is our top priority.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/quote">Get a Quote</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <a href="tel:+19546438989">(954) 643-8989</a>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:Jacob@ryautotransport.com">Jacob@ryautotransport.com</a>
            </li>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>FAR ROCKAWAY, NY, 11691</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} R&Y Auto Transport LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
