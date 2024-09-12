import { useEffect, useState } from "react";
import { textGenerator } from "./text-generator.js";
import "./typeWriter.scss";

export default function Typewriter(props) {
    const { paragraph } = props
    const [{ text, blink }, setResult] = useState(() => ({
        text: "",
        blink: false
    }));

    useEffect(() => {
        const generator = textGenerator([paragraph]);

        const interval = window.setInterval(() => {
            const { value, done } = generator.next();

            if (done) {
                window.clearInterval(interval);
            } else {
                setResult(value);
            }
        }, 100);

        return () => {
            window.clearInterval(interval);
        };
    }, [paragraph]);

    const className = `typewriter ${blink ? "typewriter_blink" : ""}`;

    return (
        <>    
            <div className={className}>{text}</div>
        </>
    );
}
