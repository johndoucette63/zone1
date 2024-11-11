// script.js
document.getElementById('pressMeButton').addEventListener('click', function() {
    const responseText = document.getElementById('responseText');
    responseText.classList.remove('hidden');
    
    setTimeout(() => {
        responseText.classList.add('hidden');
    }, 3000);
});
