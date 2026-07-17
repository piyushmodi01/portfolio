import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Systems & Tools",
  description:
    "Tools, plugins, and side projects at the design–engineering seam.",
  alternates: { canonical: "https://piyushmodi.com/playground" },
  openGraph: {
    title: "Systems & Tools · Piyush Modi",
    description: "Tools, plugins, and side projects at the design–engineering seam.",
    url: "https://piyushmodi.com/playground",
  },
};

type Status = "Live" | "In-progress";

type PlaygroundItem = {
  tag: string;
  title: string;
  description: string;
  status: Status;
};

const ITEMS: PlaygroundItem[] = [
  {
    tag: "Plugin",
    title: "Accessibility Checker",
    description:
      "Bookmarklet + Sketch plugin that audits visible text, contrast, and structure across designs and live web.",
    status: "Live",
  },
  {
    tag: "Tool",
    title: "AG-Grid Builder",
    description:
      "Vibe-coded React tool that lets designers build AG Grid tables via code and import them directly into Sketch.",
    status: "Live",
  },
  {
    tag: "Agent",
    title: "Design Agent",
    description:
      "Prompt-orchestrated assistant that converts BRDs into structured design briefs.",
    status: "Live",
  },
  {
    tag: "Plugin",
    title: "Symbol Override Manager",
    description:
      "Sketch plugin for managing symbol overrides at scale across libraries.",
    status: "Live",
  },
  {
    tag: "Plugin",
    title: "Full Detachment Plugin",
    description:
      "Sketch utility for fully detaching nested symbols in one pass.",
    status: "Live",
  },
  {
    tag: "Plugin",
    title: "Dark Mode Switch",
    description:
      "Experimental dark-mode switcher for internal design systems — flip designs into their dark-mode equivalents without manual token swaps.",
    status: "In-progress",
  },
];

export default function PlaygroundPage() {
  return (
    <Container as="main" className="py-20 md:py-28">
      <Reveal>
        <Eyebrow>Systems &amp; Tools</Eyebrow>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] tracking-tight max-w-[24ch]">
          Tools, plugins, and systems.
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-muted">
          Side projects I build to scratch an itch — mostly Sketch plugins,
          browser tools, and experiments at the design&ndash;engineering seam.
          None of these are products. All of them solved a real problem.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <PlaygroundCard item={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

function PlaygroundCard({ item }: { item: PlaygroundItem }) {
  const isLive = item.status === "Live";

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 transition-colors duration-200 hover:border-border-strong">
      {/* Tag */}
      <p className="mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-soft">
        {item.tag}
      </p>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="display text-[1.15rem] leading-snug tracking-tight text-ink">
          {item.title}
        </h2>
        <p className="text-[0.92rem] leading-relaxed text-muted">
          {item.description}
        </p>
      </div>

      {/* Status */}
      <div className="mt-auto flex justify-end pt-2">
        <span
          className={[
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium uppercase tracking-[0.1em]",
            isLive
              ? "bg-accent-soft text-accent"
              : "border border-border text-muted-soft",
          ].join(" ")}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
}
