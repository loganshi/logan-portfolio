import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectStory } from "@/components/project-story";
import { CapabilityMap } from "@/components/capability-map";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { content, profile } from "@/content/profile";
import { projects } from "@/content/projects";

const copy = content["pt-BR"];
const storyProjects = projects.slice(0, 3).map(({ slug, name, status, technologies }) => ({ slug, name, status, technologies }));

export default function Home() {
  return <main id="conteudo" className="lab-home">
    <Hero />
    <section id="sobre" className="lab-about" aria-labelledby="about-title"><div className="shell lab-about-layout">
      <div className="lab-about-margin"><span className="lab-eyebrow">O pensamento por trás do produto</span><span className="lab-about-arrow" aria-hidden="true">↳</span><span className="lab-about-signature">Logan Mendes Contardi<br /><small>Software Developer</small></span></div>
      <div className="lab-about-main"><h2 id="about-title">O trabalho começa<br />antes do código.</h2><p className="lab-about-lead">{copy.about.intro}</p><p className="lab-about-body">{copy.about.body}</p><ol className="lab-process"><li><span>01</span><h3>Entender</h3><p>O contexto, as pessoas e o problema.</p></li><li><span>02</span><h3>Conectar</h3><p>As ferramentas, os dados e as possibilidades.</p></li><li><span>03</span><h3>Construir</h3><p>Uma solução que faz sentido na prática.</p></li></ol></div>
    </div><div className="lab-about-strip"><div className="shell"><span>Curiosidade no processo.</span><span>Intenção em cada entrega.</span><ArrowRight /></div></div></section>

    <ProjectStory projects={storyProjects} />

    <section className="lab-more-work" aria-labelledby="more-work-title"><div className="shell"><div className="lab-more-work-heading"><span className="lab-eyebrow">Outros projetos / trabalhos selecionados</span><h2 id="more-work-title">Mais histórias de desenvolvimento.</h2><p>Experiências reais que também fazem parte do meu percurso, em documentação contínua.</p></div><div className="lab-more-work-grid">{projects.slice(3).map((project) => <Link className="lab-more-work-card" key={project.slug} href={`/projetos/${project.slug}`}><span>{project.category}</span><strong>{project.name}</strong><p>{project.summary}</p><span className="lab-more-work-cta">Explorar case <ArrowUpRight /></span></Link>)}</div></div></section>

    <section id="experiencia" className="lab-experience shell" aria-labelledby="experience-title"><div className="lab-experience-intro"><span className="lab-eyebrow">Percurso profissional</span><h2 id="experience-title">Entre camadas,<br />uma visão do todo.</h2><div className="lab-years"><strong>{profile.years}</strong><p>anos de experiência<br />em desenvolvimento web</p></div><p className="lab-experience-note">De 2021 até hoje: desenvolvimento front-end na WK Group e Wetok Software, projetos WordPress na Sinnapse e atuação Full Stack Pleno na FK Partners.</p></div><div className="lab-experience-details">{copy.experience.map((item, index) => <details key={item.title} open={index === 0} className="lab-experience-item"><summary><span className="lab-experience-index">0{index + 1}</span><h3>{item.title}</h3><span className="lab-detail-plus" aria-hidden="true" /></summary><div className="lab-experience-content"><span>{item.context}</span><p>{item.description}</p><div className="inline-tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></details>)}<Link className="lab-experience-link" href="/projetos/fk-partners">Explorar o case FK Partners <ArrowUpRight /></Link></div></section>

    <CapabilityMap />

    <section id="contato" className="lab-contact" aria-labelledby="contact-title"><div className="shell lab-contact-layout"><div className="lab-contact-symbol" aria-hidden="true"><ArrowUpRight /></div><div className="lab-contact-copy"><span className="lab-eyebrow">O próximo problema pode ser o seu.</span><h2 id="contact-title">Vamos construir<br />o próximo capítulo.</h2><p>Desenvolvimento WordPress/PHP, integrações e soluções web. Entre em contato para conversar sobre projetos e oportunidades.</p><div className="lab-contact-actions">{profile.email ? <a className="lab-contact-primary" href={`mailto:${profile.email}`}>Enviar um e-mail <ArrowUpRight /></a> : <span className="lab-contact-pending"><i />Canais profissionais em atualização</span>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a> : null}{profile.github ? <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a> : null}{profile.resume ? <a href={profile.resume} download="Logan_Mendes_Contardi_Curriculo_2026.pdf">Baixar currículo (PDF) <ArrowRight /></a> : null}</div><Link className="lab-contact-back" href="#projetos">Continuar explorando os cases <ArrowUpRight /></Link></div></div><div className="lab-contact-baseline shell"><span>From problem to product.</span><span>Logan Mendes Contardi / Full-Stack Developer</span></div></section>
  </main>;
}
