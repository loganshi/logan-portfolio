"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { lab } from "@/content/lab";
import { ArrowUpRight } from "@/components/icons";

const capabilities = lab["pt-BR"].capabilities;

export function CapabilityMap() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const selected = capabilities[active];

  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % capabilities.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + capabilities.length - 1) % capabilities.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = capabilities.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus({ preventScroll: true });
  }

  return <section id="stack" className="capabilities-section" aria-labelledby="capabilities-title"><div className="shell capabilities-shell">
    <div className="capabilities-header"><span className="lab-eyebrow">Capabilities / mapa de possibilidades</span><h2 id="capabilities-title">O problema muda.<br />O repertório conecta.</h2><p>Escolha uma área para explorar as ferramentas e o que construo com elas.</p></div>
    <div className="capabilities-workspace"><div className="capabilities-tabs" role="tablist" aria-label="Áreas de atuação">{capabilities.map((item, index) => <button type="button" key={item.id} ref={(element) => { buttons.current[index] = element; }} id={`capability-tab-${item.id}`} role="tab" tabIndex={index === active ? 0 : -1} aria-selected={index === active} aria-controls="capability-panel" onClick={() => setActive(index)} onKeyDown={(event) => onKey(event, index)}><span>{item.title}</span><ArrowUpRight /></button>)}</div>
      <div id="capability-panel" role="tabpanel" aria-labelledby={`capability-tab-${selected.id}`} className="capability-panel" tabIndex={0}>
        <div className="capability-constellation" aria-label={`Tecnologias de ${selected.title}`}>
          <div className="capability-orbits" aria-hidden="true"><i /><i /><i /></div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{selected.positions.map(([x, y], index) => <motion.path key={`${selected.id}-${index}`} d={`M 50 50 Q ${50 + (x - 50) * 0.15} ${y} ${x} ${y}`} initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : index * 0.035 }} />)}</svg>
          <motion.div className="capability-core" animate={{ rotate: reduced ? 0 : active * 90 }} transition={{ type: "spring", stiffness: 70, damping: 18 }} aria-hidden="true"><span /></motion.div>
          <span className="capability-core-label">{selected.core}</span>
          <AnimatePresence mode="popLayout">{selected.tags.map((tag, index) => <motion.div className="capability-node-position" key={tag} initial={reduced ? false : { opacity: 0, scale: 0.6, x: "0%", y: "0%" }} animate={{ opacity: 1, scale: 1, x: `${selected.positions[index][0] - 50}%`, y: `${selected.positions[index][1] - 50}%` }} exit={{ opacity: 0, scale: reduced ? 1 : 0.7 }} transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : index * 0.025 }}><span>{tag}</span></motion.div>)}</AnimatePresence>
        </div>
        <div className="capability-description"><h3>{selected.description}</h3><p>{selected.outcome}</p></div>
      </div>
    </div>
    <div className="capabilities-footnote"><span>Ferramentas escolhidas a partir de cada desafio.</span><span>Escolha, explore, conecte.</span></div>
  </div></section>;
}
