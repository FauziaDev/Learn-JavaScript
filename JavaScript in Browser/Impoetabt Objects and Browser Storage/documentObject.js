const heading = document.getElementById("heading");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
  // Change content
  heading.textContent = "Content Changed!";

  // Change style
  heading.style.color = "blue";

  // Change attribute
  heading.setAttribute("title", "This heading was updated");

  // Create a new element
  const paragraph = document.createElement("p");
  paragraph.textContent = "This paragraph was added using the document object.";

  // Add element to the page
  document.body.appendChild(paragraph);
});