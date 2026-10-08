import type { Metadata } from "next";

const configuredUrl = process.env.SITE_URL || "https://portfolioo-xi-woad.vercel.app";
export const siteUrl = new URL(configuredUrl).origin;
export const siteName = "Muhammad Sameer";
export const isPreview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const image = `/og?title=${encodeURIComponent(socialTitle)}`;
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      title: socialTitle, description, siteName, type: "website", locale: "en_US",
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: `${socialTitle} portfolio preview` }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
