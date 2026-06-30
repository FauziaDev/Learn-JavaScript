const  jsoString = 
{
    "name":"Alice",
    "age": 24,
    "isStudent": true,
    "courses":["Math","Computer Science","Art"]
}
console.log(jsoString);

const myObj = {
    name: "lucky",
    age: 24,
    courses: [
        {
        name:"maths",
        duration: "6 months"
    },
    {
         name:"maths",
        duration: "6 months"
    }
    ]
}
const myJSONString = JSON.stringify(myObj);

const getURL = "https://jsonplaceholder.typicode.com/posts/1";
const postURL = "https://jsonplaceholder.typicode.com/posts";

//Fetch API

// const fetchPromise = fetch(getURL);

// let responseObj;

// //then -> function will execute when the task is successful
// fetchPromise.then((response) => {
//     console.log("Data Fetch Complete");
//     //console.log(response);
//     //responseObj = response;
//     const jsonPromise = response.json();


//     jsonPromise.then((data)  => {
//         console.log("Converted to json");
//         console.log(data);
//     })
//     });
// // catch -> function will execute when the task is successful
// fetchPromise.catch((error) => {
//     console.log("Error occured",error);

// });

// // let jsonPromise = responseObj.json();

// // jsonPromise.then((data) => {
// //     // console.log("Converted to json");
// //     // console.log(data);
// // })

// // jsonPromise.catch((error) => { 
// //     console.log("This is the final sttement");

// // })
// console.log("This is the final statement");

// const getURL = "https://jsonplaceholder.typicode.com/posts/1";
// const postURL = "https://jsonplaceholder.typicode.com/posts";
// //Fetch API
// fetch(getURL).then((response) => {
//     console.log("Data Fetch Complete");
//     return response.json();
//  })
//     .then((data)  => {
//         console.log("Converted to json");
//         console.log(data);
//     })
// //  catch -> function will execute when the task is successful
//     .catch((error) => {
//         console.log("Error occured",error);
// });
// console.log("This is the final statement");

const getURL = "https://jsonplaceholder.typicode.com/posts/1";
const postURL = "https://jsonplaceholder.typicode.com/posts";
//Fetch API
fetch(getURL)
    .then(response => response.json()) 
    .then(data  => console.log(data))
    .catch(error => console.log("Error occured",error));

console.log("This is the final statement");

const getURL = "https://jsonplaceholder.typicode.com/posts/1";
const postURL = "https://jsonplaceholder.typicode.com/posts";

// Fetch API

// Then -> Function will execute when the task is successful
// Catch -> Function will execute when the task has failed

fetch(getURL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error occurred", error));

const dataToSend = {
  userId: 12,
  title: "This is my title",
  body: "This is my body"
};

fetch(postURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dataToSend)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error Occurred", error));

