import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { getProject, projects } from "@/content/projects";

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

  return <main id="conteudo" className="case-page"><div className="shell"><div className="case-top"><Link href="/#projetos" className="back-link"><ArrowRight /> Voltar aos projetos</Link><span>CASE / {project.status === "concept" ? "ESTRUTURA PROVISÓRIA" : "ESCOPO INFORMADO"}</span></div><div className="case-heading"><p>{project.category}</p><h1>{project.name}</h1><div className="case-heading-bottom"><p>{project.summary}</p><span>{project.yearLabel}</span></div></div><div className="case-hero-visual"><ProjectVisual visual={project.visual} /></div><div className="case-notice"><span className="notice-icon">i</span><p>{project.status === "concept" ? "Este case é uma estrutura editorial provisória. Ainda não descreve uma entrega específica de Logan." : "Este case usa apenas o escopo informado. A composição visual é conceitual e os detalhes de execução aguardam validação."}</p></div>
    <div className="case-body"><aside className="case-side"><span>Sobre o projeto</span><div className="case-side-rule" /><p>Tecnologias informadas ou previstas para a estrutura</p><div className="case-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></aside><div className="case-content"><Reveal className="case-intro"><h2>O projeto<br /><span>em contexto.</span></h2><p>{project.context}</p></Reveal><div className="case-detail-grid"><Reveal><span>01 / Desafio</span><h3>O ponto de partida</h3><p>{project.challenge}</p></Reveal><Reveal delay={0.08}><span>02 / Solução</span><h3>O caminho</h3><p>{project.solution}</p></Reveal><Reveal delay={0.12}><span>03 / Contribuição</span><h3>Minha atuação</h3><p>{project.contribution}</p></Reveal><Reveal delay={0.16}><span>04 / Resultados</span><h3>O que mudou</h3><p>{project.results}</p></Reveal></div></div></div>
    <section className="case-gallery" aria-labelledby="gallery-title"><div className="section-marker"><span className="marker-dot" /> Galeria visual <span className="marker-rule" /></div><h2 id="gallery-title">A forma da ideia.</h2><div className="gallery-grid"><figure><ProjectVisual visual={project.visual} compact /><figcaption>{project.galleryNotes[0]}</figcaption></figure><figure><div className={`gallery-detail gallery-detail-${project.visual}`}><span className="gallery-detail-asterisk">✳</span><span>IDEA → STRUCTURE → EXPERIENCE</span></div><figcaption>{project.galleryNotes[1]}</figcaption></figure></div></section>
    <div className="case-next"><span>Próximo projeto</span><Link href={`/projetos/${nextProject.slug}`}><strong>{nextProject.name}</strong><ArrowUpRight /></Link></div></div></main>;
}
