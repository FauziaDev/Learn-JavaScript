const referenceElement = document.getElementById("reference");
const newParagraph = document.createElement("p"); // Create a new p element
newParagraph.textContent = "Inserted Paragraph"; // Set the text content of the new paragraph

    // Insert newParagraph before referenceElement
referenceElement.parentNode.insertBefore(newParagraph, referenceElement);