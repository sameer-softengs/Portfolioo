import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { isPreview, pageMetadata, serializeJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata("Muhammad Sameer | Full Stack Developer in Karachi",
    "Meet Muhammad Sameer, a software engineering student at Bahria University Karachi and full stack developer building web applications, desktop software and backend systems.", "/"),
  metadataBase: new URL(siteUrl),
  title: { default: "Muhammad Sameer | Full Stack Developer in Karachi", template: "%s | Muhammad Sameer" },
  authors: [{ name: "Muhammad Sameer" }],
  creator: "Muhammad Sameer",
  category: "Technology",
  robots: { index: !isPreview, follow: !isPreview },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Person", name: "Muhammad Sameer", ...(siteUrl ? { "@id": `${siteUrl}/#person`, url: siteUrl } : {}),
              description: "Software engineering student at Bahria University Karachi and full stack developer building web, desktop and backend applications.",
              jobTitle: "Full Stack Developer",
              homeLocation: { "@type": "Place", name: "Karachi, Pakistan" },
              affiliation: { "@type": "CollegeOrUniversity", name: "Bahria University Karachi Campus" },
              sameAs: ["https://github.com/sameer-softengs", "https://linkedin.com/in/sameer-softengs/"],
              knowsAbout: ["Software Engineering", "Full Stack Development", "C#", "Go", "React", "Next.js", "Backend Development"],
            },
            { "@type": "WebSite", name: "Muhammad Sameer Portfolio", ...(siteUrl ? { url: siteUrl, "@id": `${siteUrl}/#website` } : {}),
              inLanguage: "en", author: { "@type": "Person", name: "Muhammad Sameer", ...(siteUrl ? { "@id": `${siteUrl}/#person` } : {}) } },
          ],
        }) }} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
