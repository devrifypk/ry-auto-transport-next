import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Map, MapPin, Clock, Truck, Play, Award, CheckCircle } from 'lucide-react';
import HeroQuoteForm from './components/HeroQuoteForm';
import { siteConfig } from './config';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/hero-bg.png" 
            alt="Luxury vehicle transport" 
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroGradient}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              The Art of <span className={styles.titleHighlight}>Seamless</span> Transit
            </h1>
            <p className={styles.heroSubtitle}>
              White-glove auto logistics where precision engineering meets high-end hospitality. Your vehicle, our masterpiece.
            </p>
            <div className={styles.heroActions}>
              <Link href="/how-it-works" className={styles.btnPrimarySolid}>
                Explore Services
              </Link>
              <Link href="/about" className={styles.btnGlass}>
                Our Network
              </Link>
            </div>
          </div>
          
          {/* Quote Form Overlay */}
          <div className={styles.heroFormWrapper}>
            <h3 className={styles.formTitle}>Instant Precision Quote</h3>
            <HeroQuoteForm />
            <p style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '1rem', opacity: 0.7, color: 'white' }}>
              No credit card required for quote
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Logo Carousel */}
      <section className={styles.socialProof}>
        <div className="container">
          <p className={styles.socialProofText}>Trusted by Discerning Clients Nationwide</p>
          <div className={styles.logos}>
            <span className={styles.logo}>PORSCHE CLUB</span>
            <span className={styles.logo}>AUTO AUCTIONS</span>
            <span className={styles.logo}>CLASSIC EXOTICS</span>
            <span className={styles.logo}>ELITE MOTORS</span>
          </div>
        </div>
      </section>

      {/* Key Value Propositions */}
      <section className={styles.valueSection}>
        <div className="container">
          <div className={styles.valueHeader}>
            <div>
              <h2 className={styles.valueTitle}>
                Logistics Reimagined for the <span style={{ color: 'var(--primary)' }}>Discerning Collector</span>
              </h2>
              <p className={styles.valueSubtitle}>
                We don't just move cars; we manage your peace of mind with a tech-forward approach to elite transportation.
              </p>
            </div>
            
            <div className={styles.insuredBadge}>
              <div className={styles.insuredIcon}>
                <ShieldCheck size={28} />
              </div>
              <div className={styles.insuredText}>
                <strong>Fully Insured</strong>
                <span>Up to $5M coverage</span>
              </div>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <ShieldCheck size={28} />
              </div>
              <h4>Elite Insurance Protection</h4>
              <p>Our comprehensive umbrella policies ensure every inch of your vehicle is covered under rigorous standards.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <MapPin size={28} />
              </div>
              <h4>Real-Time Tracking</h4>
              <p>Follow your vehicle's journey with satellite-enabled precision and proactive status updates.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Award size={28} />
              </div>
              <h4>Vetted Tier-1 Carriers</h4>
              <p>We only partner with the top 1% of carriers who meet our strict safety and reliability audits.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <CheckCircle size={28} />
              </div>
              <h4>Dedicated Concierge</h4>
              <p>A personal logistics coordinator manages every detail, from paperwork to the final white-glove handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2 className={styles.processTitle}>The Kinetic Path</h2>
            <p className={styles.processSubtitle}>Four sophisticated steps from initial consultation to final delivery at your doorstep.</p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processLine}></div>
            
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>
                <Clock size={32} />
              </div>
              <h5>1. Strategy & Quote</h5>
              <p>Instant digital quotes followed by a personalized shipping strategy from our experts.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>
                <Map size={32} />
              </div>
              <h5>2. Secure Scheduling</h5>
              <p>Selection of the optimal carrier and precise window scheduling to match your needs.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>
                <Truck size={32} />
              </div>
              <h5>3. Transit in Motion</h5>
              <p>Continuous monitoring and proactive updates throughout the vehicle's safe journey.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>
                <CheckCircle size={32} />
              </div>
              <h5>4. Pristine Delivery</h5>
              <p>Final inspection and white-glove hand-off at your specified destination point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Echoes of Excellence */}
      <section className={styles.reviewSection}>
        <div className="container">
          <div className={styles.reviewHeader}>
            <div>
              <h2 className={styles.reviewTitle}>Echoes of Excellence</h2>
              <div className={styles.reviewStats}>
                <Star size={24} fill="currentColor" />
                <span>4.9/5 Based on Authentic Customer Experiences</span>
              </div>
            </div>
          </div>

          <div className={styles.reviewGrid}>
            {[
              { 
                name: "avi Biberfeld", 
                date: "a month ago", 
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocIWuBu99pXI9mSpzQeYjQwVml5cPjcRJik09bnrExUfwPBzhA=w54-h54-p-rp-mo-br100",
                role: "Private Client",
                text: "I had an amazing experience with R&Y Auto Transport. From start to finish, everything was handled professionally and smoothly. Communication was clear, pricing was fair with no surprises, and my vehicle arrived safely and on time." 
              },
              { 
                name: "Shmuel Palgon", 
                date: "3 weeks ago", 
                avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU7n5bseGCtK2u9rwvngQvWBo3fEXw95YJq-GuYsR_WCVkcw1xW=w54-h54-p-rp-mo-br100",
                role: "Repeat Client",
                text: "Jacob was on top of all the logistics and made sure I was informed with whatever the latest update was! I’d definitely call him again next time for my transporting." 
              },
              { 
                name: "Nochi Adelman", 
                date: "a month ago", 
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocKUgTzt9enxaVpXyFGIepp_Sj2vcZ-0MtUIWKcAIQTI-7qkNg=w54-h54-p-rp-mo-br100",
                role: "Verified Customer",
                text: "R&Y auto transport treated me very well. They were very efficient and everything was very smooth. I really recommend them." 
              }
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewer}>
                  <div className={styles.reviewerAvatar}>
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>
                  <div className={styles.reviewerInfo}>
                    <h6>{review.name}</h6>
                    <p>{review.role} • {review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Blob Section */}
      <section className={styles.ctaBlobSection}>
        <div className="container">
          <div className={styles.ctaBlob}>
            <div className={styles.blobHighlight1}></div>
            <div className={styles.blobHighlight2}></div>
            <h2 className={styles.ctaTitle}>Ready to move with precision?</h2>
            <p className={styles.ctaSubtitle}>
              Join the thousands who trust {siteConfig.companyName} for their most valuable assets.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className={styles.btnPrimarySolid} style={{ color: 'var(--primary)' }}>
                Start Your Free Quote
              </Link>
              <Link href="/contact" className={styles.btnGlass} style={{ background: 'transparent' }}>
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
