# DFMEA Website — Project Summary

## Overview

A React-based marketing/company website for a software development firm. Built as a single-page application showcasing services, collaboration process, and partnership models. The project name "dfmea-website" appears to be the internal project identifier.

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19.2.0 |
| Vite | 8.0.0-beta |
| TypeScript | 5.9.x (config only, JSX files used) |
| SASS/SCSS | 1.97.x |
| react-icons | 5.6.0 |
| ESLint | 9.x |

- **Build**: `npm run build` (tsc + vite build)
- **Dev server**: `npm run dev`

## Project Structure

```
src/
├── App.jsx                          # Root component — mounts Navbar + Home
├── main.jsx                         # Entry point
├── index.css / App.css              # Global styles
├── pages/
│   └── home.jsx                     # Home page — composes all sections
├── assets/
│   └── download.jpeg, react.svg
└── Components/
    ├── NavbarSection/
    │   ├── navbar.jsx               # Sticky navbar with scroll detection
    │   └── navbar.scss
    ├── HeroSection/
    │   ├── heroSection.jsx          # Full-screen hero with headline + overlay
    │   └── heroSection.scss
    ├── ServiceSection/
    │   ├── serviceSection.jsx       # 8-service grid (Mobile, eCommerce, Cloud, Web, IoT, etc.)
    │   └── serviceSection.scss
    ├── CollaborationSection/
    │   ├── CollaborationSection.jsx # 4-step onboarding process cards
    │   └── CollaborationSection.scss
    └── PartnershipModels/
        ├── PartnershipModels.jsx    # 3 partnership models with icons (react-icons)
        └── PartnershipModels.scss
```

## Page Layout (Home)

1. **Navbar** — Transparent by default, turns white after 80px scroll. Links: WHO WE ARE, SERVICES, TECHNOLOGY, INDUSTRIES, WORK, RESOURCES. CTA: "REQUEST A QUOTE".
2. **HeroSection** — Full-screen section with overlay. Headline: "CLIENT-CENTRIC INNOVATIVE MOBILE & WEB SOLUTIONS".
3. **ServicesSection** — Grid of 8 service cards: Integrated Services (highlight), Mobile & Wearables, eCommerce Development, Cloud Computing, Web Development, App Prototype & Strategy, Offshore Staffing, IoT.
4. **CollaborationSection** — 4 cards: Understand Our Clients, Project Estimates, Strategic Partnership, Working Together (CTA).
5. **PartnershipModels** — Timeline with 3 models: Fixed Price Project, Hosted Team Extension, Dedicated Team Model. Uses `FaFileAlt`, `FaUserTie`, `FaUsers` from react-icons.

## Notes

- No routing library (React Router) — currently single-page only.
- Nav links are static `<li>` elements, not anchored or routed yet.
- A services background image (`services-bg.jpg`) is commented out in serviceSection.jsx.
- TypeScript is in devDependencies but source files use `.jsx` (not `.tsx`).
