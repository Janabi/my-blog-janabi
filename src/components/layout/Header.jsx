import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <Link to="/" aria-label="Janabi Programmer Home">
            <h1>Janabi Programmer</h1>
          </Link>
          <p className="tagline">Exploring Programming Languages & Features</p>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/" aria-label="Home page">Home</Link>
            </li>
            <li>
              <Link to="/playground" aria-label="Code Playground">Playground</Link>
            </li>
            <li>
              <Link to="/about" aria-label="About Janabi Programmer">About</Link>
            </li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}>
                {theme === 'light' ? '☀️' : '🌙'}
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
