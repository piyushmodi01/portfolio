import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { FlowField } from "@/components/home/flow-field";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Full-bleed canvas background */}
      <FlowField className="absolute inset-0 w-full h-full" />

      {/* Legibility scrim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 75% 80% at 10% 50%, rgba(250,250,247,0.94) 0%, rgba(250,250,247,0.65) 45%, transparent 72%)",
            "linear-gradient(to top, rgba(250,250,247,0.45) 0%, transparent 30%)",
          ].join(", "),
        }}
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-16 md:py-20">
        <div className="max-w-[56rem]">
          <p className="eyebrow">Product designer at Apple</p>

          <h1 className="display mt-5 text-[clamp(2.4rem,4.2vw,4rem)]">
            I design{" "}
            <span
              className="italic font-normal"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
            >
              enterprise tools,
            </span>{" "}
            design systems, and the internal products large organisations{" "}
            <span className="text-accent">run on</span>.
          </h1>

          <p className="mt-5 text-[0.97rem] leading-relaxed text-muted md:text-[1.02rem]">
            Previously{" "}
            <span className="text-ink font-medium">MathWorks</span> and{" "}
            <span className="text-ink font-medium">Deloitte</span>. Open to senior and staff roles.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work" variant="primary">
              Selected work
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-[0.8rem] text-muted">
            <span className="mono">Sacramento, CA</span>
            <span aria-hidden style={{ color: "var(--border-strong)" }}>·</span>
            <span className="mono">Open to senior &amp; staff roles</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
