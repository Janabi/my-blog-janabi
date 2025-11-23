import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug } from '../data/blogPosts';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const post = getPostBySlug(slug, language);

  if (!post) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>{t('blogPost.notFound.title') || 'Post Not Found'}</h1>
        <p>{t('blogPost.notFound.message') || "The blog post you're looking for doesn't exist."}</p>
        <Link to="/" className="back-link">← {t('blogPost.backToHome') || 'Back to Home'}</Link>
      </div>
    );
  }

  const siteUrl = 'https://janabiprogrammer.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Janabi Programmer",
      "url": siteUrl
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "keywords": post.keywords.join(', '),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": post.category,
        "item": `${siteUrl}/?category=${post.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": postUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Janabi Programmer</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="author" content={post.author} />

        {/* Article specific tags */}
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.lastModified} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:site_name" content="Janabi Programmer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />

        {/* Canonical URL */}
        <link rel="canonical" href={postUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <main className="blog-post-page">
        <article className="blog-post-container" itemScope itemType="https://schema.org/BlogPosting">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t('header.nav.home')}</Link>
            <span className="separator">/</span>
            <Link to={`/?category=${post.category}`}>{post.category}</Link>
            <span className="separator">/</span>
            <span>{post.title}</span>
          </nav>

          <header className="post-header">
            <div className="post-meta-top">
              <span className="post-category" itemProp="articleSection">{post.category}</span>
              <time className="post-date" dateTime={post.publishDate} itemProp="datePublished">
                {new Date(post.publishDate).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            <h1 className="post-title" itemProp="headline">{post.title}</h1>

            <p className="post-description" itemProp="description">{post.description}</p>

            <div className="post-meta-bottom">
              <div className="author-info">
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  {t('blogCard.by')} <strong itemProp="name">{post.author}</strong>
                </span>
                <span className="separator">•</span>
                <span className="read-time">{post.readTime}</span>
              </div>

              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag" itemProp="keywords">{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <div
            className="post-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="post-footer">
            <div className="post-footer-meta">
              <p>{t('blogPost.lastUpdated') || 'Last updated'}: <time dateTime={post.lastModified}>{new Date(post.lastModified).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></p>
            </div>
            <Link to="/" className="back-link">← {t('blogPost.backToAllPosts') || 'Back to All Posts'}</Link>
          </footer>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
