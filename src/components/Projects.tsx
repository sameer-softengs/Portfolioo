"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

const featuredProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section id="work" className="section container">
      <Reveal>
        <div className="section-head project-section-head">
          <div>
            <span className="section-number">02 / SELECTED WORK</span>
            <h2>Selected projects.</h2>
          </div>
        </div>
      </Reveal>

      <div className="featured-project-grid">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -110 : 110 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/projects/${project.id}`} className="featured-project-card">
              <div className="featured-project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 40px), 50vw"
                  className="project-image"
                />
              </div>
              <div className="featured-project-content">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Reveal className="project-grid-actions">
        <Link href="/projects" className="btn btn-secondary">
          View all projects <ArrowRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}
