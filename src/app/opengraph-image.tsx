import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const nodes = [
  { label: "UI", x: 745, y: 145, color: "#e9e5dc", ink: "#24231f", angle: "-10deg" },
  { label: "API", x: 1020, y: 135, color: "#d8683e", ink: "#2b170e", angle: "10deg" },
  { label: "DATA", x: 745, y: 380, color: "#2d443b", ink: "#dce5d3", angle: "8deg" },
  { label: "LOGIC", x: 1010, y: 375, color: "#29282d", ink: "#e9e5dc", angle: "-8deg" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0c0c0e", color: "#e9e5dc", padding: 60, fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 620 }}>
        <span style={{ fontSize: 21, color: "#aaa7a3", letterSpacing: 2 }}>LOGAN MENDES CONTARDI</span>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 102, fontWeight: 700, lineHeight: .93, letterSpacing: -6 }}><span>From</span><span style={{ color: "#79767d" }}>problem</span><span style={{ color: "#ff6b35" }}>to product.</span></div>
        <span style={{ fontSize: 21 }}>Software Developer / Full-Stack Developer</span>
      </div>
      <svg width="450" height="450" viewBox="0 0 450 450" style={{ position: "absolute", left: 700, top: 85 }}><path d="M100 110 Q240 110 240 225 M370 100 Q370 225 240 225 M100 345 Q100 225 240 225 M365 345 Q240 345 240 225" fill="none" stroke="#735144" strokeWidth="2" /><circle cx="240" cy="225" r="45" fill="#ff6b35" /><path d="M220 225h40m-20-20v40" stroke="#24170f" strokeWidth="9" /></svg>
      {nodes.map((node) => <div key={node.label} style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: node.x, top: node.y, width: 110, height: 105, borderRadius: 20, background: node.color, color: node.ink, transform: `rotate(${node.angle})`, border: "1px solid #ffffff25", fontSize: 24, fontWeight: 700 }}>{node.label}</div>)}
    </div>, size,
  );
}
