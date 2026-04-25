'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../context/LanguageContext';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { t, lang } = useTranslation();
  const router = useRouter();

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      router.push('/');
    } catch (err) {
      setError(t('auth.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container page-wrapper">
      <div className="auth-card fade-in-up">
        <div className="auth-header">
          <h1>{t('auth.registerTitle').split(' ')[0]} <span className="text-accent">{t('auth.registerTitle').split(' ').slice(1).join(' ')}</span></h1>
          <p className="text-secondary">{lang === 'ru' ? 'Сохраняй корзину и отслеживай заказы' : (lang === 'fr' ? 'Enregistrez votre panier et suivez vos commandes' : 'Save your cart and track orders')}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="name">{t('auth.name')}</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={lang === 'ru' ? 'Как тебя зовут?' : (lang === 'fr' ? 'Quel est votre nom ?' : 'What is your name?')}
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? '...' : `${t('auth.btnRegister')} →`}
          </button>
        </form>

        <p className="auth-footer-text">
          {t('auth.hasAccount')}{' '}
          <Link href="/login" className="text-accent" style={{ fontWeight: 600 }}>
            {t('auth.btnSubmit')}
          </Link>
        </p>
      </div>
    </div>
  );
}
