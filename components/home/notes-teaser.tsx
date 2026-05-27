import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { getBlogPosts } from "@/lib/content";
import type { ContentItem, BlogPostMeta } from "@/lib/content";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function NotesTeaser() {
  const allPosts = getBlogPosts();
  const posts = allPosts.slice(0, 2);

  return (
    <section id="notes" aria-label="Notes" className="relative py-24 md:py-36">
      <Container>
        <div className="mb-16 md:mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow number="04">Notes</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="display mt-4 text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[22ch]">
                Writing on craft, systems, and the AI&ndash;design seam.
              </h2>
            </Reveal>
          </div>
        </div>

        {posts.length === 0 ? (
          <Reveal delay={60}>
            <PlaceholderCard />
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={140}>
          <div className="mt-12">
            <ButtonLink href="/blog" variant="secondary" size="md">
              Read all notes
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PostCard({ post }: { post: ContentItem<BlogPostMeta> }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 transition-colors duration-200 hover:border-border-strong"
      aria-label={`Read: ${post.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {post.publishedAt ? (
            <p className="mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-soft">
              {formatDate(post.publishedAt)}
            </p>
          ) : null}
          <h3 className="text-[1rem] font-semibold leading-snug text-ink">
            {post.title}
          </h3>
          {post.summary ? (
            <p className="text-[0.92rem] leading-relaxed text-muted line-clamp-2">
              {post.summary}
            </p>
          ) : null}
        </div>
        <div className="mt-1 shrink-0 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight size={18} aria-hidden />
        </div>
      </div>
    </Link>
  );
}

function PlaceholderCard() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-bg-elevated p-6">
      <p className="text-[0.95rem] leading-relaxed text-muted">
        First note coming soon. &mdash; Piyush
      </p>
    </div>
  );
}
