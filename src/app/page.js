'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useTranslation } from "./context/LanguageContext";
import { useCart } from "./context/CartContext";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const { t, lang, formatPrice } = useTranslation();
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState([]);
  
  
  const discountProducts = [
    {
      id: 101,
      img: '/images/product_1_branded.png',
      priceNum: 39.99,
      oldPriceNum: 59.99,
      tag: { en: '-33%', fr: '-33%', ru: '-33%' },
      name: { en: 'GainLab Isolate (Branded)', fr: 'Isolat GainLab (Marqué)', ru: 'GainLab Isolate (Branded)' },
      category: 'protein',
      categoryNames: { en: 'Protein', fr: 'Protéines', ru: 'Протеин' },
      desc: {
        en: 'Special branded edition of our premium whey isolate.',
        fr: 'Édition spéciale marquée de notre isolat premium.',
        ru: 'Специальная брендированная версия нашего премиального изолята.'
      }
    },
    {
      id: 102,
      img: '/images/vitamin-az.jpg',
      priceNum: 19.99,
      oldPriceNum: 29.99,
      tag: { en: '-33%', fr: '-33%', ru: '-33%' },
      name: { en: 'Vitamin A-Z Master Complex', fr: 'Vitamin A-Z Master Complex', ru: 'Vitamin A-Z Master Complex' },
      category: 'vitamins',
      categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
      zoom: 1.8,
      offsetY: -3,
      desc: {
        en: 'One jar equals a whole year of health (360 tabs).',
        fr: 'Un pot est égal à une année entière de santé (360 tabs).',
        ru: 'Одной банки хватит на целый год (360 таб).'
      }
    },
    {
      id: 103,
      img: '/images/sport-stack.jpg',
      priceNum: 24.99,
      oldPriceNum: 34.99,
      tag: { en: '-28%', fr: '-28%', ru: '-28%' },
      name: { en: 'Ultra Mega Sport Stack', fr: 'Ultra Mega Sport Stack', ru: 'Ultra Mega Sport Stack' },
      category: 'vitamins',
      categoryNames: { en: 'Vitamins', fr: 'Vitamines', ru: 'Витамины' },
      zoom: 1.8,
      offsetY: -3,
      desc: {
        en: 'Comprehensive multivitamin complex for athletes.',
        fr: 'Complexe multivitaminé conçu pour les athlètes.',
        ru: 'Комплексный мультивитаминный стак для профессионалов.'
      }
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== product.id)), 2000);
  };

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-text-content fade-in-up">
          <Link href="/register" className="hero-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight: '6px', verticalAlign: 'middle'}}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {t('hero.badge')}
          </Link>
          <h1 className="hero-title">
            {t('hero.title').split(' ').map((word, i) => (
              word.toLowerCase() === 'fuel' || word.toLowerCase() === 'fuel.' || word.toLowerCase() === 'carburant' || word.toLowerCase() === 'топлива' 
                ? <span key={i}> <span className="text-accent">{word}</span></span> 
                : <span key={i}> {word}</span>
            ))}
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons">
            <Link href="/catalog" className="btn btn-primary">{t('hero.btnCatalog')}</Link>
            <Link href="/quiz" className="btn btn-secondary">{t('hero.btnQuiz')}</Link>
          </div>
        </div>
        
        <div className="hero-image-content fade-in-up delay-1">
          <div className="image-wrapper">
            <Image 
              src="/images/hero.png" 
              alt="GainLab" 
              width={600} 
              height={600} 
              className="hero-image"
              unoptimized
              priority
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </section>

      <section className="discounts-section fade-in-up delay-2" style={{ margin: '6rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>{t('home.discountsTitle')} <span className="text-accent">%</span></h2>
          <Link href="/catalog" className="btn btn-secondary">{t('home.discountsAll')} →</Link>
        </div>
        <div className="products-grid">
          {discountProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              isAdded={addedIds.includes(product.id)}
              onActionClick={() => handleAddToCart(product)}
              actionText={addedIds.includes(product.id) ? t('catalog.btnAdded') : t('catalog.btnAddToCart')}
              formatPrice={formatPrice}
              customClass="result-card"
              imageHeight="220px"
              imageObjectFit="contain"
            />
          ))}
        </div>
      </section>

      {/* Feature section */}
      <section className="features-section fade-in-up delay-3">
        <div className="feature-card">
          <div className="icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>{t('features.eco.title')}</h3>
          <p>{t('features.eco.desc')}</p>
        </div>
        <div className="feature-card">
          <div className="icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
          </div>
          <h3>{t('features.lab.title')}</h3>
          <p>{t('features.lab.desc')}</p>
        </div>
        <div className="feature-card">
          <div className="icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
          </div>
          <h3>{t('features.match.title')}</h3>
          <p>{t('features.match.desc')}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section fade-in-up delay-4" style={{ margin: '6rem auto', maxWidth: '800px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.5rem' }}>{t('home.faqTitle')}</h2>
        <div className="faq-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2, 3, 4].map((num) => (
            <details key={num} className="faq-item" style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '8px', 
              padding: '1.25rem',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: '600', fontSize: '1.1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', outline: 'none' }}>
                {t('home.faq.q' + num)}
                <span className="text-accent" style={{ fontSize: '1.2rem', lineHeight: '1' }}>+</span>
              </summary>
              <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {t('home.faq.a' + num)}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
