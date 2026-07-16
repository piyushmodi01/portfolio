import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://piyushmodi.com/sitemap.xml",
    host: "https://piyushmodi.com",
  };
}
