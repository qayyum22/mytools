import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <h1>My Tools</h1>
            <p><Link to={"/resume-generator"}>Resume Generator</Link></p>

        </div>
    );
};


export default Home;