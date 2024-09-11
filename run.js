// ... existing code ...
const extractGraph = (apiResponse) => {
    const regex = /```(mermaid[\s\S]*?)```/;
    const match = apiResponse.match(regex);
    return match ? match[1].trim() : null; // Extracts the graph content
  };
  
  // Example usage
  const apiResponse = `Here is a simple LLM (Large Language Model) flowchart in Mermaid.js syntax:   
  
  \`\`\`mermaid
  graph LR
      A[Input Text] -->|Feedforward Neural Network|> B[Embedding Layer]
      B --> C[Bidirectional Encoder]
      C --> D[Self-Attention Mechanism]
      D --> E[Linear Transformation]
      E --> F[Feedforward Neural Network]
      F --> G[Linear Transformation]
      G --> H[Softmax]
      H --> I[Predictions]
      I -->|Retrieve Predictions|> J[Output]
      classDef default fill:#f9f,stroke:#333,stroke-width:4px;
  \`\`\``;
  
  const graph = extractGraph(apiResponse);
  console.log(graph); // Logs the extracted graph content
  // ... existing code ...