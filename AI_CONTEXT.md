# GS Tech Solutions - AI Project Context

This file is a working brief for ChatGPT, Copilot, and other coding assistants working on this website. Treat the source HTML, CSS, and JavaScript as the final authority if this document and the implementation differ.

## 1. Website Identity

- Business name: GS Tech Solutions
- Website: https://gstechsolutions.co.in/
- Business type: Local software and technology solutions company
- Primary location: Bhatta Bazar, Purnia, Bihar 854301, India
- Service area: Purnia, Bihar, and India
- Brand promise: "Your Vision | Our Technology"
- Supporting line: "Software for a Better Tomorrow."
- Positioning: Business-first, practical, scalable digital systems that improve operations, customer communication, and growth
- Primary audience: Startups, retail brands, schools, colleges, hospitals, clinics, hotels, restaurants, professional service businesses, manufacturing, distribution, and other organizations
- Main conversion goal: Get a project enquiry through the contact page, phone, email, or WhatsApp

## 2. Business Contacts

- Primary phone: +91 91020 75267
- WhatsApp: https://wa.me/919102075267
- Secondary phone: +91 62997 16991
- Email: gstechsolutions2026@gmail.com
- Address: Bhatta Bazar, Purnia, Bihar 854301, India
- Website: https://gstechsolutions.co.in/
- Instagram: https://www.instagram.com/gstechsolutions.co.in/
- Facebook link currently used: https://www.facebook.com/
- LinkedIn link currently used: https://www.linkedin.com/
- Google Maps search: Bhatta Bazar, Purnia, Bihar 854301, India

When writing new copy, preserve the company name, location, phone number, and email exactly unless the user explicitly asks to change them. Do not invent clients, project results, certifications, staff, pricing, guarantees, or technical capabilities.

## 3. Technical Architecture

- Architecture: Static, multi-page HTML5 website
- Backend: None
- Build system: None
- Framework: None
- Frontend: Vanilla HTML, CSS, and JavaScript
- Deployment target: Vercel with the framework preset set to Other/Static
- Shared stylesheet: `assets/css/style.css`
- Shared JavaScript: `assets/js/main.js`
- Fonts: Inter loaded from Google Fonts
- Icons: Mostly inline SVG icons in HTML plus text symbols for menu/theme controls
- Routing: Static root-relative links such as `/about.html`, `/services/website-development.html`, and `/solutions/business.html`
- SEO: Page titles, meta descriptions, canonical URLs, Open Graph tags, Twitter cards, robots directives, and JSON-LD on most pages
- No package manager or build command is required

## 4. Top-Level Pages

- `/index.html` - Home page; main company positioning, services, workflow, reasons to choose the company, and CTA
- `/about.html` - Company overview and founder profiles for Gaurav and Saif
- `/services.html` - Services overview
- `/solutions.html` - Industry solutions overview, operational problems, custom business management concept, process, technology, and FAQ content
- `/portfolio.html` - Portfolio overview with business websites, ERP dashboards, and process automation examples
- `/process.html` - Four-step delivery process
- `/contact.html` - Contact details, map, and enquiry form
- `/404.html` - Page-not-found page
- `/privacy-policy.html` - Short privacy policy
- `/terms-and-conditions.html` - Short website and service terms
- `/refund-policy.html` - Project payment, cancellation, change, and refund policy

## 5. Service Detail Pages

All service detail pages are under `/services/` and use the shared header, stylesheet, JavaScript, and footer behavior.

- `/services/website-development.html` - Corporate, dynamic, responsive, and conversion-focused business websites
- `/services/custom-software-development.html` - Business software, management systems, workflow tools, and web applications
- `/services/erp-crm.html` - Inventory, billing, customer management, sales processes, and reporting systems
- `/services/mobile-app-development.html` - Android/iOS-oriented business apps and customer experiences
- `/services/business-automation.html` - Workflow automation, process optimization, WhatsApp integrations, and digital systems
- `/services/saas-development.html` - Subscription products, cloud platforms, multi-user systems, and scalable products
- `/services/hospital-clinic-software.html` - Patient management, appointments, billing, pharmacy, and healthcare reporting
- `/services/hotel-restaurant-software.html` - Bookings, guests, billing, inventory, and POS for hospitality and food businesses
- `/services/it-support.html` - Website maintenance, software support, updates, and performance optimization
- `/services/school-college-erp.html` - Student management, attendance, fees, examinations, and communication

## 6. Industry Solution Pages

All solution detail pages are under `/solutions/`.

- `/solutions/business.html` - ERP, CRM, inventory, billing, automation, and workflow management for businesses
- `/solutions/schools.html` - Student, attendance, fees, staff, and academic administration systems
- `/solutions/hospitals.html` - Patient, appointment, billing, laboratory, pharmacy, and reporting workflows
- `/solutions/hotels.html` - Bookings, guest records, rooms, billing, POS, and inventory control
- `/solutions/restaurants.html` - POS, orders, inventory, billing, and kitchen/daily operations
- `/solutions/retail.html` - Inventory, billing, customer tracking, sales, and retail visibility

The broader Solutions page also mentions manufacturing/distribution and professional services. These currently link to the contact page instead of dedicated detail pages.

## 7. Core Services and Capabilities

Use these as the supported service vocabulary:

- Website development
- Corporate and business websites
- Responsive UI/UX design
- Custom software development
- Business management systems
- ERP and CRM systems
- Inventory management
- Billing and point of sale
- Customer and employee management
- Business process automation
- Workflow tools
- Web portals and lead-generation experiences
- Mobile app development
- SaaS development
- API integrations
- Dashboards, reports, and analytics
- Hospital and clinic software
- School and college ERP
- Hotel and restaurant software
- Retail software
- IT support, maintenance, updates, and optimization

Do not state that a feature is already delivered for a named client. The site describes solution capabilities and concepts, not a verified client case-study list.

## 8. Industry Problems the Site Addresses

The Solutions page frames the common problems as:

- Manual records
- Scattered customer information
- Inventory confusion
- Manual billing
- Repetitive tasks
- Difficulty tracking operations
- Multiple disconnected tools
- Limited reporting visibility

The corresponding digital responses are business management systems, CRM, inventory management, billing/POS, workflow automation, centralized dashboards, API integrations, and reports/analytics.

## 9. Delivery Process

The standard process has four stages:

1. Discover: Understand the business, workflow, users, requirements, and goals.
2. Plan: Define the solution architecture, layout, features, and workflow.
3. Build: Design and develop a clean, efficient system for real-world use.
4. Launch and support: Test, deploy, train where needed, and provide post-launch improvements and maintenance.

Tone for process copy should be clear, collaborative, structured, practical, and outcome-focused.

## 10. Founders

- Gaurav - Co-Founder / Partner; focuses on business workflows, client relationships, and aligning technology with operational goals.
- Saif - Co-Founder / Partner; focuses on computer science, software architecture, scalable systems, and machine learning integrations.

Founder images referenced by About page:

- `/assets/images/gaurav.jpg`
- `/assets/images/saif.jpg`

The About page has a fallback initial avatar if an image fails to load. There is also `/assets/GAURAV.png`; verify intended usage before changing image references.

## 11. Visual Design System

- Default theme: Dark navy technology aesthetic
- Optional theme: Light mode, persisted in localStorage under `theme`
- Main dark background: `#081B33`
- Alternate dark background: `#051224`
- Card background: `#0D213D`
- Primary blue: `#087CF5`
- Accent blue: `#1683FF`
- Cyan highlight: `#00C6FF`
- Main text: white in dark mode
- Supporting text: slate/light blue-muted tones
- Layout: mobile-first, responsive, max content width around 1280px
- Common classes: `.container`, `.section`, `.section-header`, `.grid`, `.card`, `.btn`, `.btn-primary`, `.btn-secondary`, `.reveal`, `.text-gradient`, `.bg-alt`
- Visual language: gradients, subtle radial background effects, glass-like cards, blue/cyan highlights, restrained shadows, rounded 8px controls/cards
- Inter is the established font; preserve it for consistency unless a redesign is explicitly requested
- Maintain accessible contrast, responsive layouts, visible focus behavior, and non-overlapping content

## 12. Shared JavaScript Behavior

`assets/js/main.js` runs on every page and does the following:

- Reads the saved theme from localStorage or the user's `prefers-color-scheme` preference
- Applies `data-theme="dark"` or `data-theme="light"` to `<body>`
- Updates the theme button label and accessible name
- Injects the complete shared footer into the first `<footer>` element, or creates one if absent
- Toggles the mobile navigation and `aria-expanded`
- Marks the current navigation link active based on the URL
- Adds `.active` to `.reveal` elements with IntersectionObserver
- Adds `.is-scrolled` to the header after scrolling more than 50px
- Updates the current year in `#current-year`
- Intercepts `#contact-form` submission, builds a WhatsApp message, opens WhatsApp in a new tab, and resets the form

Important: If a page has a footer, its HTML is normally replaced by the JavaScript footer markup at runtime. Update the footer source in `assets/js/main.js` when changing global footer content.

## 13. Contact Form Behavior

The form on `/contact.html` collects:

- Required name
- Required phone
- Optional email
- Optional business/organization
- Required service selection
- Required project details

It does not submit to a server. JavaScript creates a pre-filled WhatsApp message and sends it to +91 91020 75267. To migrate to email submission, follow the existing README guidance and replace the JavaScript-driven form flow with a Formspree or another backend endpoint.

## 14. Navigation and Global Footer

Primary navigation appears on all pages:

- Home
- About
- Services
- Solutions
- Portfolio
- Process
- Contact

The injected footer contains quick links, service links, solution links, contact information, social links, a project CTA, copyright year, Privacy Policy, Terms & Conditions, and Refund Policy.

Use root-relative URLs because the site is deployed at the domain root. Be careful with relative paths when adding pages inside `/services/` or `/solutions/`.

## 15. SEO and Structured Data Rules

When creating or editing a page:

- Use a unique, descriptive `<title>` and meta description.
- Preserve the canonical URL format `https://gstechsolutions.co.in/...`.
- Keep Open Graph and Twitter metadata aligned with the visible page content.
- Add or preserve JSON-LD where appropriate: LocalBusiness, WebPage, CollectionPage, Service, ContactPage, AboutPage, and BreadcrumbList are already used.
- Keep business NAP data consistent: GS Tech Solutions, Bhatta Bazar, Purnia, Bihar 854301, India, +919102075267, and gstechsolutions2026@gmail.com.
- Use meaningful image `alt` text and lazy-load non-critical images.

## 16. Legal and Content Boundaries

- Privacy policy currently says enquiry information is used to respond, provide services, and improve user experience, and is not sold or shared except as legally required or needed for a requested service.
- Terms currently say the website is for lawful use, information may change, and services depend on agreed scope, timelines, and written confirmation.
- Refund policy says payments follow the agreed proposal, milestones, or contract; adjustments depend on work completed, third-party costs, and the written project agreement.
- Legal content is brief and should be reviewed by a qualified professional before being treated as comprehensive legal advice.

## 17. Development Rules for Future Changes

- Keep the project framework-free unless the user explicitly requests a migration.
- Prefer small, focused edits that preserve existing markup and CSS conventions.
- Reuse existing classes and shared behavior before creating new abstractions.
- Do not add a backend, dependency, build step, or package configuration for a simple static-site change.
- Check both dark and light themes after visual changes.
- Check desktop and mobile layouts after changing navigation, grids, forms, or typography.
- Test pages nested under `/services/` and `/solutions/` for broken root-relative links.
- Avoid inventing business claims, metrics, testimonials, client names, pricing, or certifications.
- When asked to improve copy, keep the tone professional, practical, direct, locally relevant, and business-focused.

## 18. Useful Verification Checklist

- Open the changed page at the site root and at its nested URL if applicable.
- Confirm the stylesheet and JavaScript load from `/assets/...`.
- Test the mobile menu.
- Test dark/light theme persistence.
- Test footer injection and current-year rendering.
- Test contact form WhatsApp routing without sending a real enquiry unless requested.
- Check navigation active state.
- Check responsive layout and text wrapping.
- Check canonical URL, title, description, and links.

## 19. Existing Project Documentation

- Deployment and Formspree notes: `README.md`
- Global styles: `assets/css/style.css`
- Shared behavior: `assets/js/main.js`
- This AI context: `AI_CONTEXT.md`

## 20. Interactive Demo Showroom

The project now includes a static live-demo showroom under `/demos/`. These are sample interfaces with fictional data, not claims about completed client projects.

- `/demos/` - Demo catalog and CTA page
- `/demos/school-erp/` - School ERP dashboard
- `/demos/business-erp/` - Business ERP dashboard
- `/demos/hospital-management/` - Hospital management dashboard
- `/demos/hotel-management/` - Hotel management dashboard with room status interaction
- `/demos/restaurant-pos/` - Restaurant POS with cart, quantity, tax, and order calculations
- `/demos/crm/` - CRM dashboard with visual sales pipeline
- `/demos/inventory-management/` - Inventory and stock management dashboard
- `/demos/billing-software/` - Billing dashboard with functional sample invoice calculations

Demo-specific shared assets:

- `assets/css/demos.css` - Responsive SaaS dashboard and showroom styles
- `assets/js/demos.js` - Shared demo rendering, navigation, tables, sample data, cart, invoice, room status, and toast interactions

The demo entry pages contain metadata and a `data-demo` identifier. `demos.js` uses that identifier to render the appropriate dashboard configuration. Keep all demo data clearly fictional and preserve the visible `Demo Environment` / `Sample data only` wording.

The existing shared `main.js` adds `/demos/` to older page navigation when it is not already present and adds a Live Demos link to the injected footer. Existing marketing solution pages remain separate from their interactive demo routes and link to the matching demo where relevant.

## 21. E-Commerce Store and Admin Demo

The project also contains a separate static e-commerce sample system. It is a sales/demo interface only: there is no backend, database, production authentication, real payment processing, or real customer data.

Public store routes:

- `/demos/ecommerce/` - Storefront home, featured catalog, categories, reviews, newsletter simulation
- `/demos/ecommerce/products.html` - Searchable/filterable sample product catalog
- `/demos/ecommerce/product.html?id=p1` - Product detail view with tabs, quantity, wishlist, and cart actions
- `/demos/ecommerce/cart.html` - Persistent cart with quantity controls, coupon `DEMO10`, discount, shipping, tax, and total
- `/demos/ecommerce/checkout.html` - Sample customer/shipping/payment form with simulated order creation
- `/demos/ecommerce/account.html` - Fictional customer account, wishlist, and local demo orders

Admin routes:

- `/demos/ecommerce/admin/` - Frontend-only demo login
- `/demos/ecommerce/admin/dashboard.html` - Dashboard metrics, chart, top products, and recent orders
- `/demos/ecommerce/admin/products.html` - Sample product search, add, delete, and localStorage-backed CRUD demo
- `/demos/ecommerce/admin/orders.html` - Order table with visual status changes
- `/demos/ecommerce/admin/customers.html` - Fictional customer directory
- `/demos/ecommerce/admin/inventory.html` - Stock metrics and low-stock table
- `/demos/ecommerce/admin/analytics.html` - CSS chart-based sample revenue, product, category, and customer analytics
- `/demos/ecommerce/admin/settings.html` - Store information, tax, shipping, currency, and appearance settings simulation

Demo admin credentials are intentionally visible only within the demo login page:

- Admin ID: `admin@demo.com`
- Password: `Demo@123`

Demo-specific assets:

- `assets/css/ecommerce-demo.css` - Storefront and admin visual system, responsive layouts, product cards, cart, checkout, tables, modals, and mobile drawers
- `assets/js/ecommerce-demo.js` - Product catalog, search/filter, wishlist, cart, coupon, checkout, account, and localStorage order flow
- `assets/js/ecommerce-admin.js` - Frontend-only admin login, route protection, dashboard, product CRUD, orders, customers, inventory, analytics, settings, and logout

Store state uses localStorage key `gs-demo-store`; admin login state uses `gs-demo-admin-auth`. All data is fictional sample data. Do not describe this demo as a production commerce system or a completed client project.
