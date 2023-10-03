import {useState,useEffect} from 'react'
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (...args) => {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
}
export default function Quote() {
    const {data,error} = useSWR('https://zenquotes.io/api/quotes/',fetcher, {suspense:true});
    if (error) {
        return <h1>There was an error!</h1>
    } else {
        if (data) console.log(data[1]);
    }
    return (
        <div>
            <h1>Get quotes using fetch API: </h1>
            <p>{data[1].q}</p> 
            {/* <p>{data[0].q}</p> */}
        </div>
    );
}