// Create a new <h1> element
const h1 = document.createElement('h1');
        
// Set the text content of the <h1> element
h1.textContent = 'Hello, React!';

// Get the element with id "root"
const root = document.getElementById('root');

// Append the <h1> element to the "root" element
root.appendChild(h1);