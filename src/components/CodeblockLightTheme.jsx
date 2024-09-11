import React, { useState } from 'react';
import '../styles/codeblock.css';

const CodeBlock = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="code-block-container">
      <div className="code-header">
        <span className="language">{language}</span>
        <button onClick={handleCopy} className="copy-button">
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

// export default CodeBlock;



export default CodeBlock;
