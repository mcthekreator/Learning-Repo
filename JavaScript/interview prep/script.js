const users = [
  { firstname: "Daniel", lastname: "Mensah", age: 2 },
  { firstname: "mark", lastname: "Mensah", age: 2 },
  { firstname: "Ben", lastname: "Lucky", age: 2 },
  { firstname: "Nolley", lastname: "Dadzie", age: 2 },
  { firstname: "Bilal", lastname: "Mubarak", age: 2 },
];

//  How would you extract the first name of the second user in the list?
const secondUserFirstName = users[1].firstname;
console.log(secondUserFirstName);

//How would you find the total number of users in the array?

const totalUsers = users.length; 
console.log(totalUsers);

//How would you retrieve an array of all the first names of the users?
const firstNames = users.map(user => user.firstname); console.log(firstNames); // Output: ["Daniel", "Daniel", "Ben", "Nolley", "Bilal"]`