import React from "react";
import { useState } from "react";

const TailwindToCSS = () => {

    const [tailwindcss, setTailwindcss] = useState(null);

    const handleChange = () => {
        setTailwindcss(e.target.value);
    }

    const handleClick = async () => {
        await fetch('/', {

        })
    }


    return (
        <div className="page-container">
            <h1>Tailwind CSS to CSS classes</h1>
            <input type="text"
                value={tailwindcss}
                placeholder="input tailwind css code here"
                onChange={handleChange} />
            <button onClick={handleClick}>
                Generate CSS Classes
            </button>
        </div>
    )
}

export default TailwindToCSS;