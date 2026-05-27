import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/about/animated-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Designer, builder, system thinker. Based in Sacramento, CA — contracting at Apple.",
};

const PRINCIPLES = [
  {
    title: "Decisions over deliverables.",
    body: "Every artefact should make a decision visible. Mockups that don't move a decision forward are noise.",
  },
  {
    title: "Sweat the seams.",
    body: "The boring transitions between states are where products feel cheap or considered.",
  },
  {
    title: "Make the hard thing obvious.",
    body: "Abstraction is a tool, not a goal. Show the thing first, then layer the system.",
  },
  {
    title: "Ship to learn.",
    body: "Taste sharpens against contact with users. Real artefacts compound, hypotheticals don't.",
  },
  {
    title: "Code is a design tool.",
    body: "Prototyping in code surfaces problems Figma hides.",
  },
  {
    title: "Restraint reads as seniority.",
    body: "Knowing what to leave out is the harder skill.",
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
    role: "Co-Founder",
    period: "2024 — Present",
    description:
      "Product design and system-level work across multiple client projects.",
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
        <AnimatedHeading />

        {/* Bio */}
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-5 max-w-[56ch] text-[1.05rem] leading-[1.7] text-muted">
            <p>
              I&apos;m a product designer based in Sacramento, CA with 9+ years
              across enterprise software, design systems, and AI-enabled
              workflows. I&apos;m currently contracting at Apple, where I spend
              my days designing internal platforms used by thousands of employees
              across real estate, operations, and engineering.
            </p>
            <p>
              The work I care most about sits at intersections: internal tools
              that engineers actually want to use, design systems that scale
              without strangling teams, the AI&ndash;design seam where prompts
              meet production. I also vibe-code things into existence when the
              problem is too specific to wait for a sprint.
            </p>
            <p>
              What I bring to a team is rigor, taste, and speed — in that order.
              What I look for is a team willing to care about the same thing.
              Craft compounds when it&apos;s shared.
            </p>
          </div>
        </Reveal>
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
            How I work.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6">
                <p className="display text-[1.25rem] leading-tight tracking-tight text-ink">
                  {p.title}
                </p>
                <p className="text-[0.93rem] leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
