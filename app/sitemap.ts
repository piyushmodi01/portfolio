import type { MetadataRoute } from "next";
import { getCaseStudies, getBlogPosts } from "@/lib/content";

const BASE = "https://piyushmodi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const studies = getCaseStudies().map((cs) => ({
    url: `${BASE}/work/${cs.slug}`,
    lastModified: new Date(),
  }));
  const posts = getBlogPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
  }));
  const staticPaths = ["", "/about", "/work", "/playground", "/blog"].map(
    (p) => ({
      url: `${BASE}${p}`,
      lastModified: new Date(),
    })
  );
  return [...staticPaths, ...studies, ...posts];
}
