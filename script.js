document.addEventListener('DOMContentLoaded', function() {
    const navbarButton = document.getElementById('navbarButton');
    const nav = document.getElementById('nav');

    nav.style.display = 'none';

    navbarButton.addEventListener('mouseover', function() {
        nav.style.display = 'block';
    });

    navbarButton.addEventListener('mouseout', function() {
        nav.style.display = 'none';
    });
});