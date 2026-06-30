const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    // Background color change
    document.body.style.backgroundColor = "yellow";

    // Heading text change
    heading.innerHTML = "Welcome to JavaScript Fauzia";

    // Heading color change
    heading.style.color = "green";

    // Font size change
    heading.style.fontSize = "50px";
});