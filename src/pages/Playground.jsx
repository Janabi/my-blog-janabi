import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CodeRunner from '../components/blog/CodeRunner';
import { runnableExamples } from '../data/runnableExamples';
import './Playground.css';

const Playground = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [customCode, setCustomCode] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const siteUrl = 'https://janabiprogrammer.com';
  const playgroundUrl = `${siteUrl}/playground`;

  const examples = runnableExamples[selectedLanguage] || [];

  return (
    <>
      <Helmet>
        <title>Code Playground | Janabi Programmer</title>
        <meta name="description" content="Interactive code playground to run JavaScript and Python code directly in your browser. Learn programming by doing with Janabi Programmer." />
        <meta name="keywords" content="code playground, online code editor, JavaScript playground, Python playground, interactive coding" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={playgroundUrl} />
        <meta property="og:title" content="Code Playground | Janabi Programmer" />
        <meta property="og:description" content="Interactive code playground to run code directly in your browser" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={playgroundUrl} />
        <meta name="twitter:title" content="Code Playground | Janabi Programmer" />

        <link rel="canonical" href={playgroundUrl} />
      </Helmet>

      <main className="playground-page">
        <div className="playground-container">
          <header className="playground-header">
            <h1>Interactive Code Playground</h1>
            <p className="playground-subtitle">
              Run JavaScript and Python code directly in your browser
            </p>
          </header>

          <div className="language-selector">
            <button
              className={`lang-button ${selectedLanguage === 'javascript' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('javascript')}
            >
              JavaScript
            </button>
            <button
              className={`lang-button ${selectedLanguage === 'python' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('python')}
            >
              Python
            </button>
          </div>

          <div className="custom-code-toggle">
            <button
              className="toggle-button"
              onClick={() => setShowCustom(!showCustom)}
            >
              {showCustom ? '📚 View Examples' : '✏️ Write Custom Code'}
            </button>
          </div>

          {showCustom ? (
            <div className="custom-code-section">
              <h2>Write Your Own {selectedLanguage} Code</h2>
              <div className="custom-code-editor">
                <CodeRunner code={customCode} language={selectedLanguage} />
              </div>
            </div>
          ) : (
            <div className="examples-section">
              <h2>{selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Examples</h2>
              {examples.length > 0 ? (
                <div className="examples-grid">
                  {examples.map((example, index) => (
                    <div key={index} className="example-item">
                      <h3>{example.title}</h3>
                      <CodeRunner code={example.code} language={example.language} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-examples">
                  <p>No examples available for {selectedLanguage} yet.</p>
                </div>
              )}
            </div>
          )}

          <div className="playground-info">
            <h3>About This Playground</h3>
            <ul>
              <li>All code runs directly in your browser using WebAssembly</li>
              <li>No server-side execution - your code stays private</li>
              <li>Powered by <a href="https://runno.dev" target="_blank" rel="noopener noreferrer">Runno</a></li>
              <li>Perfect for learning and experimenting with code</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Playground;
