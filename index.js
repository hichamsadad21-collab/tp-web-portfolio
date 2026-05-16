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
    event.preventDefault();
    console.log("Button clicked!");
    console.log( nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("bonne inscription");
});