// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Create the data object
    const data = {
        email: email,
        password: password
    };

    // Send the login request to the server
    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Save token to local storage
            localStorage.setItem('authToken', data.token);

            // Redirect to the user dashboard or homepage
            window.location.href = 'dashboard.html';  // Replace with your actual dashboard URL
        } else {
            alert('Invalid credentials. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
