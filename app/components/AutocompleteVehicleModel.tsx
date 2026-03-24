'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Autocomplete.module.css';

interface Props {
  make: string;
  year: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

export default function AutocompleteVehicleModel({ make, year, value, onChange, placeholder, name, required, className }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [cachedModels, setCachedModels] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch models whenever make or year changes
  useEffect(() => {
    if (!make || !year || year.length !== 4) return;
    
    const fetchModels = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${encodeURIComponent(make)}/modelyear/${encodeURIComponent(year)}?format=json`);
        const data = await res.json();
        if (data && data.Results) {
          const models = data.Results.map((m: any) => m.Model_Name);
          setCachedModels(models);
        }
      } catch (err) {
        console.error('NHTSA API Error:', err);
      }
      setLoading(false);
    };
    
    fetchModels();
  }, [make, year]);

  // Filter cached models based on input value
  useEffect(() => {
    if (value) {
      setSuggestions(cachedModels.filter(m => m.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions(cachedModels); // show all if empty
    }
  }, [value, cachedModels]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <input 
        type="text" 
        name={name} 
        value={value}
        onChange={(e) => { onChange(e.target.value); setIsOpen(true); }}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder} 
        required={required} 
        className={className} 
        autoComplete="off"
      />
      {isOpen && (suggestions.length > 0 || loading) && (make && year.length === 4) && (
        <ul className={styles.dropdown}>
          {loading ? (
            <li className={styles.loadingItem}>Loading models...</li>
          ) : (
            suggestions.slice(0, 10).map((s, i) => (
              <li key={i} onClick={() => { onChange(s); setIsOpen(false); }} className={styles.item}>
                {s}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
