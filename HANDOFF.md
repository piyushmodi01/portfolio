# Portfolio v2 — Handoff Context

## Project
Personal portfolio for Piyush Modi (senior product designer, 9+ years, currently contracting at Apple).
Targets Apple recruiters and senior/staff design roles.

**Working directory:** `/Users/piyushmodi/Documents/Github Projects/portfolio-v2/`
**Dev command:** `npm run dev` (Next.js 16, starts on localhost:3000)
**Type check:** `npx tsc --noEmit`

---

## Stack
- Next.js 16 App Router, TypeScript strict, Tailwind v4 (PostCSS)
- Framer Motion, Lenis (smooth scroll), next-mdx-remote (case studies + blog)
- Fonts: Fraunces (display), Geist Sans (body), Geist Mono (accents) via `next/font`
- No build tools beyond Next.js — single repo, fully static output

---

## Design tokens (app/globals.css)
```
--bg: #fafaf7         warm off-white
--ink: #111111        near-black
--muted: #5c5c66      secondary text
--accent: #2a4bff     deep cobalt
--border: rgba(0,0,0,0.08)
```
Tailwind classes: `bg-bg`, `text-ink`, `text-muted`, `bg-accent`, `text-accent`, `border-border`, etc.

---

## File structure
```
app/
  layout.tsx              Fraunces + Geist fonts, SmoothScroll + SiteHeader + SiteFooter
  page.tsx                Composes: Hero → Manifesto → SelectedWork → AboutTeaser →
                          PlaygroundTeaser → NotesTeaser → Contact
  about/page.tsx          Full about page — bio, principles, experience timeline
  work/page.tsx           Case study index
  work/[slug]/page.tsx    MDX renderer with custom components
  blog/page.tsx           Notes index
  blog/[slug]/page.tsx    Blog post renderer
  playground/page.tsx     Side projects grid

components/
  ui/                     Container, Section, Eyebrow, Reveal, Button/ButtonLink, Logo
  home/                   Hero, FlowField (signature canvas), Manifesto,
                          SelectedWork, AboutTeaser, PlaygroundTeaser, NotesTeaser, Contact
  case-study/             Cover, Snapshot, Moment, Decision, Outcome,
                          Walkthrough, NextCase, Prose, mdx-components
  site-header.tsx         Sticky, blur on scroll, logo mark only, Resume as pill
  site-footer.tsx         4-col grid
  smooth-scroll.tsx       Lenis wrapper (client component, mounted in layout)

content/
  case-studies/           apple.mdx, matlab-plot-viewer.mdx, salesforce-forms.mdx
  blog/                   welcome.mdx (placeholder)

lib/
  content.ts              getCaseStudies(), getCaseStudy(slug), getBlogPosts(), getBlogPost(slug)
  utils.ts                cn() class merger
```

---

## Key component notes

### Hero (`components/home/hero.tsx`)
- `min-height: calc(100vh - 64px)` fills viewport below the 64px header
- FlowField canvas is `absolute inset-0` background
- Scrim overlay (radial gradient) keeps text legible on left side
- Cursor tracking is on `window` (not canvas div) so it works through the z-10 text layer

### FlowField (`components/home/flow-field.tsx`)
- Vanilla 2D canvas, ~180 particles in a noise field
- `window.pointermove` → compute relative to wrapper rect → cursor displacement
- Pauses via IntersectionObserver + document.hidden
- Static one-frame render for `prefers-reduced-motion`

### Manifesto (`components/home/manifesto.tsx`)
- Desktop: 200vh section, sticky inner, scroll progress → word reveal
- Mobile: IntersectionObserver triggers timed word sequence (no pin)
- Reduced motion: all words visible immediately

### Button (`components/ui/button.tsx`)
- Primary: `bg-[#111111] text-[#ffffff]` — fully explicit hex, no CSS variable chain
- Secondary: outlined, inherits border
- Ghost: text only, underline on hover

### Case study MDX components
Custom components auto-injected via `caseStudyMdxComponents` map:
`<Cover>`, `<Snapshot>`, `<Moment>`, `<Decision>`, `<Outcome>`, `<Walkthrough>`, `<NextCase>`, `<Prose>`

### Apple case study (content/case-studies/apple.mdx)
Strict NDA framing — no product names, no internal screens, no metrics.
`<Walkthrough />` CTA invites recruiters to request a 1:1 screen-share walkthrough.

---

## What still needs Piyush's content
- Replace placeholder bio copy in `app/about/page.tsx`
- Add real cover images for case studies (reference via `cover` frontmatter in each MDX)
- Update email from `hello@piyushmodi.com` to real address (`components/home/contact.tsx`, `components/case-study/walkthrough.tsx`)
- Add `/resume.pdf` to `public/`
- LinkedIn/GitHub URLs in `components/site-footer.tsx`
- Update `metadataBase` domain in `app/layout.tsx` when deploying
- Refine case study copy — current text is well-structured placeholder, needs real story + outcomes

---

## Known open items
- `npm run build` cannot run in sandboxed environments (Google Fonts fetch fails) — works fine on real machine with internet
- Playground and Notes removed from header nav (no content yet) — add back when ready
- OG image generation not set up — static OG or defer until deployment
- No analytics yet — add Plausible or Fathom before going public

---

## Continuing work — suggested next sessions
1. **Content pass** — real bio, case study copy, project images
2. **Case study images** — add real `<Moment image="/work/apple/moment-1.png">` etc.
3. **Deployment** — Vercel, custom domain, OG image, analytics
4. **Polish** — hover states on work tiles, case study reading experience, mobile QA
