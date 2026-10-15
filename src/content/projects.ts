export type Project = {
  slug: string;
  name: string;
  category: string;
  yearLabel: string;
  status: "briefed" | "documented" | "concept";
  summary: string;
  visual: "flow" | "structure" | "signal";
  technologies: string[];
  context: string;
  challenge: string;
  solution: string;
  contribution: string;
  results: string;
  galleryNotes: [string, string];
};

export const projects: Project[] = [
  {
    slug: "fk-partners",
    name: "FK Partners",
    category: "Integração CRM e performance WordPress",
    yearLabel: "08/2024 — Atual",
    status: "briefed",
    summary: "Plugin WordPress/PHP para conectar formulários ao Salesforce e melhorias de performance na plataforma.",
    visual: "flow",
    technologies: ["WordPress", "PHP", "Gravity Forms", "Salesforce", "MySQL"],
    context: "Atuação no desenvolvimento e manutenção da plataforma WordPress da FK Partners, com funcionalidades personalizadas, integrações de dados e atenção à performance.",
    challenge: "Conectar dados capturados em formulários ao CRM e manter a plataforma estável e ágil, inclusive em períodos de campanhas de maior tráfego.",
    solution: "Desenvolvimento de uma integração personalizada entre Gravity Forms e Salesforce, com mapeamento de campos e envio de dados ao CRM. Trabalho adicional de otimização envolvendo cache, consultas, recursos da página e ambiente de servidor no contexto de campanhas como a Black Friday.",
    contribution: "Desenvolvimento PHP/WordPress, criação de plugin e manutenção da integração, além de investigação de problemas de performance e implementação de melhorias técnicas.",
    results: "A integração de formulários com o CRM foi implementada e houve trabalho de otimização para campanhas. Não há métricas de tempo, tráfego ou conversão publicadas sem validação.",
    galleryNotes: ["Fluxo ilustrativo de formulários para CRM; não exibe dados ou telas internas.", "Representação conceitual de componentes; captura real não fornecida."],
  },
  {
    // Mantemos o slug da V2 para não quebrar eventuais links existentes.
    slug: "experiencias-institucionais",
    name: "FADISP",
    category: "Site institucional · ensino superior",
    yearLabel: "Experiência Sinnapse · 2023–2024",
    status: "briefed",
    summary: "Desenvolvimento do site institucional da FADISP durante a atuação na Sinnapse, com implementação WordPress e responsividade.",
    visual: "structure",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    context: "A FADISP é uma instituição de ensino superior com atuação na área do Direito. O projeto fez parte das entregas de desenvolvimento web durante a experiência na agência Sinnapse (08/2023 a 08/2024). O período exato do projeto ainda não foi informado.",
    challenge: "Transformar o projeto visual e os requisitos institucionais em uma experiência navegável em diferentes dispositivos, dentro da estrutura de publicação em WordPress.",
    solution: "Desenvolvimento de páginas e componentes do site em WordPress, com implementação de layouts responsivos e ajustes de front-end. A arquitetura específica, as integrações e a configuração de conteúdo precisarão de validação antes de serem descritas tecnicamente.",
    contribution: "Desenvolvimento do site informado no histórico profissional, com implementação WordPress e front-end. Divisão de responsabilidades, módulos feitos individualmente e participação de outras pessoas ainda serão confirmados.",
    results: "Entrega de um projeto institucional citado na experiência da Sinnapse. Métricas de performance e impacto, link de referência atualizado e autorização para imagens ainda não foram confirmados.",
    galleryNotes: ["Composição editorial fictícia para ilustrar responsividade; não é uma tela da FADISP.", "Estudo visual conceitual; substituir por captura autorizada do projeto real."],
  },
  {
    // Mantemos o slug da V2 para não quebrar eventuais links existentes.
    slug: "solucoes-customizadas",
    name: "Logan Portfolio — Interactive Developer Lab",
    category: "Projeto autoral · experiência interativa",
    yearLabel: "2026",
    status: "documented",
    summary: "Portfólio desenvolvido com Next.js, TypeScript e Motion, com navegação por cases e experiências interativas responsivas.",
    visual: "signal",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Motion"],
    context: "Projeto pessoal que reúne apresentação profissional, estudos visuais e narrativas de cases em uma experiência web própria. O código da V2 está versionado publicamente neste repositório.",
    challenge: "Apresentar competências e processos de trabalho além de uma lista estática de tecnologias, sem sacrificar navegação mobile e acessibilidade.",
    solution: "Aplicação com Next.js App Router, componentes interativos, experiências guiadas por scroll ou toque, suporte a preferência por movimento reduzido e páginas individuais de projetos.",
    contribution: "Concepção e orientação do projeto, definição de requisitos e conteúdo, revisão e evolução da implementação com apoio de ferramentas de desenvolvimento assistido por IA.",
    results: "V2 versionada no GitHub, com rotas de cases, interações e scripts de verificação. A revisão visual em dispositivos reais e a publicação final ainda estão pendentes.",
    galleryNotes: ["Visualização ilustrativa de camadas de produto, não captura literal do portfólio.", "Estudo gráfico conceitual; a interface real está no próprio projeto."],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
