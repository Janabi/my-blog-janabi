import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const siteUrl = 'https://janabiprogrammer.com';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Janabi Programmer",
    "description": "A blog about programming languages and their features by Janabi Programmer",
    "url": siteUrl,
    "author": {
      "@type": "Person",
      "name": "Janabi Programmer"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `${siteUrl}/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.lastModified,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "keywords": post.keywords.join(', ')
    }))
  };

  return (
    <>
      <Helmet>
        <title>Janabi Programmer - Programming Languages & Features Blog</title>
        <meta name="description" content="Explore in-depth tutorials and insights about programming languages including JavaScript, Python, TypeScript, Rust and their modern features. Learn from Janabi Programmer." />
        <meta name="keywords" content="programming blog, JavaScript, Python, TypeScript, Rust, web development, software engineering, coding tutorials, Janabi Programmer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Janabi Programmer - Programming Languages & Features Blog" />
        <meta property="og:description" content="Explore in-depth tutorials and insights about programming languages and their modern features." />
        <meta property="og:site_name" content="Janabi Programmer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Janabi Programmer - Programming Languages & Features Blog" />
        <meta name="twitter:description" content="Explore in-depth tutorials and insights about programming languages and their modern features." />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Janabi Programmer</h1>
            <p className="hero-description">
              Your go-to resource for learning about programming languages and their unique features.
              Dive deep into JavaScript, Python, TypeScript, Rust, and more.
            </p>
          </div>
        </section>

        <section className="blog-section">
          <div className="container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blog-grid">
              {blogPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
