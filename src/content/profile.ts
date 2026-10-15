export const profile = {
  name: "Logan Mendes Contardi",
  role: "Desenvolvedor Full Stack Pleno · WordPress/PHP",
  years: "6+",
  email: null as string | null,
  linkedin: null as string | null,
  github: "https://github.com/loganshi" as string | null,
  resume: null as string | null,
};

export const content = {
  "pt-BR": {
    navigation: [
      { label: "Sobre", href: "/#sobre" },
      { label: "Cases", href: "/#projetos" },
      { label: "Percurso", href: "/#experiencia" },
      { label: "Capacidades", href: "/#stack" },
    ],
    about: {
      title: "Código é meio. Solução é o ponto.",
      intro: "Sou desenvolvedor Full Stack Pleno, com mais de seis anos de experiência em desenvolvimento web, especializado em WordPress, PHP, integrações e performance.",
      body: "Transformo requisitos de negócio em soluções web completas: arquitetura e customização de sites e e-commerces, desenvolvimento de funcionalidades próprias, integração entre plataformas e otimização técnica. Na FK Partners, trabalho na evolução do ecossistema WordPress e na conexão de formulários ao Salesforce. Minha trajetória também inclui projetos digitais para instituições de ensino, eventos e empresas de diferentes segmentos.",
    },
    experience: [
      {
        title: "FK Partners · Desenvolvedor Full Stack Pleno",
        context: "08/2024 — Atual",
        description: "Evolução e sustentação de aplicações WordPress com PHP e MySQL; desenvolvimento de plugins e funcionalidades customizadas; integração Gravity Forms–Salesforce com mapeamento de campos e envio de dados ao CRM. Diagnóstico e otimização de cache, consultas e recursos da aplicação para campanhas de maior demanda, com participação em revisões de código e decisões técnicas.",
        technologies: ["WordPress", "PHP", "MySQL", "Gravity Forms", "Salesforce", "Performance"],
      },
      {
        title: "Sinnapse · Desenvolvedor WordPress",
        context: "08/2023 — 08/2024",
        description: "Desenvolvimento de sites institucionais, landing pages e e-commerces a partir de temas personalizados ou implementações do zero. Conversão de layouts em interfaces responsivas, customização de componentes WordPress, manutenção evolutiva, depuração de bugs, SEO técnico e otimização de carregamento. Projetos informados: RoleUSA, FADISP, Expo Neon, Grupo Audens, Faculdade Belavista, Unialfa e Colégio Alves Faria, além do site da própria Sinnapse.",
        technologies: ["WordPress", "PHP", "Elementor", "HTML/CSS", "JavaScript", "SEO técnico"],
      },
      {
        title: "Wetok Software · Desenvolvedor Front-End",
        context: "01/2023 — 08/2023",
        description: "Implementação e evolução de interfaces para sites, landing pages e experiências de e-commerce, com foco em HTML, CSS, JavaScript, responsividade e fidelidade aos layouts. Customização de páginas, manutenção corretiva e evolutiva, investigação de bugs e adaptação da experiência para diferentes tamanhos de tela. Clientes e entregas individuais dessa etapa ainda serão associados após confirmação.",
        technologies: ["HTML", "CSS", "JavaScript", "Front-End", "Responsividade", "Debugging"],
      },
      {
        title: "WK Group · Desenvolvedor Full Stack",
        context: "04/2021 — 01/2023",
        description: "Desenvolvimento de soluções web de ponta a ponta, incluindo sites, landing pages e lojas virtuais. Implementação e customização de temas e funcionalidades, integração entre interface e lógica de aplicação, manutenção de projetos existentes e resolução de problemas técnicos no front-end e no back-end. Projetos específicos dessa etapa aguardam confirmação de autoria.",
        technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "Full-Stack", "Manutenção"],
      },
    ],
    stack: [
      { group: "Frontend", lead: "Construção de interfaces responsivas, componentes reutilizáveis e experiências interativas.", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"] },
      { group: "Backend", lead: "Desenvolvimento de regras de negócio, lógica de aplicações e consultas a dados.", items: ["PHP", "MySQL", "Linux/Bash"] },
      { group: "CMS & Platforms", lead: "Temas, plugins, modelagem de conteúdo e operações de e-commerce no WordPress.", items: ["WordPress", "Elementor", "ACF", "WooCommerce"] },
      { group: "Integrations & APIs", lead: "Integração de formulários, CRM e sistemas externos por interfaces de aplicação.", items: ["REST APIs", "Webhooks", "Salesforce"] },
      { group: "Performance & Tools", lead: "Diagnóstico de gargalos, otimização de carregamento, rastreamento e versionamento.", items: ["Core Web Vitals", "SEO técnico", "GTM / GA4", "Git"] },
    ],
    services: [
      { title: "Web Applications", text: "Produtos e ferramentas web com interface e lógica conectadas." },
      { title: "Full-Stack Development", text: "Soluções de ponta a ponta, do front-end à lógica de aplicação." },
      { title: "CMS Solutions", text: "Temas, plugins e arquitetura de conteúdo WordPress sob medida." },
      { title: "API Integrations", text: "Integrações entre CRM, formulários, serviços externos e plataformas." },
      { title: "Performance Optimization", text: "Investigação de gargalos em consultas, cache, carregamento e SEO técnico." },
      { title: "Automation Solutions", text: "Redução de tarefas manuais por fluxos conectados e processamento de dados." },
    ],
  },
} as const;

export type Locale = keyof typeof content;
export const defaultLocale: Locale = "pt-BR";
