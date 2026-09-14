# Elite School of Hospitality Management (ESHM) — Client Demo Website

> **Client Presentation Demo**  
> **Target Domain:** `elite.pratiklama.com.np`  
> **Source Repository:** [github.com/kukipratik/elite-hospitality-demo](https://github.com/kukipratik/elite-hospitality-demo)  
> **Institution:** Elite School of Hospitality Management, Pipalbot, Old Baneshwor, Kathmandu, Nepal  

---

## 1. Project Purpose

This project is a high-fidelity, production-grade 2026 sales demo website built specifically to present to the executive management of **Elite School of Hospitality Management (ESHM)** in an in-person sales meeting.

The objective is to establish what Elite's digital presence should become:
* **Editorial Culinary Art Direction:** Inspired by high-end international culinary institutions (such as the Culinary Institute of Barcelona) rather than generic corporate educational templates or AI landing pages.
* **Vocational Authenticity:** Highlighting Elite's core identity — 60+ days of nonstop commercial kitchen practicals, ten full 4-course menu masterclasses, dedicated neon-lit mixology at the *Elite Bar*, specialty barista lab with swan latte art, and structured 3–6 month hotel/resort internships.
* **Strict WhatsApp-First Conversion Funnel:** Tailored to Kathmandu prospective students and parents, directing inquiries straight to admissions counseling on WhatsApp (`+977 984-3338838`).

---

## 2. Technical Stack

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation mode)
* **Language:** TypeScript
* **Animations:** GSAP 3 + ScrollTrigger (`gsap.matchMedia()` with full `prefers-reduced-motion` compliance)
* **Styling:** Handcrafted Modern CSS (Custom Design System with CSS Tokens, zero external component kits or UI libraries like shadcn/flowbite)
* **SEO Guardrail:** `<meta name="robots" content="noindex,nofollow">` enabled across all templates for client safety

---

## 3. Project Structure

```
elite_school_of_hospitality_management/
├── astro.config.mjs               # Astro static build configuration
├── package.json                   # Dependencies (Astro, GSAP, TypeScript)
├── tsconfig.json                  # TypeScript strict configuration
├── demo_data_to_verify.md         # Comprehensive audit log of all approximate demo values
├── content_sources.md             # Mapping of verified facts & media to official Elite URLs
├── README.md                      # Project documentation & presentation guide
├── public/
│   ├── favicon.svg                # Brand icon favicon (Star + Chef Toque)
│   ├── images/                    # Curated documentary photos (kitchen, bar, barista, etc.)
│   └── video/                     # Downloaded real Elite student training reels (.mp4)
└── src/
    ├── assets/elite/              # Source images organized by department
    ├── components/
    │   ├── Header.astro           # Sticky navigation with live intake status & WhatsApp CTA
    │   ├── Footer.astro           # Culinary footer with map embed & contact details
    │   ├── CourseCard.astro       # Editorial asymmetric program card
    │   ├── VideoPlayer.astro      # Custom reel player with play/pause and mute controls
    │   ├── WhatsAppButton.astro   # Floating non-intrusive conversion button
    │   └── InquiryModal.astro     # Interactive WhatsApp lead capture & campus visit modal
    ├── data/
    │   └── siteData.ts            # Central Single Source of Truth for verified and demo data
    ├── layouts/
    │   └── BaseLayout.astro       # Base HTML layout with SEO meta & GSAP lifecycle
    ├── pages/
    │   ├── index.astro            # Full editorial Homepage
    │   └── courses/
    │       └── dca.astro          # Flagship Diploma in Culinary Arts (DCA) Page
    ├── scripts/
    │   └── animations.ts          # GSAP ScrollTrigger engine with responsive breakpoints
    └── styles/
        ├── tokens.css             # Colors, typography, spacing, shadows, radius tokens
        └── global.css             # Base resets, typography styles, utility classes
```

---

## 4. Local Commands

```bash
# 1. Install dependencies
npm install
npm run check

# 2. Start local development server (with HMR)
npm run dev

# 3. Build static production site to dist/
npm run build

# 4. Preview the static production build locally
npm run preview
```

---

## 5. Asset Source Policy

All student, chef, kitchen, and facility photography and video reels are **100% authentic media downloaded from Elite School of Hospitality Management's official public social channels** (Facebook Page `@eliteschool.np`, Instagram, and Google Business Profile).

* **No stock photography actors** were used for kitchen or practical demonstrations.
* **Zero competitor media** was mixed into this project.
* Detailed URL provenance for all claims and assets is documented in `content_sources.md`.

---

## 6. Cloudflare Pages Deployment

* **Target Custom Domain:** `elite.pratiklama.com.np`
* **Repository:** `https://github.com/kukipratik/elite-hospitality-demo` (branch `main`)
* **Framework Preset:** `Astro`
* **Build Command:** `npm run build`
* **Build Output Directory:** `dist`

### Steps to Connect:
1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Select **Create Application** > **Pages** > **Connect to Git**.
3. Select `kukipratik/elite-hospitality-demo`.
4. Set build command to `npm run build` and output directory to `dist`.
5. Under **Custom Domains**, add `elite.pratiklama.com.np`.
