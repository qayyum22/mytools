import React from "react";
import NumberToWords from "../components/NumbersToWords";
import { Link } from "react-router-dom";


const DSA = () => {

    return (
        <div>
            <h1>
                DSA Implementation Projects
            </h1>

            <div>
                <h3>Number to Words Converter</h3>
                <NumberToWords />

            </div>
        </div>
    )
};

export default DSA;