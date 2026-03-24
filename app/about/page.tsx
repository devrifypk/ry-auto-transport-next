import Link from 'next/link';
import { ShieldCheck, Users, Trophy } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "About Us | R&Y Auto Transport",
  description: "Learn about R&Y Auto Transport, a reliable auto transport brokerage working with licensed and insured carriers nationwide.",
};

export default function AboutUs() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Your Trusted Partner in Auto Transport</p>
        </div>
      </div>

      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.textContent}>
              <h2>Who We Are</h2>
              <p>
                R&Y Auto Transport LLC is a premier auto transport brokerage dedicated to providing top-tier vehicle shipping services across the United States. We understand that trusting someone with your vehicle can be stressful, which is why we’ve built our business on a foundation of reliability, transparency, and outstanding customer service.
              </p>
              <p>
                Since our inception, our mission has been simple: to connect our customers with the best, most reliable carriers in the industry, ensuring your vehicle arrives exactly as it left, safely and on time.
              </p>
              
              <h2 className={styles.mt4}>Our Commitment to You</h2>
              <p>
                We do the heavy lifting so you don't have to. We thoroughly vet every carrier we work with, verifying their DOT/MC authority, insurance coverage, and safety records. When you ship with R&Y Auto Transport, you are shipping with peace of mind.
              </p>
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><ShieldCheck size={32} /></div>
                <h3>100%</h3>
                <p>Licensed & Insured Carriers</p>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><Users size={32} /></div>
                <h3>Dedicated</h3>
                <p>Customer Support</p>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><Trophy size={32} /></div>
                <h3>Nationwide</h3>
                <p>50-State Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container text-center">
          <h2>Ready to Transport Your Vehicle?</h2>
          <p className={styles.teamText}>
            Join thousands of satisfied customers who have trusted R&Y Auto Transport for their shipping needs.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/quote" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              Request a Free Quote
            </Link>
            <Link href="/contact" className="btn" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem', border: '1px solid var(--brand-green-300)', color: 'var(--brand-green-500)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
