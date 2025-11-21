import { useTranslation } from '../../hooks/useTranslation';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('header.siteName')}</h3>
            <p>{t('footer.about')}</p>
          </div>

          <div className="footer-section">
            <h3>{t('footer.categories')}</h3>
            <ul>
              <li><a href="/?category=JavaScript">JavaScript</a></li>
              <li><a href="/?category=Python">Python</a></li>
              <li><a href="/?category=TypeScript">TypeScript</a></li>
              <li><a href="/?category=Rust">Rust</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><a href="/">{t('footer.links.home')}</a></li>
              <li><a href="/playground">{t('footer.links.playground')}</a></li>
              <li><a href="/about">{t('footer.links.about')}</a></li>
              <li><a href="/sitemap.xml">{t('footer.links.sitemap')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('header.siteName')}. {t('footer.rights')}</p>
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
