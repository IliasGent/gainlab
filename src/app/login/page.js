'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../context/LanguageContext';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { t, lang } = useTranslation();
  const router = useRouter();

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.email, form.password);
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
          <h1>{t('auth.loginTitle')} <span className="text-accent">GainLab</span></h1>
          <p className="text-secondary">{lang === 'ru' ? 'Введи свои данные, чтобы продолжить' : (lang === 'fr' ? 'Entrez vos coordonnées pour continuer' : 'Enter your details to continue')}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

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
            {loading ? '...' : `${t('auth.btnSubmit')} →`}
          </button>
        </form>

        <p className="auth-footer-text">
          {t('auth.noAccount')}{' '}
          <Link href="/register" className="text-accent" style={{ fontWeight: 600 }}>
            {t('auth.btnRegister')}
          </Link>
        </p>
      </div>
    </div>
  );
}
