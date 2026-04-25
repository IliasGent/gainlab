'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // Default to English for EU

  useEffect(() => {
    const savedLang = localStorage.getItem('gainlab_lang');
    if (savedLang && ['en', 'fr', 'ru'].includes(savedLang)) {
      setLang(savedLang);
    } else {
      // Browser language detection
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'fr', 'ru'].includes(browserLang)) {
        setLang(browserLang);
      }
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (['en', 'fr', 'ru'].includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('gainlab_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }
    return value;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : (lang === 'fr' ? 'fr-FR' : 'en-IE'), {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
