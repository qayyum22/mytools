import { useState } from "react";
import Codeblock from "../components/CodeblockLightTheme";
import ReactMarkdown from 'react-markdown';
import CodeBlock2 from "../components/CodeblockDarkTheme";

const CodeAssistant = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [responseString, setResponseString] = useState('');

    const onInputChange = (event) => {
        setPrompt(event.target.value);
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!prompt) {
            setResponse('Please enter a prompt');
            return;
        }
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: prompt }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResponse(data.response);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setResponse('Failed to fetch response');
            }
            // const responseString = JSON.stringify(response, null, 2);
            // setResponseString(responseString);
        };
        fetchData();
    };

    function extractCode(input) {
        const regex = /```(.*?)```/gs; // Regex to match code blocks
        const matches = input.match(regex); // Find all matches
        if (!matches) return ''; // Return empty if no matches found

        // Clean and join the code blocks
        return matches.map(match => match.replace(/```/g, '').trim()).join('\n');
    }

    // Example usage
    // const inputString = `
    // Here is some code:
    // \`\`\`javascript
    // console.log('Hello, World!');
    // \`\`\`
    // And some more text.
    // \`\`\`python
    // print('Hello from Python!')
    // \`\`\`
    // `;

    const cleanedCode = extractCode(response);
    console.log(cleanedCode);

    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <h1 style={{ textAlign: 'center', color: 'indigo' }}>AI Assistant</h1>

            <form onSubmit={onFormSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                <input
                style={{ width: '840px', height: '60px', border: '1px solid black', borderRadius: '5px', padding: '5px' }}
                    type="text"
                    placeholder='enter your prompt'
                    value={prompt}
                    onChange={onInputChange}
                />
                <button style={{ width: '60px', height: '36px', border: '1px solid black', borderRadius: '5px', padding: '5px', cursor: 'pointer', backgroundColor: 'indigo', color: 'white'}} type='submit'>Submit</button>
            </form>

            {/* <p>Response: {response}</p> */}
            {response && <Codeblock code={cleanedCode} language={"javascript"} />}

            

            <div>
                <div>
                    <CodeBlock2 codeString={cleanedCode} language={"javascript"} />

                </div>
            </div>

        </div>

    );
};

export default CodeAssistant;