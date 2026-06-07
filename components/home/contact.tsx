import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-32 md:py-44"
    >
      <Container>
        <Reveal>
          <Eyebrow number="05">Contact</Eyebrow>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display mt-6 text-[clamp(2.4rem,7vw,5.2rem)] leading-[1.0] tracking-tight max-w-[22ch]">
            Good work starts with a good conversation.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <a
              href="mailto:piyushmodi01@gmail.com"
              className="mono text-[clamp(1rem,2.5vw,1.5rem)] tracking-tight text-ink underline-offset-4 decoration-border hover:underline transition-colors duration-150"
            >
              piyushmodi01@gmail.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="https://www.linkedin.com/in/piyushmodi01/"
              variant="ghost"
              size="sm"
              external
            >
              LinkedIn
            </ButtonLink>
            <span className="h-4 w-px bg-border" aria-hidden />
            <ButtonLink href="/resume.html" variant="ghost" size="sm" external>
              Resume
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
