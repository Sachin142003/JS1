// Create a button element
const button = document.createElement('button');
button.textContent = 'Click Me!';

// Append the button to the body
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
