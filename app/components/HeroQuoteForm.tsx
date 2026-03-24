'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, ArrowRight } from 'lucide-react';
import styles from './HeroQuoteForm.module.css';

export default function HeroQuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickup: '',
    delivery: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the full quote page with query params to prefill
    const params = new URLSearchParams({
      pickup: formData.pickup,
      delivery: formData.delivery,
      date: formData.date,
    });
    router.push(`/quote?${params.toString()}`);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Request a Quote</h2>
        <a href="tel:+18005550199" className={styles.callLink}>
          <Phone size={16} />
          <span>Call (800) 555-0199</span>
        </a>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="pickup">Pickup City & State</label>
          <input 
            type="text" 
            id="pickup" 
            name="pickup" 
            placeholder="e.g. Miami, FL" 
            value={formData.pickup}
            onChange={handleChange}
            required 
            className={styles.input}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="delivery">Delivery City & State</label>
          <input 
            type="text" 
            id="delivery" 
            name="delivery" 
            placeholder="e.g. Los Angeles, CA" 
            value={formData.delivery}
            onChange={handleChange}
            required 
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="date">Estimated Ship Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            required 
            className={styles.input}
          />
        </div>

        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
          <span>Next Step</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
