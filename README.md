# GS Tech Solutions - Official Website
Static HTML5/CSS3/JS website optimized for Vercel deployment.

## Project Architecture
- No backend/PHP required. Pure static architecture for maximum performance.
- Mobile-first CSS via `assets/css/style.css`
- Vanilla JS interactions (WhatsApp form routing) via `assets/js/main.js`

## How to Import to Vercel
1. Upload this entire directory structure to a GitHub repository.
2. Log into your Vercel Dashboard.
3. Click **Add New -> Project**.
4. Select your GitHub repository.
5. In "Framework Preset", leave it as **Other/Static**.
6. Click **Deploy**.

## Contact Form Configuration
By default, this static site uses a **WhatsApp redirection flow**.
If you want email submissions:
1. Open `contact.html`.
2. Locate `<form id="contact-form">`.
3. Change it to: `<form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">`
4. Remove `id="contact-form"`.

## Extending Inner Pages
For all subpages (e.g., `/services/website-development.html`), duplicate the `index.html` structure. Keep the `<header>` and `<footer>` consistent, and replace the `<section class="hero">` with a `<section class="section">` containing the specific text content using standard typography tags (`<h1>`, `<p>`, `.grid`).