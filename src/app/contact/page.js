'use client';

import { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

export default function Contact() {
  const { t, lang } = useTranslation();
  
  // Contact Form State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'support',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container page-wrapper">
      <div className="page-header fade-in-up">
        <h1 style={{ fontSize: '3rem' }}>{t('contact.title')} <span className="text-accent">{t('contact.titleAccent')}</span></h1>
        <p className="hero-subtitle" style={{ margin: '1rem auto', maxWidth: '700px' }}>{t('contact.subtitle')}</p>
      </div>

      <div className="contact-section fade-in-up delay-1" style={{ marginTop: '3rem' }}>
        {isSubmitted ? (
          <div className="auth-card text-center fade-in-up" style={{ maxWidth: '600px', margin: '4rem auto' }}>
            <div className="result-emoji">✅</div>
            <h2>{t('contact.success')}</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>{t('contact.successDetail')}</p>
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '2rem' }}
              onClick={() => setIsSubmitted(false)}
            >
              ← {lang === 'ru' ? 'Назад' : 'Back'}
            </button>
          </div>
        ) : (
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h3>{t('contact.infoTitle')}</h3>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="m22 6-10 7L2 6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{t('footer.email')}</p>
                  <p>{t('footer.businessEmail')}</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{t('footer.phone')}</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Office</h4>
                  <p>{t('footer.address')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="auth-card" style={{ margin: 0, maxWidth: 'none' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>{t('contact.formTitle')}</h3>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>{t('contact.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-input" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-input" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact.purpose')}</label>
                  <select 
                    name="purpose"
                    className="form-input form-select" 
                    value={formData.purpose}
                    onChange={handleChange}
                  >
                    <option value="support">{t('contact.purposeOptions.support')}</option>
                    <option value="business">{t('contact.purposeOptions.business')}</option>
                    <option value="feedback">{t('contact.purposeOptions.feedback')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('contact.message')}</label>
                  <textarea 
                    name="message"
                    className="form-input form-textarea" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    style={{ minHeight: '150px' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{t('contact.btnSubmit')}</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
