// Auditoria de páginas públicas realizada em 15/10/2026.
// OBSERVAÇÃO PUBLICA ≠ comprovação do código desenvolvido entre 2023 e 2024.
// Tecnologias historicamente atribuídas ao desenvolvedor ficam nos dados do case.
export type PublicSiteAudit = {
  checkedAt: string;
  url: string;
  observations: string[];
  // Indícios de tecnologias carregadas HOJE na página, não prova da implementação histórica.
  fingerprints?: { technology: string; evidence: string }[];
  // Namespaces anunciados pelo índice público /wp-json/; não provam API privada nem autoria.
  publicRestNamespaces?: string[];
  sources: { label: string; url: string }[];
  limitations: string;
};

export const publicSiteAudits: Record<string, PublicSiteAudit> = {
  "fk-partners": {
    checkedAt: "15/10/2026",
    url: "https://fkpartners.com/",
    fingerprints: [
      { technology: "WordPress", evidence: "/wp-content/plugins/litespeed-cache/assets/js/webfontloader.min.js" },
      { technology: "LiteSpeed Cache", evidence: "/wp-content/plugins/litespeed-cache/" },
      { technology: "Tema personalizado fkpartners", evidence: "/wp-content/themes/fkpartners/assets/js/swiper.jquery.min.js" },
      { technology: "Google Tag Manager", evidence: "www.googletagmanager.com/gtm.js" },
    ],
    publicRestNamespaces: ["litespeed/v1","wc/v3","wc/store/v1","redePRO","redeIntegration","woorede","aioseo/v1"],
    observations: [
      "A loja pública apresenta catálogo de cursos com filtros por certificação, área, modalidade e outros critérios.",
      "As páginas públicas exibem fluxos de escolha de produtos/cursos e elementos de mensuração, como Google Tag Manager e pixels.",
      "A integração personalizada Gravity Forms–Salesforce é descrita no case com base na experiência confirmada, e não por inspeção do código privado.",
    ],
    sources: [
      { label: "Auditoria pública automatizada de assinaturas (GitHub Actions)", url: "https://github.com/loganshi/logan-portfolio/actions/runs/38759593764" },
      { label: "FK Partners — catálogo de cursos", url: "https://fkpartners.com/cursos/" },
    ],
    limitations: "A inspeção pública não permite identificar o plugin privado, mapear endpoints Salesforce nem atribuir a você as configurações atuais de tracking ou checkout.",
  },
  "experiencias-institucionais": {
    checkedAt: "15/10/2026",
    url: "https://www.exponeon.com.br/",
    fingerprints: [
      { technology: "Next.js (site atual)", evidence: "/_next/static/css/3858e408b05f88ef.css" },
      { technology: "Google Tag Manager", evidence: "www.googletagmanager.com/gtm.js" },
    ],
    observations: [
      "A experiência atual inclui versões em português, inglês e espanhol, com navegação por serviços, clientes e tipos de eventos.",
      "A página pública de contato em português apresenta campos para nome, empresa, segmento, celular, e-mail e mensagem.",
      "Há páginas de apresentação institucional, soluções e conteúdo sobre o empreendimento e sua operação.",
    ],
    sources: [
      { label: "Auditoria pública automatizada de assinaturas (GitHub Actions)", url: "https://github.com/loganshi/logan-portfolio/actions/runs/38759593764" },
      { label: "Expo Neon — site", url: "https://www.exponeon.com.br/" },
      { label: "Expo Neon — formulário de contato", url: "https://www.exponeon.com.br/en/contact" },
      { label: "Expo Neon — sobre", url: "https://www.exponeon.com.br/sobre" },
    ],
    limitations: "O formulário visível não prova conexão com CRM, plataforma de automação ou API. Os assets de Next.js e GTM são do site atual (2026) e não comprovam que a versão desenvolvida em 2023–2024 usava Next.js; CRM e backend não foram identificados.",
  },
  "solucoes-customizadas": {
    checkedAt: "15/10/2026",
    url: "https://github.com/loganshi/logan-portfolio",
    fingerprints: [
      { technology: "Next.js e React", evidence: "package.json — dependencies" },
      { technology: "TypeScript", evidence: "tsconfig.json" },
      { technology: "Tailwind CSS e Motion", evidence: "package.json — dependencies" },
    ],
    observations: [
      "Código-fonte público em Next.js App Router, TypeScript, React, Tailwind CSS e Motion.",
      "Componentes de animação, navegação por teclado e toque e preferência por movimento reduzido verificáveis no repositório.",
      "Rotas de projetos geradas a partir de dados de cases e verificações locais descritas no README.",
    ],
    sources: [
      { label: "Código-fonte do portfólio", url: "https://github.com/loganshi/logan-portfolio" },
    ],
    limitations: "A confirmação da publicação final, a revisão visual real e as métricas de performance ainda dependem dos testes e do deploy.",
  },
  "barcelona-academy": {
    checkedAt: "15/10/2026",
    url: "https://barcaacademy.com.br/",
    fingerprints: [
      { technology: "WordPress", evidence: "/wp-includes/js/jquery/jquery.min.js" },
      { technology: "Elementor", evidence: "/wp-content/plugins/elementor/" },
      { technology: "Elementor Pro", evidence: "/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js" },
      { technology: "WP Rocket", evidence: "/wp-content/plugins/wp-rocket/" },
      { technology: "Happy Elementor Addons", evidence: "/wp-content/plugins/happy-elementor-addons/" },
      { technology: "jQuery", evidence: "/wp-includes/js/jquery/jquery.min.js" },
    ],
    publicRestNamespaces: ["elementor/v1","happy/v1","wp-rocket/v1","wp/v2"],
    observations: [
      "Arquivos públicos sob /wp-content/uploads são indício direto de WordPress no domínio consultado.",
      "O site contém formulário de interesse com assunto, nome, e-mail, telefone e mensagem.",
      "Há chamadas para aula experimental por WhatsApp, páginas das modalidades e listagem de unidades.",
      "A Sinnapse apresenta Barça Academy Pro em seu portfólio público.",
    ],
    sources: [
      { label: "Auditoria pública automatizada de assinaturas (GitHub Actions)", url: "https://github.com/loganshi/logan-portfolio/actions/runs/38759593764" },
      { label: "Barça Academy — site", url: "https://barcaacademy.com.br/" },
      { label: "Registro de trabalho visual em 2021 — Guilherme Studio", url: "https://guilhermestudio.com/fc-barcelona-academy/" },
      { label: "Sinnapse — projetos", url: "https://sinnapse.com/desenvolvimento-de-sites/" },
      { label: "Barça Academy — mídia em WordPress", url: "https://barcaacademy.com.br/wp-content/uploads/2021/12/BARCA-ACADEMY_UNIDADES_NOVO.pdf" },
    ],
    limitations: "Formulário e WhatsApp não demonstram qual CRM, plugin, API ou automação recebe dados. Um estudo externo apresenta trabalho visual para a marca em 2021; isso não define o escopo da implementação e integrações feitas posteriormente. Os recursos carregados em 2026 podem não corresponder à entrega de 2023–2024.",
  },
  "fadisp": {
    checkedAt: "15/10/2026",
    url: "https://fadisp.com.br/",
    fingerprints: [
      { technology: "WordPress", evidence: "/wp-content/uploads/2026/03/3-1.webp" },
      { technology: "Elementor Pro", evidence: "/wp-content/plugins/elementor-pro/" },
      { technology: "Tema Hello Elementor", evidence: "/wp-content/themes/hello-elementor/" },
      { technology: "Plugin customizacao-sinnapse", evidence: "/wp-content/plugins/customizacao-sinnapse/" },
      { technology: "The Events Calendar", evidence: "/wp-content/plugins/the-events-calendar/" },
      { technology: "Google Tag Manager", evidence: "www.googletagmanager.com/gtm.js" },
    ],
    publicRestNamespaces: ["tribe/events/v1","elementskit/v1","elementor/v1","elementor-pro/v1","wordfence/v1","redirection/v1"],
    observations: [
      "O site público reúne cursos, inscrições, formulário de contato, conteúdo editorial e navegação institucional.",
      "Os links externos levam a portais acadêmicos (academico.alfa.br e Lyceum), certificados e serviços institucionais.",
      "O documento público apresenta Google Tag Manager e crédito da Sinnapse no rodapé.",
    ],
    sources: [
      { label: "Auditoria pública automatizada de assinaturas (GitHub Actions)", url: "https://github.com/loganshi/logan-portfolio/actions/runs/38759593764" },
      { label: "FADISP — site oficial", url: "https://fadisp.com.br/" },
    ],
    limitations: "Arquivos públicos revelam Elementor, Hello Elementor e o plugin customizacao-sinnapse na versão atual, mas não comprovam autoria, data da implementação nem lógica interna. Links ao Lyceum não demonstram integração por API; GTM não prova quem o configurou.",
  },
};
