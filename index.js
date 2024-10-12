const todos = [
    { id: 1, isCompleted: true },
    { id: 1, isCompleted: false },
    { id: 1, isCompleted: false },
    { id: 1, isCompleted: true }
  ];
  
  // 1. Use filter() to get all todos where isCompleted is false (incomplete)
  const incompleteTodos = todos.filter((todo) => 
    todo.isCompleted ? false : true // Ternary operator to check if todo is not completed
  );
  
  // 2. Use map() to extract the isCompleted status from each todo
  const incompleteMap = todos.map((todo) => {
    return todo.isCompleted; // Map over the todos and return the isCompleted property
  });
  
  // 3. Another map example, transforming the todos to a boolean list based on isCompleted status
  const findMap = todos.map((todo) => {
    return !todo.isCompleted; // Map and return true for incomplete todos
  });
  
  console.log('Filtered (incomplete) todos:', incompleteTodos); // Output array of incomplete todos
  console.log('Mapped isCompleted statuses:', incompleteMap); // Output array of isCompleted statuses
  console.log('Mapped incomplete statuses:', findMap); // Output array of true/false for completion status
  