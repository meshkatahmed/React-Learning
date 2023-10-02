import { signal } from "@preact/signals-react";

export const count = signal(0);

export default function Counter() {
    return <h2>Count: {count}</h2>;
}