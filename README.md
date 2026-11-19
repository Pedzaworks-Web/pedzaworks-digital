# Pedzaworks Digital Solutions — Website

The marketing website for [Pedzaworks Digital Solutions Private Limited](https://www.pedzaworks.com), a software-first engineering company in Harare, Zimbabwe. Pedzaworks builds operational software systems, workflow automation, business platforms, websites, and IoT and connected infrastructure.

## Tech Stack

- **React 19** and **TypeScript**
- **Vite** for the dev server and builds
- **React Router** for client-side routing
- **react-helmet-async** for per-page SEO metadata and JSON-LD schema
- **GSAP** for animations
- **lucide-react** and **react-icons** for icons
- **Vercel** for hosting

## Getting Started

You need Node.js 20 or later and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
```

### Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with hot reload        |
| `npm run build`   | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally               |
| `npm run lint`    | Run ESLint                                       |

## Project Structure

```
public/                 Static assets (favicons, manifest, robots.txt, sitemap.xml, images)
src/
  assets/               Images imported by components
  lib/                  Helpers (enquiry email)
  components/           Shared UI: Navbar, Footer, SEO, LegalPage, home page sections
    styles/             Navbar and footer stylesheets
  pages/                Route-level pages
  App.tsx               Router and route definitions
  main.tsx              App entry point
  index.css             Global design tokens (--pw-*) and base styles
index.html              HTML shell with site-wide meta tags and schema
vercel.json             SPA rewrite so all routes serve index.html
```

## Routes

| Path                | Page                             |
| ------------------- | -------------------------------- |
| `/`                 | Home                             |
| `/about`            | About                            |
| `/services`         | Services                         |
| `/industries`       | Industries                       |
| `/contact`          | Contact and project inquiry form |
| `/privacy-policy`   | Privacy Policy                   |
| `/terms-of-service` | Terms of Service                 |
| any other path      | 404 Not Found                    |

To add a page, create it in `src/pages/`, register it in `src/App.tsx`, add an `<SEO />` block with its title, description, and canonical URL, and add the URL to `public/sitemap.xml`.

## Styling

Design tokens such as colours, radii, shadows, and spacing are CSS custom properties prefixed `--pw-` in `src/index.css`. Pages keep their component-scoped styles in a `<style>` block, using BEM-style class names like `.pw-contact__heading`. Fonts are Montserrat, DM Sans, and DM Mono, loaded from Google Fonts in `index.html`.

## SEO

Each page renders `src/components/SEO.tsx`, which sets the title, description, canonical URL, Open Graph and Twitter tags, and optional JSON-LD schema. Site-wide organisation schema is in `index.html`. Keep `public/sitemap.xml` and `public/robots.txt` in sync when you add or remove routes.

## Legal Pages

The Privacy Policy (`src/pages/PrivacyPolicy.tsx`) and Terms of Service (`src/pages/TermsOfService.tsx`) share the layout in `src/components/LegalPage.tsx`. Each page's content is a list of sections, so you can edit it without touching the layout. When you change either policy, also update its `lastUpdated` date.

## Forms

The contact form and the demo request form don't have a backend. When someone submits one, `src/lib/enquiry.ts` opens their email app with a pre-filled message to admin@pedzaworks.com. To send submissions straight to an inbox instead, connect `openEnquiryEmail` to a form or email service, and add that service to the Privacy Policy. Do the same if you add analytics.

## Deployment

The site deploys to Vercel. `vercel.json` rewrites every path to `index.html` so client-side routes work on refresh and direct links. Production builds go to `dist/`.

## Contact

admin@pedzaworks.com · +263 71 871 9892 · Harare, Zimbabwe

© Pedzaworks Digital Solutions Private Limited. All rights reserved.
