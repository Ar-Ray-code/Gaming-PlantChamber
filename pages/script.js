// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .spec-item').forEach(el => {
    observer.observe(el);
});

// No need for manual calculation anymore - the image will size naturally

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBgImage = document.querySelector('.hero-bg-image');

    if (heroBgImage) {
        // Parallax movement effect
        heroBgImage.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;

        // Fade out background as user scrolls
        const opacity = Math.max(0, 0.6 - scrolled / 1000);
        heroBgImage.style.opacity = opacity;
    }
});
