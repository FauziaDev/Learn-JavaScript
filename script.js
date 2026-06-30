const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // validation
     if (name === "" || email === "") {
        alert("Please fill all required fields!");
        return;
    }
     //alert
    alert("Form Submitted Successfully!");

    // Console
    // console.log(name);
    // console.log(email);
    // console.log(output);
    console.log("Hello");
    // Output div me dikhana
    output.innerHTML = `
        <h3>User Details</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `;

    // Form reset
    form.reset();
});

