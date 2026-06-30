let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

let number = 7;
console.log(number % 2 === 0);

let total = 100;
total += 50;
console.log(total);
total *= 2;
console.log(total);
total -= 100;
console.log(total);
console.log(5 == "5");
console.log(5 === "5");

// Variables required for logical operators
let age = 20;
let hasLicense = true;

// AND operator
if (age >= 18 && hasLicense) {
  console.log("You can drive!");
} else {
  console.log("You cannot drive.");
}

// OR operator
if (age < 18 || !hasLicense) {  console.log("You cannot drive.");
} else {
  console.log("You can drive!");
}

// NOT operator
let isLoggedIn = false;
console.log(!isLoggedIn);

// Increment Operator (++)

let count = 10;

count++;
console.log(count); 

count++;
console.log(count); 
// Decrement Operator (--)
count--;
console.log(count); 


// Prefix Increment
let z = 5;
console.log(++z);
console.log(z);

// Postfix Increment
let w = 5;
console.log(w++);
console.log(w);

//Prefix Decrement
let a = 5;
console.log(--a);
console.log(a);
// Postfix Decrement (x--)
let b = 5;
console.log(b--);
console.log(b);

//string  Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);  // Outputs: John Doe

let message = `Hello, ${firstName}!
Welcome to the JavaScript course.`;
console.log(message);

// unary operator


let persongAge = 30;
let name = "Alice";
let isStudent = true;

console.log(typeof persongAge);       // Outputs: number
console.log(typeof name);      // Outputs: string
console.log(typeof isStudent); // Outputs: boolean
// Arithemetic Operators
let result = (10 + 5) * 3;

console.log(result);
// Assignment Operators
let amount = 10;

amount += 5;

console.log(amount); // 15

// Comparison operators
console.log(0 == '');  // Outputs: true (JavaScript coerces the empty string to 0)
console.log(0 === '');  // Outputs: false (strict comparison checks both type and value)

// Logical Operators
// let isLoggedIn = false;
// let user = isLoggedIn && "John";  // Outputs: false (short-circuits on false)
let isPass = true;

let passMessage = isPass && "Congratulations!";

console.log(passMessage);

