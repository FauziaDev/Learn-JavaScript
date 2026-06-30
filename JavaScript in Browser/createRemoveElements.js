const child = document.createElement("div");
child.id = "new-element";
child.textContent = "This is dynamically added element";
// //adding element with appendchild and append
const parent = document.getElementById("container");
parent.appendChild(child);


const newChild = document.createElement("div");
newChild.textContent = "This is a new element";

// parent.insertBefore();