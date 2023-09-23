import { useContext } from "react";
import { counterContext } from "../../../../App";

export default function ComponentB({dispatch}) {
    const {countDispatch} = useContext(counterContext);
    return (
        <div>
            <p>Component B</p>
            <button type="button" onClick={()=>countDispatch('increment')}>Increment</button>
            <button type="button" onClick={()=>countDispatch('decrement')}>Decrement</button>
        </div>
    );
}