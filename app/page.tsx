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
              { 
                name: "avi Biberfeld", 
                date: "a month ago", 
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocIWuBu99pXI9mSpzQeYjQwVml5cPjcRJik09bnrExUfwPBzhA=w54-h54-p-rp-mo-br100",
                text: "I had an amazing experience with R&Y Auto Transport. From start to finish, everything was handled professionally and smoothly. Communication was clear, pricing was fair with no surprises, and my vehicle arrived safely and on time. They truly care about their customers and make the entire process stress-free. If you’re looking for reliable, honest, and efficient auto transport, I highly recommend R&Y Auto Transport. I will definitely be using them again!" 
              },
              { 
                name: "Shmuel Palgon", 
                date: "3 weeks ago", 
                avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU7n5bseGCtK2u9rwvngQvWBo3fEXw95YJq-GuYsR_WCVkcw1xW=w54-h54-p-rp-mo-br100",
                text: "Jacob was on top of all the logistics and made sure I was informed with whatever the latest update was! I’d definitely call him again next time for my transporting" 
              },
              { 
                name: "Nochi Adelman", 
                date: "a month ago", 
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocKUgTzt9enxaVpXyFGIepp_Sj2vcZ-0MtUIWKcAIQTI-7qkNg=w54-h54-p-rp-mo-br100",
                text: "R&y auto transport treated me very well they were very efficient and everything was very smooth I really recommend" 
              }
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewAuthor}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {review.avatar && (
                      <img src={review.avatar} alt={review.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    )}
                    <span className={styles.authorName}>{review.name}</span>
                  </div>
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
