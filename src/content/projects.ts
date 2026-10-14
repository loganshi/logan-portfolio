export type Project = {
  slug: string;
  name: string;
  category: string;
  yearLabel: string;
  status: "briefed" | "concept";
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
    category: "Plataforma, integração e performance",
    yearLabel: "Período a confirmar",
    status: "briefed",
    summary: "WordPress e PHP conectados a um fluxo de formulários e Salesforce, com foco em performance.",
    visual: "flow",
    technologies: ["WordPress", "PHP", "Gravity Forms", "Salesforce", "Performance"],
    context: "Escopo informado: trabalho relacionado a WordPress/PHP, integração de Gravity Forms com Salesforce e performance para FK Partners. O período, o papel e o produto específico ainda precisam ser confirmados.",
    challenge: "Detalhes do problema original e das restrições técnicas aguardam documentação.",
    solution: "A descrição da solução será adicionada após validação do fluxo implementado e de seus detalhes técnicos.",
    contribution: "Áreas informadas: desenvolvimento em WordPress/PHP, integração Gravity Forms–Salesforce e performance. As responsabilidades exatas ainda serão detalhadas.",
    results: "Indicadores e resultados verificáveis ainda não foram fornecidos.",
    galleryNotes: ["Fluxo conceitual da integração; não representa a interface real.", "Composição conceitual de módulos; screenshot real pendente."],
  },
  {
    slug: "experiencias-institucionais",
    name: "Experiências institucionais",
    category: "Arquitetura de conteúdo e desenvolvimento web",
    yearLabel: "Case em preparação",
    status: "concept",
    summary: "Estrutura de case para projetos institucionais e educacionais, pronta para receber um trabalho real documentado.",
    visual: "structure",
    technologies: ["CMS", "HTML", "CSS", "JavaScript"],
    context: "Estrutura editorial provisória para documentar um projeto institucional ou educacional real. Cliente, produto, período e escopo não foram fornecidos.",
    challenge: "A definir a partir do briefing e das necessidades reais do projeto escolhido.",
    solution: "A detalhar depois da seleção e validação do projeto real.",
    contribution: "Responsabilidades individuais a confirmar.",
    results: "Sem resultados publicados até que existam evidências verificáveis.",
    galleryNotes: ["Arquitetura visual conceitual; não é um projeto entregue.", "Mockup abstrato para composição; substituir por material autorizado."],
  },
  {
    slug: "solucoes-customizadas",
    name: "Soluções web customizadas",
    category: "Aplicações e automação",
    yearLabel: "Case em preparação",
    status: "concept",
    summary: "Estrutura para apresentar uma solução sob medida, da interface às integrações, quando o projeto puder ser publicado.",
    visual: "signal",
    technologies: ["React", "Next.js", "REST APIs", "Webhooks"],
    context: "Estrutura provisória para um projeto de solução web customizada. Nenhum cliente ou entrega específica está sendo atribuído a este case.",
    challenge: "A definir com o contexto de um projeto real publicável.",
    solution: "A documentar com decisões de arquitetura, experiência e implementação verificadas.",
    contribution: "Papel, entregas e colaboração a confirmar.",
    results: "Sem métricas ou resultados publicados nesta fase.",
    galleryNotes: ["Visualização abstrata de uma interface; não representa produto real.", "Estudo gráfico conceitual; substituir por capturas autorizadas."],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
