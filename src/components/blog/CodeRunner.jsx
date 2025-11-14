import { useRef, useState, useEffect } from 'react';
import { headlessRunCode } from '@runno/runtime';
import './CodeRunner.css';

const CodeRunner = ({ code, language }) => {
  const [editableCode, setEditableCode] = useState(code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);
  const outputRef = useRef(null);

  // Update editable code when prop changes
  useEffect(() => {
    setEditableCode(code);
  }, [code]);

  // Language to Runno runtime mapping
  const runtimeMap = {
    javascript: 'quickjs',
    python: 'python',
    rust: 'rust',
  };

  const runtime = runtimeMap[language.toLowerCase()];

  // Handle tab key in textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newValue = editableCode.substring(0, start) + '  ' + editableCode.substring(end);
      setEditableCode(newValue);

      // Set cursor position after the inserted spaces
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const runCode = async () => {
    if (!runtime) {
      setError(`Language "${language}" is not supported for execution. Supported: JavaScript, Python, Rust`);
      return;
    }

    setIsRunning(true);
    setOutput('');
    setError(null);

    try {
      // Run the code using headlessRunCode
      const result = await headlessRunCode(runtime, editableCode);

      // Handle different result types
      if (result.resultType === 'complete') {
        // Combine stdout, stderr, and tty output
        const outputText = result.stdout + result.stderr;

        if (outputText.trim()) {
          setOutput(outputText);
        } else if (result.exitCode === 0) {
          setOutput('Program completed successfully (no output)');
        } else {
          setOutput(`Program exited with code ${result.exitCode}`);
        }

        // Show error if exit code is non-zero and we have stderr
        if (result.exitCode !== 0 && result.stderr) {
          setError(result.stderr);
        }
      } else if (result.resultType === 'crash') {
        setError(`Crash: ${result.error.message}`);
      } else if (result.resultType === 'timeout') {
        setError('Execution timed out');
      } else if (result.resultType === 'terminated') {
        setError('Execution was terminated');
      }

    } catch (err) {
      setError(err.message || 'An error occurred while running the code');
      console.error('Code execution error:', err);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="code-runner">
      <div className="code-runner-header">
        <span className="code-language">{language}</span>
        <button
          className="run-button"
          onClick={runCode}
          disabled={isRunning || !runtime}
        >
          {isRunning ? '⏳ Running...' : '▶ Run Code'}
        </button>
      </div>

      <textarea
        className="code-block editable"
        value={editableCode}
        onChange={(e) => setEditableCode(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        rows={editableCode.split('\n').length || 10}
      />

      {(output || error) && (
        <div className="code-output">
          <div className="output-header">Output:</div>
          <pre ref={outputRef} className={error ? 'output-error' : 'output-success'}>
            {error || output || 'No output'}
          </pre>
        </div>
      )}

      {!runtime && (
        <div className="code-info">
          ℹ️ Interactive execution not available for {language}
        </div>
      )}
    </div>
  );
};

export default CodeRunner;
