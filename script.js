// script.js
document.addEventListener('DOMContentLoaded', function() {
    const responseText = document.getElementById('responseText');
    responseText.classList.add('hidden');

    document.getElementById('pressMeButton').addEventListener('click', function() {
        responseText.classList.remove('hidden');
        
        setTimeout(() => {
            responseText.classList.add('hidden');
        }, 3000);
    });
});
