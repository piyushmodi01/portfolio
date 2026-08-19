# Portfolio v2 — Project Status
## Last updated: May 2026

---

## What's been built

### Stack
Next.js 16 App Router, TypeScript strict, Tailwind v4, Framer Motion, Lenis, next-mdx-remote, Leaflet (Sacramento map). Fully static output. Dev: `npm run dev` on localhost:3000.

### Design tokens
- Background: `#fafaf7` (warm off-white)
- Ink: `#111111`
- Accent: `#2a4bff` (cobalt)
- Fonts: Fraunces (display), Geist Sans (body), Geist Mono (accents)

---

## Pages

### Homepage (`/`)
- **Hero**: "I design enterprise tools, design systems, and the internal products large organisations run on." / "Currently designing for Apple. Previously MathWorks and Deloitte. Open to what's next."
- **Manifesto**: "Half the job is finding the right problem to solve. The rest figures itself out." (6-phrase word-by-word reveal)
- **Selected Work**: 3 tiles — Apple (gradient placeholder), MathWorks (00-hero-original.png ✅), Deloitte (gradient placeholder)
- **About Teaser**: 2-col — left: bio text + CTA, right: Sacramento Leaflet map with floating portrait pin
- **Playground Teaser**: 3 side project cards
- **Notes Teaser**: placeholder
- **Contact**: needs audit

### About (`/about`)
- **Hero**: 2-column — left: AnimatedHeading (Alchemist→Builder→Cat Dad→Designer) + bio, right: portrait photo
- **Bio copy**: still placeholder — needs real personal story from Piyush
- **Principles**: 6 cards
- **Experience**: full timeline with contract labels on Apple and Tapestry
- **CTA**: email + resume

### Case Studies
- `/work/apple` — hidden (frontmatter `hidden: true`), noindex, unlinked. Kept in repo, not shown anywhere on the live site.
- `/work/matlab-plot-viewer` — imageFit="fade" hero, all real assets, complete
- `/work/salesforce-forms` — dark green cinematic hero, picsum placeholders for DCF images

### Blog (`/blog`)
- One real post: "The Power of Storytelling" (May 2025, from UXMatters)
- "Notes" link in nav

---

## Content locked

| Item | Value |
|------|-------|
| Email | `piyushmodi01@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/piyushmodi01/` |
| GitHub | Hidden from footer |
| Hero headline | "I design enterprise tools, design systems, and the internal products large organisations run on." |
| Hero subtext | "Currently designing for Apple. Previously MathWorks and Deloitte. Open to what's next." |
| Manifesto | "Half the job is finding the right problem to solve. The rest figures itself out." |
| About heading | Cycles: Alchemist → Builder → Cat Dad → Designer |
| Apple role | "Senior Product Designer, Contract" everywhere |
| Tapestry role | "Product Researcher, Contract" |
| Favicon | `app/icon.svg` — cobalt P logomark |

---

## Key decisions made

### Content rules
- No em dashes in copy (reads as AI-generated)
- No "AI-enabled" in headlines
- Apple + Tapestry roles always labelled Contract
- Blog posts: duplicate `content/blog/power-of-storytelling.mdx` to add new posts (frontmatter: title, summary, publishedAt)

### Design
- Primary button: cobalt `#2a4bff`
- Header: always frosted (`bg-bg/60 backdrop-blur-md`), stronger on scroll, nav links have sliding underline on hover
- Reading progress bar on all case study pages (cobalt, 2px, fixed below header)
- Cover `imageFit="fade"` on MATLAB — title above, image fades to page
- Cover `imageFit="cover"` (default) on Apple + Deloitte — cinematic dark hero
- Sacramento map: Leaflet + CartoDB tiles, floating portrait pin, click opens Apple Maps, scroll parallax
- About page: AnimatedHeading cycles A→B→C→D, portrait in 2-col hero

### Case study component library
Chapter, Pull, Tension, Callout, Decision, Moment (image + video + cropTop/cropBottom/fadeEdges/size/aspectRatio/playbackRate), TickerGroup, MarqueeStrip, StackedCards, ReadingProgress, Outcome, Walkthrough, NextCase

### VideoPlayer improvements
- `playbackRate` prop (0.4 = slow, 1 = normal)
- `fit` prop: "cover" | "contain" | "natural"
- `rootMargin: "120px 0px 120px 0px"` — prevents premature pause on scroll
- `threshold: 0` — fires as soon as any pixel enters viewport

### Bugs fixed
- `<p>` nesting in Pull component (MDX wraps text in `<p>`)
- Reveal timeout cleanup
- Framer Motion y type consistency in TickerGroup (strings not numbers)
- fadeUp keyframe moved from styled-jsx to globals.css
- Manifesto timeout cleanup
- suppressHydrationWarning on body
- Leaflet "already initialized" — cancelled flag + _leaflet_id guard
- Removed all picsum poster props (caused placeholder flashing)
- IntersectionObserver rootMargin fix for video autoplay

---

## Assets tracker

### MATLAB (`/public/work/matlab/`)
| File | Status |
|------|--------|
| `00-hero-original.png` | ✅ Transparent background PNG, used as fade hero |
| `00-hero-original.avif` | ✅ Original avif (not currently used) |
| `01-hero.webp` | ✅ Old webp hero (not currently used) |
| `02-problem-statement.mp4` | ✅ |
| `03-tab-tile-before.mp4` | ✅ |
| `04-benchmarking.mp4` | ✅ playbackRate=0.4, cropTop/Bottom=33, fadeEdges |
| `05-impact-effort-matrix.mp4` | ✅ size="md" |
| `05-impact-effort-matrix-poster.png` | ✅ (not used as poster anymore) |
| `06-context-menu-redesign.mp4` | ✅ |
| `07-feature-tiled-view.png` | ✅ used as poster for context-menu video |
| `08-feature-global-actions.png` | ✅ |
| `09-feature-local-actions.png` | ✅ |
| `10-feature-cleanup.png` | ✅ |
| `11-rejected-view-tab.png` | ⚠️ Too low-res — not used in MDX, kept for reference |
| `12-rejected-view-tab-switching.png` | ⚠️ Too low-res — not used in MDX |
| `benchmarking-logos/` | ✅ Source logos (not used in MDX) |

### Deloitte (`/public/work/dcf/`)
| File | Status |
|------|--------|
| `hero.jpg` | ❌ Missing — still using picsum placeholder |
| `rendered-form.jpg` | ❌ Missing — still using picsum placeholder |

### About (`/public/about/`)
| File | Status |
|------|--------|
| `portrait.png` | ✅ Piyush with black cat, warm photo |

### Root (`/public/`)
| File | Status |
|------|--------|
| `resume.pdf` | ❌ Missing — Resume button links to 404 |

### Homepage work tiles
| Project | Cover image | Status |
|---------|-------------|--------|
| Apple | None | ❌ Uses gradient placeholder |
| MathWorks | `/work/matlab/00-hero-original.png` | ✅ |
| Deloitte | None | ❌ Uses gradient placeholder |

---

## Open Tasks (in priority order)

1. **Deploy to Vercel with custom domain** — nothing is live yet
2. **Get real cover images for Apple and Deloitte homepage work tiles** — gradient placeholders look unfinished
3. **Mobile QA pass** — StackedCards, Manifesto pin, Ticker not tested on device
4. **Review and refine About page bio + homepage teaser** — written from personal story (May 2026), may need copy tweaks after Piyush reviews live
5. **Add visual presence to Apple case study hero** — only dark gradient, no image
6. **Create OG image for social sharing** — blank card when URL shared on LinkedIn/Slack
7. **Fill or hide the Playground page** — currently empty, linked in nav
8. **Audit and improve the Contact section** — not reviewed this session
9. **Add scroll-to-top button on case studies** — quality of life on long pages
10. **Gather and place Deloitte case study videos and images** — DCF assets needed

---

## Piyush personal notes (for About page bio)
- CS undergrad → Deloitte moved him from tech dept to design dept (they saw it before he did)
- Deloitte: 3.5 years, public sector + healthcare clients + internal tools
- Tapestry: user research, unified e-commerce across all Tapestry brands
- Masters: Human Factors & Ergonomics, San Jose State University
- MathWorks: hired part-time while still a student, went full-time after graduating, Boston, 1.5 years
- Met his wife during MathWorks years (Boston), drove cross-country Boston → CA to marry her
- Freelance agency "Capmov" (with a friend) — 9 months, branding + web + e-commerce for CA clients. Still does freelance work on weekends.
- Apple: internal enterprise platform + design systems (NDA — no internal specifics to be used publicly)
- Also: Lucas School of Business AI platform built during masters (on-campus job)
- Lives in Sacramento, wife is a city planner for Sacramento, own their home (bought 2025)
- Two cats: Zuko and Poppy (Zuko is black, visible in portrait)
- From India (full immigration story not yet shared)
- Interests: bartending / cocktails, fitness / sports
- Bio written May 2026 — both about/page.tsx and about-teaser.tsx updated with real copy

## Files to check if confused
- `docs/matlab-notes.md` — full interview notes on MathWorks project
- `docs/dcf-notes.md` — full interview notes on Deloitte DCF project
- `ASSETS.md` — simplified assets tracker
- `HANDOFF.md` / `AGENTS.md` — stack and setup notes
