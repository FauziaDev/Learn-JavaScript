let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the work week!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend! Time to relax.");
    break;
  default:
    console.log("Just another regular day.");
}

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent! You scored an A.");
    break;
  case "B":
    console.log("Good job! You scored a B.");
    break;
  case "C":
    console.log("You passed with a C.");
    break;
  case "D":
    console.log("You barely passed.");
    break;
  case "F":
    console.log("You failed. Better luck next time.");
    break;
  default:
    console.log("Invalid grade.");
}

let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Apples are tasty!");
  case "Banana":
    console.log("Bananas are healthy!"); // This will also run!
}

let season = "Spring";

switch (season) {
  case "Spring":
  case "Summer":
    console.log("The weather is warm.");
    break;
  case "Autumn":
  case "Winter":
    console.log("The weather is cold.");
    break;
}
// Forgetting the break statement:
let color = "Red";
switch (color) {
  case "Red":
    console.log("The color is red.");
  case "Blue":
    console.log("The color is blue.");  // This will also run
}
// switch condition check nahi karta, sirf exact value match karta hai — isliye (num > 10) invalid hai.
// animal sound
let animals = "Dog";

switch(animals) {
    case "Dog":
        console.log("Woof!");
        break;
        case "Cat":
            console.log("Meow!");
            break;
            case "Horse":
                console.log("Neigh!");
                break;
                default:
                    console.log("Unknown sound");
}
//  Fruit Picker
let Fruit = "Apple";
switch(Fruit) {
    case "Apple":
        console.log("Apple is red.");
        break;
    case "Banana":
        console.log("Banana is yellow.");
        break;
        case "Grapes":
            console.log("Grapes are purple.");
    default:
        console.log("Unknown fruit.");
}