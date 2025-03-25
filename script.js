const text = "Hello, I'm Aryan Shelkande.";
let index = 0;
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

function typeEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        cursor.style.display = "none"; // Hide cursor after typing
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
