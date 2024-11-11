// script.js
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const message = document.createElement("div");
        message.textContent = "Dynamic Load";
        document.body.appendChild(message);
    }, 3000);
});