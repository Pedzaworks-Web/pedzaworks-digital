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
  App.tsx               Route definitions
  main.tsx              Browser entry (hydrates prerendered HTML)
  entry-server.tsx      Build-time render entry used by the prerender script
  index.css             Global design tokens (--pw-*) and base styles
scripts/prerender.mjs   Renders every route to static HTML after the build
index.html              HTML shell with site-wide schema and the <!--app-head--> placeholder
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

The site is a React single-page app, but every route is **prerendered to static HTML at build time**. Search engines and link-preview bots (WhatsApp, LinkedIn, X) get the full page content and per-page meta tags without running JavaScript. In the browser, React then takes over the prerendered HTML ("hydration") and the site runs as a normal SPA.

How the build works (`npm run build`):

1. `vite build` builds the client app into `dist/`.
2. `vite build --ssr src/entry-server.tsx` builds a server version of the app into `dist-ssr/`.
3. `scripts/prerender.mjs` renders each route to `dist/<route>.html`, moves each page's `<title>`, `<meta>` and `<link>` tags into `<head>` at the `<!--app-head-->` placeholder in `index.html`, and writes `dist/404.html`.

Page metadata comes from `src/components/SEO.tsx`. Each page sets its title, description, canonical URL, keywords and optional JSON-LD schema there. Titles get a `| Pedzaworks` suffix unless they already contain the brand name. Site-wide structured data (WebSite and Organization/ProfessionalService with address, phone and email) is in `index.html`.

Don't put page-specific tags such as the title, description or canonical link in `index.html`. They would be duplicated on every page.

When you add, remove or rename a route, update all three of:

- `src/App.tsx` (the route)
- `scripts/prerender.mjs` (`ROUTES`)
- `public/sitemap.xml` (and update `<lastmod>` when a page's content changes)

Other SEO details:

- `public/robots.txt` allows all crawlers and points to the sitemap.
- Each page has exactly one `<h1>`.
- The 404 page is `noindex`, and Vercel serves it with a real 404 status.
- `/privacy` and `/terms` permanently redirect to `/privacy-policy` and `/terms-of-service`.

### After going live

1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.pedzaworks.com/sitemap.xml`.
2. Create a [Google Business Profile](https://www.google.com/business/) for Harare with the same name, phone and website. This is the biggest driver of local search results.
3. Check pages with the [Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/).

## Legal Pages

The Privacy Policy (`src/pages/PrivacyPolicy.tsx`) and Terms of Service (`src/pages/TermsOfService.tsx`) share the layout in `src/components/LegalPage.tsx`. Each page's content is a list of sections, so you can edit it without touching the layout. When you change either policy, also update its `lastUpdated` date.

## Forms

The contact form and the demo request form don't have a backend. When someone submits one, `src/lib/enquiry.ts` opens their email app with a pre-filled message to admin@pedzaworks.com. To send submissions straight to an inbox instead, connect `openEnquiryEmail` to a form or email service, and add that service to the Privacy Policy. Do the same if you add analytics.

## Deployment

The site deploys to Vercel with the default settings: build command `npm run build`, output directory `dist`. `vercel.json` does the following:

- turns on `cleanUrls`, so `/about` serves `about.html`
- adds the legacy redirects
- sets long-term caching for hashed files in `/assets`
- adds basic security headers

Unknown paths get `404.html` with a 404 status.

## Contact

admin@pedzaworks.com · +263 71 871 9892 · Harare, Zimbabwe

© Pedzaworks Digital Solutions Private Limited. All rights reserved.
