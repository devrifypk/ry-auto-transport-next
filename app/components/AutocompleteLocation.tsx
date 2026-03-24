'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Autocomplete.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

export default function AutocompleteLocation({ value, onChange, placeholder, name, required, className }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (value.length >= 2 && isOpen) {
        setLoading(true);
        try {
          // OpenStreetMap Nominatim Free Tier.
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&countrycodes=us&format=json&addressdetails=1&limit=5`,
            { headers: { 'User-Agent': 'RYAutoTransport/1.0 (https://ryautotransport.com)' } }
          );
          if (!res.ok) throw new Error('API Error');
          const data = await res.json();
          
          const results = data.map((d: any) => {
            const parts = d.display_name.split(', ');
            // e.g "Miami, XYZ County, Florida, Zip, United States" -> "Miami, FL"
            // If it's a zip code search, it might differ. So we do best-effort formatting.
            if (parts.length >= 3) {
              const stateOrZip = parts[parts.length - 2];
              return `${parts[0]}, ${stateOrZip}`;
            }
            return d.display_name;
          });
          
          setSuggestions(Array.from(new Set(results)) as string[]);
        } catch (err) {
          console.error('Location API error:', err);
        }
        setLoading(false);
      } else {
        setSuggestions([]);
      }
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [value, isOpen]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <input 
        type="text" 
        name={name} 
        value={value}
        onChange={(e) => { onChange(e.target.value); setIsOpen(true); }}
        onFocus={() => { if (value.length >= 2) setIsOpen(true); }}
        placeholder={placeholder} 
        required={required} 
        className={className} 
        autoComplete="off"
      />
      {isOpen && (suggestions.length > 0 || loading) && (
        <ul className={styles.dropdown}>
          {loading ? (
            <li className={styles.loadingItem}>Searching...</li>
          ) : (
            suggestions.map((s, i) => (
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
