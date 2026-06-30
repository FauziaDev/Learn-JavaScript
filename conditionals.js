let x = 10;
let y = 20;

if (x < y) {
    console.log("x is less than y");
} else {
    console.log("x is greater than or equal to y");
}
//let x=10;let y=20;if(x<y){console.log("x is less than y");}

let age = 20;

if (age < 18) {
  console.log("You are too young to vote.");
} else if (age >= 18 && age < 21) {
  console.log("You can vote, but cannot buy alcohol.");
} else {
  console.log("You can vote and buy alcohol.");
}
//  Nested If Statements
let Age = 25;
let isMember = true;

if (Age >= 18) {
  if (isMember) {
    console.log("You get a 20% discount on your ticket!");
  } else {
    console.log("You can buy a ticket, but no discount.");
  }
} else {
  console.log("Sorry, you are too young to buy a ticket.");
}
//  Ternary Operator
//  syntax: condition ? valueIfTrue : valueIfFalse;
let personAge = 20;
let canVote = (personAge >= 18) ? "Yes, you can vote." : "No, you are too young.";
console.log(canVote);

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome back!" : "Please login first";

console.log(message);
//  Ternary Operator Challenge
let num = 10;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);

//Weather Report
let isRaining = true;
let weatherMessage = isRaining ? "Take an umbrella." : "Enjoy the sunshine!";
console.log(weatherMessage);

// Grade Checker
let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else {
  console.log("Fail");
}
