# 🚗 LD Car Travels — Premium Marketing Website

A premium, agency-grade single-page marketing website built for **LD Car Travels**, Nellore's most trusted and highest-rated cab service. This website features a soft light theme, asymmetric layouts, and deep integrations to deliver an outstanding user experience.

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Design & Styling System](#-design--styling-system)
3. [Interactive Component Hierarchy](#-interactive-component-hierarchy)
4. [Project Structure](#-project-structure)
5. [Fleet Catalog Reference](#-fleet-catalog-reference)
6. [Frequently Booked Routes](#-frequently-booked-routes)
7. [Tech Stack](#-tech-stack)
8. [Getting Started & Build Commands](#-getting-started--build-commands)

---

## 🚗 Project Overview

This website has been redesigned from the ground up to reflect a premium, luxury travel agency service. Moving away from standard dark-mode UI templates, it embraces a high-end editorial feel with the following features:
* **Spacious Background Hero:** A full-screen above-the-fold hero section utilizing `Herobg.png` as a full background with a custom white wash overlay gradient to ensure 100% text readability.
* **Alternating Layout Alignments:** Alternating left and right section alignments (e.g., left-aligned Services, right-aligned Fleet and Why Choose Us) to create visual rhythm and a premium editorial layout.
* **Complete Local Vehicle Catalog:** A fully functional vehicles catalog containing local assets, removing any dependency on external Unsplash URLs.
* **Responsive Layouts:** Precise media query breakpoints that center content on mobile viewports (<= 576px) and preserve standard left/right alignments on tablet and desktop screens.
* **WhatsApp Booking Integration:** Booking form generates custom pre-formatted text and redirects the customer directly to WhatsApp for instant confirmation.

---

## 🎨 Theme & Styling System

The website runs on a custom **Trust Navy & Champagne Gold** soft theme defined in [index.css](file:///d:/vibecoding/LD/src/index.css):

### 1. Palette Colors & Variables
* **Cool Base Background (`--dark-950`):** `#F8FAFC` (Slate-White)
* **Secondary Background (`--dark-900`):** `#F1F5F9` (Soft Slate)
* **Headings (`--dark-200`):** `#0F172A` (Deep Slate Navy)
* **Body Text (`--dark-300` / `--dark-400`):** `#334155` / `#475569`
* **Luxury Accent (`--gold-500`):** `#B89252` (Champagne Gold)
* **Accent Gold Range:** `#FFFDF5` to `#7C5C26`

### 2. Gradient Schemes
* **Primary Elements Gradient (`--gradient-primary`):** `linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)` (Trust Navy)
* **Luxury Accents Gradient (`--gradient-gold`):** `linear-gradient(135deg, #B89252 0%, #9C7738 100%)` (Champagne Gold)
* **Glass Cards Gradient (`--gradient-glass`):** `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%)`

### 3. Typography
* **Display Fonts (`--font-display`):** `Outfit`, sans-serif
* **Body Fonts (`--font-body`):** `Inter`, sans-serif
* **Regional/Telugu Fonts (`--font-telugu`):** `Noto Sans Telugu`, sans-serif

---

## 📂 Project Structure

Below is the structured layout of the application files. Click any file link to view or modify its contents:

* **Core Structure & Configuration:**
  * [index.html](file:///d:/vibecoding/LD/index.html) — Main HTML file containing Google fonts, favicon links, and root wrapper.
  * [package.json](file:///d:/vibecoding/LD/package.json) — Defines dependencies and dev/build script aliases.
  * [vite.config.js](file:///d:/vibecoding/LD/vite.config.js) — Configuration settings for the Vite build system.
  * [eslint.config.js](file:///d:/vibecoding/LD/eslint.config.js) — Linting system configurations.
* **Source Styles & Assets:**
  * [index.css](file:///d:/vibecoding/LD/src/index.css) — Core reset, typography, global variables, utility classes, and custom keyframe animations.
* **Application Assembly:**
  * [App.jsx](file:///d:/vibecoding/LD/src/App.jsx) — Assembles all section components together.
  * [main.jsx](file:///d:/vibecoding/LD/src/main.jsx) — Application entry point.
* **Modular UI Components:**
  * [Navbar.jsx](file:///d:/vibecoding/LD/src/components/Navbar.jsx) / [Navbar.css](file:///d:/vibecoding/LD/src/components/Navbar.css) — Navigation bar featuring a sticky top state with custom transparency changes on scroll.
  * [Hero.jsx](file:///d:/vibecoding/LD/src/components/Hero.jsx) / [Hero.css](file:///d:/vibecoding/LD/src/components/Hero.css) — Spacious left-aligned background covers, custom transparent gold wash overlays.
  * [Services.jsx](file:///d:/vibecoding/LD/src/components/Services.jsx) / [Services.css](file:///d:/vibecoding/LD/src/components/Services.css) — Left-aligned listing of local & outstation transit services.
  * [Fleet.jsx](file:///d:/vibecoding/LD/src/components/Fleet.jsx) / [Fleet.css](file:///d:/vibecoding/LD/src/components/Fleet.css) — Right-aligned car catalog grid featuring live filter tabs.
  * [Routes.jsx](file:///d:/vibecoding/LD/src/components/Routes.jsx) / [Routes.css](file:///d:/vibecoding/LD/src/components/Routes.css) — Left-aligned display card grid of popular booked routes.
  * [WhyChooseUs.jsx](file:///d:/vibecoding/LD/src/components/WhyChooseUs.jsx) / [WhyChooseUs.css](file:///d:/vibecoding/LD/src/components/WhyChooseUs.css) — Right-aligned layout summarizing values, reliability, and security metrics.
  * [Reviews.jsx](file:///d:/vibecoding/LD/src/components/Reviews.jsx) / [Reviews.css](file:///d:/vibecoding/LD/src/components/Reviews.css) — Carousel displaying Google customer testimonials and star counts.
  * [Contact.jsx](file:///d:/vibecoding/LD/src/components/Contact.jsx) / [Contact.css](file:///d:/vibecoding/LD/src/components/Contact.css) — Interactive booking request form with live link generators to WhatsApp.
  * [Footer.jsx](file:///d:/vibecoding/LD/src/components/Footer.jsx) / [Footer.css](file:///d:/vibecoding/LD/src/components/Footer.css) — Navy anchor footer containing sitemap details and address indicators.
  * [FloatingButtons.jsx](file:///d:/vibecoding/LD/src/components/FloatingButtons.jsx) / [FloatingButtons.css](file:///d:/vibecoding/LD/src/components/FloatingButtons.css) — Fixed, responsive float overlays enabling quick call or chat behaviors.

---

## 🚗 Fleet Catalog Reference

The vehicle fleet is configured in [Fleet.jsx](file:///d:/vibecoding/LD/src/components/Fleet.jsx) with local asset mappings:

| Vehicle Name | Type | Seats | AC | Luggage | Ideal For | Price | Popular? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Swift Dzire** | Sedan | 4 Passengers | AC | 2 Bags | City & Short Trips | ₹11/km | No |
| **Toyota Etios** | Sedan | 4 Passengers | AC | 3 Bags | Outstation Trips | ₹12/km | Yes |
| **Toyota Innova** | MUV | 6-7 Passengers | AC | 4 Bags | Family & Group Travel | ₹16/km | Yes |
| **Innova Crysta** | Premium MUV | 6-7 Passengers | AC | 4 Bags | Premium Travel | ₹18/km | No |
| **Ertiga** | MPV | 6 Passengers | AC | 3 Bags | Small Groups | ₹13/km | No |
| **Tempo Traveller** | Mini Bus | 12-16 Passengers | AC/Non-AC | 8+ Bags | Large Groups & Tours | ₹22/km | No |

---

## 🛣️ Frequently Booked Routes

The most popular transit routes are configured in [Routes.jsx](file:///d:/vibecoding/LD/src/components/Routes.jsx) with transparent starting prices:

| From | To | Distance | Est. Duration | Starting Fare |
| :--- | :--- | :--- | :--- | :--- |
| Nellore | **Tirupati** | 175 km | 3 hours | **₹2,500** |
| Nellore | **Chennai** | 180 km | 3.5 hours | **₹2,800** |
| Nellore | **Hyderabad** | 460 km | 7 hours | **₹6,500** |
| Nellore | **Vijayawada** | 280 km | 4.5 hours | **₹3,800** |
| Nellore | **Ongole** | 130 km | 2.5 hours | **₹1,800** |
| Nellore | **Srisailam** | 340 km | 6 hours | **₹4,800** |
| Nellore | **Bangalore** | 380 km | 6 hours | **₹5,500** |
| Nellore | **Guntur** | 240 km | 4 hours | **₹3,200** |

---

## 🛠️ Tech Stack

* **React (v19.2):** Modular UI state management.
* **Vite (v8.0):** Ultra-fast compilation and HMR server.
* **Vanilla CSS Variables:** Responsive styling tokens and fluid layouts.
* **Google Fonts API:** Beautiful, legible typefaces (`Outfit`, `Inter`, `Noto Sans Telugu`).
* **HTML5 Semantic Elements:** SEO-optimized page structures.

---

## 🚀 Getting Started & Build Commands

### Prerequisites
* **Node.js** v16.0.0 or higher is recommended.

### Installation
Run the following command in the project root directory to install required dependencies:
```bash
npm install
```

### Running Locally
To launch the hot-reloading development server:
```bash
npm run dev
```
By default, the application will be hosted at `http://localhost:5173/`.

### Production Build
To generate the production bundle:
```bash
npm run build
```
Vite will compile the code into static files in the `/dist` folder. You can test the production build locally with:
```bash
npm run preview
```
