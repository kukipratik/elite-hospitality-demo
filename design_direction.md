# Elite School of Hospitality Management (ESHM) — 2026 Light Editorial Design System

## 1. Executive Summary & Brand Translation

Elite School of Hospitality Management (ESHM), located at Pipalbot, Old Baneshwor, Kathmandu, is Nepal's leading practical hospitality academy.
In this visual redesign, we replace the previous generic dark card-heavy interface with a **pure light-mode editorial design system** inspired by the contemporary culinary design grammar of **CIB (Culinary Institute of Barcelona)**.

---

## 2. Color System (Sampled Directly from Elite Brand Logo)

Inspecting `public/images/brand/logo.jpg`:
- **Elite Deep Navy (`#0B132B` / `#0A192F`)**: Sampled from the core text and crest in Elite's official logo. Represents academic discipline, professional authority, and fine dining poise. Used for all primary headlines, high-contrast text, dark footer, and deep hairline borders.
- **Elite Flame Orange (`#E85D04` / `#F46036`)**: Sampled from the flame torch element in the logo. Represents culinary heat, high-heat wok cookery, passion, and active interactive triggers. Used for primary CTA borders, accent underlines, active navigation markers, and numeric highlights.
- **Elite Gold / Amber (`#D97706` / `#B45309`)**: Sampled from the gold laurel leaves in the logo. Used for accreditation notes, star ratings, and specialization badges.
- **Micro-Accents (Used Sparingly for Hairline Tags)**:
  - **Elite Emerald (`#059669`)**: Fresh ingredients, sustainability, and WhatsApp indicator.
  - **Elite Magenta / Berry (`#C026D3`)**: Confectionery arts, mixology nuances.
- **Canvas System**:
  - Primary Canvas: `#FFFFFF` (Pure pristine white)
  - Secondary Canvas: `#FAF9F5` (Warm culinary ivory for alternating editorial sections)
  - Dark Accent Section: `#0B132B` (Elite Deep Navy for the closing manifesto and footer only)

---

## 3. Strict Anti-Card Guardrails (Box Budget < 10%)

To eliminate the "AI template" look:
1. **Zero Generic 3-Column Card Grids**: Statistics, verified metrics, practical pillars, and testimonials must NOT be wrapped in rounded gray/dark cards.
2. **Typography Lives on the Canvas**: Text, numbers, and quotations sit directly on `#FFFFFF` or `#FAF9F5` with generous whitespace.
3. **Editorial Dividers & Hairlines**: Sections and items are separated by `1px solid rgba(11, 19, 43, 0.08)` or subtle indentations, not bulky 16px-padded box containers.
4. **Asymmetric Documentary Collages**: Photos are framed with stepped heights, contrasting landscape/portrait orientations, and offset hairline accent frames rather than uniform rounded rectangles.
5. **Architectural Rectangular Buttons**:
   - `padding: 14px 28px;`
   - `border: 1.5px solid var(--color-orange);`
   - `border-radius: 2px;` (architectural, not pill-shaped)
   - Clean, confident typography with subtle hover fill.

---

## 4. Typography Scale & Pairing

- **Display Grotesque**: `Plus Jakarta Sans` (Google Font)
  - Weights: `800`, `900`
  - Tracking: `-0.035em`
  - Leading: `1.02` – `1.08`
  - Usage: Statement headlines, massive numbers, uppercase category labels
- **Editorial Serif**: `Playfair Display` (Google Font)
  - Weights: `400`, `600`, `700` (including italic)
  - Tracking: normal / `-0.01em`
  - Line-height: `1.2` – `1.35`
  - Usage: Pull-quotes, narrative intros, philosophy manifestos, testimonial quotes
- **Body Sans**: `Plus Jakarta Sans`
  - Weights: `400` (regular), `500` (medium), `600` (semi-bold)
  - Line-height: `1.65`
  - Color: `#334155` (Slate 700) on white for effortless reading
- **Micro / Data Monospace**: `JetBrains Mono`
  - Weights: `500`, `700`
  - Usage: Course metadata, intake dates, coordinates, kitchen metrics

---

## 5. Verified Facts & Scope Corrections (Strict Safeguards)

- **Kitchen Practicals**: "More than 60 days nonstop commercial kitchen practical" (VERIFIED)
- **Menu Executions**: "Extra Ten 4-course menus for DCA" (VERIFIED)
- **Internships**: "3 to 6 months Internship in Nepal: Hotel, Resort & Fine Dining Restaurant" (VERIFIED). **Strictly REMOVED: "guaranteed"**.
- **Accreditations**: **Strictly REMOVED: "Affiliated & Industry Recognized"**. We refer only to real certifications: "ODC & Banqueting Certificate" and institutional skill sessions with Janapremi College & The Times International College.
- **Location**: Pipalbot, Old Baneshwor, Devkota Sadak, Kathmandu (VERIFIED)
- **Contact & Admissions**: Phone `01-4471162`, Mobile/WhatsApp `+977 984-3338838` (VERIFIED)
- **Proof Metrics**: Google 4.7★ across 74 reviews (89% 5-star), Facebook 7.1K+ followers with 100% recommendation score (VERIFIED).
