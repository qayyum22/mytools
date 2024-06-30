import { useEffect } from "react";
import { useState } from "react";
import { convertFromCssToJss, getConvertedClasses } from "../data/Cheatsheet";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";











export default function TailwindToCSS() {

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
        <main>
            <nav>
                <header>
                    <h1>
                        <div>
                            <img src={logo} alt="Tailwind to CSS" />
                        </div>
                        <span>Tailwind to CSS</span>
                    </h1>

                    <section>
                        {/* github button */}
                        <button>
                            <a href="www.sblab.com">
                                <span>sponsored by</span>
                                <img src={sblogo} alt="sblab logo" />
                                <span>SB Computer Labs</span>
                            </a>
                        </button>
                    </section>
                </header>
            </nav>

            <section>
                <textarea name="input">
                    enter tailwind class names
                </textarea>
                <CopyToClipboard text={result} onCopy={() => toast.success('Copied!')}>
                    <ClipboardIcon className="h-6 w-6 text-gray-500" />
                </CopyToClipboard>

                <div>
                    <textarea name="CSS">CSS</textarea>
                    {/* copy to clipboard button */}
                </div>



                <div>
                    <textarea name="JSS (beta)">
                        resultJSS
                    </textarea>
                    <CopyToClipboard text={resultJSS} onCopy={() => toast.success('Copied!')}>
                        <ClipboardCopyIcon className="w-6 h-6 mt-3 text-gray-500 cursor-pointer md:mr-1" />
                    </CopyToClipboard>
                </div>


            </section>
        </main>
    )

}