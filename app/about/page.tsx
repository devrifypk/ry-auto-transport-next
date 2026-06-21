import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Crosshair, Handshake, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { siteConfig } from '../config';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>Established Precision</span>
            <h1 className={styles.heroTitle}>
              Crafting the Art of <span className={styles.heroTitleHighlight}>Auto Motion.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              At {siteConfig.companyName}, we don't just move vehicles; we curate a journey of mechanical excellence through an atelier-inspired logistics framework.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.btnPrimaryCard}>
                Our Story
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageGlow}></div>
            <div className={styles.heroImageContainer}>
              <Image 
                src="/images/about-hero.jpg" 
                alt="Luxury vehicle" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,80,22,0.4), transparent)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionHeader}>
            <div className={styles.missionHeaderLeft}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionSubtitle}>
                To engineer a seamless bridge between origin and destination, transforming the logistics landscape through meticulous precision.
              </p>
            </div>
            <div className={styles.missionDivider}></div>
          </div>

          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <ShieldCheck size={28} />
              </div>
              <h3>Safety First</h3>
              <p>Our 'Safety First' protocol involves multi-point inspections and climate-controlled environments for every transit.</p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon} style={{ color: '#2b6b39', backgroundColor: 'rgba(43,107,57,0.1)' }}>
                <Crosshair size={28} />
              </div>
              <h3>Operational Efficiency</h3>
              <p>Proprietary routing algorithms ensure minimal downtime and maximum velocity without compromising care.</p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon} style={{ color: '#782844', backgroundColor: 'rgba(120,40,68,0.1)' }}>
                <Handshake size={28} />
              </div>
              <h3>Reliability</h3>
              <p>A commitment to deadlines that mirrors the precision of the vehicles we are entrusted to move.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsHeader}>
            <div className={styles.statsTag}>Performance Metrics</div>
            <h2 className={styles.statsTitle}>Numbers that speak of our Precision.</h2>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Years in Business</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>45k+</span>
              <span className={styles.statLabel}>Vehicles Moved</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.8%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Active Support</span>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Footer Section */}
      <section className={styles.ctaFooter}>
        <div className={styles.ctaFooterBg}></div>
        <div className={`container ${styles.ctaFooterContent}`}>
          <h2 className={styles.ctaFooterTitle}>Ready to experience kinetic excellence?</h2>
          <div className={styles.ctaFooterActions}>
            <Link href="/quote" className={styles.btnPrimarySolid}>
              Request Your Personal Quote
            </Link>
            <Link href="/contact" className={styles.btnLink}>
              Speak with an Expert <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
