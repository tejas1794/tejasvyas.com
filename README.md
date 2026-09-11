# tejasvyas.com

Personal website for Tejas Vyas: a landing page for consulting / fractional-CTO /
mentorship inquiries, plus a short research profile.

Static site, no build step: one `index.html`, one `styles.css`, one small
`script.js` (nav highlighting only). Hosted on GitHub Pages.

## Preview locally

From this directory:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765 in a browser.

## Deploying: GitHub Pages + Namecheap DNS

This repo is served by GitHub Pages using the `CNAME` file already in the repo
root (currently set to `www.tejasvyas.com`).

**1. GitHub Pages settings**

- Repo → Settings → Pages → Source: deploy from the `main` branch, root (`/`).
- Custom domain field should match the `CNAME` file (`www.tejasvyas.com`).
- Enable "Enforce HTTPS" once DNS below has propagated and GitHub has issued
  a certificate.

**2. Namecheap DNS records**

In Namecheap → Domain List → tejasvyas.com → Manage → Advanced DNS:

- `CNAME` record: host `www`, value `tejas1794.github.io.`
- Apex domain (`tejasvyas.com`, host `@`) needs four `A` records pointing at
  GitHub Pages' IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

This lets both `tejasvyas.com` and `www.tejasvyas.com` resolve, with GitHub
Pages redirecting to whichever one is set as the canonical `CNAME` value.

DNS changes can take anywhere from a few minutes to 24-48 hours to propagate.

## Structure

- `index.html` — all page content and sections (hero, about, experience,
  research, work with me, contact)
- `styles.css` — all styling, including light/dark mode via
  `prefers-color-scheme`
- `script.js` — minimal vanilla JS (highlights the current section in the nav)
- `CNAME` — custom domain for GitHub Pages

## TODOs left in the site

- `index.html`: the contact email `hello@tejasvyas.com` is a placeholder —
  swap it for the real address (marked with an HTML comment at the contact
  link).
- `index.html`: the LinkedIn link is a placeholder `#` href — the real
  profile URL wasn't available when this was written (also marked with an
  HTML comment).
