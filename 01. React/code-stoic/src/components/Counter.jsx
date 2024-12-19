import React, { useState } from "react";

// export default function Counter() {
//   const [count, setScount] = useState(0);
//   const [incrementBy, setincrementBy] = useState(1);
//   function handleIncrement() {
//     setScount(count + 1);
//   }
//   function handleDecrement() {
//     setScount(count - 1);
//   }
//   function increaseIncrement() {
//     setincrementBy(incrementBy + 1);
//   }
//   return (
//     <div>
//       <h1>Count value is: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>

//       <h1>We are incresing the value by: {incrementBy}</h1>
//       <button onClick={increaseIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseValue() {
    setCount(count + 1);
  }
  function decreaseValue() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decreaseValue}>-</button>
      <button onClick={increaseValue}>+</button>
    </div>
  );
}
