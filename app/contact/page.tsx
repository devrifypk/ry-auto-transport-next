import { Mail, Headset, Phone, Clock, CalendarDays, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroTag}>Get In Touch</span>
          <h1 className={styles.heroTitle}>
            Connect with our <span className={styles.heroTitleHighlight}>Logistics Artisans</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experience white-glove automotive transport curated by experts. Whether moving a single heirloom or a full collection, our precision-first approach ensures peace of mind.
          </p>
        </div>
        <div className={styles.heroBackgroundShape}></div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.mainGrid}`}>
          {/* Left: Message Form */}
          <div className={styles.formColumn}>
            <h2 className={styles.formHeader}>
              <Mail className={styles.formIcon} size={32} />
              Send a Message
            </h2>
            <form className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label>Full Name</label>
                  <input type="text" className={styles.inputField} placeholder="John Doe" />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Email Address</label>
                  <input type="email" className={styles.inputField} placeholder="john@example.com" />
                </div>
              </div>
              <div className={styles.fieldGroup}>
                <label>Phone Number</label>
                <input type="tel" className={styles.inputField} placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.fieldGroup}>
                <label>Message</label>
                <textarea className={`${styles.inputField} ${styles.textareaField}`} placeholder="Tell us about your transport needs..." rows={5}></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right: Info Cards */}
          <div className={styles.infoColumn}>
            {/* Support Card */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardContent}>
                <h3 className={styles.supportTitle}>
                  <Headset className={styles.formIcon} size={28} />
                  Customer Support
                </h3>
                <div className={styles.supportItems}>
                  <div className={styles.supportItem}>
                    <div className={styles.supportIcon}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className={styles.supportLabel}>Direct Line</p>
                      <p className={styles.supportValueHuge}>(800) 555-RYAT</p>
                    </div>
                  </div>
                  <div className={styles.supportItem}>
                    <div className={styles.supportIcon}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className={styles.supportLabel}>Operating Hours</p>
                      <p className={styles.supportValueText}>Monday — Friday: 8AM - 8PM EST</p>
                      <p className={styles.supportValueText}>Saturday: 10AM - 4PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Consultation */}
            <div className={styles.expertCard}>
              <div className={styles.expertCardContent}>
                <h3 className={styles.expertTitle}>Talk to an Expert</h3>
                <p className={styles.expertDesc}>
                  Need custom fleet solutions or high-value vehicle logistics advice? Schedule a 15-minute consultation with our senior transport specialists.
                </p>
              </div>
              <button className={styles.expertBtn} type="button">
                Book Now <CalendarDays size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapHeader}>
            <div>
              <h2 className={styles.mapTitle}>Our Atelier Headquarters</h2>
              <p className={styles.mapSubtitle}>Located in the heart of the historic automotive district, our facility serves as the nerve center for North American operations.</p>
            </div>
            <div className={styles.mapAddress}>
              <MapPin size={24} />
              <span>1200 Avenue of the Arts, Detroit, MI 48226</span>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1590059595567-0c3eb1a47385?auto=format&fit=crop&q=80" 
              alt="Map"
              fill
              className={styles.mapImage}
            />
            <div className={styles.mapPin}>
              <div className={styles.pinIcon}>
                <div className={styles.pinTriangle}></div>
                <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=48&q=80" alt="Pin" width={48} height={48} style={{ borderRadius: '8px' }} />
              </div>
              <div className={styles.pinLabel}>The Atelier</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
