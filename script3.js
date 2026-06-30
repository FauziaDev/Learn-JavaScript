const heading = document.getElementById("heading");

const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const resetBtn = document.getElementById("reset");

// Red Button
redBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    heading.innerHTML = "Red Theme";
    heading.style.color = "white";
});

// Blue Button
blueBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    heading.innerHTML = "Blue Theme";
    heading.style.color = "white";
});

// Green Button
greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    heading.innerHTML = "Green Theme";
    heading.style.color = "yellow";
});

// Reset Button
resetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    heading.innerHTML = "Welcome";
    heading.style.color = "black";
});