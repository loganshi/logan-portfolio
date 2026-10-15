import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { getProject, projects } from "@/content/projects";
import { publicSiteAudits } from "@/content/site-audits";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { title: `${project.name} | Logan Mendes Contardi`, description: project.summary, url: `/projetos/${project.slug}`, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];
  const audit = publicSiteAudits[project.slug];

  return <main id="conteudo" className="case-page"><div className="shell"><div className="case-top"><Link href="/#projetos" className="back-link"><ArrowRight /> Voltar aos projetos</Link><span>CASE / {project.status === "documented" ? "PROJETO AUTORAL" : project.status === "concept" ? "ESTRUTURA PROVISÓRIA" : "ATUAÇÃO INFORMADA"}</span></div><div className="case-heading"><p>{project.category}</p><h1>{project.name}</h1><div className="case-heading-bottom"><p>{project.summary}</p><span>{project.yearLabel}</span></div></div><div className="case-hero-visual"><ProjectVisual visual={project.visual} /></div><div className="case-notice"><span className="notice-icon">i</span><p>{project.status === "documented" ? "Este case descreve o próprio portfólio. As imagens da galeria são estudos gráficos, não capturas literais da interface." : project.status === "concept" ? "Este case é uma estrutura editorial provisória. Ainda não descreve uma entrega específica de Logan." : "Este case apresenta um projeto real a partir da atuação informada. As composições visuais são conceituais; detalhes e evidências serão adicionados após validação."}</p></div>
    <div className="case-body"><aside className="case-side"><span>Sobre o projeto</span><div className="case-side-rule" /><p>Tecnologias utilizadas ou informadas no case</p><div className="case-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></aside><div className="case-content"><Reveal className="case-intro"><h2>O projeto<br /><span>em contexto.</span></h2><p>{project.context}</p></Reveal><div className="case-detail-grid"><Reveal><span>01 / Desafio</span><h3>O ponto de partida</h3><p>{project.challenge}</p></Reveal><Reveal delay={0.08}><span>02 / Solução</span><h3>O caminho</h3><p>{project.solution}</p></Reveal><Reveal delay={0.12}><span>03 / Contribuição</span><h3>Minha atuação</h3><p>{project.contribution}</p></Reveal><Reveal delay={0.16}><span>04 / Resultados</span><h3>O que mudou</h3><p>{project.results}</p></Reveal></div></div></div>
    {audit ? <section className="case-audit" aria-labelledby="case-audit-title"><div className="section-marker"><span className="marker-dot" /> Pesquisa técnica <span className="marker-rule" /></div><div className="case-audit-header"><div><span className="case-audit-date">Pesquisa de evidências públicas · {audit.checkedAt}</span><h2 id="case-audit-title">O que foi possível verificar.</h2></div><a className="case-audit-site" href={audit.url} target="_blank" rel="noopener noreferrer">Conhecer o site <ArrowUpRight /></a></div>{audit.fingerprints?.length ? <div className="case-audit-footprints"><h3>Tecnologias e arquivos detectados atualmente</h3><p>Indícios dos arquivos públicos do site em 2026. Não são confirmação da stack ou da autoria da entrega original.</p><div className="case-audit-footprint-grid">{audit.fingerprints.map((item) => <div className="case-audit-footprint" key={item.technology}><strong>{item.technology}</strong><code>{item.evidence}</code></div>)}</div></div> : null}<ul className="case-audit-findings">{audit.observations.map((observation) => <li key={observation}>{observation}</li>)}</ul><p className="case-audit-caution"><strong>Limite da investigação:</strong> {audit.limitations}</p><div className="case-audit-sources"><span>Fontes consultadas:</span>{audit.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight /></a>)}</div></section> : null}
    <section className="case-gallery" aria-labelledby="gallery-title"><div className="section-marker"><span className="marker-dot" /> Galeria visual <span className="marker-rule" /></div><h2 id="gallery-title">A forma da ideia.</h2><div className="gallery-grid"><figure><ProjectVisual visual={project.visual} compact /><figcaption>{project.galleryNotes[0]}</figcaption></figure><figure><div className={`gallery-detail gallery-detail-${project.visual}`}><span className="gallery-detail-asterisk">✳</span><span>IDEA → STRUCTURE → EXPERIENCE</span></div><figcaption>{project.galleryNotes[1]}</figcaption></figure></div></section>
    <div className="case-next"><span>Próximo projeto</span><Link href={`/projetos/${nextProject.slug}`}><strong>{nextProject.name}</strong><ArrowUpRight /></Link></div></div></main>;
}
