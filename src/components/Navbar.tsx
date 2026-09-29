"use client";

import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = ["about", "work", "stack", "journey", "contact"];

export default function Navbar({ onCommand }: { onCommand: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`nav-wrap ${scrolled ? "scrolled" : ""}`}
    >
      <nav className="nav container">
        <a href="#top" className="brand" aria-label="Sameer home">
          <span className="brand-mark">S</span>
          <span>sameer.dev</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link}`}>
              {link}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="command-button" onClick={onCommand} aria-label="Open command palette">
            <Command size={16} />
            <span>Quick nav</span>
            <kbd>⌘K</kbd>
          </button>

          <button
            className="menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            {links.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
