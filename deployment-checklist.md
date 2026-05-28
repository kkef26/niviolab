# Nivio — Domain Go-Live & Deployment Checklist (task #23)

**This is a user-executed task** — go-live requires DNS + hosting access I don't have. The site is fully deploy-ready (static HTML, all assets self-contained). This checklist gets `niviolab.com` live.

## What we're deploying
The `Nivio GTM/website/` folder is a static site — pure HTML/CSS/JS, no backend, no build step. It can be hosted free on any static host.

```
website/
├── index.html, dispatch.html, marketer.html, bind.html,
│   carrier-shield.html, vet.html, board-room.html
├── og/  (7 PNG share images)
├── robots.txt
├── sitemap.xml
└── shared/ (logos, css)
```
(The `.md` files, `_source-all-variants/`, and `uploaded-design-system/` are working files — do NOT deploy them. Deploy only the HTML, og/, shared/, robots.txt, sitemap.xml.)

## Recommended host
**Cloudflare Pages** or **Netlify** or **Vercel** — all free for a static site, all give automatic HTTPS, global CDN, and instant deploys. Cloudflare Pages is a good default (free, fast, easy custom-domain setup).

## Go-live steps

1. **Create the host project** — sign in to Cloudflare Pages / Netlify, create a new project, upload the cleaned `website/` folder (or connect the GitHub repo if you push it there).
2. **Point the domain** — in your domain registrar, set `niviolab.com` DNS to the host (CNAME/A records the host provides). Add `www.niviolab.com` → redirect to apex.
3. **Verify HTTPS** — confirm the SSL cert provisions and `https://niviolab.com` loads.
4. **Confirm clean URLs** — the canonicals/sitemap use extensionless URLs (`/dispatch`, not `/dispatch.html`). Configure the host to serve `dispatch.html` at `/dispatch` (Cloudflare/Netlify do this automatically for `.html` files, or add a redirect rule). Verify each product URL resolves.
5. **Verify OG images** — confirm `https://niviolab.com/og/dispatch.png` loads (the meta tags reference these absolute URLs).
6. **Submit to Google Search Console** — add + verify the property, submit `https://niviolab.com/sitemap.xml`. (This is what kicks off indexing — SEO can't start until this is done.)
7. **Submit to Bing Webmaster Tools** — same sitemap.

## Pre-launch QA (do before pointing the domain)
- [ ] All 7 pages load and render correctly
- [ ] Every nav link works (Home + 6 products) on every page
- [ ] Every footer link resolves
- [ ] CTA mailto buttons open with the correct per-product subject
- [ ] OG preview renders (test with opengraph.xyz or LinkedIn Post Inspector)
- [ ] Mobile responsive check (D4 collapses to 1 column under 1080px)
- [ ] No console errors

## Post-launch (week 1)
- [ ] Confirm pages indexing in GSC (Coverage report)
- [ ] Watch for crawl errors
- [ ] Once a page shows impressions → trigger programmatic SEO (#22)
- [ ] Transition `admin@nivio-optimize.com` → `admin@niviolab.com` and update the mailto links + footer + schema email site-wide (one find-replace pass when ready)

## Email transition note
All CTAs and schema currently use `admin@nivio-optimize.com` (the live address). When `@niviolab.com` email is set up, it's a single site-wide find-replace to switch — flag me and I'll do it in one pass.
