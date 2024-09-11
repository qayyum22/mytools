import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <h1>My Tools</h1>
            <p><Link to={"/resume-generator"}>Resume Generator</Link></p>
            <p><Link to={"/tailwind-to-css"}>Tailwind CSS to CSS classes</Link></p>
            <p><Link to={"/ai-assistant"}>AI Assistant</Link></p>
            <p><Link to={"/dsa"}>DSA Implementation Projects</Link></p>
            <p><Link to={"/production"}>Production Tool</Link></p>
            <p><Link to={"/code"}>Code Editor</Link></p>

        </div>
    );
};


export default Home;