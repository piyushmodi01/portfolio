import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type CalloutVariant = "insight" | "constraint" | "quote";

const DEFAULT_LABELS: Record<CalloutVariant, string> = {
  insight: "Key insight",
  constraint: "Constraint",
  quote: "From the field",
};

type CalloutProps = {
  children: React.ReactNode;
  label?: string;
  variant?: CalloutVariant;
};

export function Callout({ children, label, variant = "insight" }: CalloutProps) {
  return (
    <Container className="mt-12 md:mt-16">
      <Reveal>
        <aside className="max-w-[44rem] border-l-2 border-accent py-1 pl-6 md:pl-8">
          <p className="mono mb-3 text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {label ?? DEFAULT_LABELS[variant]}
          </p>
          <div className="text-[1.02rem] leading-relaxed text-ink-soft">{children}</div>
        </aside>
      </Reveal>
    </Container>
  );
}
