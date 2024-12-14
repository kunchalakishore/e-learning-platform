// Toggle Edit Profile Form
function toggleEditForm() {
    const form = document.getElementById('editProfileForm');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'flex' : 'none';
}

// Save Profile Changes
function saveProfile() {
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;

    // Update Profile Data
    document.getElementById('userName').textContent = name;
    document.getElementById('userEmail').textContent = email;

    // Hide the Edit Form
    toggleEditForm();
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Simulate Logout
function logout() {
    alert("You have logged out successfully.");
    // You can redirect the user to the login page after logout
    // window.location.href = 'login.html';
}
