'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import AutocompleteLocation from '../components/AutocompleteLocation';
import AutocompleteVehicleMake from '../components/AutocompleteVehicleMake';
import AutocompleteVehicleModel from '../components/AutocompleteVehicleModel';
import styles from './page.module.css';

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicles: [{ year: '', make: '', model: '', running: 'yes' }],
    pickup: searchParams.get('pickup') || '',
    delivery: searchParams.get('delivery') || '',
    date: searchParams.get('date') || '',
    notes: ''
  });

  const handleVehicleChange = (index: number, field: string, value: string) => {
    const newVehicles = [...formData.vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value };
    setFormData({ ...formData, vehicles: newVehicles });
  };

  const addVehicle = () => {
    setFormData({ 
      ...formData, 
      vehicles: [...formData.vehicles, { year: '', make: '', model: '', running: 'yes' }] 
    });
  };

  const removeVehicle = (index: number) => {
    if (formData.vehicles.length > 1) {
      const newVehicles = formData.vehicles.filter((_, i) => i !== index);
      setFormData({ ...formData, vehicles: newVehicles });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successContainer}>
        <CheckCircle2 size={64} className={styles.successIcon} />
        <h2>Thank you! We received your request.</h2>
        <p>A representative from R&Y Auto Transport will contact you shortly with a personalized quote for your route.</p>
        <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '2rem' }}>
          Request Another Quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.quoteForm}>
      <div className={styles.formSection}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>1. Vehicle Information</h3>
        </div>
        
        {formData.vehicles.map((vehicle, index) => (
          <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ margin: 0, color: 'var(--primary)' }}>Vehicle {index + 1}</h4>
              {formData.vehicles.length > 1 && (
                <button type="button" onClick={() => removeVehicle(index)} style={{ color: '#ba1a1a', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Remove</button>
              )}
            </div>
            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Vehicle Year</label>
                <input type="text" value={vehicle.year} onChange={(e) => handleVehicleChange(index, 'year', e.target.value)} required className={styles.input} placeholder="e.g. 2021" />
              </div>
              <div className={styles.formGroup}>
                <label>Make</label>
                <AutocompleteVehicleMake value={vehicle.make} onChange={(val: string) => handleVehicleChange(index, 'make', val)} required className={styles.input} placeholder="e.g. Porsche" />
              </div>
              <div className={styles.formGroup}>
                <label>Model</label>
                <AutocompleteVehicleModel make={vehicle.make} year={vehicle.year} value={vehicle.model} onChange={(val: string) => handleVehicleChange(index, 'model', val)} required className={styles.input} placeholder="e.g. 911" />
              </div>
              <div className={styles.formGroup}>
                <label>Is the vehicle running?</label>
                <select value={vehicle.running} onChange={(e) => handleVehicleChange(index, 'running', e.target.value)} className={styles.select}>
                  <option value="yes">Yes, it runs and drives</option>
                  <option value="no">No, it does not run</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={addVehicle} className="btn" style={{ background: 'var(--surface-color)', color: 'var(--primary)', border: '1px solid var(--primary)', width: '100%' }}>
          + Add Another Vehicle
        </button>
      </div>

      <div className={styles.formSection}>
        <h3>2. Route & Timing</h3>
        <div className={styles.grid2}>
          <div className={styles.formGroup}>
            <label htmlFor="pickup">Pickup City & Zip</label>
            <AutocompleteLocation name="pickup" value={formData.pickup} onChange={(val: string) => setFormData({ ...formData, pickup: val })} required className={styles.input} placeholder="e.g. Miami, FL / 33101" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="delivery">Delivery City & Zip</label>
            <AutocompleteLocation name="delivery" value={formData.delivery} onChange={(val: string) => setFormData({ ...formData, delivery: val })} required className={styles.input} placeholder="e.g. Los Angeles, CA / 90210" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">First Available Pickup Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className={styles.input} />
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>3. Contact Information</h3>
        <div className={styles.grid2}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />
          </div>
        </div>
      </div>

      <div className={`${styles.formSection} ${styles.noBorder}`}>
        <h3>4. Additional Notes</h3>
        <div className={styles.formGroup}>
          <label htmlFor="notes">Any special instructions or details about the vehicle?</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={4} className={styles.textarea} placeholder="e.g. Needs enclosed transport, modified suspension, etc."></textarea>
        </div>
      </div>

      {status === 'error' && (
        <div className={styles.errorMessage}>
          An error occurred while submitting your request. Please try again or call us directly.
        </div>
      )}

      <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting Request...' : 'Get My Free Quote'}
      </button>
    </form>
  );
}

export default function QuotePage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Get a Custom Quote</h1>
          <p className={styles.subtitle}>Provide your details below to receive a fast, accurate estimate.</p>
        </div>
      </div>

      <section className={styles.quoteSection}>
        <div className={`container ${styles.quoteContainer}`}>
          <div className={styles.formCard}>
            <Suspense fallback={<div style={{textAlign: 'center', padding: '3rem'}}>Loading form...</div>}>
              <QuoteFormInner />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
