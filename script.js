

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Basic navigation without scroll effects
document.addEventListener('DOMContentLoaded', function () {
    // Navigation links
    const navLinks = [
        { href: '#home' },
        { href: '#about' },
        { href: '#projects' },
        { href: '#experience' },
        { href: '#contact' }
    ];

    navLinks.forEach(link => {
        const anchor = document.querySelector(`a[href="${link.href}"]`);
        if (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetSection = document.querySelector(link.href);
                if (targetSection) {
                    // Calculate scroll position
                    const targetPosition = targetSection.offsetTop - 80; // Account for navbar height

                    // Instant scroll to section
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'auto'
                    });
                }
            });
        }
    });
});



// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Initialize particles
    createParticles();
});



// Particle background effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    const colors = [
        'rgba(0, 112, 243, 0.3)',
        'rgba(0, 212, 255, 0.2)',
        'rgba(255, 255, 255, 0.1)'
    ];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random color
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';

        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Experience expand/collapse functionality
function toggleExperience(button) {
    const experienceItem = button.closest('.experience-item');
    const details = experienceItem.querySelector('.experience-details');
    const expandText = button.querySelector('.expand-text');
    const icon = button.querySelector('i');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        expandText.textContent = 'Show Details';
        button.classList.remove('expanded');
    } else {
        details.classList.add('expanded');
        expandText.textContent = 'Hide Details';
        button.classList.add('expanded');
    }
}



// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const form = this;
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        // Format message for WhatsApp
        const formattedMessage = `*New Message from Portfolio*
        
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}

---
Sent from your portfolio website`;

        // Your WhatsApp number (replace with your actual number)
        const whatsappNumber = '60125158123'; // Remove any + or spaces

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

        // Show loading state briefly
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        // Simulate loading for better UX
        setTimeout(() => {
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Show success message
            showNotification('Opening WhatsApp with your message...', 'success');

            // Reset form
            form.reset();

            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);

    // Add to page
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}



// Vercel-style hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-4px) scale(1.02)';
        this.style.boxShadow = '0 12px 32px rgba(0, 112, 243, 0.15)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 8px var(--shadow)';
    });
});

// Enhanced social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px) scale(1.05)';
        this.style.boxShadow = '0 8px 20px rgba(0, 112, 243, 0.3)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 8px var(--shadow)';
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
`;
document.head.appendChild(loadingStyle); 