document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hover effect logging for project cards
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            console.log('Hovered over project:', project.querySelector('h3').textContent);
        });
    });

    // Ensure fade-in elements are visible on page load
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '1';
    });
});