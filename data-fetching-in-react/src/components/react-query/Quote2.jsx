import { useQuery } from "react-query";

export default function One() {
    const {data} = useQuery('quote');
    return (
        <div>
            <h1>Get quotes using fetch API: </h1>
            <p>{data}</p>
        </div>
    );
}