const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (email.value === "" || password.value === "") {
        message.textContent = "Please enter email and password.";
        message.style.color = "red";
        return;
    }

    if (remember.checked) {
        localStorage.setItem("rememberedEmail", email.value);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    message.textContent = "Login successful!";
    message.style.color = "green";
});
const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    if (email.value === "") {
        message.textContent = "Please enter your email first.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Password reset link sent to your email.";
    message.style.color = "green";
});
const signupLink = document.getElementById("signupLink");
const loginContainer = document.getElementById("loginContainer");
const signupContainer = document.getElementById("signupContainer");
const loginLink = document.getElementById("loginLink");


signupLink.addEventListener("click", function (event) {

    event.preventDefault();

    loginContainer.style.display = "none";
    signupContainer.style.display = "block";

});


loginLink.addEventListener("click", function (event) {

    event.preventDefault();

    signupContainer.style.display = "none";
    loginContainer.style.display = "block";

});