import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Muhammad Sameer`,
    description: project.short,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="container project-detail-page">
      <Link href="/projects" className="detail-back-link">
        <ArrowLeft size={17} /> All projects
      </Link>

      <section className="project-detail-hero">
        <header className="project-detail-header">
          <div className="project-detail-meta">
            <span className="section-number">PROJECT / {project.index}</span>
            <span className="detail-category">{project.category}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.short}</p>
          <div className="detail-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>

        <div className="project-detail-visual">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) calc(100vw - 64px), 520px"
            className="project-image detail-project-image"
          />
        </div>
      </section>

      <div className="project-metrics" aria-label="Project highlights">
        {project.metrics.map((metric, index) => (
          <div key={metric}>
            <span>0{index + 1}</span>
            <strong>{metric}</strong>
          </div>
        ))}
      </div>

      <div className="project-case-study">
        <section>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </section>
        <section className="project-features">
          <h2>Key features</h2>
          <div className="project-feature-grid">
            {project.features.map((feature, index) => (
              <div key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Link href="/projects" className="btn btn-secondary detail-all-projects">
        Explore more projects <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
