export const profile = {
  name: "Logan Mendes Contardi",
  role: "Desenvolvedor WordPress/PHP Pleno · Full-Stack Web Developer",
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
      intro: "Sou desenvolvedor WordPress/PHP pleno, com mais de seis anos de experiência em projetos web, integrações e evolução de plataformas.",
      body: "Na FK Partners, atuo no desenvolvimento e na manutenção de uma plataforma WordPress, criando funcionalidades em PHP, conectando formulários ao Salesforce e trabalhando em performance. Antes, participei de projetos institucionais e de marcas na agência Sinnapse. Também exploro React e Next.js em projetos próprios, como este portfólio.",
    },
    experience: [
      {
        title: "FK Partners · Desenvolvimento WordPress/PHP",
        context: "Desenvolvedor pleno · período a confirmar",
        description: "Manutenção e evolução de uma plataforma WordPress, desenvolvimento de plugins e funcionalidades em PHP, integração Gravity Forms–Salesforce e melhorias de performance, incluindo preparação para campanhas de maior tráfego.",
        technologies: ["WordPress", "PHP", "Gravity Forms", "Salesforce", "MySQL", "Performance"],
      },
      {
        title: "Sinnapse · Projetos web para marcas e instituições",
        context: "Desenvolvimento WordPress · período a confirmar",
        description: "Participação em projetos web de clientes da agência, com desenvolvimento de interfaces responsivas, implementação de layouts, customização de páginas WordPress e atenção a SEO técnico e carregamento.",
        technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "SEO técnico"],
      },
      {
        title: "Suporte web e operações internacionais",
        context: "Experiência anterior · empresa e período a confirmar",
        description: "Atuação com suporte técnico internacional e manutenção de experiências web, incluindo rotinas de comunicação em inglês. Empresa, cargo e período serão detalhados após conferência do histórico profissional.",
        technologies: ["WordPress", "Suporte técnico", "Inglês", "Web"],
      },
    ],
    stack: [
      { group: "Frontend", lead: "Interfaces que respondem bem em qualquer tela.", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"] },
      { group: "Backend", lead: "Estruturas confiáveis por trás da experiência.", items: ["PHP", "MySQL", "Lógica de negócio"] },
      { group: "CMS & Platforms", lead: "Conteúdo flexível com código sob medida.", items: ["WordPress", "Elementor", "ACF", "Gravity Forms"] },
      { group: "Integrations & APIs", lead: "Sistemas que conversam sem atrito.", items: ["REST APIs", "Webhooks", "Salesforce"] },
      { group: "Performance & Tools", lead: "Velocidade, descoberta e manutenção.", items: ["Core Web Vitals", "SEO técnico", "PageSpeed", "Git"] },
    ],
    services: [
      { title: "Web Applications", text: "Produtos e ferramentas web com interface e lógica conectadas." },
      { title: "Full-Stack Development", text: "Implementação de ponta a ponta, do dado à interação." },
      { title: "CMS Solutions", text: "Estruturas de conteúdo e funcionalidades customizadas." },
      { title: "API Integrations", text: "Conexões entre plataformas, serviços e fluxos de dados." },
      { title: "Performance Optimization", text: "Diagnóstico e melhorias para experiências mais ágeis." },
      { title: "Automation Solutions", text: "Processos digitais com menos trabalho repetitivo." },
    ],
  },
} as const;

export type Locale = keyof typeof content;
export const defaultLocale: Locale = "pt-BR";
