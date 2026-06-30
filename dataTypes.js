// 1. String
let userName = "John";
console.log("String:", userName);

// 2. Number
let totalScore = 100;
console.log("Number:", totalScore);

// 3. Boolean
let isLoggedIn = true;
console.log("Boolean:", isLoggedIn);

// 4. Undefined
let myVar;
console.log("Undefined:", myVar);

// 5. Null
let emptyBox = null;
console.log("Null:", emptyBox);

// 6. Symbol
let uniqueKey = Symbol("unique");
console.log("Symbol:", uniqueKey);

// 7. BigInt
let largeNumber = BigInt(9007199254740991);
console.log("BigInt:", largeNumber);

// 8. Object
let person = {
  name: "Alice",
  age: 30,
  isStudent: true
};

console.log("Object:", person);
console.log("Person Name:", person.name);

// 9. Array
let colors = ["red", "green", "blue"];

console.log("Array:", colors);
console.log("First Color:", colors[0]);

// comparison of primitive values
let a = 5;
let b = 5;
console.log(a === b);  // Outputs: true

// comparison of objects
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2);  // Outputs: false (different references)
let value = 42;          // Number

// Dynamic Typing in JavaScript
value = "Now I'm a string!";  // String
console.log(value);      // Outputs: Now I'm a string!
