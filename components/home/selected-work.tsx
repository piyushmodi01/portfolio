import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type WorkTile = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  year: string;
  scope: string[];
  cover?: string; // path to image — falls back to gradient placeholder
  accentTint?: string; // optional css color for placeholder backdrop
};

export const WORK_TILES: WorkTile[] = [
  {
    slug: "matlab-plot-viewer",
    client: "MathWorks",
    title: "Improving MATLAB's Plot Viewing Experience.",
    summary:
      "Making a critical engineering workflow easier to discover and significantly faster to complete.",
    year: "2022 — 2024",
    scope: ["Usability Research", "Interaction Design", "Product Design"],
    cover: "/work/matlab/00-hero-original.png",
    accentTint:
      "linear-gradient(135deg, rgba(255,140,40,0.08) 0%, rgba(17,17,17,0.04) 100%)",
  },
  {
    slug: "salesforce-forms",
    client: "Deloitte",
    title: "A form platform government teams could deploy themselves.",
    summary:
      "Turning a one-off government form into a configurable platform used across programs.",
    year: "2017 — 2020",
    scope: ["Product Design", "Systems Design", "Government UX"],
    cover: "/work/deloitte/hero.png",
    accentTint:
      "linear-gradient(135deg, rgba(31,95,77,0.12) 0%, rgba(17,17,17,0.06) 100%)",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="relative py-24 md:py-36"
    >
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow number="01">Selected work</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[20ch]">
              Two projects that say the most about how I work.
            </h2>
          </div>
          <p className="max-w-md text-[1rem] leading-relaxed text-muted">
            Each of these took years and shipped to thousands of people.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {WORK_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 60}>
              <WorkCard tile={tile} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WorkCard({ tile, index }: { tile: WorkTile; index: number }) {
  const isOdd = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${tile.slug}`}
      aria-label={`Open case study: ${tile.client} — ${tile.title}`}
      className="group block"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-8 md:gap-12 items-center",
          "md:grid-cols-12"
        )}
      >
        {/* Cover */}
        <div
          className={cn(
            "md:col-span-7",
            isOdd && "md:order-2 md:col-start-6"
          )}
        >
          <div
            className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            style={{
              background: tile.accentTint,
            }}
          >
            {tile.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tile.cover}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <p className="font-display text-[clamp(2rem,7vw,5rem)] leading-none tracking-tight text-ink/15">
                    {tile.client}
                  </p>
                </div>
              </div>
            )}
            {/* Top-left meta */}
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                Case · {number}
              </span>
            </div>
            {/* Hover indicator */}
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-bg/0 text-ink opacity-0 transition-all duration-300 group-hover:bg-ink group-hover:text-white group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className={cn(
            "md:col-span-5",
            isOdd && "md:order-1 md:col-start-1 md:row-start-1"
          )}
        >
          <p className="mono text-[0.78rem] uppercase tracking-[0.16em] text-muted">
            {tile.client} · {tile.year}
          </p>
          <h3 className="display mt-3 text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.05] tracking-tight">
            {tile.title}
          </h3>
          <p className="mt-4 max-w-[40ch] text-[1.02rem] leading-relaxed text-muted">
            {tile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tile.scope.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-[0.78rem] text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-[0.92rem] text-ink underline-offset-4 group-hover:underline">
            Read the case study
            <ArrowUpRight size={15} />
          </p>
        </div>
      </div>
    </Link>
  );
}
