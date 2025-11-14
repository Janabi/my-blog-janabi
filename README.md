# Janabi Programmer Blog

A modern, SEO-optimized blog about programming languages and their features. Built with React, Vite, and best practices for performance and search engine optimization.

## Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and Schema.org structured data
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Semantic HTML**: Proper HTML5 semantic elements for better accessibility and SEO
- **React Router**: Client-side routing for smooth navigation
- **React Helmet Async**: Dynamic meta tags for each page
- **Sitemap & Robots.txt**: Proper search engine crawling configuration

## Technology Stack

- **React 19**: Latest version of React
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Declarative routing for React
- **React Helmet Async**: Manage document head for SEO
- **CSS3**: Modern styling with CSS custom properties

## Project Structure

```
my-blog-janabi/
├── public/
│   ├── robots.txt          # Search engine crawling rules
│   └── sitemap.xml         # Sitemap for search engines
├── src/
│   ├── components/
│   │   ├── blog/
│   │   │   └── BlogCard.jsx    # Blog post preview card
│   │   └── layout/
│   │       ├── Header.jsx      # Site header with navigation
│   │       └── Footer.jsx      # Site footer
│   ├── data/
│   │   └── blogPosts.js        # Blog posts data with SEO metadata
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with blog listing
│   │   ├── BlogPost.jsx        # Individual blog post page
│   │   └── About.jsx           # About page
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template with SEO meta tags
├── package.json
└── vite.config.js             # Vite configuration

```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-blog-janabi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## SEO Features

### Meta Tags
- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs
- Author information

### Structured Data
- Schema.org BlogPosting markup
- Schema.org Person markup
- Breadcrumb navigation markup
- Article metadata

### Performance
- Code splitting for optimal bundle size
- Lazy loading where applicable
- Optimized images
- Minified production build

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Skip to main content link
- Focus indicators

## Adding New Blog Posts

To add a new blog post, edit [src/data/blogPosts.js](src/data/blogPosts.js):

```javascript
{
  id: 5,
  slug: 'your-post-slug',
  title: 'Your Post Title',
  description: 'Brief description for SEO',
  author: 'Janabi Programmer',
  publishDate: '2024-11-14',
  lastModified: '2024-11-14',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  readTime: '5 min read',
  content: `Your HTML content here`,
  keywords: ['keyword1', 'keyword2']
}
```

Don't forget to update [public/sitemap.xml](public/sitemap.xml) with the new post URL!

## Code Playground

The blog includes an interactive code playground powered by [@runno/runtime](https://runno.dev) that allows users to run JavaScript, Python, and Rust code directly in the browser.

### Features

- **Client-Side Execution**: All code runs in the browser using WebAssembly - no server required
- **Multiple Languages**: Supports JavaScript (QuickJS), Python, and Rust
- **Live Examples**: Pre-built examples for each language
- **Custom Code Editor**: Users can write and execute their own code
- **Real-Time Output**: See program output immediately

### Adding Runnable Examples

To add new runnable code examples, edit [src/data/runnableExamples.js](src/data/runnableExamples.js):

```javascript
javascript: [
  {
    title: 'Your Example Title',
    code: `// Your JavaScript code here
console.log('Hello World!');`,
    language: 'javascript'
  }
],
```

### Using CodeRunner Component

You can embed runnable code in blog posts or pages:

```jsx
import CodeRunner from '../components/blog/CodeRunner';

<CodeRunner
  code={`console.log('Hello World!');`}
  language="javascript"
/>
```

## Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Branding
- Update the site name in [src/components/layout/Header.jsx](src/components/layout/Header.jsx)
- Modify colors in [src/index.css](src/index.css) CSS variables
- Update meta tags in [index.html](index.html)

### Styling
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Modify in CSS custom properties in `index.css`

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.

## Author

**Janabi Programmer** - Passionate about sharing knowledge about programming languages and their features.

---

Built with React + Vite
