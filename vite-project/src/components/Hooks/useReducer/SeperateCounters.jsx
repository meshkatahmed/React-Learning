import { useReducer } from "react";

const initialState = 0;
const initialState2 = 5
const reducer = (state,action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
export default function SeperateCounters() {
  const [count,dispatch] = useReducer(reducer,initialState);
  const [count2,dispatch2] = useReducer(reducer,initialState2);
  return (
    <>
    <div>
      <div>Count - {count}</div>
      <br />
      <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
      <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
    </div>
    <br />
    <div>
      <div>Count2 - {count2}</div>
      <br />
      <button type="button" onClick={()=>dispatch2('increment')}>Increment</button>
      <button type="button" onClick={()=>dispatch2('decrement')}>Decrement</button>
    </div>
    </>
  );
}