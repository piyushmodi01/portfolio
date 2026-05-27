import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

type CoverProps = {
  client: string;
  title: string;
  role: string;
  year: string;
  scope: string[];
  tldr: string;
  image?: string;
  color?: string;
  /**
   * "cover" (default) — full-bleed cinematic hero, dark overlay, white title inside.
   * "fade"  — Apple-style: light background, centered text above, image fades into page below.
   */
  imageFit?: "cover" | "fade";
};

export function Cover({
  client,
  title,
  role,
  year,
  scope = [],
  tldr,
  image,
  color,
  imageFit = "cover",
}: CoverProps) {
  if (imageFit === "fade") {
    return (
      <header style={{ background: color ?? "#f3f3f3" }}>
        {/* Back link */}
        <Container className="pt-8 md:pt-10">
          <Link
            href="/#work"
            className="mono inline-flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} />
            All work
          </Link>
        </Container>

        {/* Title — compact, centered above the image */}
        <div className="px-6 pb-8 pt-10 text-center md:pt-12">
          <p className="eyebrow">{client} · {year}</p>
          <h1
            className="display mx-auto mt-4 max-w-[22ch] leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)" }}
          >
            {title}
          </h1>
        </div>

        {/* Image — full width, fades at bottom */}
        {image && (
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              aria-hidden
              className="w-full object-contain"
              style={{
                maskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
              }}
            />
          </div>
        )}

        {/* TLDR + metadata below the image */}
        <Container className="pb-12 pt-2 md:pb-16">
          <p className="max-w-[44rem] text-[1.1rem] leading-relaxed text-muted md:text-[1.18rem]">
            {tldr}
          </p>
          <div className="mt-8 flex flex-wrap items-start gap-x-10 gap-y-5 border-t border-border pt-6">
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Role</p>
              <p className="mt-1 text-[0.95rem] text-ink-soft">{role}</p>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Scope</p>
              <p className="mt-1 flex flex-wrap gap-1">
                {scope.map((s, i) => (
                  <span key={s} className="text-[0.95rem] text-ink-soft">
                    {s}{i < scope.length - 1 ? <span className="text-muted-soft"> · </span> : null}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Year</p>
              <p className="mt-1 text-[0.95rem] text-ink-soft">{year}</p>
            </div>
          </div>
        </Container>
      </header>
    );
  }

  /* ── Default: cinematic full-bleed cover ── */
  const hasBg = !!(image || color);
  const onDark = hasBg;

  return (
    <header>
      <div
        className="relative flex min-h-[80dvh] flex-col overflow-hidden md:min-h-[88dvh]"
        style={
          color
            ? { background: color }
            : image
              ? { backgroundColor: "#0a0a0a" }
              : { backgroundColor: "var(--bg-elevated)" }
        }
      >
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: onDark
              ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.08) 100%)"
              : "linear-gradient(to top, rgba(250,250,247,0.4) 0%, transparent 40%)",
          }}
        />

        <Container className="relative z-10 pt-8 md:pt-12">
          <Link
            href="/#work"
            className="mono inline-flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.16em] transition-colors"
            style={{ color: onDark ? "rgba(255,255,255,0.5)" : "var(--muted)" }}
          >
            <ArrowLeft size={14} />
            All work
          </Link>
        </Container>

        <Container className="relative z-10 mt-auto pb-12 md:pb-16">
          <p
            className="eyebrow"
            style={onDark ? { color: "rgba(255,255,255,0.5)" } : undefined}
          >
            {client} · {year}
          </p>
          <h1
            className="display mt-5 max-w-[24ch] leading-[1.02] tracking-tight"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 5.4rem)",
              color: onDark ? "#ffffff" : "var(--ink)",
            }}
          >
            {title}
          </h1>
        </Container>
      </div>

      {/* Metadata strip */}
      <Container className="py-12 md:py-16">
        <p className="max-w-[44rem] text-[1.1rem] leading-relaxed text-muted md:text-[1.18rem]">
          {tldr}
        </p>
        <div className="mt-8 flex flex-wrap items-start gap-x-10 gap-y-5 border-t border-border pt-6">
          <div>
            <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Role</p>
            <p className="mt-1 text-[0.95rem] text-ink-soft">{role}</p>
          </div>
          <div>
            <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Scope</p>
            <p className="mt-1 flex flex-wrap gap-1">
              {scope.map((s, i) => (
                <span key={s} className="text-[0.95rem] text-ink-soft">
                  {s}
                  {i < scope.length - 1 ? <span className="text-muted-soft"> · </span> : null}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">Year</p>
            <p className="mt-1 text-[0.95rem] text-ink-soft">{year}</p>
          </div>
        </div>
      </Container>
    </header>
  );
}
