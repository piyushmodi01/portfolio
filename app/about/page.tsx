import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { PrincipleCard } from "@/components/about/principle-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer with 9+ years of experience. Started in computer science, moved into UX — Deloitte, Tapestry, MathWorks, and now Apple. Based in Sacramento, CA.",
  alternates: { canonical: "https://piyushmodi.com/about" },
  openGraph: {
    title: "About · Piyush Modi",
    description:
      "Product designer with 9+ years of experience. Started in computer science, moved into UX — Deloitte, Tapestry, MathWorks, and now Apple.",
    url: "https://piyushmodi.com/about",
  },
};

const PRINCIPLES = [
  {
    title: "Decisions over deliverables.",
    body: "If a mockup doesn't move a decision forward, it's decoration.",
  },
  {
    title: "The brief is a hypothesis.",
    body: "A good brief tells you what someone thinks is wrong. The right questions tell you what actually is.",
  },
  {
    title: "Sweat the seams.",
    body: "The transitions nobody notices are exactly what separates careful from careless.",
  },
  {
    title: "Nobody follows the happy path.",
    body: "Most users ignore onboarding and bypass the happy path. Design for that person, not the cooperative one.",
  },
  {
    title: "Code is a design tool.",
    body: "Prototyping in code surfaces problems Figma hides.",
  },
  {
    title: "Make the hard thing obvious.",
    body: "Show the thing first. Layer the system after.",
  },
] as const;

const EXPERIENCE = [
  {
    company: "Apple Inc.",
    role: "Senior Product Designer, Contract",
    period: "2025 — Present",
    description:
      "Internal tools and design systems for engineering and operations teams.",
  },
  {
    company: "Capmov",
    role: "Co-Founder · Side Consultancy",
    period: "2024 — Present",
    description:
      "Product design and brand strategy across multiple client projects, run alongside full-time work.",
  },
  {
    company: "ChipReady",
    role: "Design Advisor",
    period: "Nov 2024 — June 2025",
    description: "UX and design strategy for an AI-powered workforce platform.",
  },
  {
    company: "Copal.ai",
    role: "Sr. Product Designer",
    period: "Feb 2024 — Nov 2024",
    description:
      "Led design for 3 AI-powered products across feature prioritization, launches, and a design system.",
  },
  {
    company: "MathWorks",
    role: "Product Designer",
    period: "June 2022 — Feb 2024",
    description:
      "Designed for MATLAB features and contributed to the design system.",
  },
  {
    company: "Tapestry",
    role: "Product Researcher, Contract",
    period: "2020 — 2021",
    description:
      "User testing and key feature design for an eCommerce platform.",
  },
  {
    company: "Deloitte Consulting",
    role: "Product Designer",
    period: "2017 — 2020",
    description:
      "Salesforce-based products for US government teams; reduced development time by 40%.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <Container className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* Left: heading + bio */}
          <div>
            <Reveal>
              <h1
                className="display mt-8 leading-[1.05] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.6rem)" }}
              >
                9 years designing the systems large organizations run on.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 flex flex-col gap-5 max-w-[52ch] text-[1.05rem] leading-[1.7] text-muted">
                <p>
                  I started in computer science. But somewhere along the way,
                  people kept responding to my designs more than my code. I took
                  the hint.
                </p>
                <p>
                  Since then: public sector platforms at Deloitte, e-commerce
                  research at Tapestry, a Human Factors masters at San Jose State,
                  and MathWorks in Boston, where I shipped features and maintained
                  their design system. Apple came next. These days I design internal
                  platforms across real estate and operations, used by thousands of
                  people across the company every day.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: portrait */}
          <Reveal delay={80}>
            <div className="flex flex-col gap-3">
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-border"
                style={{ aspectRatio: "3/4" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/portrait.png"
                  alt="Piyush with his cat"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Principles */}
      <Container className="py-20 md:py-28">
        <Reveal>
          <Eyebrow>Principles</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[18ch]">
            Things I actually believe.
          </h2>
          <p className="mt-3 text-[0.85rem] text-muted md:hidden">Tap a card to flip it.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <PrincipleCard title={p.title} body={p.body} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Personal */}
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="max-w-[52ch] text-[1.05rem] leading-[1.7] text-muted">
            I live in Sacramento with my wife, who reviews and approves design
            plans for the city. Design critique runs in the household. We have
            two cats, Zuko and Poppy. Very affectionate — especially around
            dinner time.
          </p>
        </Reveal>
      </Container>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Experience */}
      <Container className="py-20 md:py-28">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[18ch]">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <ul className="mt-14 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 50} as="li">
              <div className="flex flex-col gap-1 bg-bg-elevated px-6 py-5 md:flex-row md:items-baseline md:gap-8 md:px-8 md:py-6">
                <div className="md:w-[11rem] shrink-0">
                  <p className="display text-[1.1rem] leading-snug tracking-tight text-ink">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p className="mono text-[0.75rem] uppercase tracking-[0.14em] text-muted-soft">
                    {job.role} &middot; {job.period}
                  </p>
                  <p className="text-[0.93rem] leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* CTA */}
      <Container className="py-20 md:py-28">
        <Reveal>
          <h2 className="display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[18ch]">
            Let&apos;s talk.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-[44ch] text-[1.02rem] leading-relaxed text-muted">
            Reach out by email — or ask for a walkthrough of any case study. The
            internal work is worth seeing in context.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8">
            <ButtonLink
              href="mailto:piyushmodi01@gmail.com"
              variant="primary"
              size="md"
              external
            >
              piyushmodi01@gmail.com
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
