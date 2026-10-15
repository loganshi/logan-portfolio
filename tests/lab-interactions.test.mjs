import assert from "node:assert/strict";
import { test, after, afterEach } from "node:test";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>", { url: "http://localhost:3000", pretendToBeVisual: true });
const reduced = process.env.LAB_REDUCED_MOTION === "1";
for (const key of ["window", "document", "HTMLElement", "Element", "SVGElement", "Node", "Event", "MouseEvent", "KeyboardEvent"]) {
  globalThis[key] = dom.window[key];
}
Object.defineProperty(globalThis, "navigator", { configurable: true, value: dom.window.navigator });
globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
dom.window.matchMedia = (query) => ({
  matches: reduced && query.includes("prefers-reduced-motion") && !query.includes("no-preference"),
  media: query, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {},
});
class TestIntersectionObserver {
  constructor(callback) { this.callback = callback; }
  observe(target) { this.callback([{ target, isIntersecting: true, intersectionRatio: 1 }], this); }
  unobserve() {}
  disconnect() {}
}
class TestResizeObserver { observe() {} unobserve() {} disconnect() {} }
globalThis.IntersectionObserver = dom.window.IntersectionObserver = TestIntersectionObserver;
globalThis.ResizeObserver = dom.window.ResizeObserver = TestResizeObserver;
dom.window.scrollTo = () => {};

const { createElement, act } = await import("react");
const { createRoot } = await import("react-dom/client");
const { Hero } = await import("../src/components/hero.tsx");
const { CapabilityMap } = await import("../src/components/capability-map.tsx");
const { ProjectStory } = await import("../src/components/project-story.tsx");
const { IntegrationPreview, EditorialPreview, LayersPreview } = await import("../src/components/project-previews.tsx");
const { projects } = await import("../src/content/projects.ts");
const { publicSiteAudits } = await import("../src/content/site-audits.ts");

let root;
let host;
async function render(Component, props = {}) {
  host = document.createElement("div");
  document.body.append(host);
  root = createRoot(host);
  await act(async () => { root.render(createElement(Component, props)); });
}
function button(text) {
  const element = [...host.querySelectorAll("button")].find((item) => {
    const label = item.cloneNode(true);
    label.querySelectorAll('[aria-hidden="true"]').forEach((child) => child.remove());
    return label.textContent.trim() === text;
  });
  assert.ok(element, `Button exists: ${text}`);
  return element;
}
async function click(element) { await act(async () => { element.click(); }); }
async function wait(ms) { await act(async () => { await new Promise((resolve) => setTimeout(resolve, ms)); }); }
afterEach(async () => { if (root) await act(async () => root.unmount()); host?.remove(); root = undefined; });
after(() => dom.window.close());

test("Hero supports touch controls and selecting a technical layer", async () => {
  await render(Hero);
  await click(button("Produto"));
  assert.equal(button("Produto").getAttribute("aria-pressed"), "true");
  const data = host.querySelector(".lab-module-data");
  await click(data);
  assert.match(host.querySelector("#system-description").textContent, /MySQL/);
  assert.equal(data.getAttribute("aria-pressed"), "true");
  await click(button("Ideia"));
  assert.equal(button("Ideia").getAttribute("aria-pressed"), "true");
});

test("Capabilities respond to arrow keys and expose the matching content", async () => {
  await render(CapabilityMap);
  const first = host.querySelector('[role="tab"][aria-selected="true"]');
  await act(async () => { first.focus(); first.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })); });
  assert.equal(document.activeElement.textContent.trim(), "Backend");
  assert.equal(document.activeElement.getAttribute("aria-selected"), "true");
  assert.equal(host.querySelector('[role="tabpanel"]').getAttribute("aria-labelledby"), "capability-tab-backend");
  assert.match(host.querySelector(".capability-description").textContent, /persistência de dados/);
  await click(button("Integrações"));
  assert.match(host.querySelector(".capability-description").textContent, /APIs e webhooks/);
});

test("Project chapters keep one accessible scene and retain each case route", async () => {
  await render(ProjectStory, { projects: projects.slice(0, 3) });
  const tabs = [...host.querySelectorAll('[role="tab"]')];
  await click(tabs[1]);
  const visible = [...host.querySelectorAll('[role="tabpanel"]')].filter((panel) => panel.getAttribute("aria-hidden") === "false");
  assert.equal(visible.length, 1);
  assert.ok(visible[0].querySelector('a[href="/projetos/experiencias-institucionais"]'));
  for (const panel of host.querySelectorAll('[aria-hidden="true"][role="tabpanel"]')) assert.ok(panel.hasAttribute("inert"));
  await act(async () => { tabs[1].dispatchEvent(new KeyboardEvent("keydown", { key: "End", bubbles: true })); });
  assert.equal(tabs[2].getAttribute("aria-selected"), "true");
  assert.equal(host.querySelector("#scene-solucoes-customizadas").getAttribute("aria-hidden"), "false");
});

test("Additional real project cases are available by distinct routes", () => {
  assert.ok(projects.some((project) => project.name === "Expo Neon" && project.slug === "experiencias-institucionais"));
  assert.ok(projects.some((project) => project.name === "Barcelona Academy" && project.slug === "barcelona-academy"));
  assert.ok(projects.some((project) => project.name === "FADISP" && project.slug === "fadisp"));
  assert.equal(new Set(projects.map(({ slug }) => slug)).size, projects.length);
});

test("Public technical audits cover all case routes without unverifiable backend claims", () => {
  for (const project of projects) {
    const audit = publicSiteAudits[project.slug];
    assert.ok(audit, `Audit exists for ${project.slug}`);
    assert.match(audit.url, /^https:\/\//);
    assert.ok(audit.observations.length > 0);
    assert.ok(audit.fingerprints?.length > 0, `Technology evidence documented for ${project.slug}`);
    for (const fingerprint of audit.fingerprints) {
      assert.ok(fingerprint.technology.length > 1);
      assert.ok(fingerprint.evidence.length > 5);
    }
    assert.ok(audit.sources.length > 0);
    assert.ok(audit.limitations.length > 30);
  }
});

test("Integration demonstration completes, announces its result, and can restart", async () => {
  await render(IntegrationPreview);
  await click(button("Simular conexão"));
  if (!reduced) { assert.ok(button("Conectando…").disabled); await wait(1600); }
  assert.match(host.querySelector('[role="status"]').textContent, /Fluxo concluído/);
  assert.equal(button("Repetir simulação").disabled, false);
  await click(button("Repetir simulação"));
  assert.match(host.querySelector('[role="status"]').textContent, reduced ? /Fluxo concluído/ : /Formulário/);
});

test("Editorial preview changes between desktop and mobile formats", async () => {
  await render(EditorialPreview);
  await click(button("Mobile"));
  assert.ok(host.querySelector('[aria-label="Prévia em formato mobile"]'));
  assert.equal(button("Mobile").getAttribute("aria-pressed"), "true");
  await click(button("Desktop"));
  assert.ok(host.querySelector('[aria-label="Prévia em formato desktop"]'));
});

test("The product layers separate and can be reassembled", async () => {
  await render(LayersPreview);
  const before = host.querySelector(".product-layer-interface").style.transform;
  await click(button("Separar camadas"));
  assert.equal(button("Reunir produto").getAttribute("aria-pressed"), "true");
  await wait(reduced ? 30 : 800);
  assert.notEqual(host.querySelector(".product-layer-interface").style.transform, before);
  await click(button("Reunir produto"));
  assert.equal(button("Separar camadas").getAttribute("aria-pressed"), "false");
});
