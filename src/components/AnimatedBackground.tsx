"use client";

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="orb orb-one"
        animate={{ x: [0, 80, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.16, 0.94, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-two"
        animate={{ x: [0, -70, 20, 0], y: [0, 55, -25, 0], scale: [1, 0.9, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid-overlay" />
      <div className="noise" />
    </div>
  );
}
