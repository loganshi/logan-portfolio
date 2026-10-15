# Auditoria técnica de sites públicos — portfólio Logan Mendes Contardi
**Pesquisa:** 15/10/2026 · **Tipo:** investigação externa, sem acesso ao código do servidor nem aos painéis de administração.

## Como interpretar

1. **Relato profissional confirmado:** uma entrega e tecnologias que Logan afirmou ter desenvolvido/utilizado.
2. **Evidência pública observável:** elementos presentes hoje na interface, em páginas indexadas ou URLs de recursos técnicos.
3. **Não verificável:** CRM, webhook, endpoint, gateway, plugin específico, lógica de matrícula, versionamento e autoria de cada componente.

Esta auditoria **não prova** que um recurso existente em 2026 integrava a versão entregue em 2023–2024. Nem todo elemento visível foi necessariamente implementado por Logan. Não submeter formulários reais nem acessar dados internos na investigação.

## Cases atualmente publicados no código do portfólio

| Case | Entrega no histórico | Sinais atuais na web | Tecnologia identificável / observação | Em aberto | Fontes |
|---|---|---|---|---|---|
| FK Partners | Plugin PHP/WordPress Gravity Forms–Salesforce e performance em campanhas, relatado pelo profissional | Catálogo filtrável de cursos, opções de compra, tags e scripts de marketing | WordPress/PHP/Gravity Forms/Salesforce provenientes do histórico; Google Tag Manager, pixels Meta e LinkedIn visíveis na página atual | Código privado, APIs, endpoints e ownership do tracking atual | https://fkpartners.com/cursos/ |
| Expo Neon | Site institucional desenvolvido na Sinnapse | Três idiomas (PT/EN/ES); páginas de soluções, serviços, clientes; formulário de contato com nome, empresa, segmento, celular, e-mail e mensagem | WordPress e frontend do histórico; **não** há evidência pública de CRM nem de gateway de pagamento | Plugin do formulário, backend, origem dos dados, tradução e integrações | https://www.exponeon.com.br/ · https://www.exponeon.com.br/contato · https://www.exponeon.com.br/sobre |
| Barcelona Academy | Site completo e integrações na Sinnapse, confirmado por Logan | Formulário com seleção de assunto, nome/e-mail/telefone/mensagem, CTA WhatsApp, modalidades e unidades | Evidência de WordPress em recurso público `/wp-content/uploads`; Sinnapse relaciona Barça Academy Pro no portfólio | Qual CRM, automação, plugin, endpoint ou outro serviço recebeu os dados? Quais integrações eram do período de implementação? | https://barcaacademy.com.br/ · https://sinnapse.com/desenvolvimento-de-sites/ · https://barcaacademy.com.br/wp-content/uploads/2021/12/BARCA-ACADEMY_UNIDADES_NOVO.pdf |
| FADISP | Site desenvolvido na Sinnapse | Divulgação de cursos, inscrições, contato, sistemas acadêmicos externos como Lyceum, GTM | Crédito à Sinnapse no rodapé; links externos para `academico.alfa.br` e `unialfa.lyceum.com.br`, mas **não comprovam integração de API** | Qual sistema e plugin geriam os formulários, e quais fluxos foram implementados por Logan? | https://fadisp.com.br/ |
| Logan Portfolio | Projeto autoral e direção técnica com desenvolvimento assistido | Código-fonte disponível | Next.js, TypeScript, React, Tailwind CSS, Motion, HTML/CSS; componentes interativos e suporte a reduced-motion no repositório | Validação de performance de produção e testes visuais | https://github.com/loganshi/logan-portfolio |

## Outros sites da experiência Sinnapse

| Projeto | O que o site público evidencia em outubro/2026 | O que seria incorreto afirmar sem código |
|---|---|---|
| Grupo Audens | Formulário de contato (nome, e-mail, telefone, assunto, mensagem e aceite de privacidade), captação de currículo e páginas das empresas do grupo: https://www.audensgroup.com.br/contato/ | CRM, automação, plugin específico, processamento do currículo e implementação atual |
| Faculdade Belavista | Formulário de interesse, links ao processo seletivo e uma jornada de inscrição de cursos com uma **etapa intitulada Pagamento**: https://faculdadebelavista.edu.br/ e https://faculdadebelavista.edu.br/cursos-de-atualizacao/inscricao/ | Que o pagamento seja concluído pelo site ou via Stripe/PagSeguro/Mercado Pago; que Logan programou checkout ou backend acadêmico |
| UNIALFA | Catálogo de cursos, divulgação de vestibular, Google Tag Manager e links para sistemas acadêmicos externos `academico.alfa.br` / Lyceum: https://www.unialfa.com.br/ | Que links externos sejam APIs integradas, ou que GTM e matrícula tenham sido implementados pelo mesmo desenvolvedor. **Importação de cursos para nova ambientação** foi relatada por Logan |
| Colégio Alves Faria / Colégio Alfa | Páginas institucionais, áreas de conteúdo, chamada para visita e links ao portal aluno/professor de `escolarmanageronline.com.br`; GTM visível: https://www.colegioalvesfaria.com.br/sobre-nos/ | Single sign-on, integração do portal, plugin específico, automações não expostas |
| Sinnapse (site da agência) | Formulário de proposta com anexo, Google Tag Manager, serviços e páginas do portfólio: https://sinnapse.com/ e https://sinnapse.com/criacao-de-sites/ | Que todos esses componentes existissem na atualização específica feita por Logan |
| RoleUSA | A landing page foi atribuída por Logan à sua atuação na Sinnapse. **Domínio oficial e versão publicada não identificados de maneira confiável.** | Nenhuma stack ou integração específica pode ser atribuída pela análise pública até encontrar o domínio correto |

## Experiências sem acesso público inequívoco

- **Wetok Software (01/2023–08/2023):** landing pages WetokSoft e ConnectPlay, com HTML5, CSS, JavaScript, jQuery e Bootstrap conforme currículo fornecido. Não foi localizado um endereço atual inequívoco dessas entregas.
- **WK Group (04/2021–01/2023):** WordPress, WooCommerce, Stripe via plugins, multilíngue, SEO, Analytics e sistema interno de estoque em HTML5/CSS/JavaScript/jQuery/Bootstrap, de acordo com o currículo. O sistema interno não é verificável sem evidências autorizadas.

## Próxima etapa para comprovar a stack de cada entrega

Para confirmar plugins de formulários, nome dos CRMs, automações, APIs, meios de pagamento e integrações acadêmicas, solicitar:
- Capturas históricas do painel WordPress > Plugins (sem dados sensíveis).
- Código-fonte autorizado de temas/plugins e arquivos de integração (com segredos removidos).
- Prints ou documentação do painel CRM, GTM e configuração de webhooks, omitindo credenciais e dados de clientes.
- Domínio/projeto antigo da RoleUSA e detalhes da importação da UNIALFA.

**Regra editorial:** nas páginas públicas do portfólio, descrever técnicas de desenvolvimento afirmadas por Logan separadamente dos recursos visíveis no estado atual do site. Não promover pistas a provas de autoria ou de implementação backend.

## Auditoria automática de assinaturas no HTML — 15/10/2026

Além da análise de navegação, executei uma inspeção **somente leitura** das páginas iniciais de nove domínios públicos via GitHub Actions: [execução e artefato JSON](https://github.com/loganshi/logan-portfolio/actions/runs/38759593764). O script versionado está em `scripts/public-tech-audit.mjs`; o workflow está em `.github/workflows/public-site-technology.yml`.

A inspeção coleta HTML da homepage e registra caminhos de CSS/JS, nomes de pastas publicamente referenciadas em `/wp-content/plugins/` e `/wp-content/themes/`, scripts de análise e sinais de frameworks, sem enviar formulários, acessar painéis nem tentar autenticação. Arquivos em `/wp-content/cache/` podem trazer referências a plugins, mas os nomes encontrados **não identificam seus autores** e **não confirmam a versão instalada em 2023–2024**.

| Projeto | Evidência nos recursos públicos de 2026 | Valor para o portfólio | Cuidado |
|---|---|---|---|
| **Barça Academy** | WordPress 7.1.3 (meta generator), `/wp-includes/js/jquery/jquery.min.js`, `/wp-content/plugins/elementor/`, `elementor-pro`, `happy-elementor-addons`, `qt-places`, `wp-rocket` | Agora é seguro afirmar **WordPress, Elementor/Pro e jQuery presentes no site atual** | Não há evidência de CRM, API ou pagamento. O estúdio [Guilherme Studio](https://guilhermestudio.com/fc-barcelona-academy/) também publica um projeto visual datado de **2021**, anterior à passagem de Logan pela Sinnapse; não confundir direção de arte histórica com implementação técnica posterior. |
| **Expo Neon** | Recursos em `/_next/static/css/` identificam **Next.js**; script de Google Tag Manager | Uma confirmação forte da arquitetura de frontend da **versão atual** | É incorreto atribuir Next.js ao desenvolvimento de 2023–2024 sem prova de que não houve reimplementação; também não foi identificado CRM. |
| **FADISP** | WordPress 7.1.2, Elementor Pro, tema `hello-elementor`, `elementskit`, `the-events-calendar`, `/wp-content/plugins/customizacao-sinnapse/`, GTM | Existe um **plugin com nome de customização da Sinnapse** carregado no HTML público, além de bibliotecas e construtores específicos | A presença do plugin não comprova que Logan foi seu autor; Lyceum e portais acadêmicos continuam sendo links externos, não integrações de API comprovadas. |
| **UNIALFA** | WordPress, Elementor Pro, Hello Elementor, ElementsKit, `/wp-content/plugins/customizacao-unialfa/`, `simple-cloudflare-turnstile`, GTM | Evidência de **customização específica do cliente** e controle anti-bot presente no frontend atual | Importação de dados de cursos no período de Logan veio do currículo; o código da importação não está exposto. |
| **Belavista** | WordPress/Elementor Pro, tema Hello Elementor, `customizacao-belavista`, `translatepress-multilingual`, `gtm-kit`, `mask-form-elementor`, `wp-rocket` | Identifica **plugin nomeado para o cliente, tradução, máscaras de formulários e scripts de tracking** | Portal acadêmico aponta para domínio hospedado na infraestrutura TOTVS; isso não prova integração API. A etapa pública "Pagamento" não identifica gateway. |
| **Grupo Audens** | Tema `/wp-content/themes/sinnapse/`, plugin `/wp-content/plugins/customizacao-audens/`, Elementor Pro e `contact-form-7` | Evidências diretas de **tema da agência, personalização do cliente e Contact Form 7** | Alguns sinais adicionais de Gravity Forms aparecem na marcação, mas sem asset específico identificado na homepage. Não atribuir dupla stack de formulários sem verificação. |
| **Colégio Alves Faria** | A URL consultada redirecionou para `https://colegioalfagoiania.com.br/`; WordPress, Elementor Pro, ElementsKit, `pixelyoursite`, `wp-rocket` | Evidência de frontend WordPress e infraestrutura atual de pixels/cache | Não comprova uso dessas extensões na versão desenvolvida por Logan. |
| **Sinnapse** | A homepage pública analisada retornou script de GTM, sem paths de plugins reconhecíveis pela auditoria | A própria agência informa publicamente que utiliza Elementor: https://sinnapse.com/desenvolvimento-de-sites/ | Ausência de paths no HTML da homepage **não prova** ausência de WordPress ou Elementor; assets podem estar agregados/ocultos. |
| **FK Partners** | `/wp-content/plugins/litespeed-cache/`, tema `/wp-content/themes/fkpartners/`, assets WordPress e GTM, sinais de Elementor, Gravity Forms e WooCommerce na marcação | Complementa o relato do trabalho em WordPress/PHP e plugin de integração Salesforce; prova que **LiteSpeed Cache e tema próprio existem agora** | Marcação não revela quais partes do checkout, GTM, CRM ou plugins o desenvolvedor implementou pessoalmente. |

### Exemplos de caminhos públicos com evidência direta

- Barça Academy — `https://barcaacademy.com.br/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js`
- Expo Neon — `https://www.exponeon.com.br/_next/static/css/3858e408b05f88ef.css`
- FADISP — `/wp-content/plugins/customizacao-sinnapse/` (referência pública nos assets)
- UNIALFA — `/wp-content/plugins/customizacao-unialfa/`
- Belavista — `https://faculdadebelavista.edu.br/wp-content/cache/min/1/wp-content/plugins/customizacao-belavista/assets/css/custom.css`
- Audens — `https://www.audensgroup.com.br/wp-content/plugins/contact-form-7/includes/css/styles.css` e `https://www.audensgroup.com.br/wp-content/themes/sinnapse/custom.css`
- FK Partners — `https://fkpartners.com/wp-content/plugins/litespeed-cache/assets/js/webfontloader.min.js`

**Confiança:** caminhos de assets explícitos no HTML possuem alta confiança sobre a **tecnologia atual carregada na página**. Nomes de pastas `customizacao-*` indicam código customizado vinculado ao domínio, mas não demonstram a funcionalidade interna. Atribuição de autoria, integrações com CRM e implementações históricas devem permanecer vinculadas ao relato profissional ou a evidências específicas de repositório da época.

### Próximo aprofundamento possível sem login

O rastreamento do HTML das **páginas internas** (além da homepage) pode identificar componentes e bibliotecas que só são carregados em formulários ou jornadas de inscrição. Isso continua limitado ao frontend público; integrações server-to-server e histórico original não são recuperáveis com confiabilidade por inspeção externa.

## Índices públicos de API REST WordPress — 15/10/2026

**Método:** foi consultado o índice público `/wp-json/` de cada site que já apresentava recursos do WordPress. São nomes de namespaces publicados automaticamente por plugins/temas ou integrações customizadas, **não** respostas de endpoints internos. Resultado completo disponível no artefato da [execução bem-sucedida do GitHub Actions](https://github.com/loganshi/logan-portfolio/actions/runs/38760705636).

| Site | Namespaces públicos relevantes | Conclusão segura | O que não é possível afirmar |
|---|---|---|---|
| Barça Academy | `elementor/v1`, `happy/v1`, `wp-rocket/v1`, `wp/v2` | O site atual anuncia APIs de Elementor, Happy Addons, WP Rocket e WordPress | Não foi encontrado namespace explícito de CRM ou checkout, mas integrações server-to-server podem não aparecer |
| FADISP | `tribe/events/v1`, `tec/v1`, `elementskit/v1`, `wordfence/v1`, `redirection/v1`, `elementor-pro/v1` | Há APIs públicas para eventos, componentes de Elementor, segurança e redirecionamento | Os portais Lyceum e acadêmico permanecem links externos; o índice não demonstra que a instituição use API própria de matrícula implementada no site |
| UNIALFA | **`presenca-direito/v1`**, `elementskit/v1`, `google-site-kit/v1`, `wordfence/v1`, `elementor-pro/v1` | Uma namespace customizada de **presença/direito** está registrada no WordPress atual, além de componentes de tracking e Elementor | Não foi possível examinar o funcionamento interno de `presenca-direito/v1`, nem atribuir sua criação ao desenvolvedor ou à migração de cursos |
| Belavista | `jet-form-builder/v1`, `wpforms/v1`, `cptui/v1`, `gtmkit/v1`, `wp-rocket/v1` | APIs de formulários e tipos de conteúdo do WordPress estão publicamente anunciadas | Um formulário de inscrição e a etapa de pagamento não revelam o CRM ou meio de cobrança implementado |
| Grupo Audens | **`audens/v1`**, `contact-form-7/v1`, `wpforms/v1`, `mc4wp/v1`, `elementor-pro/v1` | Presença de namespace customizada do próprio projeto, além de APIs relacionadas a formulários e marketing | Não é possível inferir endpoints de integração CRM ou identificar qual plugin atende cada formulário específico sem navegar/testar o fluxo (não fiz envios) |
| Colégio Alves Faria | `pys/v1`, `gtm4wp/v2`, `wp-rocket/v1`, `elementskit/v1`, `joinchat/v1` | APIs públicas atuais de pixels, GTM, cache, blocos e contato | Nenhuma dessas ferramentas pode ser atribuída à versão entregue em 2023–2024 só pela presença atual |
| FK Partners | `wc/v3`, `wc/store/v1`, **`redePRO`**, **`redeIntegration`**, **`woorede`**, `litespeed/v1`, `aioseo/v1` | A instalação atual anuncia WooCommerce e três namespaces com nome de integração Rede/UseRede, além de LiteSpeed e SEO | Isso não prova que Logan implementou o gateway ou que o uso de Salesforce compartilha esses endpoints. Gravity Forms–Salesforce permanece fundamentado no relato de implementação do plugin. |

**Nota técnica:** nem todos os plugins registram namespaces; a ausência de `gravityforms/v2`, `salesforce/v1` ou similares **não exclui** uma integração existente. Uma integração PHP server-to-server pode operar sem publicar um endpoint REST. Estas evidências não incluem payloads, credenciais ou dados de terceiros.

## Validação da V2

O GitHub Actions passou a executar também os comandos `npm ci`, `npm run lint`, `npm run typecheck`, `npm run test:interactions` e `npm run build`. A primeira execução detectou erro de sintaxe no case Barcelona Academy, já corrigido na branch. Na [execução subsequente](https://github.com/loganshi/logan-portfolio/actions/runs/38760705636), os dois jobs (auditoria de sites e verificação do portfólio) concluíram com sucesso.
