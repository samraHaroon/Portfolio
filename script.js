/* ===================================
   PORTFOLIO JAVASCRIPT
   Interactive Features & Animations
   =================================== */

// ===================================
// DARK MODE TOGGLE
// ===================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize dark mode from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================

const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Smooth scroll on link click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close mobile menu when link is clicked
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===================================
// HAMBURGER MENU TOGGLE
// ===================================

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===================================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Update on scroll
window.addEventListener('scroll', updateActiveNav);

// ===================================
// TYPING ANIMATION
// ===================================

const typingElement = document.querySelector('.typing-text');
const text = typingElement.textContent;
let index = 0;

function typeText() {
    if (index === 0) {
        typingElement.textContent = '';
    }

    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// ===================================
// SCROLL ANIMATIONS FOR SKILL BARS
// ===================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                skillProgress.classList.add('animate');
                skillObserver.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill').forEach(skill => {
    skillObserver.observe(skill);
});

// ===================================
// SCROLL ANIMATIONS FOR ELEMENTS
// ===================================

const fadeInElements = document.querySelectorAll(
    '.about-text, .about-goals, .project-card, .cert-card, .timeline-content'
);

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Add initial styles
fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(element);
});

// ===================================
// CONTACT FORM VALIDATION
// ===================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Validation patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Clear error messages on input
nameInput.addEventListener('input', () => clearError('nameError'));
emailInput.addEventListener('input', () => clearError('emailError'));
messageInput.addEventListener('input', () => clearError('messageError'));

function clearError(errorId) {
    document.getElementById(errorId).textContent = '';
}

function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}

function validateForm() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim().length < 3) {
        showError('nameError', 'Name must be at least 3 characters long');
        isValid = false;
    }

    // Validate email
    if (!emailPattern.test(emailInput.value.trim())) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData(contactForm);
    formData.append('_subject', 'New message from portfolio contact form');
    formData.append('_captcha', 'false');

    // Post to Formsubmit AJAX endpoint so messages forward to your email
    fetch('https://formsubmit.co/ajax/hsamra321@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(async (response) => {
        if (response.ok) {
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                background-color: #4caf50;
                color: white;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
                animation: slideIn 0.3s ease;
            `;
            successMessage.textContent = 'Message sent successfully! I will get back to you soon.';
            contactForm.parentElement.insertBefore(successMessage, contactForm);
            contactForm.reset();

            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(-10px)';
                successMessage.style.transition = 'all 0.3s ease';
                setTimeout(() => successMessage.remove(), 300);
            }, 5000);
        } else {
            const data = await response.json().catch(() => ({}));
            showError('messageError', 'Failed to send message. Please try again later.');
            console.error('Form submit error', data);
        }
    })
    .catch((err) => {
        showError('messageError', 'An error occurred while sending. Please try again later.');
        console.error('Form submit exception', err);
    });
});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: var(--shadow);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = '#0052cc';
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = 'var(--primary-color)';
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ===================================
// PARALLAX EFFECT (Optional Enhancement)
// ===================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

// ===================================
// PROJECT CARD HOVER EFFECTS
// ===================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// NUMBER COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===================================
// LAZY LOADING FOR IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// PRINT RESUME FUNCTION
// ===================================

function printResume() {
    window.print();
}

// ===================================
// EMAIL LINK HANDLER
// ===================================

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        console.log('Email link clicked:', email);
    });
});

// ===================================
// EXTERNAL LINK HANDLING
// ===================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add analytics tracking here if needed
        console.log('External link opened:', link.href);
    });
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations on load
    updateActiveNav();
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    // Alt + H to go home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Alt + C to go to contact
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ===================================
// FORM INPUT LIVE VALIDATION FEEDBACK
// ===================================

nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim().length > 0 && nameInput.value.trim().length < 3) {
        nameInput.style.borderColor = '#ff6b6b';
    } else if (nameInput.value.trim().length >= 3) {
        nameInput.style.borderColor = '#4caf50';
    }
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim().length > 0) {
        if (emailPattern.test(emailInput.value.trim())) {
            emailInput.style.borderColor = '#4caf50';
        } else {
            emailInput.style.borderColor = '#ff6b6b';
        }
    }
});

messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim().length > 0 && messageInput.value.trim().length < 10) {
        messageInput.style.borderColor = '#ff6b6b';
    } else if (messageInput.value.trim().length >= 10) {
        messageInput.style.borderColor = '#4caf50';
    }
});

// ===================================
// SERVICE WORKER FOR PWA SUPPORT (Optional)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration can be added here
        console.log('Service Worker support detected');
    });
}

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================

console.log('%c👋 Welcome to Samra Haroon\'s Portfolio!', 'color: #0066ff; font-size: 18px; font-weight: bold;');
console.log('%cThanks for visiting. Feel free to check the source code!', 'color: #666; font-size: 14px;');
console.log('%cGet in touch: hsamra321@gmail.com', 'color: #0066ff; font-size: 12px;');
