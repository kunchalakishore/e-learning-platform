// Function to zoom in the cursor
const zoomIn = (event) => {
    const cursor = event.target;
    cursor.style.transform = "scale(1.1)";  // Zoom in effect
};

// Function to zoom out the cursor
const zoomOut = (event) => {
    const cursor = event.target;
    cursor.style.transform = "scale(1)";  // Normal size
};

// Function to add zoom-in or zoom-out effect
const addZoomEffect = () => {
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(card => {
        // Add event listeners for mouse enter and mouse leave
        card.addEventListener("mouseover", zoomIn);
        card.addEventListener("mouseleave", zoomOut);
    });
};

// Call the function when the page loads
window.onload = () => {
    addZoomEffect();  // Apply zoom effects on course cards
};
