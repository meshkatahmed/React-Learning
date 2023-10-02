// import { useState } from 'react';
import { effect,batch,computed } from '@preact/signals-react';
import './App.css'
import Counter,{count} from './Counter';
import Counter2 from './Counter2';

export default function App() {
  console.log('rendering app...');
  // const [count, setCount] = useState(0);
  
  // const countDouble = signal(0);
  const countDouble = computed(()=>count.value*2);
  
  // const update = (value) => {
  //   // setCount((prevCount) => {
  //   //   prevCount + value;
  //   // });
  //   setCount(count + value);
  // }

  // signal with batch update
  // const update = (value) => batch(() => {
  //   count.value += value;
  //   countDouble.value = count.value * 2; 
  // });

  // signal w/o batch update - computed
  const update = (value) => count.value += value;

  effect(() => console.log(`Updated count is ${count.value}`));
  // effect(()=>console.log('Hello world!'));

  return (
    <div>
      {/* <h2>Count: {count}</h2> */}
      <Counter/>
      <hr />
      <Counter2/>
      <hr />
      <button onClick={()=>update(1)}>Increment</button>
      <button onClick={()=>update(-1)}>Decrement</button>
      <h2>Count Double: {countDouble}</h2>
    </div>
  )
}


