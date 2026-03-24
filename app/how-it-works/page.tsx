import Link from 'next/link';
import { ClipboardCheck, CalendarCheck, MapPinCheck } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "How It Works | R&Y Auto Transport",
  description: "Learn how easy it is to ship your vehicle with R&Y Auto Transport in three simple steps: Request a quote, schedule transport, and safe delivery.",
};

export default function HowItWorks() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>How It Works</h1>
          <p className={styles.subtitle}>Shipping your vehicle is as easy as 1, 2, 3.</p>
        </div>
      </div>

      <section className={styles.stepsSection}>
        <div className="container">
          <div className={styles.stepsContainer}>
            
            {/* Step 1 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIconWrapper}>
                <ClipboardCheck size={48} className={styles.stepIcon} />
              </div>
              <h2 className={styles.stepTitle}>Request a Quote</h2>
              <p className={styles.stepDesc}>
                Start by simply requesting a quote online or giving us a call. Provide your vehicle details, pickup and delivery locations, and preferred dates. Our team will review your route manually and provide you with a transparent, no-obligation quote—no hidden fees, no automated lowball estimates.
              </p>
            </div>

            {/* Step 2 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIconWrapper}>
                <CalendarCheck size={48} className={styles.stepIcon} />
              </div>
              <h2 className={styles.stepTitle}>We Schedule Your Transport</h2>
              <p className={styles.stepDesc}>
                Once you accept the quote, we immediately get to work. We dispatch your order to our network of fully vetted, licensed, and insured carriers. We'll secure the best driver for your specific route and vehicle, and provide you with an estimated pickup time and driver contact details.
              </p>
            </div>

            {/* Step 3 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIconWrapper}>
                <MapPinCheck size={48} className={styles.stepIcon} />
              </div>
              <h2 className={styles.stepTitle}>Your Vehicle is Safely Delivered</h2>
              <p className={styles.stepDesc}>
                The driver will pick up your vehicle and you can stay in touch throughout the journey. Before delivery, the driver will call you to confirm the drop-off location. Your vehicle arrives safely at its destination, and you do a final inspection before signing off.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Experience the R&Y Difference</h2>
            <Link href="/quote" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
