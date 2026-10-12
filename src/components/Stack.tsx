"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Database, MonitorSmartphone, ServerCog } from "lucide-react";
import {
  SiDotnet,
  SiFirebase,
  SiGo,
  SiH2Database,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Reveal from "./Reveal";

const technologyGroups = {
  frontend: {
    label: "Frontend",
    icon: MonitorSmartphone,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
    ],
  },
  backend: {
    label: "Backend",
    icon: ServerCog,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: ".NET Core", icon: SiDotnet },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  database: {
    label: "Database",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "H2", icon: SiH2Database },
      { name: "SQL", icon: Database },
    ],
  },
} as const;

type TechnologyGroup = keyof typeof technologyGroups;

export default function Stack() {
  const [activeGroup, setActiveGroup] = useState<TechnologyGroup>("frontend");
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "120px 0px 120px 0px" });
  const active = technologyGroups[activeGroup];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setOrbitEnabled(false);
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="section container">
      <Reveal>
        <div className="section-head">
          <div>
            <span className="section-number">03 / STACK</span>
            <h2>Technical skills.</h2>
          </div>
        </div>
      </Reveal>

      <div className="interactive-stack">
        <Reveal className="stack-selector-card">
          <span className="stack-panel-label">Select a category</span>
          <div className="stack-category-list">
            {(Object.keys(technologyGroups) as TechnologyGroup[]).map((key, index) => {
              const group = technologyGroups[key];
              const GroupIcon = group.icon;

              return (
                <button
                  key={key}
                  type="button"
                  className={`stack-category-button ${activeGroup === key ? "active" : ""}`}
                  onClick={() => setActiveGroup(key)}
                  aria-pressed={activeGroup === key}
                >
                  <span className="stack-category-number">0{index + 1}</span>
                  <GroupIcon size={21} strokeWidth={1.6} />
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className={`stack-wheel-card${orbitEnabled && inView ? " orbit-motion-enabled" : ""}`}>
          <button
            type="button"
            className="orbit-motion-toggle"
            aria-pressed={orbitEnabled}
            onClick={() => setOrbitEnabled((enabled) => !enabled)}
          >
            {orbitEnabled ? "Pause orbit" : "Play orbit"}
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              className="technology-wheel"
              initial={{ opacity: 0, scale: 0.92, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotate: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="technology-orbit" aria-hidden="true" />
              <div className="technology-orbit-track">
                {active.technologies.map((technology, index) => {
                  const TechnologyIcon = technology.icon;
                  const style = {
                    "--orbit-angle": `${(360 / active.technologies.length) * index}deg`,
                  } as CSSProperties;

                  return (
                    <div className="technology-orbit-item" style={style} key={technology.name}>
                      <span>
                        <TechnologyIcon size={25} />
                        <small>{technology.name}</small>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="technology-wheel-center">
                <ActiveIcon size={30} strokeWidth={1.5} />
                <strong>{active.label}</strong>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
