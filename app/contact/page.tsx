'use client';

import { useState } from 'react';
import { Mail, Headset, Phone, Clock, CalendarDays, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: 'var(--on-surface)' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', marginTop: '0.5rem' }}>Thank you for reaching out. A specialist will get back to you shortly.</p>
                <button type="button" className={`btn btn-primary`} onClick={() => setStatus('idle')}>Send Another Message</button>
              </div>
            ) : (
            <form className={styles.formGrid} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.inputField} placeholder="John Doe" />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.inputField} placeholder="john@example.com" />
                </div>
              </div>
              <div className={styles.fieldGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={styles.inputField} placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.fieldGroup}>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className={`${styles.inputField} ${styles.textareaField}`} placeholder="Tell us about your transport needs..." rows={5}></textarea>
              </div>
              {status === 'error' && <p style={{ color: '#ba1a1a', margin: 0, fontSize: '0.875rem' }}>Failed to send message. Please try again.</p>}
              <button type="submit" disabled={status === 'submitting'} className={styles.submitBtn}>
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'} <Send size={20} />
              </button>
            </form>
            )}
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
                      <p className={styles.supportValueHuge}>(954) 643-8989</p>
                    </div>
                  </div>
                  <div className={styles.supportItem}>
                    <div className={styles.supportIcon}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className={styles.supportLabel}>Operating Hours</p>
                      <p className={styles.supportValueText}>Mon - Thu: 9 AM - 7 PM</p>
                      <p className={styles.supportValueText}>Friday: 9 AM - 12 PM</p>
                      <p className={styles.supportValueText}>Saturday: Closed</p>
                      <p className={styles.supportValueText}>Sunday: 9 AM - 2 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Consultation */}
            <div className={styles.expertCard}>
              <div className={styles.expertCardContent}>
                <h3 className={styles.expertTitle} style={{ color: '#ffffff' }}>Talk to an Expert</h3>
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
    </>
  );
}
