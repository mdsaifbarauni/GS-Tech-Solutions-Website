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

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if(mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open', isOpen);
        mobileToggle.innerHTML = isOpen ? '✕' : '☰';
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileToggle.innerHTML = '☰';
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
        const href = link.getAttribute('href');
        if (href === '/' && (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'))) {
            link.classList.add('active');
        } else if (href && window.location.pathname.endsWith(href)) {
            link.classList.add('active');
        }
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

        const message = `*New Project Enquiry (GS Tech Solutions)*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email || 'N/A'}%0A*Business:* ${business || 'N/A'}%0A*Service:* ${service}%0A*Details:* ${details}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/919102075267?text=${message}`, '_blank');
        contactForm.reset();
    });
}