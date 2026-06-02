document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Parallax hero effect
    const heroBg = document.querySelector('.hero-bg img');
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
            heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.3}px)`;
        }
    });

    // Intersection Observer for fade-in animations
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => observer.observe(el));
});
