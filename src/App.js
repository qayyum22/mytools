import "./App.css";
// import Navbar from './common/Navbar';
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ResumeGenerator from "./pages/ResumeGenerator";
import TailwindToCSS from "./pages/TailwindToCSS";
import CodeAssistant from "./pages/CodeAssistant";
import DSA from "./pages/DSA";
import ProductionTool from "./pages/ProductionTool";
import CodeEditor from "./pages/CodeEditor";
import Navbar from "./components/Navbar";
import WebScraper from "./components/WebScraper";
import Flowchart from "./pages/Flowchart";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/resume-generator" element={<ResumeGenerator />} />
        <Route path="/tailwind-to-css" element={<TailwindToCSS />} />
        <Route path="/code-assistant" element={<CodeAssistant />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/production" element={<ProductionTool />} />
        <Route path="/code" element={<CodeEditor />} />
        <Route path="/web-scraper" element={<WebScraper />} />
        <Route path="/flowchart" element={<Flowchart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
