'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/LanguageContext';

export default function UserMenu() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (!user) {
    return (
      <>
        <Link href="/cart" className="cart-icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link href="/login" className="btn btn-secondary btn-sm">{t('nav.login')}</Link>
      </>
    );
  }

  return (
    <>
      <Link href="/cart" className="cart-icon-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>

      <div className="user-menu" ref={ref}>
        <button className="user-avatar-btn" onClick={() => setOpen(o => !o)}>
          <span className="user-avatar">{user.name[0].toUpperCase()}</span>
          <span className="user-name-short">{user.name.split(' ')[0]}</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {open && (
          <div className="user-dropdown">
            <div className="dropdown-header">
              <span className="dropdown-name">{user.name}</span>
              <span className="dropdown-email">{user.email}</span>
            </div>
            <div className="dropdown-divider"/>
            <button className="dropdown-item logout-btn" onClick={async () => { await logout(); setOpen(false); }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
              </svg>
              {t('nav.logout')}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
