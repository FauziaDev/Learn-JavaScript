const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello!");
  }
};
// . Dot Notation
console.log(person.name);  // Outputs: Alice
console.log(person.age);   // Outputs: 25

// [ ] Bracket Notation
console.log(person["name"]);  
console.log(person["age"]);   
//Adding, Modifying, and Deleting Properties
person.hobby = "reading";
console.log(person.hobby);  // Outputs: reading
//  Modifying Properties
person.age = 30;
console.log(person.age);  // Outputs: 30
//  Deleting Properties
delete person.isStudent;
console.log(person.isStudent);  // Outputs: undefined

// Nested Object
const student = {
  name: "John",
  details: {
    age: 22,
    grade: "A",
    address: {
      street: "123 Main St",
      city: "New York"
    }
  }
};

console.log(student.details.age);  // Outputs: 22
console.log(student.details.address.city);  // Outputs: New York

//Use Descriptive Property Names:
const car = { brand: "Toyota", year: 2022 };

console.log(person.middleName);  // Outputs: undefined


// Create an Object
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
    
};
console.log( "Reading " + book.title + " by " + book.author);  

// Modify and Delete Properties
book.genre = "Fiction";
console.log(book.genre);  // Outputs: Fiction
book.pages=200;
console.log(book.pages);  
delete book.genre;
console.log(book.genre);  // Outputs: undefined

// Nested Object Challenge

const movie= {
    title: "Inception",
    year: "2010",
    details: {
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
        genre: "Sci-Fi"
    }
};
console.log(movie.title + " (" + movie.details.director + ")"); 
 