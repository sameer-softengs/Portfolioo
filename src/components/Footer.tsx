import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-profile">
            <Link href="/#top" className="brand" aria-label="Muhammad Sameer home">
              <span className="brand-mark">S</span>
              <span>sameer.dev</span>
            </Link>
            <p>Thoughtful interfaces. Reliable systems.<br />Software built with purpose.</p>
            <span className="footer-location">Karachi, Pakistan</span>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link href="/#about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/#stack">Technical skills</Link>
            <Link href="/#journey">Journey</Link>
          </nav>
          <div className="footer-connect">
            <h2>Let’s connect</h2>
            <a className="footer-email" href="mailto:muhammadsameer4536@gmail.com">
              <Mail size={16} aria-hidden="true" />
              <span>muhammadsameer4536@gmail.com</span>
            </a>
            <div className="footer-socials">
              <a href="https://github.com/sameer-softengs" target="_blank" rel="noreferrer"><FaGithub size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://linkedin.com/in/sameer-softengs/" target="_blank" rel="noreferrer"><FaLinkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Muhammad Sameer. All rights reserved.</span>
          <span>Software engineer & full stack developer</span>
          <Link href="/#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
    </footer>
  );
}
