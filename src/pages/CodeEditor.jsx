// import React, { useState, useEffect } from 'react';
// import MonacoEditor from 'react-monaco-editor';


// const CodeEditor = () => {
//   const [code, setCode] = useState('// Write your code here');
  

  

  
//   const handleEditorChange = (newCode) => {
//     setCode(newCode);
//   };

//   return (
//     <div>
//       <h2>Monaco Editor</h2>
//       <MonacoEditor
//         width="80%"
//         height="60vh"
//         language="javascript"
//         theme="vs-dark"
//         value={code}
//         onChange={handleEditorChange}
//       />
      
//     </div>
//   );
// };

// export default CodeEditor;

import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ initialCode, language = 'javascript' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  // Function to compile and run code
  const runCode = async () => {
    // Here's where you'd typically send code to your backend or an API like Judge0
    // For simplicity, let's mock this with a delay
    setTimeout(() => {
      try {
        // Mock execution, replace with actual compilation logic
        const result = eval(code);
        setOutput(`Output: ${result}`);
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div>
      <Editor
        height="400px"
        defaultLanguage={language}
        defaultValue={initialCode}
        onChange={setCode}
      />
      <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;