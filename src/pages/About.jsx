import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
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
            <h1>About Janabi Programmer</h1>
            <p className="about-subtitle">Empowering Developers Through Knowledge Sharing</p>
          </header>

          <section className="about-content">
            <article className="about-section">
              <h2>Welcome</h2>
              <p>
                Hello! I'm Janabi, a passionate software developer dedicated to exploring and sharing
                knowledge about programming languages and their unique features. This blog is my way
                of contributing to the developer community and helping others learn and grow.
              </p>
            </article>

            <article className="about-section">
              <h2>My Mission</h2>
              <p>
                My mission is to make complex programming concepts accessible and understandable to
                developers at all levels. Whether you're just starting your coding journey or you're
                an experienced developer looking to expand your knowledge, you'll find valuable
                insights here.
              </p>
            </article>

            <article className="about-section">
              <h2>What You'll Find Here</h2>
              <ul>
                <li>
                  <strong>In-Depth Tutorials:</strong> Comprehensive guides on programming languages
                  including JavaScript, Python, TypeScript, Rust, and more.
                </li>
                <li>
                  <strong>Modern Features:</strong> Exploration of the latest features and best
                  practices in popular programming languages.
                </li>
                <li>
                  <strong>Best Practices:</strong> Learn industry-standard coding conventions and
                  patterns that will make you a better developer.
                </li>
                <li>
                  <strong>Practical Examples:</strong> Real-world code examples that you can use in
                  your own projects.
                </li>
                <li>
                  <strong>Comparisons:</strong> Understanding the strengths and use cases of different
                  programming languages.
                </li>
              </ul>
            </article>

            <article className="about-section">
              <h2>My Approach</h2>
              <p>
                I believe in learning by doing. Each article on this blog is carefully crafted with:
              </p>
              <ul>
                <li>Clear explanations of concepts</li>
                <li>Practical, working code examples</li>
                <li>Real-world use cases</li>
                <li>Best practices and common pitfalls to avoid</li>
              </ul>
              <p>
                My goal is not just to teach syntax, but to help you understand the "why" behind
                programming decisions and develop a deeper appreciation for different languages and
                their philosophies.
              </p>
            </article>

            <article className="about-section">
              <h2>Topics Covered</h2>
              <div className="topics-grid">
                <div className="topic-card">
                  <h3>JavaScript</h3>
                  <p>Modern ES6+ features, async programming, frameworks, and web development</p>
                </div>
                <div className="topic-card">
                  <h3>Python</h3>
                  <p>Pythonic code, data structures, best practices, and clean code principles</p>
                </div>
                <div className="topic-card">
                  <h3>TypeScript</h3>
                  <p>Type systems, generics, advanced types, and building scalable applications</p>
                </div>
                <div className="topic-card">
                  <h3>Rust</h3>
                  <p>Memory safety, ownership, borrowing, and systems programming</p>
                </div>
              </div>
            </article>

            <article className="about-section">
              <h2>Join the Journey</h2>
              <p>
                Programming is an ever-evolving field, and I'm continuously learning and sharing new
                insights. I invite you to join me on this journey of discovery and growth.
              </p>
              <p>
                Whether you're here to learn a new language, deepen your understanding of one you
                already know, or simply stay updated with modern programming practices, I'm glad
                you're here.
              </p>
              <div className="cta-section">
                <Link to="/" className="cta-button">Explore Articles</Link>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
