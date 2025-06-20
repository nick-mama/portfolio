// Dark/Light Mode
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.src = 'icons/sun.png'; 
        themeIcon.alt = 'Switch to Dark Mode';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.src = 'icons/sun.png';
            themeIcon.alt = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.src = 'icons/moon.png';
            themeIcon.alt = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});