import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SacramentoMap } from "@/components/home/sacramento-map";

export function AboutTeaser() {
  return (
    <section id="about" aria-label="About" className="relative py-24 md:py-36 bg-[#ede9e0]">
      <Container>
        <Reveal>
          <Eyebrow number="02">About</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* Left column */}
          <Reveal delay={60}>
            <div>
              <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] tracking-tight max-w-[22ch]">
                Good design is invisible. Getting there rarely is.
              </h2>

              <div className="mt-8 flex flex-col gap-5 max-w-[54ch] text-[1.02rem] leading-relaxed text-muted">
                <p>
                  I started in Computer Science. Deloitte moved me into design because they saw
                  something I hadn&apos;t named yet. Nine years and five
                  organisations later, I design internal platforms at Apple used by
                  thousands of employees across real estate and operations.
                </p>
                <p>
                  The technical foundation still pays off every day. I can talk to
                  engineers in their language, read a schema, and catch the
                  complexity hiding inside a simple-looking request.
                </p>
              </div>

              <div className="mt-8">
                <ButtonLink href="/about" variant="secondary" size="md">
                  More about me
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Right column — Sacramento map */}
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/8">
              <SacramentoMap />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
