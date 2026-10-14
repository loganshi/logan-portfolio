"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { lab, type HeroNode } from "@/content/lab";
import { profile } from "@/content/profile";
import { useMediaQuery } from "@/hooks/use-media-query";

const copy = lab["pt-BR"].hero;

function SystemNode({ node, progress, selected, onSelect }: { node: HeroNode; progress: MotionValue<number>; selected: boolean; onSelect: () => void }) {
  const x = useTransform(progress, [0, 1], [`${node.from[0] - 50}%`, `${node.to[0] - 50}%`]);
  const y = useTransform(progress, [0, 1], [`${node.from[1] - 50}%`, `${node.to[1] - 50}%`]);
  const rotate = useTransform(progress, [0, 1], [node.angle, 0]);
  return <motion.div className="lab-module-position" style={{ x, y }}>
    <motion.button type="button" className={`lab-module lab-module-${node.id}`} style={{ rotate }} data-selected={selected} aria-pressed={selected} aria-controls="system-description" onClick={onSelect}>
      <span className="lab-module-symbol" aria-hidden="true">{node.symbol}</span>
      <span className="lab-module-label">{node.label}<span aria-hidden="true">↗</span></span>
    </motion.button>
  </motion.div>;
}

function SystemConnection({ node, progress, selected }: { node: HeroNode; progress: MotionValue<number>; selected: boolean }) {
  const path = useTransform(progress, (value) => {
    const x = node.from[0] + (node.to[0] - node.from[0]) * value;
    const y = node.from[1] + (node.to[1] - node.from[1]) * value;
    return `M ${x} ${y} C ${x} 50, 50 ${y}, 50 50`;
  });
  return <motion.path d={path} className={selected ? "system-wire is-active" : "system-wire"} />;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageBounds = useRef<DOMRect | null>(null);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 980px) and (min-height: 650px)");
  const visible = useInView(ref, { amount: 0.1 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const manual = useMotionValue(-1);
  const assembled = useTransform(() => manual.get() >= 0 ? manual.get() : (!reduced && desktop ? scrollYProgress.get() : 0));
  const smoothAssembly = useSpring(assembled, { stiffness: 75, damping: 22 });
  const progress = reduced ? assembled : smoothAssembly;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 80, damping: 22 });
  const rotateX = useSpring(pointerY, { stiffness: 80, damping: 22 });
  const frameOpacity = useTransform(progress, [0, 0.8], [0.1, 0.85]);
  const coreScale = useTransform(progress, [0, 1], [0.88, 1.05]);
  const titleX = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -24]);

  function selectMode(value: number | null) { setMode(value); manual.set(value ?? -1); }
  function followPointer(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse" || !stageRef.current) return;
    const bounds = stageBounds.current ?? stageRef.current.getBoundingClientRect();
    stageBounds.current = bounds;
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16);
    pointerY.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 14);
  }

  return <section id="inicio" ref={ref} className="lab-hero" data-visible={visible} aria-labelledby="hero-title">
    <div className="lab-hero-sticky">
      <div className="lab-hero-top shell"><span className="lab-eyebrow">Logan Mendes Contardi</span><span className="lab-edition">Independent thinking. Connected systems.</span></div>
      <div className="lab-hero-composition shell">
        <motion.div className="lab-hero-type" style={{ x: desktop ? titleX : 0 }}>
          <p className="lab-role">Software Developer<br /><span>Full-Stack Developer</span></p>
          <h1 id="hero-title"><span>From</span><span className="lab-word-problem">problem</span><span className="lab-title-last"><em>to</em> product<span className="lab-title-dot">.</span></span></h1>
          <p className="lab-hero-intro">{copy.intro}</p>
          <Link className="lab-round-link" href="#projetos"><span className="lab-link-circle"><ArrowUpRight /></span>Explorar os cases</Link>
        </motion.div>
        <div className="lab-system" ref={stageRef} onPointerEnter={() => { stageBounds.current = stageRef.current?.getBoundingClientRect() ?? null; }} onPointerMove={followPointer} onPointerLeave={() => { stageBounds.current = null; pointerX.set(0); pointerY.set(0); }}>
          <div className="lab-system-halo" aria-hidden="true" />
          <motion.div className="lab-system-canvas" style={{ rotateX, rotateY }}>
            <motion.div className="lab-system-frame" style={{ opacity: frameOpacity }} aria-hidden="true"><span>product / connected</span></motion.div>
            <svg className="lab-system-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{copy.nodes.map((node, index) => <SystemConnection key={node.id} node={node} progress={progress} selected={index === active} />)}</svg>
            <motion.div className="lab-system-core" style={{ scale: coreScale }} aria-hidden="true"><span className="lab-core-cross" /><span className="lab-core-cross" /><span className="lab-core-cross" /><span className="lab-core-cross" /><i /></motion.div>
            {copy.nodes.map((node, index) => <SystemNode key={node.id} node={node} progress={progress} selected={index === active} onSelect={() => setActive(index)} />)}
          </motion.div>
          <span className="lab-system-coordinate" aria-hidden="true">a living system / 4 connected layers</span>
        </div>
      </div>
      <div className="lab-hero-bottom shell">
        <div className="lab-system-controls"><div className="lab-segmented" aria-label="Organização do sistema"><button type="button" aria-pressed={mode === 0 || (mode === null && (!desktop || !!reduced))} onClick={() => selectMode(0)}>Ideia</button><button type="button" aria-pressed={mode === 1} onClick={() => selectMode(1)}>Produto <ArrowUpRight /></button></div>{desktop && !reduced ? <button type="button" className="lab-auto-control" onClick={() => selectMode(null)} aria-pressed={mode === null}>Seguir scroll</button> : null}</div>
        <p id="system-description" className="lab-system-description" aria-live="polite"><strong>{copy.nodes[active].label}.</strong> {copy.nodes[active].description}</p>
        <Link className="lab-scroll-cue" href="#sobre" aria-label="Continuar para sobre Logan"><ArrowDown /><span>Scroll to connect</span></Link>
      </div>
      <div className="lab-hero-credit"><span>{profile.years} anos criando para a web</span><span>{copy.instruction}</span></div>
    </div>
  </section>;
}
