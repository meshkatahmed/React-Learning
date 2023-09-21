import { useEffect,useRef } from "react";
import Input from "./Input";

export default function Form() {
    const inputRef = useRef(null);
    useEffect(() => {
        // component did load
        inputRef.current.focus();
    },[]);
    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder="Enter something"/>
            </p>
        </div>
    );
}