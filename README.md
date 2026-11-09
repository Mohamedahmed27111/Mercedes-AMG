# Mercedes-AMG PETRONAS F1 — Fan Reference Project

A fully responsive, animated landing page built as a **front-end design practice project**, using the Mercedes-AMG PETRONAS Formula One Team as a reference.

> **Disclaimer:** This is an unofficial fan-made project created purely for design and development learning purposes. All Mercedes-AMG, PETRONAS, and Formula One trademarks, logos, images, and brand assets belong to their respective owners. This project is not affiliated with, endorsed by, or connected to the Mercedes-AMG PETRONAS Formula One Team, Mercedes-Benz Group AG, PETRONAS, or the Formula One group in any way.

---

## Purpose

Practice project focused on:

- Editorial UI layout and typographic hierarchy
- Scroll-driven animations without heavy libraries
- Responsive design across mobile, tablet, and desktop
- Real-world data presentation (stats, timelines, specs)

The content — team history, driver profiles, car specifications, partner names — is based on publicly available information from the official Mercedes-AMG PETRONAS F1 website and Formula 1 media. Images are used here for portfolio demonstration only and are the property of their respective rights holders.

---

## Stack

- React 19
- SCSS (custom, no UI framework)
- AOS (Animate On Scroll) for entrance animations
- Intersection Observer API for scroll-triggered counters and reveals

---

## Running locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Produces an optimised production bundle in `/build`.

---

## Project structure

```
src/
  App.jsx          — page shell and all sections
  data.js          — all content (drivers, specs, stats, timeline)
  Counter.jsx      — scroll-triggered count-up component
  hooks.js         — useReveal and useScrollEffects hooks
  main.scss        — base styles, layout, components
  media.scss       — responsive breakpoints
  variables.scss   — design tokens
  assets/imgs/     — background and driver images
```

---

*Fan-made portfolio project. Not affiliated with the Mercedes-AMG PETRONAS Formula One Team.*
