import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageDropdown.css';

const LanguageDropdown = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        className="language-selector"
        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        aria-label="Select Language"
        aria-expanded={isLangDropdownOpen}
        aria-haspopup="true"
      >
        <span className="lang-flag">{currentLanguage.flag}</span>
        <span className="lang-code">{currentLanguage.code.toUpperCase()}</span>
        <span className={`lang-arrow ${isLangDropdownOpen ? 'open' : ''}`}>▼</span>
      </button>

      <ul className={`language-menu ${isLangDropdownOpen ? 'show' : ''}`}>
        {languages.map((lang) => (
          <li
            key={lang.code}
            className={`language-option ${language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-label">{lang.label}</span>
            {language === lang.code && <span className="check-mark">✓</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
