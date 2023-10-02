import {count} from './Counter';

export default function Counter2() {
    const update = (value) => count.value += value;
    return (
        <>
            <h2>Count2: {count}</h2>
            <button onClick={()=>update(1)}>Count2 Inc</button>
        </>
    );
}