import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts, getBlogPost } from "@/lib/content";
import { Container } from "@/components/ui/container";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `https://piyushmodi.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://piyushmodi.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Container as="main" className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 mono text-[0.78rem] uppercase tracking-[0.14em] text-muted-soft transition-colors hover:text-ink min-h-[44px] -ml-1 pl-1"
        >
          <ArrowLeft
            size={14}
            aria-hidden
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          All notes
        </Link>

        {/* Header */}
        <div className="mt-10">
          {post.publishedAt ? (
            <p className="mono text-[0.78rem] uppercase tracking-[0.14em] text-muted-soft">
              {formatDate(post.publishedAt)}
            </p>
          ) : null}
          <h1 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
            {post.title}
          </h1>
          {post.summary ? (
            <p className="mt-4 text-[1.1rem] leading-relaxed text-muted">
              {post.summary}
            </p>
          ) : null}
        </div>

        {/* Divider */}
        <div className="mt-10 mb-10 border-t border-border" />

        {/* Body */}
        <div className="prose-root">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </div>
    </Container>
  );
}
