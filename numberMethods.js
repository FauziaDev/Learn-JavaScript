let a = 10;
let b = 3;
// Basic Arithmetic
console.log(a + b);  
console.log(a - b); 
// Math.floor() 
console.log(Math.floor(4.7));  // Outputs: 4
console.log(Math.floor(4.2));  // Outputs: 4
//math ceil
console.log(Math.ceil(4.7));  // Outputs: 5
console.log(Math.ceil(4.2));  // Outputs: 5
//math round
console.log(Math.round(4.5));  // Outputs: 5
console.log(Math.round(4.2));  // Outputs: 4
// Random Number (0–9)
const randomNumber = Math.floor(Math.random() * 10);  // Random number between 0 and 9
console.log(randomNumber);
// Random Number (1–10)
const RandomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
//parseInt() 
const intValue = parseInt("42");
console.log(intValue);  // Outputs: 42

console.log(parseInt("3.14"));  // Outputs: 3 (decimal part is ignored)
// parsefloat() –
const floatValue = parseFloat("3.14");
console.log(floatValue);  // Outputs: 3.14
// Use Math.random() with Ranges:
const randomNum = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
// Handle NaN (Not-a-Number):
const num = parseInt("abc");  // Outputs: NaN
console.log(isNaN(num));  // Outputs: true
// Random Number Generator 1 TO 100
function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(getRandomInt());
// Rounding Challenge
const  no = 7.5;
console.log(Math.floor(no));
console.log(Math.ceil(no));
// Parsing Numbers
const str = "123.45";
const intValue2 = parseInt(str);
const floatValue2 = parseFloat(str);
console.log(intValue2);   // Outputs: 123
console.log(floatValue2); // Outputs: 123.45

// sing finally for Cleanup
try {
  console.log("Trying some risky code...");
  throw new Error("Oops! Something went wrong.");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This will always run.");
}
// Handle Division by Zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); 
} catch (error) {
  console.log("Error:", error.message);
}
// Custom Error Message
function validateUsername(username) {
  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters long.");
  }
  console.log(`Welcome, ${username}!`);
}

try {
  validateUsername("Al");  // Throws an error
} catch (error) {
  console.log("Error:", error.message);
}

try {
  validateUsername("Alice");  // Outputs: Welcome, Alice!
} catch (error) {
  console.log("Error:", error.message);
}
//  Use finally for Cleanup
try {
  console.log("Trying to execute some code...");
  throw new Error("Something went wrong!");  // Simulate an error
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Cleanup complete.");
}

