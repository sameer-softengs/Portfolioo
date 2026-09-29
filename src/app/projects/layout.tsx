import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <header className="projects-nav">
        <div className="container projects-nav-inner">
          <Link href="/" className="brand" aria-label="Return to portfolio home">
            <span className="brand-mark">S</span>
            <span>sameer.dev</span>
          </Link>
          <Link href="/#work" className="projects-back-link">
            <ArrowLeft size={16} /> Portfolio
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
