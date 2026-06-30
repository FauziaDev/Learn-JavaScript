const element = document.getElementById("example");

console.log(element.innerText);    // Outputs: "This is text."
console.log(element.textContent);  // Outputs: "This is hidden text."
const titleElement = document.getElementById("title");
titleElement.textContent = "Welcome to the Site!";
function toggleHighlight() {
    const box = document.getElementById("toggleBox");
    box.classList.toggle("highlight");
}
function changeStyle() {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.backgroundColor = "lightyellow";
    paragraph.style.fontSize = "18px";
}
