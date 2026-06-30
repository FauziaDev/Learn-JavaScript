const button = document.getElementById("showInfo");

button.addEventListener("click", function () {
  console.log("Window Width:", window.innerWidth);
  console.log("Window Height:", window.innerHeight);

  console.log("Current URL:", window.location.href);

  window.alert("Welcome to JavaScript!");

  const result = window.confirm("Do you want to continue?");

  if (result) {
    const name = window.prompt("Enter your name:");

    if (name) {
      alert("Hello, " + name + "!");
    }
  }
});