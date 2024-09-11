import React, { useState, useEffect, useRef } from "react";
import MermaidChart from "../components/MermaidChart";
import mermaid from 'mermaid';

const Flowchart = () => {

    const [inputValue, setInputValue] = useState('');
    const [graphData, setGraphData] = useState('');
    const [imageData, setImageData] = useState('');
    const chartRef = useRef(null);

    const graph = `
    graph TD
    A[Start] -->|Step 1| B[Click Me]
    B -->|Step 2| C[End]
    style A fill:#f9f,stroke:#333,stroke-width:4px,color:#fff
    style B fill:#bbf,stroke:#f66,stroke-width:2px,color:#000
    style C fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    click B "code-assistant" "Optional tooltip text"`;

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            securityLevel: 'loose',
            clickEvents: true,
            linkTarget: '_blank'
        });

        if (chartRef.current) {
            chartRef.current.innerHTML = graph;
            mermaid.init(undefined, chartRef.current);
        }
    }, [graphData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputValue) {
            alert('Please enter a prompt');
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: inputValue }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.response);
            setGraphData(data.response);
            convertToImage(data.response); // Convert graph to image
        } catch (error) {
            console.error('Fetch operation failed:', error);
        }
    }

    const convertToImage = async (graph) => {
        try {
            const { svg } = await mermaid.render('graphDiv', graph);
            setImageData(svg);
        } catch (error) {
            console.error('Failed to convert graph to image:', error);
        }
    }

    const downloadImage = () => {
        if (!imageData) {
            alert('No image to download');
            return;
        }
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'flowchart.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your input here..."
            />
            <button type="submit">Get Graph</button>
            {<MermaidChart chart={graph} />}
            <div ref={chartRef}/>
            {imageData && <button onClick={downloadImage}>Download Image</button>}

        </form>
    );
};

export default Flowchart;


// import React, { useState, useEffect, useRef } from "react";
// import MermaidChart from "../components/MermaidChart";
// import mermaid from 'mermaid';

// const Flowchart = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [graphData, setGraphData] = useState('');
//     const [imageData, setImageData] = useState('');
//     const chartRef = useRef(null);

//     // Your Mermaid graph definition
//     const graph = `
//     graph TD
//     A[Start] --> B[Click Me]
//     click B "www.qayyumsiddiqui.in" "Optional tooltip text"
//     `;

//     useEffect(() => {
//         // Initialize Mermaid with appropriate security level
//         mermaid.initialize({
//             startOnLoad: true,
//             securityLevel: 'loose',
//         });

//         // After Mermaid has rendered, add custom click events if needed
//         if (chartRef.current) {
//             chartRef.current.querySelectorAll('.node').forEach(node => {
//                 node.addEventListener('click', function () {
//                     const link = this.getAttribute('data-link');
//                     if (link) {
//                         window.open(link, '_blank');
//                     }
//                 });
//             });
//         }
//     }, []); // Empty dependency array means this runs once when the component mounts

//     // ... (rest of your existing code for handleSubmit, convertToImage, downloadImage)

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!inputValue) {
//             alert('Please enter a prompt');
//             return;
//         }
//         try {
//             const response = await fetch('http://localhost:8000/chat', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ prompt: inputValue }),
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log(data.response);
//             setGraphData(data.response);
//             convertToImage(data.response); // Convert graph to image
//         } catch (error) {
//             console.error('Fetch operation failed:', error);
//         }
//     }

//     const convertToImage = async (graph) => {
//         try {
//             const { svg } = await mermaid.render('graphDiv', graph);
//             setImageData(svg);
//         } catch (error) {
//             console.error('Failed to convert graph to image:', error);
//         }
//     }

//     const downloadImage = () => {
//         if (!imageData) {
//             alert('No image to download');
//             return;
//         }
//         const link = document.createElement('a');
//         link.href = imageData;
//         link.download = 'flowchart.png';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Enter your input here..."
//             />
//             <button type="submit">Get Graph</button>
//             <div ref={chartRef} dangerouslySetInnerHTML={{ __html: graph }} />
//             {imageData && <button onClick={downloadImage}>Download Image</button>}
//         </form>
//     );
// };

// export default Flowchart;