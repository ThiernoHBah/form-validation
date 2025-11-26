let form = document.getElementById("registrationForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");
let successMessage = document.getElementById("successMessage");

window.addEventListener("load", function() {
    let saved = localStorage.getItem("savedUsername");
    if (saved) {
        username.value = saved;
    }
});

username.addEventListener("input", function() {
    if (username.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
    } else {
        usernameError.textContent = "";
    }
});