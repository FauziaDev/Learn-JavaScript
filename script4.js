// const input = document.getElementById("inputBox");

// input.addEventListener("keydown", function () {
//     console.log("Key Pressed");
// });
// const input = document.getElementById("inputBox");

// input.addEventListener("keydown", function (event) {
//     console.log(event.key);
// });
const input = document.getElementById("inputBox");
const output = document.getElementById("output");
const country = document.getElementById("country");

input.addEventListener("keyup", function () {
  //  console.log(input.value);
  const text = input.value.toUpperCase();
    output.innerHTML = text;
});
    country.addEventListener("change", function () {
    output.innerHTML = "Country: " + country.value;

    if (country.value === "India") {
        document.body.style.backgroundColor = "orange";
    }
    else if (country.value === "USA") {
        document.body.style.backgroundColor = "blue";
    }
else if (country.value === "Canada") {
    document.body.style.backgroundColor = "red";
}
else if (country.value === "UK") {
    document.body.style.backgroundColor = "green";
}});