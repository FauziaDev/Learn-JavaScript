let userName = "John";
let totalScore = 100;
let $discountRate = 0.15;
let name = "Alice";         // Double quotes
let greeting = 'Hello!';    // Single quotes
let message = `Hi, ${name}! Welcome to JavaScript!`;  // Template literal
console.log(message);  // Outputs: Hi, Alice! Welcome to JavaScript!
let isLoggedIn = true;
let hasDiscount = false;
console.log(isLoggedIn);  // Outputs: true
let myVar;
console.log(myVar);  // Outputs: undefined
let emptyBox = null;
console.log(emptyBox);  // Outputs: null
let uniqueKey = Symbol("unique");
console.log(uniqueKey);  // Outputs: Symbol(unique)
let largeNumber = BigInt(9007199254740991);  // Very large number
console.log(largeNumber);  // Outputs: 9007199254740991n
let person = {
  name: "Alice",
  age: 30,
  isStudent: true
};
console.log(person.name);  // Outputs: Alice
let colors = ["red", "green", "blue"];
console.log(colors[0]);  // Outputs: red

// Arrays can hold mixed data types
let mixedArray = [42, "hello", true, { key: "value" }];
console.log(mixedArray[3]);  // Outputs: { key: "value" }
let a = 5;
let b = 5;
console.log(a === b);  // Outputs: true
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2);  // Outputs: false (different references)
let value = 42;          // Number
value = "Now I'm a string!";  // String
console.log(value);      // Outputs: Now I'm a string!

