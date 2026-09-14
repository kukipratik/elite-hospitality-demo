# CIB (Culinary Institute of Barcelona) — Visual Architecture Audit & Grammar

This document breaks down the design grammar, spatial architecture, typography, and visual rules of [CIB (Culinary Institute of Barcelona)](https://cib.education/en/), directly inspected and analyzed via browser devtools.

---

## 1. Core Visual Philosophy

CIB does **NOT** look like a generic academic portal or a corporate SaaS website.
It feels like a contemporary culinary arts manifesto:
- **Pure White / Warm White Canvas**: Background is `#FFFFFF` and subtle warm ivory `#FAF9F5`. No dark mode look.
- **Strict Box Budget (<10-15%)**: Content does not sit inside rounded rectangular cards. Content lives directly on the white canvas with generous editorial whitespace.
- **High-Contrast Grotesque + Serif Pairing**: Huge, tight, punchy grotesque headlines paired with elegant, high-contrast serif narrative text.
- **Asymmetric Documentary Imagery**: Stepped photo collages (portrait + landscape pairings), offset hairlines, and authentic unposed documentary moments rather than sterile corporate stock.
- **Unboxed Metrics & Quotations**: Statistics (`1300+`, `100+`, `70%`) sit directly on the whitespace with zero card wrappers, accompanied by oversized subtle watermark quotes (`“ ”`).
- **Intent-Based Discovery**: Programs are organized around what the student wants to achieve (*"Choose your path: I want to start / I want to specialize / I want to lead"*), presented as horizontal editorial strips with left-accent indicators and subtle hover arrows.
- **Architectural Buttons**: Rectangular buttons with sharp or 2px micro-radii, hairline borders (`1.5px solid`), and clean typography. Zero generic bubble pills.

---

## 2. Quantitative System Specs (Computed from CIB Inspection)

### A. Color Palette
| Token | Computed Hex / Value | Role in CIB | Elite Translation |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#FFFFFF` | Primary background across 90%+ of sections | `#FFFFFF` pure white |
| **Warm Canvas** | `#FAF9F5` / `#F8F6F0` | Subtle alternating band for editorial calm | `#FAF9F5` warm ivory |
| **Primary Text** | `#111827` / `#0A1128` | Deep high-contrast ink black/navy | `#0B132B` (Elite Deep Navy sampled from logo) |
| **Muted Text** | `#6B7280` / `#64748B` | Secondary descriptions, timestamps | `#5A6270` neutral slate |
| **Primary Accent** | `#FF4A00` / `#FF5500` | Energy, culinary flame, line accents | `#E85D04` (Elite Flame Orange sampled from logo) |
| **Hairline Border**| `rgba(0, 0, 0, 0.08)` / `#E5E7EB` | Hairline dividers, subtle framing | `rgba(11, 19, 43, 0.08)` / `#E2E8F0` |
| **Accent Border** | `1.5px solid #FF4A00` | Architectural button borders, active tabs | `1.5px solid #E85D04` |

### B. Typography Hierarchy
| Role | CIB Spec | Elite Implementation | Details |
| :--- | :--- | :--- | :--- |
| **Statement Headlines** | `MyriadPro`, 800/900 weight, -0.03em tracking | `Plus Jakarta Sans`, 800/900 weight, -0.035em tracking | Massive scale (`clamp(2.75rem, 6vw, 5.25rem)`), uppercase or punchy sentence case, leading `1.02` |
| **Editorial Narrative** | `kepler-std`, serif, italic/regular, 1.1 line-height | `Playfair Display`, serif, italic/regular | 22px–30px scale for manifesto pull-quotes, intro paragraphs, and storytelling |
| **Body & UI** | Clean sans-serif, 16px/1.6 | `Plus Jakarta Sans`, 400/500/600, 16px–18px, 1.6 line-height | High legibility, neutral gray-black |
| **Micro Labels** | Monospace / Grotesque uppercase, 11px-13px, tracking +0.1em | `JetBrains Mono` / `Plus Jakarta Sans` 700 uppercase | Category tags, proof coordinates, intake dates |

### C. Layout Architecture & Whitespace
- **Vertical Spacing**: Section padding is `clamp(5rem, 8vw, 8.5rem)` (80px to 140px). The content breathes expansively.
- **Max Width**: Container spans `1360px` to `1480px`, giving a widescreen magazine editorial feel.
- **Grid Structure**: High-contrast 2-column asymmetric layouts (e.g. 55% headline & narrative left, 45% stepped documentary photo collage right).
- **Zero Card Grids**: Sections like Statistics, Practical Pillars, and Testimonials avoid 3-column rounded boxes entirely.

---

## 3. Section-by-Section Translation for Elite

| CIB Pattern | Elite Implementation |
| :--- | :--- |
| **CIB Hero**: Massive `#cooking tomorrow` display headline + editorial paragraph + stepped 2-photo collage of real students | **Elite Hero**: Massive `CRAFT THE FUTURE OF HOSPITALITY` statement headline + Playfair serif narrative + stepped authentic 2-photo collage (Elite chef searing pan + student plating 4-course menu) + hairline dual CTAs |
| **CIB Statistics**: `1300+`, `100+`, `70%` directly on white background with faint watermark quotes | **Elite Proof Manifesto**: Large unboxed numbers: `60+` Days Practical, `10` Four-Course Menus, `4.7★` Google Rating (74 Reviews), `3–6` Months Internship |
| **CIB Choose Your Path**: Categorized by student intent ("I want to start", "I want to specialize", "I want to lead") with clean rows and hover image reveal | **Elite Program Discovery**: "CHOOSE YOUR DISCIPLINE" — 3 intent tracks: *Professional Diplomas (DCA, DHM)*, *Beverage & Barista Studio*, *Artisan Specializations (Bakery, Sushi, Chocolate)* |
| **CIB Methodology**: Two-column layout with offset photo frame, highlighting real commercial kitchen vs lecture halls | **Elite Kitchen Reality**: "Not A Lecture Hall. A Working Kitchen." — 60+ days nonstop cooking, knife drills, mother sauces, ODC catering |
| **CIB Campus / Space**: Architectural imagery, workshop atmosphere | **Elite Pipalbot Campus**: Devkota Sadak, Old Baneshwor — real kitchen station, neon Elite Bar, barista espresso machines |
| **CIB Testimonials**: Typographic quotes with student names and career paths, no card borders | **Elite Student Stories**: Authentic Google 5-star student reviews set as large serif quotes on ivory canvas |

---

## 4. Deep Inspection: CIB `/campus` & `/presentation`

### A. CIB Campus (`https://cib.education/en/campus`)
- **Headline Architecture**: Massive grotesque title `CIB Creative hub` with primary accent color on the final word (`hub` in `#FF4A00`), followed by a 1-line mission statement.
- **Hero Image Framing**: Huge un-cropped group documentary photograph of students celebrating together in the central atrium.
- **Interactive Sticky Helper**: Floating minimal white card (`Hey! Talk with us. Talk with Marina`) positioned unobtrusively on the bottom right of the hero media.
- **Section Dividers**: Thin hairline tabs (`The space | Where we are`) acting as clean section anchors without bulky pill containers.

### B. CIB Presentation (`https://cib.education/en/presentation`)
- **Cinematic Opener**: Full-width documentary video cover with centered high-contrast serif typography (`CUESTIÓN DE FUTURO`) and a sleek circular play trigger.
- **The Watermark Manifesto**: Giant quotation marks `“ ”` in subtle 4% gray watermark behind the core institution objective:
  *"The objective of the school is to teach people to build their own future"*.
- **Executive & Chef Leadership Spread**: High-contrast two-column split featuring founders/chefs in commercial whites and dark suits, paired with clean typography and sharp rectangular button (`Professional culinary courses`).

