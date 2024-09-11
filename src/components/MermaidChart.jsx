// src/components/MermaidChart.js
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidChart = ({ chart }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded(); // Initializes Mermaid when component is mounted
  }, []);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
};

export default MermaidChart;