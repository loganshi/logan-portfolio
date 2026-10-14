export const profile = {
  name: "Logan Mendes Contardi",
  role: "Software Developer / Full-Stack Developer",
  years: "6+",
  email: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
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
      intro: "Há mais de seis anos, trabalho entre interface, arquitetura e integração para resolver problemas reais na web.",
      body: "Meu repertório vai de aplicações em React e Next.js a plataformas em PHP e WordPress, com atenção à performance, à manutenção e à experiência de quem usa. Gosto de entender o problema por inteiro antes de escolher a ferramenta.",
    },
    experience: [
      {
        title: "Desenvolvimento web full-stack",
        context: "Atuação profissional · mais de 6 anos",
        description: "Construção e evolução de soluções web, conectando interfaces, lógica de negócio, dados e serviços.",
        technologies: ["JavaScript", "TypeScript", "React", "Next.js", "PHP", "MySQL"],
      },
      {
        title: "Ecossistemas CMS e integrações",
        context: "Projetos para empresas e clientes",
        description: "Criação de funcionalidades sob medida em WordPress, além de integrações via APIs e webhooks.",
        technologies: ["WordPress", "REST APIs", "Webhooks", "Salesforce"],
      },
      {
        title: "Qualidade de entrega",
        context: "Prática transversal",
        description: "Atenção a desenvolvimento responsivo, Core Web Vitals, SEO técnico e evolução contínua das experiências digitais.",
        technologies: ["Performance", "SEO técnico", "GEO técnico", "Acessibilidade"],
      },
    ],
    stack: [
      { group: "Frontend", lead: "Interfaces que respondem bem em qualquer tela.", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"] },
      { group: "Backend", lead: "Estruturas confiáveis por trás da experiência.", items: ["PHP", "MySQL", "Lógica de negócio"] },
      { group: "CMS & Platforms", lead: "Conteúdo flexível com código sob medida.", items: ["WordPress", "Temas", "Plugins", "Gravity Forms"] },
      { group: "Integrations & APIs", lead: "Sistemas que conversam sem atrito.", items: ["REST APIs", "Webhooks", "Salesforce"] },
      { group: "Performance & Tools", lead: "Velocidade, descoberta e manutenção.", items: ["Core Web Vitals", "SEO técnico", "GEO técnico", "Git"] },
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
