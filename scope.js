// Global Scope : Variable har jagah use ho sakta hai.
let greeting = "Hello, world!";
function sayHello() {
  console.log(greeting);
}
sayHello();  
console.log(greeting);  
// Local Scope : Variable sirf us function ke andar use ho sakta hai jahan declare hua hai.
function greet() {
  let message = "Hi there!";
  console.log(message);  
  } 
  greet();
// Block-Level Scope : Agar koi variable let ya const se block ke andar declare hota hai, to usse sirf us block ke andar hi use kar sakte hain
if (true) {
  let color = "blue";  
  console.log(color);  
}
// Difference Between var and let
if (true) {
  var animal = "dog";  
}
console.log(animal);  
// Closure : Jab ek function apne parent function ke variables ko access karta hai to usse clousure kehte hain.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}
const closureExample = outerFunction("outside");
closureExample("inside");  // Outputs: Outer: outside, Inner: inside
// Counter Using Closure
function createCounter() {
  let count = 0;  // Private variable
  return function () {
    count++;
    console.log(`Count: ${count}`);
  };
}
const counter = createCounter();
counter();  // Outputs: Count: 1
counter();  // Outputs: Count: 2
//  Block Scope Challenge
if (true) {
  let fruit = "apple";  // Block-scoped variable
  console.log(`Inside block: ${fruit}`);  // Outputs: Inside block: apple
}
//console.log(`Outside block: ${fruit}`);  // Error: fruit is not defined
// Global vs Local Scope
let message = "Global message";  // Global variable

function showMessage() {
  let message = "Local message";  // Local variable with the same name
  console.log(`Inside function: ${message}`);  // Outputs: Inside function: Local message
}
showMessage();
console.log(`Outside function: ${message}`);  // Outputs: Outside function: Global message

// arrow function

const greetUsername = name => `Hello, ${name}!`;
console.log(greetUsername("Alice"));  // Outputs: Hello, Alice!

const person = {
  name: "Alice",
  hobbies: ["reading", "cycling", "traveling"],
  showHobbies: function () {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}.`);
    });
  }
};

person.showHobbies();

// Arrow Function Sum
const sum = (x,y) => x+y;
console.log(sum(5,7));

//  Correct this Binding
const person1 = {
    name: "lily",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person1.greet();

//  Arrow Functions in Callbacks
const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers);  // Outputs: [1, 4, 9, 16, 25]

// 
// Array of temperatures in Celsius
const celsiusTemps = [0, 20, 30, 100];

// Arrow function to convert Celsius to Fahrenheit using the map method
const fahrenheitTemps = celsiusTemps.map(c => (c * 9/5) + 32);

// Print the result
console.log(fahrenheitTemps);  // Outputs: [32, 68, 86, 212]
