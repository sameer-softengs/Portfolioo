"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <main>
      <AnimatedBackground />
      <Navbar onCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} setOpen={setCommandOpen} />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
