import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const siteUrl = 'https://janabiprogrammer.com';
  const aboutUrl = `${siteUrl}/about`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Janabi Programmer",
    "description": "Learn about Janabi Programmer, a passionate developer sharing knowledge about programming languages and software development.",
    "url": aboutUrl,
    "author": {
      "@type": "Person",
      "name": "Janabi Programmer",
      "jobTitle": "Software Developer",
      "description": "A passionate programmer dedicated to sharing knowledge about programming languages and their features"
    }
  };

  return (
    <>
      <Helmet>
        <title>About Janabi Programmer | Programming Languages Blog</title>
        <meta name="description" content="Learn about Janabi Programmer, a passionate software developer sharing in-depth knowledge about programming languages, modern features, and best practices." />
        <meta name="keywords" content="Janabi Programmer, about, software developer, programming blog, coding tutorials, programming languages" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={aboutUrl} />
        <meta property="og:title" content="About Janabi Programmer | Programming Languages Blog" />
        <meta property="og:description" content="Learn about Janabi Programmer, a passionate software developer sharing in-depth knowledge about programming languages." />
        <meta property="og:site_name" content="Janabi Programmer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={aboutUrl} />
        <meta name="twitter:title" content="About Janabi Programmer" />
        <meta name="twitter:description" content="Learn about Janabi Programmer, a passionate software developer sharing in-depth knowledge about programming languages." />

        {/* Canonical URL */}
        <link rel="canonical" href={aboutUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="about-page">
        <div className="about-container">
          <header className="about-header">
            <h1>{t('about.title')}</h1>
            <p className="about-subtitle">{t('about.subtitle')}</p>
          </header>

          <section className="about-content">
            <article className="about-section">
              <h2>{t('about.sections.welcome.title')}</h2>
              <p>
                {t('about.sections.welcome.content')}
              </p>
            </article>

            <article className="about-section">
              <h2>{t('about.sections.mission.title')}</h2>
              <p>
                {t('about.sections.mission.content')}
              </p>
            </article>

            <article className="about-section">
              <h2>{t('about.sections.whatYouFind.title')}</h2>
              <ul>
                <li>
                  <strong>{t('about.sections.whatYouFind.items.tutorials.title')}</strong> {t('about.sections.whatYouFind.items.tutorials.description')}
                </li>
                <li>
                  <strong>{t('about.sections.whatYouFind.items.modernFeatures.title')}</strong> {t('about.sections.whatYouFind.items.modernFeatures.description')}
                </li>
                <li>
                  <strong>{t('about.sections.whatYouFind.items.bestPractices.title')}</strong> {t('about.sections.whatYouFind.items.bestPractices.description')}
                </li>
                <li>
                  <strong>{t('about.sections.whatYouFind.items.practicalExamples.title')}</strong> {t('about.sections.whatYouFind.items.practicalExamples.description')}
                </li>
                <li>
                  <strong>{t('about.sections.whatYouFind.items.comparisons.title')}</strong> {t('about.sections.whatYouFind.items.comparisons.description')}
                </li>
              </ul>
            </article>

            <article className="about-section">
              <h2>{t('about.sections.approach.title')}</h2>
              <p>
                {t('about.sections.approach.intro')}
              </p>
              <ul>
                {t('about.sections.approach.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                {t('about.sections.approach.conclusion')}
              </p>
            </article>

            <article className="about-section">
              <h2>{t('about.sections.topics.title')}</h2>
              <div className="topics-grid">
                <div className="topic-card">
                  <h3>{t('about.sections.topics.javascript.title')}</h3>
                  <p>{t('about.sections.topics.javascript.description')}</p>
                </div>
                <div className="topic-card">
                  <h3>{t('about.sections.topics.python.title')}</h3>
                  <p>{t('about.sections.topics.python.description')}</p>
                </div>
                <div className="topic-card">
                  <h3>{t('about.sections.topics.typescript.title')}</h3>
                  <p>{t('about.sections.topics.typescript.description')}</p>
                </div>
                <div className="topic-card">
                  <h3>{t('about.sections.topics.rust.title')}</h3>
                  <p>{t('about.sections.topics.rust.description')}</p>
                </div>
              </div>
            </article>

            <article className="about-section">
              <h2>{t('about.sections.journey.title')}</h2>
              <p>
                {t('about.sections.journey.content1')}
              </p>
              <p>
                {t('about.sections.journey.content2')}
              </p>
              <div className="cta-section">
                <Link to="/" className="cta-button">{t('about.sections.journey.cta')}</Link>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
