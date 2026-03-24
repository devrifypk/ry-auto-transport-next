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

const COMMON_MAKES = [
  "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", 
  "Dodge", "Ferrari", "FIAT", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "INFINITI", "Jaguar", "Jeep", "Kia", 
  "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lucid", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "MINI", 
  "Mitsubishi", "Nissan", "Polestar", "Porsche", "Ram", "Rivian", "Rolls-Royce", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"
];

export default function AutocompleteVehicleMake({ value, onChange, placeholder, name, required, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = COMMON_MAKES.filter(m => m.toLowerCase().includes(value.toLowerCase()));

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
      {isOpen && suggestions.length > 0 && value.length > 0 && (
        <ul className={styles.dropdown}>
          {suggestions.map((s, i) => (
            <li key={i} onClick={() => { onChange(s); setIsOpen(false); }} className={styles.item}>
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
