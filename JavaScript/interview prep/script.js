
//Question
// Q1: What is javascript?
// Ans: A programming language used for converting static web pages to interactive and synamic web pages 

// Q2: What are datatypes in Javascript?
//Ans: A data type determins the type of values that can be stored in a variable 

//Q3: Types of Primitive and  Non-primitive datatypes

// Premitives 
//1. Numbers
//2. strings
//3. Boolean
//4. Undefined
//5. Null

//Non-primitives  
//1. Object
//2. Array
//3. Functions


//String methods

 const greeting = " Hello World"
result = greeting.concat("!", " ", "How are you?", greeting);
console.log(result);
result2 = greeting.substring(0, 3);
console.log(result2);
result3 = greeting.slice(0, 3);
console.log(result3);
result4 = greeting.split(" ");
console.log(result4);
result5 = greeting.replace("Hello", "Hi");
console.log(result5);
result6 = greeting.trim();
console.log(result6);





//Array methods

const numbers = [1, 2, 3, 4, 5];
result = numbers.push(6);
console.log(result);
