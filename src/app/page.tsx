import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectStory } from "@/components/project-story";
import { CapabilityMap } from "@/components/capability-map";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { content, profile } from "@/content/profile";
import { projects } from "@/content/projects";

const copy = content["pt-BR"];
const storyProjects = projects.map(({ slug, name, status, technologies }) => ({ slug, name, status, technologies }));

export default function Home() {
  return <main id="conteudo" className="lab-home">
    <Hero />
    <section id="sobre" className="lab-about" aria-labelledby="about-title"><div className="shell lab-about-layout">
      <div className="lab-about-margin"><span className="lab-eyebrow">O pensamento por trás do produto</span><span className="lab-about-arrow" aria-hidden="true">↳</span><span className="lab-about-signature">Logan Mendes Contardi<br /><small>Software Developer</small></span></div>
      <div className="lab-about-main"><h2 id="about-title">O trabalho começa<br />antes do código.</h2><p className="lab-about-lead">{copy.about.intro}</p><p className="lab-about-body">{copy.about.body}</p><ol className="lab-process"><li><span>01</span><h3>Entender</h3><p>O contexto, as pessoas e o problema.</p></li><li><span>02</span><h3>Conectar</h3><p>As ferramentas, os dados e as possibilidades.</p></li><li><span>03</span><h3>Construir</h3><p>Uma solução que faz sentido na prática.</p></li></ol></div>
    </div><div className="lab-about-strip"><div className="shell"><span>Curiosidade no processo.</span><span>Intenção em cada entrega.</span><ArrowRight /></div></div></section>

    <ProjectStory projects={storyProjects} />

    <section id="experiencia" className="lab-experience shell" aria-labelledby="experience-title"><div className="lab-experience-intro"><span className="lab-eyebrow">Percurso profissional</span><h2 id="experience-title">Entre camadas,<br />uma visão do todo.</h2><div className="lab-years"><strong>{profile.years}</strong><p>anos de experiência<br />em desenvolvimento web</p></div><p className="lab-experience-note">De 2021 até hoje: desenvolvimento full-stack na WK Group e FK Partners, front-end na Wetok Software e projetos WordPress para diversos clientes na Sinnapse.</p></div><div className="lab-experience-details">{copy.experience.map((item, index) => <details key={item.title} open={index === 0} className="lab-experience-item"><summary><span className="lab-experience-index">0{index + 1}</span><h3>{item.title}</h3><span className="lab-detail-plus" aria-hidden="true" /></summary><div className="lab-experience-content"><span>{item.context}</span><p>{item.description}</p><div className="inline-tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></details>)}<Link className="lab-experience-link" href="/projetos/fk-partners">Explorar o case FK Partners <ArrowUpRight /></Link></div></section>

    <CapabilityMap />

    <section id="contato" className="lab-contact" aria-labelledby="contact-title"><div className="shell lab-contact-layout"><div className="lab-contact-symbol" aria-hidden="true"><ArrowUpRight /></div><div className="lab-contact-copy"><span className="lab-eyebrow">O próximo problema pode ser o seu.</span><h2 id="contact-title">Vamos construir<br />o próximo capítulo.</h2><p>Uma aplicação, uma integração ou uma ideia que ainda precisa encontrar sua forma.</p><div className="lab-contact-actions">{profile.email ? <a className="lab-contact-primary" href={`mailto:${profile.email}`}>Conversar sobre um projeto <ArrowUpRight /></a> : <span className="lab-contact-pending"><i />Canais profissionais em atualização</span>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a> : null}{profile.github ? <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a> : null}{profile.resume ? <a href={profile.resume} download>Baixar currículo <ArrowRight /></a> : null}</div><Link className="lab-contact-back" href="#projetos">Continuar explorando os cases <ArrowUpRight /></Link></div></div><div className="lab-contact-baseline shell"><span>From problem to product.</span><span>Logan Mendes Contardi / Full-Stack Developer</span></div></section>
  </main>;
}
