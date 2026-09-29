"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, ArrowUpRight, X } from "lucide-react";

const actions = [
  { label: "About me", hint: "Profile", target: "#about" },
  { label: "Featured work", hint: "Projects", target: "#work" },
  { label: "Technology stack", hint: "Skills", target: "#stack" },
  { label: "Engineering journey", hint: "Timeline", target: "#journey" },
  { label: "Contact", hint: "Let's talk", target: "#contact" },
];

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const filtered = useMemo(
    () => actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const go = (target: string) => {
    setOpen(false);
    setQuery("");
    setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            className="command-panel"
            initial={{ opacity: 0, scale: 0.96, y: -18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -18 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="command-search">
              <Search size={18} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section..."
              />
              <button onClick={() => setOpen(false)}><X size={17} /></button>
            </div>

            <div className="command-results">
              {filtered.map((action) => (
                <button key={action.target} onClick={() => go(action.target)}>
                  <span>
                    <strong>{action.label}</strong>
                    <small>{action.hint}</small>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
