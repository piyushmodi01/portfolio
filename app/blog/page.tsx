import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPosts } from "@/lib/content";
import type { ContentItem, BlogPostMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Writing on craft, systems, and the AI–design seam.",
  alternates: { canonical: "https://piyushmodi.com/blog" },
  openGraph: {
    title: "Notes · Piyush Modi",
    description: "Writing on craft, systems, and the AI–design seam.",
    url: "https://piyushmodi.com/blog",
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <Container as="main" className="py-20 md:py-28">
      <Reveal>
        <Eyebrow>Notes</Eyebrow>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] tracking-tight max-w-[24ch]">
          Writing on craft, systems, and the AI&ndash;design seam.
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-muted">
          Occasional writing on how I think about design, systems, and the
          expanding seam between AI and craft. Infrequent and specific — no
          content treadmill here.
        </p>
      </Reveal>

      <div className="mt-16">
        {posts.length === 0 ? (
          <Reveal delay={80}>
            <div className="rounded-2xl border border-dashed border-border bg-bg-elevated p-8">
              <p className="display text-[1.5rem] leading-tight tracking-tight text-ink">
                First note coming soon.
              </p>
              <p className="mono mt-3 text-[0.78rem] uppercase tracking-[0.14em] text-muted-soft">
                &mdash; Piyush
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60} as="li">
                <PostRow post={post} />
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

function PostRow({ post }: { post: ContentItem<BlogPostMeta> }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 bg-bg-elevated px-6 py-5 transition-colors md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-6"
      aria-label={`Read: ${post.title}`}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        {post.publishedAt ? (
          <p className="mono text-[0.73rem] uppercase tracking-[0.14em] text-muted-soft">
            {formatDate(post.publishedAt)}
          </p>
        ) : null}
        <p className="display text-[clamp(1.2rem,2.5vw,1.6rem)] leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
          {post.title}
        </p>
        {post.summary ? (
          <p className="mt-0.5 max-w-[52ch] text-[0.93rem] text-muted">
            {post.summary}
          </p>
        ) : null}
      </div>
      <ArrowUpRight
        size={20}
        className="shrink-0 text-muted transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
