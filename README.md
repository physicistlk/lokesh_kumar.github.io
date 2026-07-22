# Academic website — Lokesh Kumar, PhD

Static personal/academic site for [GitHub Pages](https://pages.github.com/).

## Live site

After enabling Pages, the URL is typically:

- User/org site: `https://USERNAME.github.io/`
- Project site: `https://USERNAME.github.io/cv_website/`

All links are **relative**, so either layout works.

## Structure

```text
cv_website/
├── index.html              # Home / bio
├── research.html           # Research timeline
├── publications.html       # Papers & patents
├── contact.html            # Contact + inquiry form
├── 404.html                # Custom not-found page
├── favicon.svg
├── css/styles.css          # Design system (no Tailwind CDN)
├── js/main.js              # Theme, mobile nav, form, reveal
├── assets/
│   ├── profile.jpg         # Optimized portrait
│   ├── profile-sm.jpg
│   ├── lab.jpg             # Optimized lab image
│   ├── lab-sm.jpg
│   └── Lokesh_Kumar_CV.pdf # Add your CV PDF here
└── luminescent_precision/  # Design tokens (reference)
```

## Deploy on GitHub Pages

1. Create a GitHub repository (e.g. `cv_website` or `USERNAME.github.io`).
2. Push this folder to the default branch (`main`).
3. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` / root (`/`)
4. Wait a minute, then open the published URL.

Optional custom domain: add a `CNAME` file with your domain and configure DNS.

## Before you go live

### 1. Add your CV PDF

Place your real CV at:

```text
assets/Lokesh_Kumar_CV.pdf
```

All **Download CV** buttons already point there.

### 2. Optional: Form backend

The contact form opens the visitor’s mail client (`mailto:`) so it works with pure static hosting.

For server-side delivery without a mail client, use [Formspree](https://formspree.io/) (or similar) and set the form `action` to your endpoint.

### 3. Metrics

Publication DOI links are wired for known papers (Carbon, Chemical Science). Update Scholar metrics on the publications page if you reintroduce citation counts.

## Local preview

```bash
cd cv_website
python3 -m http.server 8080
# open http://localhost:8080
```

## Design

Visual system: **Luminescent Precision** (`luminescent_precision/DESIGN.md`) — dark zinc surfaces, emerald accents, Hanken Grotesk / Inter / JetBrains Mono.
