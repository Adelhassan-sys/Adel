alert("Sign up here");
function togglePassword() {
    const passwordField = document.getElementById("myPassword");
    const toggleBtn = document.getElementById("toggleBtn");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide"; // تغيير النص لـ اخفاء
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show"; // تغيير النص لـ اظهار
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