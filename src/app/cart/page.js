'use client';

import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useCart();
  const { t, lang, formatPrice } = useTranslation();

  if (cartItems.length === 0) {
    return (
      <div className="container page-wrapper">
        <div className="quiz-intro fade-in-up">
          <h1>{t('cart.empty')}</h1>
          <p className="quiz-intro-text">{t('cart.emptyText')}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/catalog" className="btn btn-primary">{t('cart.btnCatalog')}</Link>
            <Link href="/quiz" className="btn btn-secondary">{t('cart.btnQuiz')}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-wrapper">
      <div className="page-header fade-in-up">
        <h1>{t('cart.title')} <span className="text-accent">{t('cart.titleAccent')}</span></h1>
      </div>

      <div className="cart-layout fade-in-up delay-1">
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div key={`${item.id}-${item.selectedFlavor || idx}`} className="cart-item">
              <div className="cart-item-image">
                <Image
                  src={item.img}
                  alt={item.name[lang]}
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                  unoptimized
                />
              </div>
              <div className="cart-item-info">
                <span className="product-category">{item.categoryNames[lang]}</span>
                <h3>{item.name[lang]} {item.selectedFlavor && <span className="text-accent" style={{fontSize: '0.9rem', fontWeight: 500}}>({item.selectedFlavor})</span>}</h3>
                <p className="price">{formatPrice(item.priceNum * item.qty)}</p>
              </div>
              <div className="cart-item-controls">
                <button className="qty-btn" onClick={() => updateQty(item.id, item.selectedFlavor, -1)}>−</button>
                <span className="qty-value">{item.qty}</span>
                <button className="qty-btn" onClick={() => updateQty(item.id, item.selectedFlavor, 1)}>+</button>
                <button className="remove-btn" onClick={() => removeFromCart(item.id, item.selectedFlavor)}>{t('cart.remove')}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>{t('cart.summary')}</h3>
          <div className="summary-row">
            <span>{t('cart.items')}</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary-row">
            <span>{t('cart.shipping')}</span>
            <span className="text-accent">{t('cart.free')}</span>
          </div>
          <div className="summary-total">
            <span>{t('cart.total')}</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
            {t('cart.checkout')}
          </button>
        </div>
      </div>
    </div>
  );
}
