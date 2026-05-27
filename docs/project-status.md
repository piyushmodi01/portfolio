# Portfolio v2 — Project Status
## Last updated: May 2026

---

## What's been built

### Stack
Next.js 16 App Router, TypeScript strict, Tailwind v4, Framer Motion, Lenis, next-mdx-remote. Fully static output.

### Design tokens
- Background: `#fafaf7` (warm off-white)
- Ink: `#111111`
- Accent: `#2a4bff` (cobalt)
- Fonts: Fraunces (display), Geist Sans (body), Geist Mono (accents)

---

## Content locked

### Hero (homepage)
- Headline: "I design enterprise tools, design systems, and the internal products large organisations run on."
- Subtext: "Currently designing for Apple. Previously MathWorks and Deloitte. Open to what's next."
- Email: `piyushmodi01@gmail.com`

### Manifesto (scroll-triggered word reveal)
"Half the job is finding the right problem to solve. The rest figures itself out."

### About page animated heading
Cycles: **Alchemist → Builder → Cat Dad → Designer**
- "I'm" is static, rotating line is in cobalt accent
- Starts on Alchemist, 2.2s per word, Framer Motion fade-up

### About page (app/about/page.tsx)
- Experience, Principles, CTA all built
- Apple role: "Senior Product Designer, Contract" (explicitly contract)
- Tapestry role: "Product Researcher, Contract" (explicitly contract)
- Bio copy: placeholder — needs Piyush's real story

---

## Case studies

### Apple (`/work/apple`)
- NDA — no screens, no metrics
- Hero: dark navy gradient, no image
- Status: complete — awaiting real copy once story is confirmed

### MathWorks — MATLAB (`/work/matlab-plot-viewer`)
- Hero: `00-hero-original.png` with `imageFit="fade"`, `#f3f3f3` background
- Real assets in `/public/work/matlab/` — all numbered (01–12)
- Videos: problem-statement, benchmarking, impact-effort-matrix, tab-tile-before, context-menu-redesign
- Feature images: tiled-view, global-actions, local-actions, cleanup
- Status: content complete, all real assets placed

### Deloitte — DCF (`/work/salesforce-forms`)
- Hero: picsum placeholder — real hero image needed
- Rendered-form: picsum placeholder — real screenshot needed
- Status: content complete, assets missing

---

## Assets tracker
Full list in `ASSETS.md` in project root.

**Missing (priority):**
- `/public/work/dcf/hero.jpg` — multi-device mockup
- `/public/work/dcf/rendered-form.jpg` — the actual form screenshot
- `/public/resume.pdf`
- Real cover images for homepage work tiles (Apple, Deloitte)

**Done:**
- MATLAB hero (`00-hero-original.png`) ✅
- MATLAB all videos + feature images ✅

---

## Key decisions made

### Content
- No em dashes anywhere in copy (reads as AI-generated)
- "AI-enabled" removed from headline (overused)
- Apple role explicitly labelled as Contract everywhere
- Email: `piyushmodi01@gmail.com` (updated across all files)

### Design
- Primary button: cobalt (`#2a4bff`), not black
- Header: always frosted (`bg-bg/60 backdrop-blur-md`), stronger on scroll
- Nav links: sliding underline on hover
- Reading progress bar on all case study pages (cobalt, 2px, fixed below header)
- `imageFit="fade"` on MATLAB cover — title above, image fades into page
- `imageFit="cover"` on Apple + Deloitte — cinematic dark hero

### Case study component library
Chapter, Pull, Tension, Callout, Decision, Moment (image + video), TickerGroup, MarqueeStrip, StackedCards, ReadingProgress, Outcome, Walkthrough, NextCase

### Bugs fixed
- `<p>` nesting in Pull component (MDX wraps text in `<p>`)
- Reveal timeout cleanup
- Framer Motion y value type consistency in TickerGroup
- styled-jsx fadeUp moved to globals.css
- Manifesto timeout cleanup
- suppressHydrationWarning on body (browser extension classes)

---

## Piyush — what we know about him

### Professional
- 9+ years product design
- Currently: Senior Product Designer (Contract) at Apple
- Speciality: enterprise tools, design systems, internal products, AI workflows
- Previous: MathWorks (MATLAB), Deloitte (DCF), Copal.ai, ChipReady, Tapestry, Capmov (co-founder)
- Based: Sacramento, CA

### Personal (captured so far)
- Has a cat (Cat Dad)
- Getting into bartending / making cocktails
- Fitness / sports
- Describes himself as: Alchemist, Builder, Cat Dad, Designer
- Design philosophy: "Half the job is finding the right problem. The rest figures itself out."
- Not emotionally attached to design ideas — fights for principles, not pixels
- Detached from his work once it ships; learned DCF was still running from a colleague

### About page bio
- Not yet written — waiting on Piyush's personal story
- Tone target: warm and personal, minimal, enough to make them click through

---

## What's left

**Immediate:**
- About teaser (homepage) — rewrite with real personal story
- About page bio — rewrite with real story
- DCF hero + rendered-form images

**When ready:**
- Resume PDF at `/public/resume.pdf`
- Real cover images for homepage tiles (Apple + Deloitte)
- LinkedIn + GitHub URLs in footer (currently placeholder)
- `metadataBase` domain in `app/layout.tsx` before deployment
- OG image generation
- Analytics (Plausible or Fathom)

**Nice to have:**
- Mobile QA pass (StackedCards, Manifesto, Ticker on real devices)
- Playground and Notes pages (currently empty, removed from nav)
