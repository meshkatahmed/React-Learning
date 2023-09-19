import { useState,useEffect } from "react";

export default function MyFunctionComponent() {
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date());
    const [text,setText] = useState('');

    const addClick = () => {
        setCount((prevCount)=>prevCount+1);
    }
    const tick = () => {
        console.log('Clock is ticking');
        setDate(new Date()); 
    }
    useEffect(() => {
        console.log('updating document title');
        document.title=`Clicked ${count} times`;
        return () => console.log('Component unmounted');
    },[count]);
    useEffect(() => {
        console.log('start timer');
        const interval = setInterval(tick,1000);
        // Stop the timer
        return () => clearInterval(interval);
    },[]); 
    return (
        <div>
            <p>{count}</p>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            </p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}