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
- **Cases:** em desktop, o scroll percorre três cenas fixadas temporariamente na viewport. As abas selecionam um capítulo diretamente. Em telas menores e com movimento reduzido, a navegação é manual pelas mesmas abas.
- **FK Partners:** “Simular conexão” e o botão do formulário demonstram um fluxo local. Nenhuma requisição é enviada a Salesforce ou a qualquer serviço.
- **Institucional:** Desktop/Mobile reorganiza uma composição editorial responsiva.
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
- `src/content/lab.ts`: textos da V2 e composições dos mapas, organizados por locale.
- `src/components/hero.tsx`: sistema interativo e transformação pelo scroll.
- `src/components/project-story.tsx` e `project-previews.tsx`: narrativa e demonstrações dos cases.
- `src/components/capability-map.tsx`: mapa de capacidades acessível por toque e teclado.
- `src/app/lab.css`: identidade e adaptações da homepage V2.
- `src/app/globals.css`: base compartilhada e estilos dos cases.

As composições de projetos são conceituais, feitas com HTML/CSS/SVG. Os cases institucionais e customizados continuam estruturas provisórias. O case FK Partners contém somente o escopo informado; detalhes, período e resultados aguardam validação.

Antes de publicar, complete e-mail, LinkedIn, GitHub e currículo em `profile.ts`, além de cargos, períodos, capturas autorizadas e resultados verificáveis. Configure `NEXT_PUBLIC_SITE_URL` com o domínio final para metadados, robots e sitemap. A primeira versão está em PT-BR; os módulos de conteúdo permitem acrescentar traduções.
