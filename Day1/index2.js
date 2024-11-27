// 1. var, let, and const

// var: Declared Global, can be redeclared and updated
var x = 5;
var x = 10; // Allowed
console.log(x); // 10

if (true) {
  var y = 20; // Accessible outside this block
}
console.log(y); // 20

// let: Block-scoped, cannot be redeclared but can be updated
let a = 10;
// let a = 20; // Error: Cannot redeclare
a = 15; // Allowed
console.log(a); // 15

// const: Block-scoped, cannot be redeclared or updated
const b = 30;
// b = 40; // Error: Assignment to constant variable
console.log(b); // 30

// Summary:
// - Use `var` sparingly due to its function-scoped behavior.
// - Prefer `let` for variables that will change.
// - Use `const` for variables that won’t change.


// 2. Functions
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("John")); // Hello, John!

// Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("John")); // Hello, John!

// Summary:
// - Use arrow functions for shorter, more concise code when no `this` binding is needed.


// 3. Destructuring Arrays and Objects

// Array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second); // 1, 2

// Object destructuring
const obj = { 
     name: "Alice",
     age: 25 
    };
const { name, age } = obj;
console.log(name, age); // Alice, 25

// Summary:
// - Destructuring simplifies extracting values from arrays and objects.


// 4. Rest and Spread Operators

// Rest: Gather remaining elements into an array
const [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]

// Spread: Expand an array or object into individual elements
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Summary:
// - Rest is useful for grouping.
// - Spread is useful for combining or cloning arrays/objects.


// 5. Ternary Operator

// Ternary syntax: condition ? value_if_true : value_if_false
const Age = 18;
const canVote = Age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

// Equivalent using if-else
let canVoteIfElse;
if (Age >= 18) {
  canVoteIfElse = "Yes";
} else {
  canVoteIfElse = "No";
}
console.log(canVoteIfElse); // Yes

// Summary:
// - Ternary operators simplify conditional expressions.


// 6. Optional Chaining

const user = { 
    profile: { name: "Alice" } 
};


// Access safely with optional chaining
console.log(user?.profile?.name); // Alice
console.log(user?.address?.city); // undefined

// Without optional chaining
if (user && user.profile) {
  console.log(user.profile.name); // Alice
}

// Summary:
// - Optional chaining avoids errors when accessing nested properties.


// 7. Array Methods: map and filter

// map: Transform each element of an array
const nums = [1, 2, 3];

const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]

// filter: Filter elements based on a condition
const nums2 = [1, 2, 3, 4];
const evens = nums2.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// Summary:
// - Use `map` to transform arrays.
// - Use `filter` to create subsets.


// 8. setInterval and clearInterval

let count = 0;
const interval = setInterval(() => {
  console.log("Count:", count++);
  if (count > 5) clearInterval(interval); // Stops after 5
}, 1000);


// Summary:
// - `setInterval` runs code at regular intervals.
// - `clearInterval` stops the execution.


// 9. Async/Await

async function fetchData() {
  const data = await Promise.resolve("Fetched Data");
  console.log(data);
}
fetchData(); // Fetched Data

// Summary:
// - Async/await simplifies working with promises.
async function sum(){
     // expensive operation
     return dj

}

// 10. Error Handling

try {
  JSON.parse("Invalid JSON"); // Throws error
} catch (error) {
  console.log("Caught error:", error.message);
}


// Summary:
// - Use `try-catch` to handle errors gracefully.

// Homework Questions

// 1. var, let, and const
// a) Declare a variable using `var` and reassign it. Log the values before and after reassignment.
// b) Try to redeclare a `let` variable in the same scope. What happens?
// c) Create a constant using `const` and attempt to update its value. What error do you get?


// 2. Functions
// a) Write a function declaration that takes two numbers as parameters and returns their sum.
// b) Convert the above function into an arrow function.
// c) Write a function using the arrow function syntax that takes a name as a parameter and returns a greeting message.


// 3. Destructuring
// a) Create an array of your favorite colors and destructure the first two colors into separate variables.
// b) Create an object representing a car with properties like brand, model, and year. Destructure the brand and model into variables.


// 4. Rest and Spread
// a) Use the rest operator to collect the remaining elements of an array after extracting the first two.
// b) Use the spread operator to merge two arrays of numbers into a single array.
// c) Create a copy of an object using the spread operator and modify one of its properties.


// 5. Ternary Operator
// a) Write a ternary expression that checks if a number is even or odd.
// b) Convert the above ternary expression into an if-else statement.


// 6. Optional Chaining
// a) Create an object representing a user with nested properties for profile and address. Use optional chaining to safely access both.
// b) Try to access a property that doesn’t exist using optional chaining. What is the output?


// 7. Array Methods: map and filter
// a) Write an array of numbers and use the `map` method to create a new array with each number squared.
// b) Write an array of numbers and use the `filter` method to create a new array with only the even numbers.
// c) Combine `map` and `filter`: First, filter out odd numbers, then square the remaining numbers.


// 8. setInterval and clearInterval
// a) Write a script using `setInterval` that logs numbers from 1 to 10, one number per second.
// b) Use `clearInterval` to stop the interval after the 10th number is logged.


// 9. Async/Await
// a) Write an async function that waits for a promise to resolve and then logs the resolved value.
// b) Use `Promise.resolve` to simulate fetching data in the above async function.


// 10. Error Handling
// a) Write a `try-catch` block that attempts to parse an invalid JSON string.
// b) In the catch block, log an error message indicating that the JSON was invalid.


// BONUS QUESTIONS (Optional):
// 11. Write a function using the rest operator to accept any number of arguments and return their sum.
// 12. Create a function that takes an object as a parameter and uses destructuring to log specific properties.
// 13. Use optional chaining with a default value: If a nested property doesn’t exist, provide a fallback value.

