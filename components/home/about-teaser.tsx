import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section id="about" aria-label="About" className="relative py-24 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow number="02">About</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* Left column */}
          <Reveal delay={60}>
            <div>
              <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] tracking-tight max-w-[22ch]">
                Designers who care about systems are the ones I want to build
                with.
              </h2>

              <div className="mt-8 flex flex-col gap-5 max-w-[54ch] text-[1.02rem] leading-relaxed text-muted">
                <p>
                  I&apos;m a product designer based in Sacramento, CA with a
                  decade of practice across enterprise software, design systems,
                  and AI-enabled workflows. Since 2025 I&apos;ve been contracting
                  at Apple, designing internal platforms used by thousands of
                  employees across real estate, operations, and engineering.
                </p>
                <p>
                  Before Apple I shipped at MathWorks and Deloitte — places that
                  forced me to care about scale, edge cases, and the humans who
                  never read documentation. I believe the best design work is
                  nearly invisible, deeply considered, and always embarrassingly
                  simple from the outside.
                </p>
              </div>

              <div className="mt-8">
                <ButtonLink href="/about" variant="secondary" size="md">
                  More about me
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Right column — portrait placeholder */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-border"
                style={{
                  aspectRatio: "3/4",
                  background: "var(--accent-soft)",
                }}
              >
                {/* Subtle inner texture */}
                <div className="absolute inset-0 grid place-items-center">
                  <div
                    className="h-24 w-24 rounded-full opacity-20"
                    style={{ background: "var(--accent)" }}
                  />
                </div>
              </div>
              <p className="mono text-[0.75rem] uppercase tracking-[0.16em] text-muted-soft">
                Sacramento, CA
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
