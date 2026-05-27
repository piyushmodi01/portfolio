import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Decision({
  label = "Key decision",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="mt-20 md:mt-28">
      <Reveal>
        <div className="border-l-2 border-accent pl-6 md:pl-8 max-w-[44rem]">
          <p className="mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {label}
          </p>
          <div className="mt-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.15] tracking-tight text-ink">
            {children}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
