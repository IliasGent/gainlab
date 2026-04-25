'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../context/LanguageContext';
import UserMenu from './CartIcon';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button 
        className="mobile-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="drawer-header">
            <Link href="/" className="logo">
              Gain<span className="text-accent">Lab</span>
            </Link>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="drawer-nav">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              {t('nav.home')}
            </Link>
            <Link href="/catalog" className={pathname === '/catalog' ? 'active' : ''}>
              {t('nav.catalog')}
            </Link>
            <Link href="/quiz" className={pathname === '/quiz' ? 'active' : ''}>
              {t('nav.quiz')}
            </Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="drawer-footer">
            <div className="drawer-actions">
              <UserMenu />
            </div>
            <p className="copyright">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-toggle {
          display: none;
          background: var(--card-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          cursor: pointer;
          padding: 10px 12px;
          box-shadow: 0 2px 10px var(--card-shadow);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .mobile-toggle:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        @media (max-width: 1024px) {
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-drawer-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          transform: translateX(-110%);
          width: min(320px, 85vw);
          height: 100dvh;
          background-color: var(--card-bg);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 10px 0 30px var(--card-shadow);
          padding: 0;
          overflow: hidden;
          border-right: 1px solid var(--border-color);
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .close-btn {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .close-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .drawer-nav {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          gap: 0.5rem;
          flex: 1;
        }

        .drawer-nav a {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
          width: fit-content;
        }

        .drawer-nav a:hover {
          color: var(--accent-color);
          padding-left: 1.2rem;
        }

        .drawer-nav a.active {
          color: var(--accent-color);
          font-weight: 700;
          border-bottom: 3px solid var(--accent-color);
          border-radius: 0;
          padding-bottom: 2px;
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
          background: rgba(var(--accent-rgb), 0.03);
          flex-shrink: 0;
        }

        .drawer-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .copyright {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>
    </>
  );
}
