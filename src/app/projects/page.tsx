import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Muhammad Sameer",
  description: "Explore all software projects by Muhammad Sameer.",
};

export default function AllProjectsPage() {
  return (
    <main className="container all-projects-page">
      <div className="projects-page-intro">
        <span className="section-number">PROJECT ARCHIVE</span>
        <h1>All projects.</h1>
      </div>

      <div className="all-projects-grid">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="gallery-project-card">
            <div className="gallery-project-image">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) 50vw, 33vw"
                className="project-image"
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
