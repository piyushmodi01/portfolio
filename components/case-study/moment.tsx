import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { VideoPlayer } from "@/components/case-study/video-player";

type MomentProps = {
  caption: string;
  rationale?: string;
  /** Path to a video file — autoplays when scrolled into view */
  video?: string;
  /** Poster image shown before the video plays */
  poster?: string;
  /** Path to a static image */
  image?: string;
  alt?: string;
  /** Optional accent tint for placeholder when no media is supplied */
  tint?: string;
};

export function Moment({ caption, rationale, video, poster, image, alt, tint }: MomentProps) {
  const hasMedia = !!(video || image);

  return (
    <Container className="mt-20 md:mt-28">
      <Reveal>
        <figure className="flex flex-col gap-6">
          <div
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            style={!hasMedia && tint ? { background: tint } : undefined}
          >
            {video ? (
              <VideoPlayer src={video} poster={poster} />
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={alt ?? ""}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="mono text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                  Image · placeholder
                </span>
              </div>
            )}
          </div>

          <figcaption className="grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-[1.4fr_1fr]">
            <p className="text-[1rem] leading-relaxed text-ink-soft md:text-[1.05rem]">
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
