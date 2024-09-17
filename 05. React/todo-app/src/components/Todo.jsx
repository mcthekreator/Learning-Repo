import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="Add a Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
