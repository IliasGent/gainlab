'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' }
];

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-dropdown-wrapper" ref={dropdownRef}>
      <button
        className={`lang-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="globe-icon">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </span>
        <span className="lang-current-flag">{currentLang.flag}</span>
        <span className="lang-current-label">{currentLang.label}</span>
        <span className={`chevron-icon ${isOpen ? 'rotate' : ''}`}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu fade-in-up">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-menu-item ${lang === l.code ? 'selected' : ''}`}
              onClick={() => {
                changeLanguage(l.code);
                setIsOpen(false);
              }}
            >
              <span className="menu-flag">{l.flag}</span>
              <span className="menu-label">{l.label}</span>
              {lang === l.code && (
                <span className="check-icon">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
