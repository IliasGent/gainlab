'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../context/LanguageContext";
import UserMenu from "./CartIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function LocalizedLayout({ children }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  const handleNavClick = (e, href) => {
    // If clicking the link to the current page, scroll to top instead
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <header className="main-header">
        <div className="container header-inner">
          <div className="header-left">
            <MobileNav />
            <Link 
              href="/" 
              className="logo"
              onClick={(e) => handleNavClick(e, '/')}
            >
              Gain<span className="text-accent">Lab</span>
            </Link>
          </div>

          <nav className="main-nav">
            <Link 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className={pathname === '/' ? 'active' : ''}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/catalog" 
              onClick={(e) => handleNavClick(e, '/catalog')}
              className={pathname === '/catalog' ? 'active' : ''}
            >
              {t('nav.catalog')}
            </Link>
            <Link 
              href="/quiz" 
              onClick={(e) => handleNavClick(e, '/quiz')}
              className={pathname === '/quiz' ? 'active' : ''}
            >
              {t('nav.quiz')}
            </Link>
            <Link 
              href="/contact" 
              onClick={(e) => handleNavClick(e, '/contact')}
              className={pathname === '/contact' ? 'active' : ''}
            >
              {t('nav.contact')}
            </Link>
          </nav>
          
          <div className="header-actions">
            <LanguageSwitcher />
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <ThemeToggle />

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <Link href="/" className="logo">
                Gain<span className="text-accent">Lab</span>
              </Link>
              <p className="footer-desc">Advanced performance nutrition for serious progress.</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>{t('footer.email')}</p>
              <p>{t('footer.businessEmail')}</p>
              <p>{t('footer.phone')}</p>
            </div>

            <div className="footer-section">
              <h4>Address</h4>
              <p>{t('footer.address')}</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
