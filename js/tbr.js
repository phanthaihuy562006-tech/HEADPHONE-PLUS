// Add functionality to toggle switches if needed
document.querySelectorAll('.switch input').forEach(switchInput => {
    switchInput.addEventListener('change', (e) => {
        const optionName = e.target.parentElement.previousElementSibling.textContent;
        console.log(`${optionName} is now ${e.target.checked ? 'ON' : 'OFF'}`);
    });
});

// Add functionality to buttons
document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`${e.target.textContent} button clicked`);
        alert(`${e.target.textContent} client is running!`);
    });
});