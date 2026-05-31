import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { VideoPlayer } from "@/components/case-study/video-player";

type MomentProps = {
  caption: string;
  rationale?: string;
  video?: string;
  poster?: string;
  image?: string;
  alt?: string;
  tint?: string;
  /**
   * CSS aspect-ratio value. "auto" lets the video set its own height.
   * Defaults to "16/10".
   */
  aspectRatio?: string;
  /** Playback speed. 1 = normal, 0.5 = half. Default 1. */
  playbackRate?: number;
  /** Fade left + right edges into the page background. */
  fadeEdges?: boolean;
  /**
   * Clip % from the top of the media — hides baked-in black bars.
   * Uses CSS clip-path inset.
   */
  cropTop?: number;
  /**
   * Clip % from the bottom of the media — hides baked-in black bars.
   */
  cropBottom?: number;
  /**
   * Constrains the figure width.
   * "full" = fills container (default), "md" = max-w-2xl centered, "sm" = max-w-lg centered
   */
  size?: "full" | "md" | "sm";
};

const sizeClass: Record<string, string> = {
  full: "",
  md: "max-w-2xl mx-auto",
  sm: "max-w-lg mx-auto",
};

export function Moment({
  caption,
  rationale,
  video,
  poster,
  image,
  alt,
  tint,
  aspectRatio = "16/10",
  playbackRate = 1,
  fadeEdges = false,
  cropTop = 0,
  cropBottom = 0,
  size = "full",
}: MomentProps) {
  const hasMedia = !!(video || image);
  const isNatural = aspectRatio === "auto";
  const hasCrop = cropTop > 0 || cropBottom > 0;

  const containerStyle: React.CSSProperties = {
    ...(!hasMedia && tint ? { background: tint } : {}),
    ...(isNatural ? { minHeight: "80px" } : { aspectRatio }),
  };

  const mediaStyle: React.CSSProperties = hasCrop
    ? { clipPath: `inset(${cropTop}% 0 ${cropBottom}% 0)` }
    : {};

  return (
    <Container className="mt-20 md:mt-28">
      <Reveal>
        <figure className={`flex flex-col gap-6 ${sizeClass[size]}`}>
          <div
            className="group relative w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            style={containerStyle}
          >
            {video ? (
              <div style={mediaStyle} className="h-full w-full">
                <VideoPlayer
                  src={video}
                  poster={poster}
                  playbackRate={playbackRate}
                  fit={isNatural ? "natural" : "cover"}
                />
              </div>
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={alt ?? ""}
                style={mediaStyle}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="mono text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                  Image · placeholder
                </span>
              </div>
            )}

            {/* Edge fades — blends white-bg video into warm page background */}
            {fadeEdges && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
                  style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
                  style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
                />
              </>
            )}
          </div>

          <figcaption className="grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-[1.4fr_1fr]">
            <p className="mono text-[0.8rem] leading-relaxed text-muted">
              {caption}
            </p>
            {rationale && (
              <p className="border-l border-border pl-4 text-[0.95rem] leading-relaxed text-muted md:border-l-0 md:pl-0 md:pt-1">
                <span className="mono mb-1 block text-[0.7rem] uppercase tracking-[0.16em] text-muted-soft">
                  Why this matters
                </span>
                {rationale}
              </p>
            )}
          </figcaption>
        </figure>
      </Reveal>
    </Container>
  );
}
