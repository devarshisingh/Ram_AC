// Function to detect scroll position and trigger animation
function checkVisibility() {
    const cards = document.querySelectorAll('.card-item');
    const section = document.getElementById('choose-us-section');
    const sectionPosition = section.getBoundingClientRect();

    // Check if section is in view
    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
        cards.forEach((card, index) => {
            // Delay each card animation slightly
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150); // Delay by 150ms for each card
        });
    }
}

// Listen for scroll event
window.addEventListener('scroll', checkVisibility);

// Run on page load to check if the section is already in view
document.addEventListener('DOMContentLoaded', checkVisibility);
