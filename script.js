// script.js

// Example: Add a little glow pulse effect to circles
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', () => {
        circle.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        circle.style.transform = 'scale(1.2)';
        circle.style.boxShadow = '0 0 40px rgba(0,170,255,0.9)';
    });

    circle.addEventListener('mouseout', () => {
        circle.style.transform = 'scale(1)';
        circle.style.boxShadow = '';
    });
});

// Placeholder for future features
console.log("Waffles’ Basement script loaded!");