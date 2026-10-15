# Logan Mendes Contardi — Interactive Developer Lab

V2 do portfólio: **From problem to product.** Next.js App Router, TypeScript, Tailwind CSS e Motion. As rotas individuais e os conteúdos confirmados da V1 foram preservados. Uma cópia anterior à transformação está em `.history/portfolio-v1.zip`.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Explorar a V2

- **Hero:** mova o ponteiro sobre o sistema, selecione Interface/Lógica/Dados/Conexões ou alterne Ideia/Produto. Em desktop com altura suficiente, o scroll organiza as camadas; “Seguir scroll” restaura esse modo após uma escolha manual. No mobile, use os controles de toque.
- **Cases:** em desktop, o scroll percorre três cenas fixadas temporariamente na viewport (FK Partners, Expo Neon e Logan Portfolio). As abas selecionam um capítulo diretamente. Barcelona Academy e FADISP também estão acessíveis nos links de projetos adicionais. Em telas menores e com movimento reduzido, a navegação é manual.
- **FK Partners:** “Simular conexão” e o botão do formulário demonstram um fluxo local. Nenhuma requisição é enviada a Salesforce ou a qualquer serviço.
- **Expo Neon:** Desktop/Mobile reorganiza uma composição editorial conceitual e responsiva, que não reproduz o site do cliente.
- **Soluções customizadas:** “Separar camadas” revela interface, lógica e dados; o mesmo controle reúne o produto novamente.
- **Capacidades:** selecione uma área para reorganizar o mapa e consultar tecnologias e aplicações. As setas do teclado, Home e End também navegam pelas abas.
- **Percurso:** abra os itens para ler escopo e tecnologias. O menu indica a seção em leitura.

## Verificar

```bash
npm run lint
npm run typecheck
npm run test:interactions
npm run build
```

Os testes de DOM verificam os controles e a navegação por teclado com movimento normal e reduzido. Eles não substituem a inspeção visual em navegadores reais. A integração de navegador da sessão de implementação estava indisponível; a conferência visual em desktop e mobile permanece recomendada.

## Conteúdo e estrutura

- `src/content/profile.ts`: perfil, contatos, experiência e tecnologias.
- `src/content/projects.ts`: dados e rotas dos cases, com pendências explícitas.
- `src/content/site-audits.ts`: evidências públicas auditadas e limites de verificação exibidos nos cases.
- `docs/research/public-site-technology-audit-2026-10.md`: pesquisa técnica de todos os projetos citados da Sinnapse, incluindo os não destacados na home.
- `src/content/lab.ts`: textos da V2 e composições dos mapas, organizados por locale.
- `src/components/hero.tsx`: sistema interativo e transformação pelo scroll.
- `src/components/project-story.tsx` e `project-previews.tsx`: narrativa e demonstrações dos cases.
- `src/components/capability-map.tsx`: mapa de capacidades acessível por toque e teclado.
- `src/app/lab.css`: identidade e adaptações da homepage V2.
- `src/app/globals.css`: base compartilhada e estilos dos cases.

As páginas dos cases incluem uma seção de pesquisa técnica com observações do site público, links de evidência e avisos sobre funcionalidades de backend não verificáveis. Recursos existentes em 2026 não são automaticamente atribuídos ao trabalho realizado em 2023–2024. As composições visuais dos cases são ilustrativas, feitas com HTML/CSS/SVG e não representam capturas reais das empresas. Os três cases principais apresentam FK Partners (integração/performance), Expo Neon (site institucional, na Sinnapse) e este portfólio interativo. Barcelona Academy (site integral e integrações, sob responsabilidade de Logan na Sinnapse) e FADISP permanecem disponíveis em cards adicionais e páginas individuais. O percurso profissional tem quatro experiências e períodos confirmados: WK Group (Desenvolvedor Front-End, 04/2021–01/2023), Wetok Software (Desenvolvedor Front-End, 01/2023–08/2023), Sinnapse (Desenvolvedor WordPress, 08/2023–08/2024) e FK Partners (Desenvolvedor Full Stack Pleno, 08/2024–Atual). O texto preserva limites explícitos onde autoria detalhada de cada projeto, métricas ou imagens autorizadas aguardam validação. Os slugs da V2 foram mantidos para não quebrar links existentes.

O GitHub público já está vinculado no perfil. Antes de publicar, complete e-mail, LinkedIn e currículo em `profile.ts`, confirme o mês/ano do projeto Barcelona Academy e as tecnologias e integrações específicas utilizadas nele, além de capturas autorizadas e resultados verificáveis dos trabalhos. Configure `NEXT_PUBLIC_SITE_URL` com o domínio final para metadados, robots e sitemap. A primeira versão está em PT-BR; os módulos de conteúdo permitem acrescentar traduções.
