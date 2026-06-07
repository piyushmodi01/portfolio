import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function Walkthrough({
  note = "Some of this work is under NDA. Want to see it?",
  email = "piyushmodi01@gmail.com",
}: {
  note?: string;
  email?: string;
}) {
  return (
    <Container className="mt-24 md:mt-32">
      <div className="rounded-2xl border border-border bg-bg-elevated p-8 md:p-12">
        <p className="eyebrow">Walkthrough on request</p>
        <p className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] tracking-tight text-ink max-w-[28ch]">
          {note}
        </p>
        <p className="mt-4 max-w-[40rem] text-[1rem] leading-relaxed text-muted">
          I&apos;m happy to walk through the work live — covering process, decisions,
          and designs.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${email}?subject=Walkthrough%20request`} variant="primary">
            Request a walkthrough
          </ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            About me
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
