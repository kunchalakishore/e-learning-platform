// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Log the data for testing
    console.log("Contact Form Data:", formData);

    // Simulate a successful form submission
    alert("Your message has been sent! We will get back to you shortly.");
    document.getElementById('contactForm').reset();  // Clear the form
});
