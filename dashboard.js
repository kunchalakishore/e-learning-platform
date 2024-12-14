document.addEventListener("DOMContentLoaded", function() {
    const profileLink = document.getElementById("profile-link");
    const profileSection = document.getElementById("profile-section");

    // Show profile when clicking the profile link
    profileLink.addEventListener("click", function(event) {
        event.preventDefault();
        profileSection.style.display = "block"; // Show the profile section
    });

    // Function to handle certificate download
    function downloadCertificate(courseName) {
        const certificateData = `Certificate of Completion: ${courseName}`;
        const blob = new Blob([certificateData], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${courseName}_certificate.pdf`;
        link.click();
    }
});
