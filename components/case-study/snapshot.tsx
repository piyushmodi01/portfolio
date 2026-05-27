import { Container } from "@/components/ui/container";

type SnapshotItem = { label: string; value: string };

export function Snapshot({ items = [] }: { items?: SnapshotItem[] }) {
  return (
    <Container className="mt-16 md:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {items.map((it) => (
          <div key={it.label} className="bg-bg-elevated p-6 md:p-8">
            <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">
              {it.label}
            </p>
            <p className="mt-2 font-display text-[clamp(1.4rem,2.8vw,2rem)] leading-tight tracking-tight text-ink">
              {it.value}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
