import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlaygroundCard = {
  title: string;
  description: string;
  status: "Live" | "Archived";
};

const CARDS: PlaygroundCard[] = [
  {
    title: "Accessibility Audit",
    description:
      "Bookmarklet and Sketch plugin that audit designs against accessibility guidelines, covering both implemented and in-progress work.",
    status: "Live",
  },
  {
    title: "Atlas Grid Builder",
    description:
      "React tool that lets designers compose AG Grid tables and export them to Sketch.",
    status: "Live",
  },
  {
    title: "Design Agent",
    description:
      "Prompt-orchestrated assistant that converts BRDs into design briefs.",
    status: "Live",
  },
];

export function PlaygroundTeaser() {
  return (
    <section
      id="systems-tools"
      aria-label="Systems and Tools"
      className="relative py-24 md:py-36"
    >
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow number="03">Systems &amp; Tools</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="display mt-4 text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[20ch]">
                Tools and systems built on the side.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <p className="max-w-md text-[1rem] leading-relaxed text-muted">
              Side projects I build to scratch an itch — mostly Sketch plugins,
              browser tools, and experiments at the design–engineering seam.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <PlaygroundCard card={card} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-12">
            <ButtonLink href="/playground" variant="secondary" size="md">
              See all systems &amp; tools
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PlaygroundCard({ card }: { card: PlaygroundCard }) {
  const isLive = card.status === "Live";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 transition-colors duration-200 hover:border-border-strong h-full">
      {/* Accent dot */}
      <div
        className="h-2 w-2 rounded-full"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-[1rem] font-semibold leading-snug text-ink">
          {card.title}
        </h3>
        <p className="text-[0.92rem] leading-relaxed text-muted">
          {card.description}
        </p>
      </div>

      {/* Status pill */}
      <div className="mt-auto pt-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.72rem] font-medium uppercase tracking-[0.1em]",
            isLive ? "bg-accent-soft text-accent" : "border border-border text-muted-soft"
          )}
        >
          {card.status}
        </span>
      </div>
    </div>
  );
}
