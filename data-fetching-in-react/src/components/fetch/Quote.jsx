import {useState,useEffect} from 'react'

export default function Quote() {
    const [quote,setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const response = await fetch('https://zenquotes.io/api/quotes/');
            const data = await response.json();
            // setQuote(data[0]);
            setQuote(data[0].q);
        }
        fetchQuote();
    },[]);

    return (
        <div>
            <h1>Get quotes using fetch API: </h1>
            {/* <p>{quote?.q}</p> */} 
            <p>{quote}</p>
        </div>
    );
}