# Asset Tracker

Files needed across all three case studies. Drop into `/public/` at the paths listed. The portfolio will show a placeholder until the file exists — no code changes needed when you add an asset, just drop it in.

---

## MathWorks — MATLAB Plot Viewer

**Folder:** `public/work/matlab/`

| Status | File | What it shows | Used in |
|--------|------|---------------|---------|
| ✅ Done | `hero.avif` | Laptop with multiple floating plot windows | Cover hero |
| ⬜ Missing | `problem.mp4` | Running code → plots stack on each other → user drags and arranges them manually | Moment — Act 1 |
| ⬜ Missing | `benchmarking.gif` | Logos drifting right to left — tools studied during competitive research | Moment — Act 2 |
| ⬜ Missing | `priority-matrix.mp4` | Impact-Effort Matrix animation showing what to fix first | Moment — Act 3 |
| ⬜ Missing | `tabbed-view.mp4` | The new Tab View — all plots in one window as tabs | Moment — Act 3 |
| ⬜ Missing | `tile-switch.mp4` | Cursor → 3-dot menu → one click → tile view | Moment — Act 3 |

**Notes:**
- Videos autoplay when scrolled into view, pause when scrolled out. Muted + loop. No controls shown.
- `benchmarking.gif` autoplays as a standard animated GIF — no extra setup.
- Recommended format: `.mp4` (H.264), max 1920×1200, under 10MB each for fast load.

---

## Deloitte — Data Collection Framework

**Folder:** `public/work/dcf/`

| Status | File | What it shows | Used in |
|--------|------|---------------|---------|
| ⬜ Missing | `hero.jpg` / `hero.avif` | Multi-device mockup — desktop + tablet + mobile showing the form | Cover hero |
| ⬜ Missing | `rendered-form.jpg` | The citizen-facing rendered form with left panel navigation | Moment — Act 3 |

**Nice to have (not currently in MDX but worth having):**
- `config-screen.jpg` — the form configuration interface
- `conditional-logic.jpg` — conditional visibility feature in action
- `question-types.jpg` — grid of supported question types

---

## Apple — Internal Tools

No assets required. Work is under NDA — the case study uses a `<Walkthrough />` CTA instead of screens.

---

## Homepage

| Status | File | What it shows | Used in |
|--------|------|---------------|---------|
| ⬜ Missing | `resume.pdf` | Your CV | Header Resume button + Footer |

---

## Other (HANDOFF.md tracked items)

- **Email address** — update `hello@piyushmodi.com` in:
  - `components/home/contact.tsx`
  - `components/case-study/walkthrough.tsx`
  - All three MDX files (`<Walkthrough email="..." />`)
- **LinkedIn URL** — `components/site-footer.tsx` line 25 (currently `https://linkedin.com/in/piyushmodi`)
- **GitHub URL** — `components/site-footer.tsx` line 26 (currently `https://github.com/piyushmodi01`)
- **`metadataBase` domain** — `app/layout.tsx` line 28 — update when deploying to your real domain
