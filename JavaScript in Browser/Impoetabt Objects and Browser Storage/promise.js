//const getURL = "https://jsonplaceholder.typicode.com/posts/1";
// fetch(getURL)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("Error occurred", error));

//   const myPromise = new Promise((resolve,reject) => {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;

//     if(randomNumber % 2 == 0){
//         console.log("Even number, resolving :" , randomNumber);
//         resolve(randomNumber);
//     } else{
//         console.log("Odd number, rejecting : ", randomNumber);
//         reject(randomNumber);
//     }

//   });
//   myPromise
//   .then((randomValue) => console.log("Random Value :", randomValue))
//   .catch((errorValue) => console.log("Error Value :", errorValue));

//  async function fetchData() {
//     try{
//     const response = await fetch(getURL);
//     const data = await response.json();
//     console.log(data);
//     } catch(error) {
//         console.log(error);
//     }

//  } 
//  fetchData();

//  console.log("Executed even before await ");

//exercise
// async function fetchPost() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data); // Log the response data
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchPost();
// Handling Errors with Try/Catch
// async function fetchInvalidUrl() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/invalidEndpoint');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error.message); // Log the error message
//   }
// }

// fetchInvalidUrl();
// Sending Data with Fetch and Async/Await
async function postData() {
  const dataToSend = {
    title: 'New Post',
    body: 'This is the content of the new post.',
    userId: 1
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Response from POST request:', data); // Log the response data
  } catch (error) {
    console.error('Error during POST request:', error.message);
  }
}

postData();
