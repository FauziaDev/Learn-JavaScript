const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  console.log(`Hello, ${name}!`);
  rl.close();
});
console.log("This is a message for the console.");

let greeting = "Hello, world!";
console.log(greeting);

let x = 10;
let y = 20;

console.log("x:", x); 
console.log("y:", y);  

let sum = x + y;
console.log("Sum:", sum);  

let name = "Ali";
console.log(`Hello ${name}`);

