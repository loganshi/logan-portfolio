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
