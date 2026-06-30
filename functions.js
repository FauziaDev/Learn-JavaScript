function greet() {
  console.log("Hello, welcome!");
}
// calling function
greet();  

// Function Declaration

sayHello();  // Works, even though it's called before the declaration

function sayHello() {
  console.log("Hello there!");
}
//Function Expression
const sayHi = function () {
  console.log("Hi there!");
};

sayHi();  
//Parameters in Functions
function add(x, y) {
  console.log(x + y);
}

add(3, 4);  // Outputs: 7
add(10, 5);  // Outputs: 15
// Return Values from Functions
function multiply(c, d) {
  return c * d;
}
let result = multiply(5, 6);
console.log(result);  // Outputs: 30
//Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice");  
greetUser(); 

//Anonymous Function
const greetPerson = function (name) {
  console.log(`Hi, ${name}!`);
};

greetPerson("Bob");  // Outputs: Hi, Bob!
// 

function adder(a,b) {
    console.log(a);
    console.log(b);
    return a + b;
}
   let totalSum = adder(10 ,20);
   console.log (totalSum);

   // 
   setTimeout(function(name) {
    console.log(" HI " + name);
   },1000);

   //
  setTimeout(function () {
  console.log("This message appears after 2 seconds.");
}, 2000);
// Area of a Rectangle
 function areaOfRectangle(length, width) {
    return length * width;

 } 
 let area = areaOfRectangle(5,10);
 console.log(area);

// Default Greeting
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
// Calling the function with and without the name parameter
greet("Alice");  
greet();         

//Multiply Two Numbers
function multiplyNumbers(a, b) {
    return a * b;
}
let product = multiplyNumbers(4, 6);
console.log(product);

