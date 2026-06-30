 const deleteButton = document.getElementById("delete-button");
    const elementToDelete = document.getElementById("delete-me");

    // Add click event to the button
    deleteButton.addEventListener("click", () => {
      if (elementToDelete) {
        elementToDelete.remove(); // Remove the element from the DOM
      }
    });