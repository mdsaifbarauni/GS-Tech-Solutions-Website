// Theme Toggle
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

const applyTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    if (themeToggle) {
        themeToggle.innerHTML = isLight ? '🌙' : '☀️';
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        themeToggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    }
    localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(prefersLight ? 'light' : 'dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
    });
}

// Keep the footer identical across every page, including nested detail pages.
const footerMarkup = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="/" class="logo">GS <span>Tech Solutions</span></a>
                <p class="footer-slogan">Your Vision | Our Technology</p>
                <p>Software for a Better Tomorrow.</p>
                <p class="footer-service-note">Serving businesses, schools, hospitals &amp; organizations with practical technology solutions.</p>
                <div class="footer-socials" aria-label="Social media links">
                    <a href="https://www.instagram.com/gstechsolutions.co.in/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    <a href="https://wa.me/919102075267" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
                </div>
            </div>
            <div>
                <h4 class="footer-title">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/services.html">Services</a></li>
                    <li><a href="/solutions.html">Solutions</a></li>
                    <li><a href="/demos/">Live Demos</a></li>
                    <li><a href="/portfolio.html">Projects</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">Services</h4>
                <ul class="footer-links">
                    <li><a href="/services/website-development.html">Website Development</a></li>
                    <li><a href="/services/custom-software-development.html">Custom Software</a></li>
                    <li><a href="/services/erp-crm.html">ERP &amp; CRM</a></li>
                    <li><a href="/services/mobile-app-development.html">Mobile App Development</a></li>
                    <li><a href="/services/website-development.html">UI/UX Design</a></li>
                    <li><a href="/services/business-automation.html">Business Automation</a></li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">Solutions</h4>
                <ul class="footer-links">
                    <li><a href="/solutions/schools.html">School &amp; College ERP</a></li>
                    <li><a href="/solutions/hospitals.html">Hospital Management</a></li>
                    <li><a href="/solutions/hotels.html">Hotel Management</a></li>
                    <li><a href="/solutions/business.html">Business Management</a></li>
                    <li><a href="/solutions/retail.html">POS &amp; Billing</a></li>
                    <li><a href="/solutions.html">Custom SaaS Solutions</a></li>
                </ul>
            </div>
            <div>
                <h4 class="footer-title">Contact</h4>
                <ul class="footer-links footer-contact-list">
                    <li><a href="https://www.google.com/maps/search/?api=1&amp;query=Bhatta+Bazar%2C+Purnia%2C+Bihar+854301%2C+India" target="_blank" rel="noreferrer">Purnia, Bihar, India</a></li>
                    <li><a href="tel:+919102075267">+91 91020 75267</a></li>
                    <li><a href="tel:+916299716991">+91 62997 16991</a></li>
                    <li><a href="mailto:gstechsolutions2026@gmail.com">gstechsolutions2026@gmail.com</a></li>
                    <li><a href="https://gstechsolutions.co.in/">gstechsolutions.co.in</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-cta">
            <div>
                <h3>Have a project in mind?</h3>
                <p>Let's build something great together.</p>
            </div>
            <a href="/contact.html" class="btn btn-primary">Get a Free Consultation &rarr;</a>
        </div>
        <div class="footer-bottom">
            <p>&copy; <span id="current-year"></span> <strong>GS Tech Solutions</strong>. All Rights Reserved.</p>
            <div class="footer-bottom-links">
                <a href="/privacy-policy.html">Privacy Policy</a>
                <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
                <a href="/refund-policy.html">Refund Policy</a>
            </div>
        </div>
    </div>`;

const sharedFooter = document.querySelector('footer') || document.createElement('footer');
sharedFooter.innerHTML = footerMarkup;
if (!sharedFooter.parentElement) document.body.appendChild(sharedFooter);

// Show a compact back-to-top control only when the footer is close.
const scrollTopButton = document.createElement('button');
scrollTopButton.type = 'button';
scrollTopButton.className = 'scroll-top-button';
scrollTopButton.setAttribute('aria-label', 'Scroll to top');
scrollTopButton.title = 'Scroll to top';
scrollTopButton.innerHTML = '&#8593;';
document.body.appendChild(scrollTopButton);

const updateScrollTopVisibility = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportBottom = window.scrollY + window.innerHeight;
    const isNearBottom = documentHeight > window.innerHeight + 120 && viewportBottom >= documentHeight - 280;
    scrollTopButton.classList.toggle('is-visible', isNearBottom);
};

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });
window.addEventListener('resize', updateScrollTopVisibility);
updateScrollTopVisibility();

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (navLinks && !navLinks.querySelector('a[href="/demos/"]')) {
    const demosLink = document.createElement('a');
    demosLink.href = '/demos/';
    demosLink.textContent = 'Live Demos';
    const contactLink = navLinks.querySelector('a[href="/contact.html"]');
    if (contactLink) {
        navLinks.insertBefore(demosLink, contactLink);
    } else {
        navLinks.appendChild(demosLink);
    }
}

if(mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open', isOpen);
        mobileToggle.innerHTML = isOpen ? '✕' : '☰';
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    const currentPath = window.location.pathname
        .replace(/\/index\.html$/, '/')
        .replace(/\/$/, '') || '/';

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileToggle.innerHTML = '☰';
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
        const href = link.getAttribute('href');
        const linkPath = href && (href.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/');
        const isDemoRoute = linkPath === '/demos' && currentPath.startsWith('/demos');
        const isActive = linkPath === currentPath || isDemoRoute;
        link.classList.toggle('active', Boolean(isActive));
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// Add a restrained 3D tilt only for mouse/trackpad users. Touch and reduced-motion
// visitors keep the standard, stable layout.
const canUseTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canUseTilt) {
    document.querySelectorAll('.hero-panel, .proof-card').forEach(card => {
        card.classList.add('has-tilt');
        let frameId;

        card.addEventListener('pointermove', event => {
            const bounds = card.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;

            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                card.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`);
                card.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
                card.style.setProperty('--shine-x', `${x * 100}%`);
                card.style.setProperty('--shine-y', `${y * 100}%`);
                card.classList.add('is-tilting');
            });
        });

        card.addEventListener('pointerleave', () => {
            cancelAnimationFrame(frameId);
            card.classList.remove('is-tilting');
        });
    });
}

// Sticky Header Styling
const header = document.querySelector('header');
const updateHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 50);
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

// Set Current Year
const yearSpan = document.getElementById('current-year');
if(yearSpan) yearSpan.textContent = new Date().getFullYear();

// WhatsApp Contact Form Logic (Static Site Approach)
// NOTE: To use Formspree later, change form action in HTML to your endpoint and remove this script
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const business = document.getElementById('business').value;
        const service = document.getElementById('service').value;
        const details = document.getElementById('details').value;

        const message = `*New Project Enquiry (GS Tech Solutions)*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Business:* ${business || 'N/A'}\n*Service:* ${service}\n*Details:* ${details}`;
        const status = document.getElementById('form-status');
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/919102075267?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
        if (status) {
            status.hidden = false;
            status.textContent = 'WhatsApp has opened with your enquiry. Please send the pre-filled message to complete your request.';
        }
    });
}
