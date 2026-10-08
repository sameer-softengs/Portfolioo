import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { isPreview, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || isPreview) return [];
  return ["/", "/projects", ...projects.map((project) => `/projects/${project.id}`)]
    .map((path) => ({ url: `${siteUrl}${path}` }));
}
