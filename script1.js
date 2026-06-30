const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

btn.addEventListener("dblclick", function () {

    document.body.style.backgroundColor = "green";

    heading.innerHTML = "Double Click Successful";

    heading.style.color = "white";

});
heading.addEventListener("mouseover", function () {
    heading.style.color = "red";
});
heading.addEventListener("mouseout", function () {
    heading.style.color = "yellow";
});