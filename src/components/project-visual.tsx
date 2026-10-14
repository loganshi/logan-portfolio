import type { Project } from "@/content/projects";

export function ProjectVisual({ visual, compact = false }: { visual: Project["visual"]; compact?: boolean }) {
  return <div className={`project-visual visual-${visual}${compact ? " visual-compact" : ""}`} role="img" aria-label="Composição gráfica conceitual; não é uma captura de um projeto real">
    <div className="visual-noise" />
    <span className="visual-corner visual-corner-tl" /><span className="visual-corner visual-corner-br" />
    {visual === "flow" ? <div className="flow-art" aria-hidden="true">
      <div className="flow-caption">SYSTEM / CONNECTION</div>
      <div className="flow-track"><span className="flow-node">01<small>INPUT</small></span><i /><span className="flow-node flow-node-main">02<small>LOGIC</small></span><i /><span className="flow-node">03<small>OUTPUT</small></span></div>
      <div className="flow-bars"><span /><span /><span /><span /><span /><span /><span /><span /></div>
      <div className="flow-coordinate">[ 23°34&apos; / 46°38&apos; ]</div>
    </div> : null}
    {visual === "structure" ? <div className="structure-art" aria-hidden="true"><span className="structure-word">FORM<br />FOLLOWS<br /><em>FUNCTION.</em></span><div className="structure-outline" /><div className="structure-rule" /><small>CONTENT / STRUCTURE / EXPERIENCE</small></div> : null}
    {visual === "signal" ? <div className="signal-art" aria-hidden="true"><div className="signal-disc"><div className="signal-disc-inner" /><span>0<span>1</span></span></div><div className="signal-stripes"><i /><i /><i /><i /><i /></div><small>BUILDING SYSTEMS THAT CONNECT</small></div> : null}
    <span className="visual-disclaimer">VISUAL CONCEITUAL</span>
  </div>;
}
