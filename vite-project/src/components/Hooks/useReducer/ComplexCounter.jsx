import { useReducer } from "react";

const initialState = {
    counter: 0,
    counter2: 0,
};
const reducer = (state,action) => {
  switch (action.type) {
    case 'increment1':
      return {...state,counter: state.counter + action.value};
    case 'decrement1':
      return {...state,counter: state.counter - action.value};
    case 'increment2':
      return {...state,counter2: state.counter2 + action.value};
    case 'decrement2':
      return {...state,counter2: state.counter2 - action.value};
    default:
      return state;
  }
}
export default function ComplexCounter() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <div>
      <div>Count - {count.counter}</div>
      <br />
      <button type="button" onClick={()=>dispatch({
                type:'increment1', value: 1,
            })}>Increment by 1</button>
      <button type="button" onClick={()=>dispatch({
                type:'increment1', value: 5,
            })}>Increment by 5</button>
      <button type="button" onClick={()=>dispatch({
                type:'decrement1', value: 1
            })}>Decrement by 1</button>
      <button type="button" onClick={()=>dispatch({
                type:'decrement1', value: 5
            })}>Decrement by 5</button>
    </div>
    <br />
    <div>
      <div>Count - {count.counter2}</div>
      <br />
      <button type="button" onClick={()=>dispatch({
              type:'increment2', value: 1,
          })}>Increment by 1</button>
      <button type="button" onClick={()=>dispatch({
              type:'increment2', value: 5,
          })}>Increment by 5</button>
      <button type="button" onClick={()=>dispatch({
              type:'decrement2', value: 1
          })}>Decrement by 1</button>
      <button type="button" onClick={()=>dispatch({
              type:'decrement2', value: 5
          })}>Decrement by 5</button>
    </div>
    </>
  );
}
