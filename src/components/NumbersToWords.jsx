import React, { useState } from "react";

const NumberToWords = () => {
    const [number, setNumber] = useState('');
    const [word, setWord] = useState('');

    const belowTwenty = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    const thousands = [
        "", "thousand", "million", "billion"
    ];

    const handleChange = (e) => {
        const value = e.target.value;
        setNumber(value);

        if (value === "") {
            setWord('');
        } else {
            setWord(numberToWords(parseInt(value)));
        }
    };

    const numberToWords = (num) => {
        if (num === 0) return "zero";

        let result = '';
        let i = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                result = helper(num % 1000) + " " + thousands[i] + " " + result;
            }
            num = Math.floor(num / 1000);
            i++;
        }

        return result.trim();
    };

    const helper = (num) => {
        if (num === 0) return '';
        else if (num < 20) return belowTwenty[num];
        else if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + belowTwenty[num % 10] : "");
        else return belowTwenty[Math.floor(num / 100)] + " hundred " + helper(num % 100);
    };

    return (
        <div>
            <input
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter a number"
                maxLength={10}
            />
            <p>{word}</p>
        </div>
    );
};

export default NumberToWords;
