// script.js
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const message = document.createElement("div");
        message.textContent = "Taking my time to load this, cuz I am showing you that I am dynamic.";
        document.body.appendChild(message);
    }, 3000);
});