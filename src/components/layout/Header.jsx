import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageDropdown from '../common/LanguageDropdown';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container">
        <div className="logo">
          <Link to="/" aria-label={`${t('header.siteName')} Home`}>
            <h1>{t('header.siteName')}</h1>
          </Link>
          <p className="tagline">{t('header.tagline')}</p>
        </div>

        <button
          className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="main-nav desktop-nav" role="navigation" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/" aria-label="Home page">{t('header.nav.home')}</Link>
            </li>
            <li>
              <Link to="/playground" aria-label="Code Playground">{t('header.nav.playground')}</Link>
            </li>
            <li>
              <Link to="/about" aria-label={`About ${t('header.siteName')}`}>{t('header.nav.about')}</Link>
            </li>
          </ul>
          <div className="header-controls">
            <LanguageDropdown />

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? t('header.themeToggle.switchToDark') : t('header.themeToggle.switchToLight')}
            >
              <div className="toggle-track">
                <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}>
                  {theme === 'light' ? '☀️' : '🌙'}
                </div>
              </div>
            </button>
          </div>
        </nav>

        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
            <ul>
              <li>
                <Link to="/" onClick={closeMobileMenu} aria-label="Home page">
                  {t('header.nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/playground" onClick={closeMobileMenu} aria-label="Code Playground">
                  {t('header.nav.playground')}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu} aria-label={`About ${t('header.siteName')}`}>
                  {t('header.nav.about')}
                </Link>
              </li>
            </ul>
            <div className="mobile-controls">
              <LanguageDropdown />
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? t('header.themeToggle.switchToDark') : t('header.themeToggle.switchToLight')}
              >
                <div className="toggle-track">
                  <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}>
                    {theme === 'light' ? '☀️' : '🌙'}
                  </div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
