// function handleClick() {
//     const button = document.getElementById("click-me");
//     button.style.backgroundColor =  "red";

// }
// function handleClick(element) {
//     // console.log(element);
//     element.style.backgroundColor = "red";

// }
function handleOver(element) {
    element.style.backgroundColor = "red";
}
function handleOut(element) {
    element.style.backgroundColor = "coral"
}
function handleKeyDown() {
       console.log("Key pressed", event.key);

}
// function handledown(event) {
//   console.log(event.target.value);
// }
function handleKeyUp(event) {
  console.log(event.target.value);
}
function handleKeyDown() {
    console.log("Key pressed", event.key);
}
function handleInput(element) {
    console.log("Event occured:", element.value);
 }
function handleChange(element) {
    console.log("change Event occured:", element.value);

 }
function handleFocus(element) {
    console.log("In focus");
}

function handleBlur(element) {
    console.log("Out of focus");
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
  });


