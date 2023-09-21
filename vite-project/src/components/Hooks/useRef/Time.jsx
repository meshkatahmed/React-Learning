import { useEffect,useState,useRef } from "react";

export default function Time() {
    const [date,setDate] = useState(new Date());
    const intervalRef = useRef(null);

    const tick = () => {
        setDate(new Date()); 
    }
    useEffect(() => {
        intervalRef.current = setInterval(tick,1000);
        // Stop the timer
        return () => clearInterval(intervalRef.current);
    },[]);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" 
                    onClick={()=>clearInterval(intervalRef.current)}
                >
                    Cleanup
                </button>
            </p>
        </div>
    );
}