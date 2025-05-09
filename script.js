function   toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Typewriter effect
const roles = ["Frontend Developer", "AI/ML Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterElement;

document.addEventListener('DOMContentLoaded', function() {
    typewriterElement = document.querySelector('.typewriter');
    typeWriter();
});

function typeWriter() {
    const currentRole = roles[roleIndex];
    const shouldDelete = isDeleting;
    const currentText = typewriterElement.textContent;

    if (shouldDelete) {
        // Deleting text
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing text
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = shouldDelete ? 50 : 100; // Faster deletion, slower typing

    // Check if word is complete
    if (!shouldDelete && charIndex === currentRole.length) {
        // Pause at the end of typing
        typeSpeed = 2000; // Wait 2 seconds
        isDeleting = true;
    } else if (shouldDelete && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Wait 0.5 seconds before typing next word
    }

    setTimeout(typeWriter, typeSpeed);
}