# Asset Tracker
## Last updated: May 2026

Files needed across all three case studies. Drop into `/public/` at the paths listed. Portfolio auto-picks up files — no code changes needed unless the path in MDX differs.

---

## MathWorks — MATLAB Plot Viewer

**Folder:** `public/work/matlab/`

| Status | File | Notes |
|--------|------|-------|
| ✅ | `00-hero-original.png` | Transparent bg PNG. Used as fade hero with `#f3f3f3` background. |
| ✅ | `02-problem-statement.mp4` | Problem chapter video |
| ✅ | `03-tab-tile-before.mp4` | Original broken UX |
| ✅ | `04-benchmarking.mp4` | playbackRate=0.4, cropTop/Bottom=33, fadeEdges — logos marquee |
| ✅ | `05-impact-effort-matrix.mp4` | size="md" — priority matrix animation |
| ✅ | `06-context-menu-redesign.mp4` | Main after video |
| ✅ | `07-feature-tiled-view.png` | Used as video poster |
| ✅ | `08-feature-global-actions.png` | Feature detail |
| ✅ | `09-feature-local-actions.png` | Feature detail |
| ✅ | `10-feature-cleanup.png` | Red boxes on removed items — strongest single image |

**Page background color:** `#fafaf7` — use this if regenerating any videos to match background.

---

## Deloitte — Data Collection Framework

**Folder:** `public/work/dcf/`

| Status | File | Notes |
|--------|------|-------|
| ❌ | `hero.jpg` or `hero.png` | Multi-device mockup (desktop + tablet + mobile showing the form) |
| ❌ | `rendered-form.jpg` | The actual DCF form screenshot (the child welfare intake form) |

**Nice to have:**
- `config-screen.jpg` — form builder/configuration interface
- Any video showing the form in action

---

## Apple — Internal Tools

No assets required. NDA work — case study uses `<Walkthrough />` CTA only.

---

## Homepage

| Status | File | Notes |
|--------|------|-------|
| ❌ | `resume.pdf` → `/public/resume.pdf` | Resume button in header + footer links to 404 |

---

## Homepage work tile covers

| Status | Project | Path | Notes |
|--------|---------|------|-------|
| ✅ | MathWorks | `/work/matlab/00-hero-original.png` | Already set |
| ❌ | Apple | — | Currently gradient placeholder — needs a strong product/system screenshot |
| ❌ | Deloitte | — | Currently gradient placeholder — can use DCF hero once it exists |

---

## About

| Status | File | Notes |
|--------|------|-------|
| ✅ | `/public/about/portrait.png` | Piyush with black cat — warm, candid. Do NOT convert to grayscale. |

---

## Config items (not files)

| Status | Item | Location |
|--------|------|----------|
| ❌ | Real domain for metadataBase | `app/layout.tsx` line ~28 — update before deployment |
| ❌ | OG image | Not set up — blank card on social sharing |
| ✅ | Email | `piyushmodi01@gmail.com` — updated everywhere |
| ✅ | LinkedIn | `https://www.linkedin.com/in/piyushmodi01/` |
| ✅ | GitHub | Hidden from footer |
