import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Janabi Programmer</h3>
            <p>Exploring the world of programming languages and their unique features.
            Learn, grow, and master modern software development.</p>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="/?category=JavaScript">JavaScript</a></li>
              <li><a href="/?category=Python">Python</a></li>
              <li><a href="/?category=TypeScript">TypeScript</a></li>
              <li><a href="/?category=Rust">Rust</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/playground">Playground</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/sitemap.xml">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Janabi Programmer. All rights reserved.</p>
          <p className="footer-tagline">Empowering developers through knowledge sharing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
