import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Clock, Map } from 'lucide-react';
import HeroQuoteForm from './components/HeroQuoteForm';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image 
          src="/hero-bg.png" 
          alt="Auto Transport Trucks" 
          fill
          priority
          className={styles.heroImage}
        />
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Reliable Auto Transport You Can Trust
            </h1>
            <p className={styles.heroSubtitle}>
              Ship your vehicle safely anywhere in the U.S. with our network of licensed and insured carriers. Open and enclosed transport available.
            </p>
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <ShieldCheck size={20} className={styles.badgeIcon} />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className={styles.badge}>
                <Map size={20} className={styles.badgeIcon} />
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroFormWrapper}>
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Why Choose R&Y Auto Transport?</h2>
            <p className={styles.sectionText}>
              We understand that your vehicle is more than just a car—it's an essential part of your life. 
              As a reliable auto transport brokerage, we work exclusively with top-rated, licensed, and insured carriers 
              to ensure your vehicle arrives safely and on time. Whether you're moving across the state or across the country, 
              we handle the logistics so you don't have to.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  <ShieldCheck size={32} className={styles.featureIcon} />
                </div>
                <h3>Licensed & Insured</h3>
                <p>Every carrier in our network is fully vetted, licensed, and carries cargo insurance for your peace of mind.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  <Map size={32} className={styles.featureIcon} />
                </div>
                <h3>Door-to-Door Service</h3>
                <p>We pick up and deliver your vehicle as close to your specified locations as legally and safely possible.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  <Clock size={32} className={styles.featureIcon} />
                </div>
                <h3>Quick Personal Quotes</h3>
                <p>No automated lowball estimates. Our team manually reviews your route to provide an accurate, honest quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
            <div className={styles.overallRating}>
              <span className={styles.ratingNumber}>5.0</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className={styles.reviewCount}>Based on 50+ Google Reviews</span>
            </div>
          </div>

          <div className={styles.reviewsGrid}>
            {[
              { name: "Michael T.", date: "2 weeks ago", text: "Excellent experience with R&Y Auto Transport. Yakov was communicative throughout the whole process and my car arrived a day early without a single scratch." },
              { name: "Sarah L.", date: "1 month ago", text: "First time shipping a car and they made it so easy. The quote was transparent, no hidden fees. The driver was very professional." },
              { name: "David R.", date: "2 months ago", text: "Needed my classic car shipped in an enclosed trailer. They handled it with extreme care. Highly recommend their services for anyone needing a trustworthy broker." }
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.authorName}>{review.name}</span>
                  <span className={styles.authorDate}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Ship Your Vehicle?</h2>
            <p>Get a fast, accurate quote today and let us handle the rest.</p>
            <Link href="/quote" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
