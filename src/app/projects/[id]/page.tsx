import type { Metadata } from "next";
import ProjectMedia from "@/components/ProjectMedia";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { pageMetadata, serializeJsonLd, siteUrl } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };

  return pageMetadata(project.title, project.short, `/projects/${project.id}`);
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="container project-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
        "@context": "https://schema.org", "@type": project.repository ? "SoftwareSourceCode" : "CreativeWork",
        name: project.title, description: project.short, keywords: project.tags.join(", "),
        creator: { "@type": "Person", name: "Muhammad Sameer", ...(siteUrl ? { "@id": `${siteUrl}/#person` } : {}) },
        ...(project.repository ? { codeRepository: project.repository, programmingLanguage: project.programmingLanguages, runtimePlatform: project.runtimePlatform } : {}),
        ...(siteUrl ? { url: `${siteUrl}/projects/${project.id}`, image: `${siteUrl}${project.image}` } : {}),
      }) }} />
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
          {project.repository && <a className="detail-source-link" href={project.repository} target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>}
        </header>

        <div className="project-detail-visual">
          <ProjectMedia
            project={project}
            detail
            sizes="(max-width: 760px) calc(100vw - 64px), 520px"
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

      {(project.problem || project.solution || project.features.length > 0) && <div className="project-case-study">
        {project.problem && <section>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </section>}
        {project.solution && <section>
          <h2>{project.implementation ? "Overview" : "Solution"}</h2>
          <p>{project.solution}</p>
        </section>}
        {project.features.length > 0 && <section className="project-features">
          <h2>Key features</h2>
          <div className="project-feature-grid">
            {project.features.map((feature, index) => (
              <div key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>}
        {project.technicalStack && <section>
          <h2>Technology stack</h2>
          <dl className="project-facts">
            {project.technicalStack.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
        </section>}
        {project.organization && <section>
          <h2>Project structure</h2>
          <dl className="project-facts project-file-list">
            {project.organization.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
        </section>}
        {project.implementation && <section className="project-implementation">
          <h2>How it works</h2>
          <div className="project-implementation-grid">
            {project.implementation.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>}
        {project.runInstructions && <section className="project-run-section">
          <h2>Run locally</h2>
          <p>{project.runPrerequisites}</p>
          <pre className="project-run-commands"><code>{project.runCommands}</code></pre>
          <ol className="project-run-steps">{project.runInstructions.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>}
        {project.skills && <section className="project-skills-section">
          <h2>Engineering skills</h2>
          <div className="detail-tags">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>}
      </div>}

      <div className="project-detail-actions">
        {project.repository && <a href={project.repository} className="btn btn-primary" target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>}
        <Link href="/projects" className="btn btn-secondary detail-all-projects">
          Explore more projects <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
