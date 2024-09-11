import React, { useEffect, useState } from 'react';
import { ClipboardIcon } from "@heroicons/react/24/outline";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "sonner";
import GitHubButton from "react-github-button";
import { convertFromCssToJss } from '../libs/helpers';
import { getConvertedClasses } from '../libs/helpers';
import './TailwindToCSS.css';

const TailwindToCSS = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [resultJSS, setResultJSS] = useState('');

    useEffect(() => {
		const resultCss = getConvertedClasses(input);
		const resultJSS = convertFromCssToJss(resultCss);
		setResult(resultCss);
		setResultJSS(resultJSS);
	}, [input]);

    return (
        <main className="main-container">
            <nav className="nav-container">
                <header className="header">
                    <h1 className="title">
                        <div className="logo-wrapper">
                            <img src="/logo.svg" alt="Tailwind-to-CSS logo" className="logo" />
                        </div>
                        <span className="title-text">Tailwind To CSS</span>
                    </h1>

                    <section className="button-section">
                        <GitHubButton
                            type="stargazers"
                            namespace="qayyum22"
                            repo="mytools"
                            className="github-button"
                        />
                        <button className="sponsor-button">
                            <a
                                target="_BLANK"
                                href="https://github.com/qayyum22"
                                rel="noreferrer noopener"
                                className="sponsor-link"
                            >
                                <span className="sponsor-text">Sponsored by</span>
                                <img alt="qayyum22" className="sponsor-logo" src="/qayyum22.png" />
                                <span className="sponsor-name">Qayyum Siddiqui</span>
                            </a>
                        </button>
                    </section>
                </header>
            </nav>

            <section className="content-section">
                <textarea
                    className="input-textarea"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your tailwind class names here... Eg: bg-red-500 text-center"
                    autoFocus
                ></textarea>

                <div className="output-container">
                    <textarea
                        className="output-textarea"
                        placeholder="CSS"
                        value={result}
                        readOnly
                    ></textarea>
                    <CopyToClipboard text={result} onCopy={() => toast.success('Copied!')}>
                        <ClipboardIcon className="copy-icon" />
                    </CopyToClipboard>
                </div>

                <div className="output-container">
                    <textarea
                        className="output-textarea"
                        placeholder="JSS (beta)"
                        value={resultJSS}
                        readOnly
                    ></textarea>
                    <CopyToClipboard text={resultJSS} onCopy={() => toast.success('Copied!')}>
                        <ClipboardIcon className="copy-icon" />
                    </CopyToClipboard>
                </div>
            </section>
        </main>
    );
};

export default TailwindToCSS;
