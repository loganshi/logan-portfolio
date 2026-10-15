import { content } from "@/content/profile";

// Presentation copy and diagram coordinates stay outside interactive components.
export const lab = {
  "pt-BR": {
    hero: {
      intro: "Eu conecto interfaces, dados e ideias para transformar problemas em produtos digitais.",
      instruction: "Mova o cursor. Selecione uma camada. Conecte o sistema.",
      nodes: [
        { id: "interface", label: "Interface", symbol: "↗", description: "A parte que aproxima pessoas e produto. React, Next.js e interfaces responsivas.", from: [18, 22], to: [26, 28], angle: -14 },
        { id: "logic", label: "Lógica", symbol: "{ }", description: "Regras claras por trás de cada ação. PHP, TypeScript e desenvolvimento full-stack.", from: [83, 20], to: [74, 28], angle: 12 },
        { id: "data", label: "Dados", symbol: "≡", description: "Informação organizada para sustentar a experiência. MySQL e estruturas de conteúdo.", from: [15, 78], to: [26, 72], angle: 9 },
        { id: "connection", label: "Conexões", symbol: "⤴", description: "Sistemas que trabalham juntos. REST APIs, webhooks e integração Salesforce.", from: [79, 83], to: [74, 72], angle: -11 },
      ],
    },
    scenes: [
      { headline: "Conectar é\ncriar caminhos.", description: "Na FK Partners, formulários WordPress se conectam ao Salesforce. Explore uma simulação visual desse fluxo, sem dados reais.", short: "Conectar", theme: "integration" },
      { headline: "Novos espaços,\nnovas experiências.", description: "O site Expo Neon, ligado ao retrofit do Expo Center Norte, ganha destaque nesta cena. A prévia é um estudo visual, não uma captura do projeto original.", short: "Dar forma", theme: "editorial" },
      { headline: "O produto além\nda superfície.", description: "Este próprio portfólio é um projeto real em Next.js. Separe as camadas de uma representação conceitual para explorar sua construção.", short: "Construir", theme: "layers" },
    ],
    capabilities: [
      { id: "frontend", title: "Frontend", core: "Experiência", description: "Interfaces que ajudam pessoas a chegar onde precisam.", outcome: "Aplicações web, interfaces responsivas e experiências interativas.", tags: content["pt-BR"].stack[0].items, positions: [[24, 18], [73, 16], [85, 50], [70, 82], [25, 82], [14, 48]] },
      { id: "backend", title: "Backend", core: "Estrutura", description: "A lógica que transforma uma ação em uma resposta confiável.", outcome: "Regras de negócio, persistência de dados e soluções full-stack.", tags: content["pt-BR"].stack[1].items, positions: [[50, 14], [23, 78], [77, 78]] },
      { id: "cms", title: "CMS", core: "Conteúdo", description: "Autonomia para publicar. Flexibilidade para evoluir.", outcome: "Plataformas de conteúdo, temas, plugins e funcionalidades customizadas.", tags: content["pt-BR"].stack[2].items, positions: [[22, 22], [78, 22], [22, 78], [78, 78]] },
      { id: "integrations", title: "Integrações", core: "Conexão", description: "O valor aparece quando os sistemas começam a conversar.", outcome: "Integrações de plataformas e automação de fluxos via APIs e webhooks.", tags: content["pt-BR"].stack[3].items, positions: [[18, 26], [82, 26], [50, 84]] },
      { id: "performance", title: "Performance", core: "Qualidade", description: "Uma boa experiência também se mede pelo que não atrapalha.", outcome: "Otimização de performance, descoberta e qualidade técnica na web.", tags: content["pt-BR"].stack[4].items, positions: [[28, 18], [79, 37], [66, 82], [17, 69]] },
    ],
  },
} as const;

export type HeroNode = (typeof lab)["pt-BR"]["hero"]["nodes"][number];
