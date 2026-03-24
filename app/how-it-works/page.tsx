import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ReceiptText, CalendarSearch, Truck, CheckCircle, ChevronDown } from 'lucide-react';
import styles from './page.module.css';

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>TRANSIT SIMPLIFIED</span>
            <h1 className={styles.heroTitle}>
              Precision moving <br />
              <span className={styles.heroTitleHighlight}>at every turn.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience a logistics journey designed for peace of mind. From the first click to the final handshake, we handle every detail with white-glove precision.
            </p>
            <Link href="/quote" className={styles.btnPrimary}>
              Start Moving <ArrowRight size={20} />
            </Link>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageContainer}>
              <Image 
                src="/images/how-hero.jpg" 
                alt="Luxury car transporter" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Bento Grid */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2 className={styles.processTitle}>Our Seamless Process</h2>
            <p className={styles.processSubtitle}>Four simple steps to get your vehicle from point A to point B without the stress.</p>
          </div>

          <div className={styles.bentoGrid}>
            <div className={styles.bentoTall}>
              <div>
                <div className={styles.bentoTallIcon}><ReceiptText size={28} /></div>
                <h3>1. Get a Quote</h3>
                <p>Input your details and receive a transparent, no-obligation quote in seconds. No hidden fees, just honest pricing.</p>
              </div>
              <div className={styles.bentoImageSquare}>
                <Image src="/images/how-step1.jpg" alt="Get Quote" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className={styles.bentoRightGrid}>
              <div className={styles.bentoWide}>
                <div className={styles.bentoWideContent}>
                  <div className={styles.bentoWideIcon}><CalendarSearch size={28} /></div>
                  <h3>2. Book Your Order</h3>
                  <p>Secure your slot with our top-rated carriers. We match you with the best driver based on your specific route and vehicle needs.</p>
                </div>
                <div className={styles.bentoWideImage}>
                  <Image src="/images/how-step2.jpg" alt="Book Order" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>

              <div className={styles.bentoSmall}>
                <div>
                  <div className={styles.bentoSmallInnerIcon}><Truck size={28} /></div>
                  <h3>3. Vehicle Pick Up</h3>
                  <p>Our driver arrives for a thorough inspection and careful loading. You receive a detailed condition report instantly.</p>
                </div>
                <div className={styles.bentoSmallImage}>
                  <Image src="/images/how-step3.jpg" alt="Vehicle Pickup" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>

              <div className={styles.bentoSmall} style={{ backgroundColor: 'var(--secondary-container, #abf0b1)', color: 'var(--on-surface)' }}>
                <div>
                  <div className={styles.bentoSmallInnerIcon} style={{ color: 'var(--on-surface)' }}><CheckCircle size={28} /></div>
                  <h3>4. Secure Delivery</h3>
                  <p>Your vehicle is delivered safely to your door. Inspect, sign, and celebrate—your transit is complete.</p>
                </div>
                <div className={styles.bentoSmallImage}>
                  <Image src="/images/how-final-step.jpg" alt="Secure Delivery" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>Common Questions</h2>
            <p className={styles.processSubtitle}>Everything you need to know about our premium transport service.</p>
          </div>
          
          <div className={styles.faqContainer}>
            <details className={styles.faqAccordion} open>
              <summary className={styles.faqSummary}>
                How long does the transport usually take?
                <ChevronDown className={styles.faqSummaryIcon} />
              </summary>
              <div className={styles.faqDetails}>
                Transit times vary based on distance. Typically, coast-to-coast takes 7-10 days, while shorter regional hauls can take 2-5 days. We provide a specific window during booking.
              </div>
            </details>
            <details className={styles.faqAccordion}>
              <summary className={styles.faqSummary}>
                What kind of insurance coverage is included?
                <ChevronDown className={styles.faqSummaryIcon} />
              </summary>
              <div className={styles.faqDetails}>
                Every shipment includes comprehensive cargo insurance coverage. Your vehicle is protected against transit damage from the moment of pickup until the final delivery signature.
              </div>
            </details>
            <details className={styles.faqAccordion}>
              <summary className={styles.faqSummary}>
                Can I choose a specific pick-up date?
                <ChevronDown className={styles.faqSummaryIcon} />
              </summary>
              <div className={styles.faqDetails}>
                While we offer 2-day windows for standard booking, "Expedited" service allows you to lock in specific dates. Our team works closely with you to coordinate a convenient time.
              </div>
            </details>
            <details className={styles.faqAccordion}>
              <summary className={styles.faqSummary}>
                Can I leave personal items in the vehicle?
                <ChevronDown className={styles.faqSummaryIcon} />
              </summary>
              <div className={styles.faqDetails}>
                For safety and weight regulations, we recommend removing all personal items. Most carriers allow up to 100 lbs of soft goods in the trunk, but these are not covered by insurance.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaDecoration1}></div>
            <div className={styles.ctaDecoration2}></div>
            
            <h2 className={styles.ctaTitleFinal}>Ready for a smoother ride?</h2>
            <p className={styles.ctaSubtitleFinal}>
              Join thousands of satisfied owners who trust our logistics for their most valuable assets. Get your tailored quote today.
            </p>
            <div className={styles.ctaActionsFinal}>
              <Link href="/quote" className={styles.btnSolidWhite}>
                Get Started
              </Link>
              <Link href="/contact" className={styles.btnOutlineWhite}>
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
