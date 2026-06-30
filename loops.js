// For Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// While Loop
let j = 10;
while (j <= 25) {
  console.log(j);
  j++;
}
// Do...While Loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Break and Continue Statements
for (let l = 1; l <= 5; l++) {
  if (l === 3) {
    break;
  }
  console.log(l);
}

// Continue Statement
for (let m = 1; m <= 5; m++) {
  if (m === 3) {
    continue;
  }
  console.log(m);
}

// Print Even Numbers
for (let z = 1; z <= 10; z++) {
  if (z % 2 === 0) {
    console.log(z);
  }
}
//  Sum of Numbers
// let sum =0;
// while(true) {
//     sum +=1;
//     if (sum > 5) {
//         break;
//     }
// }
// Using a while loop to calculate the sum of numbers from 1 to 5
let o = 1;
let Sum = 1;

while (o <= 5) {
  Sum += o; 
  o++;       
}

console.log(`The sum is: ${Sum}`)

// Password Check
// let password;

// do {
//   password = prompt("Enter the password:");  // Ask the user for the password
// } while (password !== "1234");

// console.log("Access granted!");
