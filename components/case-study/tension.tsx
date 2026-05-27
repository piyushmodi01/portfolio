import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type TensionProps = {
  beforeLabel?: string;
  beforeTitle: string;
  beforeBody: string;
  afterLabel?: string;
  afterTitle: string;
  afterBody: string;
};

export function Tension({
  beforeLabel = "Before",
  beforeTitle,
  beforeBody,
  afterLabel = "After",
  afterTitle,
  afterBody,
}: TensionProps) {
  return (
    <Container className="mt-20 md:mt-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-border">
          <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-10">
            <p className="mono mb-5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-soft">
              {beforeLabel}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                fontWeight: 360,
              }}
              className="text-ink"
            >
              {beforeTitle}
            </p>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">{beforeBody}</p>
          </div>
          <div className="bg-accent-soft p-8 md:p-10">
            <p className="mono mb-5 text-[0.7rem] uppercase tracking-[0.18em] text-accent">
              {afterLabel}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                fontWeight: 360,
              }}
              className="text-ink"
            >
              {afterTitle}
            </p>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">{afterBody}</p>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
