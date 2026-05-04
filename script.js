alert("Sign up here");
function togglePassword() {
    const passwordField = document.getElementById("myPassword");
    const toggleBtn = document.getElementById("toggleBtn");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show"; 
    }
}
function toggleConfirmPassword() {
    const confirmField = document.getElementById("confirmPassword");
    const toggleBtn = document.getElementById("toggleConfirmBtn");

    if (confirmField.type === "password") {
        confirmField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        confirmField.type = "password";
        toggleBtn.textContent = "Show";
    }
}



let currentTheme = localStorage.getItem("theme");
let body = document.getElementsByTagName("body")[0];
let themeBtn = document.getElementById("dark-theme-button");


if (currentTheme === "light") {
    body.className = "light-theme";
    themeBtn.innerHTML = "Dark Mode";
} else {
    body.className = "dark-theme"; 
    themeBtn.innerHTML = "Light Mode";
}

function changeTheme() {
    let themeState = localStorage.getItem("theme");
    if (themeState === "dark") {
        body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "Dark Mode";
    } else {
        body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "Light Mode";
    }
}   
