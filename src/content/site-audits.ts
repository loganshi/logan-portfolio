// Auditoria de páginas públicas realizada em 15/10/2026.
// OBSERVAÇÃO PUBLICA ≠ comprovação do código desenvolvido entre 2023 e 2024.
// Tecnologias historicamente atribuídas ao desenvolvedor ficam nos dados do case.
export type PublicSiteAudit = {
  checkedAt: string;
  url: string;
  observations: string[];
  sources: { label: string; url: string }[];
  limitations: string;
};

export const publicSiteAudits: Record<string, PublicSiteAudit> = {
  "fk-partners": {
    checkedAt: "15/10/2026",
    url: "https://fkpartners.com/",
    observations: [
      "A loja pública apresenta catálogo de cursos com filtros por certificação, área, modalidade e outros critérios.",
      "As páginas públicas exibem fluxos de escolha de produtos/cursos e elementos de mensuração, como Google Tag Manager e pixels.",
      "A integração personalizada Gravity Forms–Salesforce é descrita no case com base na experiência confirmada, e não por inspeção do código privado.",
    ],
    sources: [
      { label: "FK Partners — catálogo de cursos", url: "https://fkpartners.com/cursos/" },
    ],
    limitations: "A inspeção pública não permite identificar o plugin privado, mapear endpoints Salesforce nem atribuir a você as configurações atuais de tracking ou checkout.",
  },
  "experiencias-institucionais": {
    checkedAt: "15/10/2026",
    url: "https://www.exponeon.com.br/",
    observations: [
      "A experiência atual inclui versões em português, inglês e espanhol, com navegação por serviços, clientes e tipos de eventos.",
      "A página pública de contato em português apresenta campos para nome, empresa, segmento, celular, e-mail e mensagem.",
      "Há páginas de apresentação institucional, soluções e conteúdo sobre o empreendimento e sua operação.",
    ],
    sources: [
      { label: "Expo Neon — site", url: "https://www.exponeon.com.br/" },
      { label: "Expo Neon — contato", url: "https://www.exponeon.com.br/contato" },
      { label: "Expo Neon — sobre", url: "https://www.exponeon.com.br/sobre" },
    ],
    limitations: "O formulário visível não prova conexão com CRM, plataforma de automação ou API. A stack de backend e a autoria das versões linguísticas atuais não são verificáveis pela navegação pública.",
  },
  "solucoes-customizadas": {
    checkedAt: "15/10/2026",
    url: "https://github.com/loganshi/logan-portfolio",
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
    observations: [
      "Arquivos públicos sob /wp-content/uploads são indício direto de WordPress no domínio consultado.",
      "O site contém formulário de interesse com assunto, nome, e-mail, telefone e mensagem.",
      "Há chamadas para aula experimental por WhatsApp, páginas das modalidades e listagem de unidades.",
      "A Sinnapse apresenta Barça Academy Pro em seu portfólio público.",
    ],
    sources: [
      { label: "Barça Academy — site", url: "https://barcaacademy.com.br/" },
      { label: "Sinnapse — projetos", url: "https://sinnapse.com/desenvolvimento-de-sites/" },
      { label: "Barça Academy — mídia em WordPress", url: "https://barcaacademy.com.br/wp-content/uploads/2021/12/BARCA-ACADEMY_UNIDADES_NOVO.pdf" },
    ],
    limitations: "Formulário e WhatsApp não demonstram qual CRM, plugin, API ou automação recebe dados. Também não é possível determinar se recursos visíveis em 2026 existiam na entrega da época.",
  },
  "fadisp": {
    checkedAt: "15/10/2026",
    url: "https://fadisp.com.br/",
    observations: [
      "O site público reúne cursos, inscrições, formulário de contato, conteúdo editorial e navegação institucional.",
      "Os links externos levam a portais acadêmicos (academico.alfa.br e Lyceum), certificados e serviços institucionais.",
      "O documento público apresenta Google Tag Manager e crédito da Sinnapse no rodapé.",
    ],
    sources: [
      { label: "FADISP — site oficial", url: "https://fadisp.com.br/" },
    ],
    limitations: "Linkar um portal acadêmico não comprova integração API, autenticação compartilhada ou implementação do próprio sistema acadêmico. GTM visível não prova quem o configurou.",
  },
};
