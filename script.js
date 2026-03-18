// script.js

// Functionality for dark/light theme toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Functionality for smooth scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Functionality for form validation
function validateForm(form) {
    const username = form.username.value;
    const email = form.email.value;

    if (!username || !email) {
        alert('All fields are required.');
        return false;
    }
    return true;
}

// Event listener for theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
}

// Restore theme from localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
});