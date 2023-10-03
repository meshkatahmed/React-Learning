import {useState,useEffect} from 'react'
import axios from 'axios';

export default function Quote() {
    const [quote,setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const response = await axios.get('https://zenquotes.io/api/quotes/');
            // setQuote(response.data[0]);
            setQuote(response.data[0].q);
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