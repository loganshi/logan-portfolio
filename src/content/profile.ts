export const profile = {
  name: "Logan Mendes Contardi",
  role: "Desenvolvedor Full Stack Pleno · WordPress/PHP",
  years: "6+",
  email: "loganmendescontardi@gmail.com" as string | null,
  linkedin: null as string | null,
  github: "https://github.com/loganshi" as string | null,
  resume: "/Logan_Mendes_Contardi_Curriculo_2026.pdf" as string | null,
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
      body: "Transformo requisitos de negócio em aplicações e experiências web: sites e e-commerces em WordPress, componentes e funcionalidades próprios, integrações com CRM, otimização técnica e sustentação de sistemas. Na FK Partners, atuo em PHP/WordPress e integrações com Salesforce. Minha trajetória inclui interfaces em JavaScript, jQuery e Bootstrap, sistemas internos, pagamentos em WooCommerce e projetos institucionais para educação, eventos e outros segmentos.",
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
        description: "Desenvolvimento completo de sites institucionais, landing pages e e-commerces em WordPress, com construção e personalização de temas, HTML/CSS/JavaScript, implementação responsiva, manutenção evolutiva, diagnóstico de bugs e otimização técnica. Destaque para o site do Expo Neon, empreendimento ligado ao retrofit do Expo Center Norte, e para o desenvolvimento integral e integrações do site Barcelona Academy. Outros projetos incluem RoleUSA, FADISP, Grupo Audens, Faculdade Belavista, Unialfa, Colégio Alves Faria e a atualização do site Sinnapse.",
        technologies: ["WordPress", "PHP", "Elementor", "JavaScript", "Performance", "SEO técnico"],
      },
      {
        title: "Wetok Software · Desenvolvedor Front-End",
        context: "01/2023 — 08/2023",
        description: "Desenvolvimento de interfaces e demandas front-end de sites e sistemas em JavaScript, incluindo criação, manutenção e testes de funcionalidades. Implementação da landing page WetokSoft com HTML5, CSS, JavaScript e jQuery e da landing page ConnectPlay com HTML5, CSS, JavaScript, Bootstrap e jQuery. Ajustes responsivos, correção de bugs e sustentação das interfaces.",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Testes"],
      },
      {
        title: "WK Group · Desenvolvedor Front-End",
        context: "04/2021 — 01/2023",
        description: "Criação e manutenção de sites WordPress, personalização de temas, configuração de WooCommerce e integração de pagamentos Stripe via plugins. Desenvolvimento de sistema interno de estoque com HTML5, CSS, JavaScript, jQuery e Bootstrap para apoiar processos operacionais. Adaptação multilíngue, SEO, relatórios de métricas com Google Analytics, AdSense e AdWords, além de suporte técnico a clientes internacionais por telefone e e-mail.",
        technologies: ["WordPress", "WooCommerce", "Stripe", "JavaScript", "jQuery", "Bootstrap"],
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
