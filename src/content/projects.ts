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
    yearLabel: "Período a confirmar",
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
    name: "Barcelona Academy",
    category: "Desenvolvimento institucional responsivo",
    yearLabel: "Período a confirmar",
    status: "briefed",
    summary: "Participação na implementação de páginas WordPress responsivas para o projeto da Barcelona Academy na agência Sinnapse.",
    visual: "structure",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    context: "Projeto institucional desenvolvido em contexto de agência, durante a atuação na Sinnapse. Este case apresenta somente a participação informada em desenvolvimento web, sem atribuir direção criativa ou entregas de outras pessoas.",
    challenge: "Implementar layouts de um projeto institucional em páginas acessíveis por diferentes tamanhos de tela e compatíveis com o ambiente WordPress.",
    solution: "Trabalho de implementação front-end e adaptação responsiva de páginas integradas ao WordPress. Arquitetura, escopo total e decisões visuais do projeto ainda precisam ser confirmados.",
    contribution: "Participação no desenvolvimento de interfaces responsivas e implementação de layouts. O grau de responsabilidade individual sobre cada página permanece a confirmar.",
    results: "Projeto institucional real no histórico profissional. Resultados quantitativos e capturas autorizadas ainda não foram fornecidos para este case.",
    galleryNotes: ["Composição editorial fictícia para ilustrar responsividade; não é uma tela da Barcelona Academy.", "Estudo visual conceitual; substituir por captura autorizada do projeto real."],
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
