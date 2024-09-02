import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
    function decreaseClick(){
        setCount(count - 1)
    }

    

    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={handleClick}>increment</button>
            <button onClick={decreaseClick}>decrement</button>
        </div>
    )
}
