import Image from "next/image";
import { Play } from "lucide-react";
import ProjectVideo from "./ProjectVideo";

type ProjectMediaProps = {
  project: { image: string; imageAlt: string; video?: string };
  sizes: string;
  detail?: boolean;
};

export default function ProjectMedia({ project, sizes, detail = false }: ProjectMediaProps) {
  if (project.video && detail) {
    return <ProjectVideo src={project.video} poster={project.image} />;
  }

  return (
    <>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={detail}
        sizes={sizes}
        className={`project-image${detail ? " detail-project-image" : ""}`}
      />
      {project.video && <span className="project-video-badge"><Play size={13} aria-hidden="true" /> Watch demo</span>}
    </>
  );
}
