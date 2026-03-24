'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate sending form
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We're here to help with your auto transport needs.</p>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p className={styles.contactDesc}>
              Have questions about shipping your vehicle? Need a custom quote? Reach out to our dedicated team of auto transport specialists.
            </p>
            
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+18005550199">(800) 555-0199</a>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:quotes@ryautotransport.com">quotes@ryautotransport.com</a>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h3>Service Area</h3>
                  <span>Available Nationwide, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <h2>Send a Message</h2>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Thank you for reaching out!</h3>
                <p>We've received your message and a member of our team will contact you shortly.</p>
                <button className="btn btn-primary mt4" onClick={() => setStatus('idle')}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required className={styles.input} />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required className={styles.input} />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className={styles.input} />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" rows={5} required className={styles.textarea}></textarea>
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </section>
    </>
  );
}
