import { useQuery } from "react-query";
import getQuote from "./getQuote";

export default function Quote() {
    const {data} = useQuery('quote', () => getQuote());
    return (
        <div>
            <h1>Get quotes using fetch API: </h1>
            {/* <p>{quote?.q}</p> */} 
            <p>{data}</p>
        </div>
    );
}