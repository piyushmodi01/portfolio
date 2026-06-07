import type { MetadataRoute } from "next";
import { getCaseStudies, getBlogPosts } from "@/lib/content";

const BASE = "https://piyushmodi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const studies = getCaseStudies().map((cs) => ({
    url: `${BASE}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const posts = getBlogPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPaths: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/work`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/playground`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  return [...staticPaths, ...studies, ...posts];
}
