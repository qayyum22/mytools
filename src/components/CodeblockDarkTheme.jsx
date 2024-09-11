import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/codeblock2.css'; // import your custom styles here

const CodeBlock2 = ({ language, codeString }) => {
    return (
        <div className="code-block-wrapper">
            <SyntaxHighlighter language={language} style={coy} className="code-block">
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock2;
