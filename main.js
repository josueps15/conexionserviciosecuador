document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 5%';
            header.style.background = 'rgba(10, 10, 12, 0.8)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.background = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
