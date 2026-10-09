import type { Metadata } from "next";
import ProjectMedia from "@/components/ProjectMedia";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Projects",
  "Explore ReqBot, the PBS Karachi transit dashboard, and Muhammad Sameer's web, backend, and desktop projects.", "/projects");

export default function AllProjectsPage() {
  return (
    <main className="container all-projects-page">
      <div className="projects-page-intro">
        <span className="section-number">PROJECT ARCHIVE</span>
        <h1>All projects.</h1>
        <p>Requirements writing, Karachi bus routes, desktop tools, and web apps. Open a project to see how it works and how to run it.</p>
      </div>

      <div className="all-projects-grid">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="gallery-project-card">
            <div className="gallery-project-image">
              <ProjectMedia
                project={project}
                sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 980px) 50vw, 308px"
              />
            </div>
            <div className="gallery-project-title">
              <h2>{project.title}</h2>
              <ArrowUpRight size={20} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
