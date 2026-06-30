//length
const message = "Hello, JavaScript!";
console.log(message.length);  // Outputs: 18
// indexOf() 
const text = "Learn JavaScript";
console.log(text.indexOf("Java"));  // Outputs: 6
console.log(text.indexOf("Python"));  // Outputs: -1
// toUpperCase()
const greeting = "hello!";
console.log(greeting.toUpperCase());  // Outputs: HELLO!
// toLowerCase()
const shout = "THIS IS LOUD!";
console.log(shout.toLowerCase());  // Outputs: this is loud!
//  slice()
const sentence = "JavaScript is fun";
const word = sentence.slice(0, 10);
console.log(word);  // Outputs: JavaScript
// split()
const words = "apple,banana,cherry";
const fruits = words.split(",");
console.log(fruits);  // Outputs: ["apple", "banana", "cherry"]
// Concatenation with Template Literals
const name = "Alice";
const Greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);  // Outputs: Hello, Alice! Welcome to JavaScript.
//  Multi-line Strings with Template Literals
const Message = `This is a long message
that spans multiple lines
using template literals.`;
console.log(Message);
// Use toLowerCase() or toUpperCase() for Case-Insensitive Comparisons:
const input = "JavaScript";
console.log(input.toLowerCase() === "javascript");  // Outputs: true
// Handle the Case When indexOf() Returns 1:
const Text = "Learn JavaScript";
if (Text.indexOf("Python") === -1) {
  console.log("Python not found!");
}
// Use Template Literals for Cleaner String Concatenation:
const firstName = "John";
const lastName = "Doe";
const fullName = `Hello, ${firstName} ${lastName}`;
console.log(fullName);  // Outputs: John Doe
//  Extracting with slice()
const string = "JavaScript is awesome";
const Word = string.slice(14);
// Splitting a Sentence
const technologies = "HTML,CSS,JavaScript";
const techArray = technologies.split(",");
console.log(techArray);  // Outputs: ["HTML", "CSS", "JavaScript"]
