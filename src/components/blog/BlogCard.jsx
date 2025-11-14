import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card" itemScope itemType="https://schema.org/BlogPosting">
      <Link to={`/blog/${post.slug}`} className="blog-card-link" aria-label={`Read ${post.title}`}>
        <div className="blog-card-header">
          <span className="blog-category" itemProp="articleSection">{post.category}</span>
          <time className="blog-date" dateTime={post.publishDate} itemProp="datePublished">
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <h2 className="blog-title" itemProp="headline">{post.title}</h2>

        <p className="blog-description" itemProp="description">{post.description}</p>

        <div className="blog-card-footer">
          <div className="blog-meta">
            <span className="blog-author" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{post.author}</span>
            </span>
            <span className="separator">•</span>
            <span className="read-time">{post.readTime}</span>
          </div>

          <div className="blog-tags">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="tag" itemProp="keywords">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
