import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isPreview ? { disallow: "/" } : { allow: "/" }) },
    ...(siteUrl && !isPreview ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
