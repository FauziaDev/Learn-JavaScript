const buttons = document.getElementsByClassName("action-button");

for (let button of buttons) {
  button.textContent = "click me!";
}
const boxes = document.getElementsByClassName("box");

// Loop through each element and set width
for (let box of boxes) {
  box.style.width = "100px";
  box.style.border = "1px solid black"; // Optional: for visual clarity
}
