"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { lab } from "@/content/lab";
import type { Project } from "@/content/projects";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { IntegrationPreview, EditorialPreview, LayersPreview } from "@/components/project-previews";
import { useMediaQuery } from "@/hooks/use-media-query";

type StoryProject = Pick<Project, "slug" | "name" | "status" | "technologies">;
const scenes = lab["pt-BR"].scenes;
const previews = [IntegrationPreview, EditorialPreview, LayersPreview];

export function ProjectStory({ projects }: { projects: StoryProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const scrollStory = useMediaQuery("(min-width: 980px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(projects.length - 1, Math.floor(Math.max(0, value) * projects.length));
    if (scrollStory && next !== active) setActive(next);
  });

  function choose(index: number) {
    setActive(index);
    if (!scrollStory || !sectionRef.current) return;
    const element = sectionRef.current;
    const top = element.getBoundingClientRect().top + window.scrollY;
    const travel = element.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * ((index + 0.25) / projects.length), behavior: "instant" });
  }

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    choose(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  }

  return <section id="projetos" ref={sectionRef} className="story-section" aria-labelledby="story-title">
    <div className="story-sticky" data-scene={scenes[active].theme}>
      <div className="story-heading shell"><div><span className="lab-eyebrow">Selected work / em documentação</span><h2 id="story-title">Cada problema,<br />uma nova possibilidade.</h2></div><Link href="#experiencia" className="story-skip">Ir para experiência <ArrowDown /></Link></div>
      <div className="story-stage shell">
        {projects.map((project, index) => {
          const Preview = previews[index];
          return <motion.article key={project.slug} id={`scene-${project.slug}`} className={`story-scene story-scene-${scenes[index].theme}`} role="tabpanel" aria-labelledby={`project-tab-${index}`} aria-hidden={index !== active} inert={index !== active} initial={false} animate={{ opacity: index === active ? 1 : 0, y: reduced ? 0 : index === active ? 0 : index < active ? -85 : 110, scale: reduced ? 1 : index === active ? 1 : 0.95, rotate: reduced ? 0 : index === active ? 0 : index < active ? -2 : 2 }} transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }} style={{ pointerEvents: index === active ? "auto" : "none" }}>
            <div className="story-copy"><span className="story-project-label">{project.name}</span><h3>{scenes[index].headline}</h3><p>{scenes[index].description}</p><div className="story-tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><Link className="lab-round-link" href={`/projetos/${project.slug}`}><span className="lab-link-circle"><ArrowUpRight /></span>Abrir case completo</Link><small className="story-truth">{project.status === "briefed" ? "Escopo informado. Detalhes em validação." : "Estrutura provisória. Projeto real a documentar."}</small></div>
            <div className="story-preview"><span className="preview-concept">Composição conceitual interativa</span><Preview /></div>
          </motion.article>;
        })}
      </div>
      <div className="story-bottom shell"><div className="story-tabs" role="tablist" aria-label="Selecionar case">{projects.map((project, index) => <button key={project.slug} ref={(element) => { tabRefs.current[index] = element; }} type="button" id={`project-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`scene-${project.slug}`} tabIndex={active === index ? 0 : -1} onClick={() => choose(index)} onKeyDown={(event) => onTabKey(event, index)}><span>0{index + 1}</span><strong>{scenes[index].short}</strong><i /></button>)}</div><p className="story-instruction"><span className="story-desktop-hint">O scroll muda a cena.</span><span>As abas também.</span></p></div>
    </div>
  </section>;
}
