import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageDropdown from '../common/LanguageDropdown';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container">
        <div className="logo">
          <Link to="/" aria-label={`${t('header.siteName')} Home`}>
            <h1>{t('header.siteName')}</h1>
          </Link>
          <p className="tagline">{t('header.tagline')}</p>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Main navigation">
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
      </div>
    </header>
  );
};

export default Header;
