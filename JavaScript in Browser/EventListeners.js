const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const button = document.getElementById("click-me");

// Keyboard Events
firstName.addEventListener("keyup", handleKeyUp);
lastName.addEventListener("keydown", handleKeyDown);

// Focus Events
email.addEventListener("focus", handleFocus);
email.addEventListener("blur", handleBlur);

// Mouse Events
button.addEventListener("click", handleClick);
button.addEventListener("dblclick", handleDoubleClick);
button.addEventListener("mouseover", handleOver);
button.addEventListener("mouseout", handleOut);

// Functions
function handleKeyUp(event) {
    console.log("Key Up:", event.target.value);
}

function handleKeyDown(event) {
    console.log("Key Down:", event.key);
}

function handleFocus(event) {
    event.target.style.backgroundColor = "yellow";
}

function handleBlur(event) {
    event.target.style.backgroundColor = "white";
}

function handleOver(event) {
    event.target.style.backgroundColor = "blue";
}

function handleOut(event) {
    event.target.style.backgroundColor = "coral";
}

function handleClick() {
    console.log("Button Clicked");
}

function handleDoubleClick() {
    console.log("Button Double Clicked");
}