// scripts/prerender.mjs
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
// Renders every route to static HTML so search engines and link-preview
// crawlers get full content and per-page meta tags without running JS.
//
//   /                 -> dist/index.html
//   /about            -> dist/about.html          (served at /about via cleanUrls)
//   unknown routes    -> dist/404.html            (served by Vercel with a 404 status)

import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// Keep in sync with the routes in src/App.tsx and public/sitemap.xml.
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];
const NOT_FOUND_ROUTE = "/404";

const { render } = await import(
  path.join(ssrDir, "entry-server.js")
).then((m) => m);

const template = await readFile(path.join(dist, "index.html"), "utf8");

// React 19 emits hoistable tags (<title>, <meta>, <link>) at the start of the
// rendered markup. Move that leading run into <head>, where React expects to
// find them when hydrating.
const HOISTABLE = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/;

function splitHoistables(markup) {
  let head = "";
  let rest = markup;
  for (let m = rest.match(HOISTABLE); m; m = rest.match(HOISTABLE)) {
    head += m[0] + "\n";
    rest = rest.slice(m[0].length);
  }
  return { head, body: rest };
}

function buildPage(url) {
  const { html, head: helmetHead } = render(url);
  const { head, body } = splitHoistables(html);

  if (!/<title>/.test(head)) {
    throw new Error(`Prerender of ${url} produced no <title>`);
  }

  return template
    .replace("<!--app-head-->", helmetHead + head)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function outFile(url) {
  if (url === "/") return "index.html";
  return `${url.slice(1)}.html`;
}

if (!template.includes("<!--app-head-->")) {
  throw new Error("index.html is missing the <!--app-head--> placeholder");
}

for (const url of [...ROUTES, NOT_FOUND_ROUTE]) {
  const file = outFile(url);
  await writeFile(path.join(dist, file), buildPage(url));
  console.log(`prerendered ${url.padEnd(20)} -> dist/${file}`);
}

await rm(ssrDir, { recursive: true, force: true });
