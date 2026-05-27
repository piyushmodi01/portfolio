import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PullProps = {
  children: React.ReactNode;
  accent?: boolean;
  attribution?: string;
};

// MDX wraps text children in <p> — we apply styles to <blockquote> directly
// so the result is valid <blockquote><p>text</p></blockquote>.
export function Pull({ children, accent = false, attribution }: PullProps) {
  return (
    <Container className="mt-20 md:mt-28">
      <Reveal>
        <blockquote
          className={`max-w-[46rem] ${accent ? "text-accent" : "text-ink"}`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 360,
            fontStyle: "italic",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {children}
          {attribution && (
            <footer className="mt-4 mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-soft not-italic">
              — {attribution}
            </footer>
          )}
        </blockquote>
      </Reveal>
    </Container>
  );
}
