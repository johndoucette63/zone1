// script.js
document.addEventListener('DOMContentLoaded', function() {
    const responseText = document.getElementById('responseText');
    responseText.textContent = 'This is Dynamic Text';
    responseText.classList.add('hidden');

    setTimeout(() => {
        responseText.classList.remove('hidden');
    }, 5000);
});
