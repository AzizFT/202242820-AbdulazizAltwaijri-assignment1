# Technical Documentation (Assignment 1)

## Project Overview
This project is a responsive personal portfolio website built with HTML, CSS, and JavaScript. It includes sections for About, Projects, and Contact, and basic interactivity.

## Features
- Responsive layout (desktop/tablet/mobile)
- Sticky header navigation
- Mobile hamburger menu
- Smooth scrolling between sections
- Light/Dark theme toggle (saved in localStorage)
- Contact form validation + success message (no backend)

## File Structure
- `index.html`: main page structure and sections
- `css/styles.css`: styling + responsive breakpoints
- `js/script.js`: interactivity (theme, smooth scroll, form)
- `docs/ai-usage-report.md`: AI tool usage report
- `docs/technical-documentation.md`: this document

## How to Run Locally
1. Download/clone the repository.
2. Open `index.html` in your browser.

## Responsiveness Testing
Tested using Chrome DevTools:
- Mobile widths (e.g., 390px)
- Tablet widths (e.g., 768px)
- Desktop (1024px+)

## JavaScript Notes
- Theme is stored in `localStorage` under key `theme`.
- Smooth scrolling uses `scrollIntoView({ behavior: "smooth" })`.
- Form validation checks empty fields and basic email format.
