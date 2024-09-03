import React, { useState } from "react";

export default function Counter() {
  const [count, setScount] = useState(0);
  const [count, setScount] = useState(0);
  function handleIncrement() { 
    setScount(count + 1);
  }
  function handleDecrement() {
    
    if(count === 5) {
      setScount(count - 5);
    }
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
