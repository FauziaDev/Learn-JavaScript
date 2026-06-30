const message = document.getElementById("message");

// Focus
function handleFocus(event) {
    message.innerHTML = "Focus Event";
    console.log("Focus Event");
}

// Blur
function handleBlur(event) {
    message.innerHTML = "Blur Event";
    console.log("Blur Event");
}

// Input
function handleInput(event) {
    message.innerHTML = "Typing: " + event.target.value;
    console.log(event.target.value);
}

// KeyUp
function handleKeyUp(event) {
    message.innerHTML = "KeyUp: " + event.target.value;
    console.log(event.target.value);
}

// KeyDown
function handleKeyDown(event) {
    message.innerHTML = "KeyDown: " + event.key;
    console.log(event.key);
}

// Change
function handleChange(event) {
    message.innerHTML = "Selected Country: " + event.target.value;
    console.log(event.target.value);
}