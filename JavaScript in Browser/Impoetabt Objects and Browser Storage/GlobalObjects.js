// Accessing the window object
console.log("Current URL:", window.location.href);
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// Accessing the document object
console.log("Page Title:", document.title);
console.log("Body Content:", document.body.innerHTML);

// Modifying page content using document
const heading = document.getElementById("heading");
heading.textContent = "Welcome to JavaScript!";