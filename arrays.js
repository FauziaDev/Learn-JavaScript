const fruits = ["apple", "banana", "cherry"];
console.log(fruits);  // Outputs: ["apple", "banana", "cherry"]
// array with mixed data
const numbers = [];
numbers.push(1, 2, 3);
console.log(numbers);  // Outputs: [1, 2, 3]
// accessing
const colors = ["red", "green", "blue"];
console.log(colors[0]);  // Outputs: red
console.log(colors[2]);  // Outputs: blue

// push
const animals = ["dog", "cat"];
animals.push("rabbit");
console.log(animals);  // Outputs: ["dog", "cat", "rabbit"]
//pop
const Animals = ["dog", "cat", "rabbit"];
Animals.pop();
console.log(Animals);  // Outputs: ["dog", "cat"]

//shift
const nums = [1, 2, 3];
nums.shift();
console.log(nums);  // Outputs: [2, 3]
// unshift
const number = [2, 3];
number.unshift(1);
console.log(number);  // Outputs: [1, 2, 3]
// splice
const items = ["pen", "pencil", "notebook"];
items.splice(1, 1, "eraser");
console.log(items);  // Outputs: ["pen", "eraser", "notebook"]
// slice
const letters = ["a", "b", "c", "d", "e"];
const sliced = letters.slice(1, 4);
console.log(sliced);  // Outputs: ["b", "c", "d"]
//for loop
const Numbers = [1, 2, 3];
for (let i = 0; i < Numbers.length; i++) {
  console.log(Numbers[i]);
}
//for...loop
const Fruits = ["apple", "banana", "cherry"];
for (const fruit of Fruits) {
  console.log(fruit);
}
// forEach
const cities = ["New York", "London", "Tokyo"];
cities.forEach(city => console.log(city));

// Add and Remove Elements
const favFood = ["kebab", "Biryani"]
favFood.push("khichdi", "Rahardal")
favFood.shift("kebab")
console.log(favFood);

//  Slice and Splice
// Step 1: Create an array of numbers from 1 to 5
const no = [1, 2, 3, 4, 5];

// Step 2: Use slice() to create a new array with numbers 2, 3, and 4
const slicedNumbers = no.slice(1, 4);
console.log(slicedNumbers);  // Outputs: [2, 3, 4]

// Step 3: Use splice() to remove the number 3 from the original array
numbers.splice(2, 1);  // Removes the element at index 2 (which is 3)
console.log(numbers);  // Outputs: [1, 2, 4, 5]

// Loop through an Array

const countries = ["USA", "Japan", "Germany", "Australia"];
// Step 2: Use a for...of loop to print each country
for (const country of countries) {
  console.log(country);
}
// length Property
const students = ["Ali", "Sara", "John", "Aisha"];
console.log(students.length);

const word = "JavaScript";
console.log(word.length);  // Outputs: 10
//map = Har element ko change karke naya array banata hai.
const names = ["ali", "john", "sara"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

const marks = [60, 70, 80];

const updatedMarks = marks.map(mark => mark + 10);

console.log(updatedMarks);
//filter()= Condition match karne wale elements ka naya array banata hai.

const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);
// reduce = Puri array ko mila kar ek hi value return karta hai.
const prices = [100, 250, 150];

const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log(totalPrice);

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log(newArray);  // Outputs: [1, 2, 3, 4, 5]

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson);  // Outputs: { name: "Alice", age: 30 }

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));  // Outputs: 6
console.log(sum(4, 5, 6, 7));  // Outputs: 22

// Exercise 1: Using map()
// Create an array of numbers from 1 to 5
const arrayNum = [1,2,3,4,5]
const square = arrayNum.map(num => num * num);
console.log(square); 

// Filtering Even Numbers
const evenNum = [1,2,3,4,5,6,7,8,9,10];
const evens = evenNum.filter(num => num % 2 === 0);
console.log(evens);
//Accumulating with reduce()
// Step 1: Create an array of numbers from 1 to 5
const numbers1 = [1, 2, 3, 4, 5];

// Step 2: Use reduce() to calculate the product of all numbers
const product = numbers1.reduce((total, num) => total * num, 1);

console.log(product);  // Outputs: 120

