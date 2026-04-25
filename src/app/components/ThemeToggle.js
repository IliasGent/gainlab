'use client';

import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Theme"
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <div className={`theme-toggle-icon ${theme}`}>
        {theme === 'light' ? (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </div>
      <style jsx>{`
        .theme-toggle {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 4px 15px var(--card-shadow);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          border-color: var(--accent-color);
          box-shadow: 0 6px 20px var(--card-shadow);
        }

        .theme-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }

        .theme-toggle-icon.dark {
          color: #ff9d00;
        }

        .theme-toggle-icon.light {
          color: #5ec454;
        }

        @media (max-width: 768px) {
          .theme-toggle {
            bottom: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </button>
  );
}
