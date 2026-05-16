console.log("Script loaded successfully!");
const btn = document.getElementById("btn");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(btn);
console.log(nom);
console.log(email);
console.log(password);
btn.addEventListener("click", function() {
    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    event.preventDefault();
    console.log("Button clicked!");
    console.log( nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("bonne inscription");
});