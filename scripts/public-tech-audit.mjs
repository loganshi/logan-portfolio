// Public-only technology footprint sampler.
// Makes one GET request per known public homepage; does not authenticate,
// submit forms, crawl private paths, or store HTML and personal information.
import { mkdir, writeFile } from "node:fs/promises";

const sites = [
  ["Barcelona Academy", "https://barcaacademy.com.br/"],
  ["Expo Neon", "https://www.exponeon.com.br/"],
  ["FADISP", "https://fadisp.com.br/"],
  ["UNIALFA", "https://www.unialfa.com.br/"],
  ["Faculdade Belavista", "https://faculdadebelavista.edu.br/"],
  ["Grupo Audens", "https://www.audensgroup.com.br/"],
  ["Colégio Alves Faria", "https://www.colegioalvesfaria.com.br/"],
  ["Sinnapse", "https://sinnapse.com/"],
  ["FK Partners", "https://fkpartners.com/"],
];
const rules = [
  ["WordPress (assets)", /(?:\/wp-content\/|\/wp-includes\/)/i],
  ["Elementor (asset)", /(?:\/plugins\/elementor(?:-pro)?\/|elementor-frontend)/i],
  ["Contact Form 7 (asset)", /(?:\/plugins\/contact-form-7\/|wpcf7)/i],
  ["Gravity Forms (asset)", /(?:\/plugins\/gravityforms\/|gform_wrapper)/i],
  ["WPForms (asset)", /(?:\/plugins\/wpforms(?:-lite)?\/|wpforms-form)/i],
  ["WooCommerce (asset)", /(?:\/plugins\/woocommerce\/|wc-cart-fragments)/i],
  ["Yoast SEO (asset)", /(?:\/plugins\/wordpress-seo\/|yoast-seo)/i],
  ["Rank Math (asset)", /(?:\/plugins\/seo-by-rank-math\/|rank-math)/i],
  ["Next.js (asset)", /\/_next\/static\//i],
  ["Nuxt (asset)", /\/_nuxt\//i],
  ["Google Tag Manager", /googletagmanager\.com\/(?:gtm\.js|ns\.html)/i],
  ["Google Analytics", /google-analytics\.com\/|googletagmanager\.com\/gtag\/js/i],
  ["Meta Pixel", /connect\.facebook\.net\/.+fbevents\.js/i],
  ["HubSpot (asset)", /js\.hs-scripts\.com\/|js\.hsforms\.net\//i],
  ["jQuery (asset)", /(?:jquery(?:\.min)?\.js|jquery-[0-9])/i],
];
const output = [];
for (const [name, url] of sites) {
  const result = { name, requestedUrl: url, checkedAt: new Date().toISOString(), observations: [], limitations: "Assets on the current public homepage cannot establish historical authorship, private plugins, CRM, webhooks, API calls or payment gateway." };
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(12000), headers: { "user-agent": "Mozilla/5.0 (compatible; PortfolioPublicTechResearch/1.0)" }, redirect: "follow" });
    result.finalUrl = response.url;
    result.status = response.status;
    result.contentType = response.headers.get("content-type") || "";
    if (response.ok && result.contentType.includes("text/html")) {
      const html = (await response.text()).slice(0, 3_000_000);
      const publicAssets = [...html.matchAll(/(?:src|href)\s*=\s*["']([^"'<>]+)["']/gi)]
        .map(m => m[1].split("?")[0].split("#")[0])
        .filter(s => /\.(?:css|js|svg|webp|jpg|png|woff2?)(?:$|\/)|\/wp-content\/|\/_next\/|\/_nuxt\//i.test(s));
      const assetEvidence = publicAssets.filter(s => /\/wp-content\/(?:plugins|themes)\//i.test(s))
        .map(s => { const hit = s.match(/\/wp-content\/(plugins|themes)\/([^/]+)/i); return hit ? hit[1]+"/"+hit[2] : null; })
        .filter(Boolean);
      const evidence = [...new Set(assetEvidence)].slice(0, 28);
      result.publicAssetSlugs = evidence;
      for (const [technology, rule] of rules) {
        // Prefer inspectable public asset paths, but HTML markup itself can carry a signal.
        const matches = [...new Set([...publicAssets, html].filter(v => rule.test(v)).map(v => v===html ? "page markup" : v).slice(0, 3))];
        if (matches.length) result.observations.push({ technology, evidence: matches.map(v => v==="page markup" ? v : v.slice(0, 200)) });
      }
      const formCount = (html.match(/<form\b/gi) || []).length;
      result.publicFormElements = formCount;
      const version = html.match(/<meta\s+name=["']generator["']\s+content=["']([^"'<>]+)["']/i);
      if(version) result.generatorMeta = version[1].slice(0, 120);
      if (result.observations.some(item => item.technology === "WordPress (assets)")) {
        // WordPress REST index is a documented public, unauthenticated discovery resource.
        // Record only namespaces, not route parameters or user/content records.
        try {
          const restUrl = new URL("/wp-json/", response.url);
          const restResponse = await fetch(restUrl, {
            signal: AbortSignal.timeout(9000),
            headers: { "user-agent": "Mozilla/5.0 (compatible; PortfolioPublicTechResearch/1.0)" }
          });
          result.publicWpRest = { status: restResponse.status };
          if (restResponse.ok && (restResponse.headers.get("content-type") || "").includes("json")) {
            const doc = await restResponse.json();
            result.publicWpRest.namespaces = Array.isArray(doc.namespaces)
              ? doc.namespaces.filter(v => typeof v === "string").slice(0, 80) : [];
          }
        } catch (e) { result.publicWpRest = { error: String(e).slice(0, 110) }; }
      }
    }
  } catch (e) { result.error = String(e).slice(0, 220); }
  output.push(result);
  console.log(name+": "+(result.status ?? result.error)+", "+result.observations.map(x=>x.technology).join(", "));
}
await mkdir("research-output", {recursive:true});
await writeFile("research-output/public-site-footprints.json", JSON.stringify({ scope:"public homepage HTML only", evidenceDate:new Date().toISOString(), sites:output },null,2)+"\n");
