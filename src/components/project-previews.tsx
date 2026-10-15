"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@/components/icons";

export function IntegrationPreview() {
  const [phase, setPhase] = useState(0);
  const [run, setRun] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduced = useReducedMotion();
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function simulate() {
    timers.current.forEach(clearTimeout);
    setRun((value) => value + 1);
    if (reduced) { setPhase(3); return; }
    setPhase(1);
    timers.current = [setTimeout(() => setPhase(2), 700), setTimeout(() => setPhase(3), 1500)];
  }

  return <div className="integration-preview">
    <div className="integration-orbit" aria-hidden="true" />
    <div className="demo-browser integration-form">
      <div className="demo-chrome"><span /><span /><span /><small>formulário / demonstração</small></div>
      <div className="integration-form-body"><span className="demo-overline">O início de uma conexão</span><strong>Vamos<br />conversar.</strong><div className="demo-field">Nome do contato<span /></div><div className="demo-field">E-mail profissional<span /></div><button type="button" className="demo-submit" aria-label="Simular envio do formulário" onClick={simulate} disabled={phase > 0 && phase < 3}>Enviar <ArrowRight /></button></div>
    </div>
    <div className="integration-route" aria-hidden="true"><span className={phase >= 1 ? "is-on" : ""} /><i /><span className={phase >= 2 ? "is-on" : ""} /><i /><span className={phase >= 3 ? "is-on" : ""} />{phase > 0 && phase < 3 ? <motion.b key={run} initial={{ x: 0 }} animate={{ x: "100%" }} transition={{ duration: 1.5, ease: "linear" }} /> : null}</div>
    <motion.div className="integration-destination" animate={{ scale: phase === 3 ? [1, 1.06, 1] : 1 }} transition={{ duration: reduced ? 0 : 0.4 }}><span className="destination-symbol" aria-hidden="true">↗</span><span>Salesforce</span><small>{phase === 3 ? "Conexão demonstrada" : "Destino da integração"}</small></motion.div>
    <div className="preview-action"><button type="button" onClick={simulate} disabled={phase > 0 && phase < 3}>{phase > 0 && phase < 3 ? "Conectando…" : phase === 3 ? "Repetir simulação" : "Simular conexão"}<ArrowRight /></button><span role="status" aria-live="polite">{["Explore o fluxo", "Formulário → integração", "Integração → plataforma", "Fluxo concluído — demonstração local"][phase]}</span></div>
  </div>;
}

export function EditorialPreview() {
  const [mobile, setMobile] = useState(false);
  const reduced = useReducedMotion();
  return <div className="editorial-preview">
    <span className="editorial-backtype" aria-hidden="true">Aa</span>
    <motion.div layout role="group" aria-label={`Prévia em formato ${mobile ? "mobile" : "desktop"}`} className={`demo-browser editorial-browser${mobile ? " is-mobile" : ""}`} transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <div className="demo-chrome"><span /><span /><span /><small>institucional / conceito</small></div>
      <div className="editorial-screen"><div className="editorial-site-nav"><b>estudo visual<span>®</span></b><i aria-hidden="true">≡</i></div><div className="editorial-cover"><div><small>Composição conceitual para eventos</small><strong>Novos<br />espaços.<br /><em>Conexões.</em></strong></div><div className="editorial-flower" aria-hidden="true"><i /><i /><i /><i /></div></div><div className="editorial-site-bottom"><span>Explorando novas experiências</span><span aria-hidden="true">↗</span></div></div>
    </motion.div>
    <div className="preview-action editorial-action"><div className="preview-toggle" aria-label="Formato da prévia"><button type="button" aria-pressed={!mobile} onClick={() => setMobile(false)}>Desktop</button><button type="button" aria-pressed={mobile} onClick={() => setMobile(true)}>Mobile</button></div><span>Altere o formato da composição</span></div>
  </div>;
}

export function LayersPreview() {
  const [exploded, setExploded] = useState(false);
  const reduced = useReducedMotion();
  const transition = { duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
  return <div className="layers-preview">
    <div className="layers-perspective" data-exploded={exploded}>
      <motion.div className="product-layer product-layer-data" animate={{ y: exploded ? "45%" : "8%", rotateX: exploded ? 38 : 8, rotateZ: -8 }} transition={transition}><span>03 / Dados</span><div className="layer-data-lines"><i /><i /><i /><i /><i /></div></motion.div>
      <motion.div className="product-layer product-layer-logic" animate={{ y: exploded ? "-2%" : "0%", rotateX: exploded ? 38 : 8, rotateZ: -8 }} transition={transition}><span>02 / Lógica</span><div className="layer-logic-graphic"><i /><i /><i /><i /></div></motion.div>
      <motion.div className="product-layer product-layer-interface" animate={{ y: exploded ? "-55%" : "-8%", rotateX: exploded ? 38 : 8, rotateZ: -8 }} transition={transition}><div className="layer-mini-nav"><span>01 / Interface</span><i /></div><div className="layer-interface-content"><strong>Made<br />to connect.</strong><div className="layer-interface-orb" /></div><div className="layer-interface-footer"><span>Uma solução. Várias camadas.</span><ArrowRight /></div></motion.div>
    </div>
    <div className="preview-action"><button type="button" aria-pressed={exploded} onClick={() => setExploded((value) => !value)}>{exploded ? "Reunir produto" : "Separar camadas"}<span aria-hidden="true">{exploded ? "−" : "+"}</span></button><span>{exploded ? "Interface + lógica + dados" : "Explore o que está por trás da interface"}</span></div>
  </div>;
}
