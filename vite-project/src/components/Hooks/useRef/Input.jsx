import { forwardRef } from "react";

function Input({type,placeholder},ref) {
    return <input ref={ref} type={type} placeholder={placeholder} />
}

const forwardedInput = forwardRef(Input);

export default forwardedInput;