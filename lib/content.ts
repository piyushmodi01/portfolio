import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  scope: string[];
  summary: string;
  cover?: string;
  order: number;
};

export type ContentItem<M> = M & { content: string };

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readFolder<M extends { slug?: string }>(
  folder: string
): ContentItem<M>[] {
  const dir = path.join(CONTENT_ROOT, folder);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return { ...(data as M), slug, content } as ContentItem<M>;
  });
}

export function getCaseStudies(): ContentItem<CaseStudyMeta>[] {
  const items = readFolder<CaseStudyMeta>("case-studies");
  return items.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCaseStudy(
  slug: string
): ContentItem<CaseStudyMeta> | null {
  const items = readFolder<CaseStudyMeta>("case-studies");
  return items.find((it) => it.slug === slug) ?? null;
}

export type BlogPostMeta = {
  slug: string;
  title: string;
  summary: string;
  publishedAt?: string;
};

export function getBlogPosts(): ContentItem<BlogPostMeta>[] {
  const items = readFolder<BlogPostMeta>("blog");
  return items.sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")
  );
}

export function getBlogPost(
  slug: string
): ContentItem<BlogPostMeta> | null {
  const items = readFolder<BlogPostMeta>("blog");
  return items.find((it) => it.slug === slug) ?? null;
}
