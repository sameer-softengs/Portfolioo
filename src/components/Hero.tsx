"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const words = ["systems.", "interfaces.", "products.", "experiences."];

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-meta">
      
        <motion.span
          className="hero-code"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          KARACHI · PK
        </motion.span>
      </div>

      <div className="hero-grid">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Software Engineering · Full Stack Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            I build digital
            <span className="hero-outline"> systems that feel</span>
            <span className="hero-gradient"> engineered.</span>
          </motion.h1>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            I’m Muhammad Sameer, a software engineering student and full stack developer
            focused on practical products, backend systems, realtime experiences and
            enterprise workflows.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#work" className="btn btn-primary">
              Explore work <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero-side"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.75 }}
        >
          <div className="hero-links">
            <a href="https://github.com/sameer-softengs/" target="_blank" rel="noreferrer">
              <FaGithub size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/sameer-softengs/" target="_blank" rel="noreferrer">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="#contact">
              <ArrowDownRight size={18} /> Contact
            </a>
          </div>
        </motion.aside>
      </div>

      <div className="marquee-shell">
        <motion.div
          className="marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <span key={`${word}-${i}`}>{word}<b>✦</b></span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
