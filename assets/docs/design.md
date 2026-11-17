# Design do Site-Portfólio

Documento de design. Serve de guia para construir o site por partes. Fica na pasta `docs/` do repositório.

## 1. Intenção e porquê

Criar um portfólio profissional que convença **recrutadores** (público principal) e **possíveis clientes** (público secundário) de que o autor é um futuro profissional com excelente potencial e boa base em programação.

O site precisa **provar**, não só afirmar: mostrar projetos que funcionam, código no GitHub, o raciocínio por trás de cada decisão e a evolução ao longo do tempo. O objetivo é ficar pronto para receber projetos novos sem mexer na estrutura.

## 2. Metas, não-metas e anti-metas

**Metas**
- Passar profissionalismo e cuidado já nos primeiros segundos.
- Prender o leitor com conteúdo real: estudos de caso, trajetória e registro de aprendizado.
- Adicionar um projeto novo editando só um arquivo de dados.
- Ser rápido, acessível e bom no celular.
- Servir de prática: cada parte ensina uma habilidade (JavaScript, organização de código, Git).

**Não-metas (por enquanto)**
- Usar React (fica para a Versão 2).
- Backend, banco de dados ou login.
- Blog completo, comentários, vários idiomas.

**Anti-metas (seria fracasso mesmo funcionando)**
- Parecer um template genérico.
- Animações que atrapalham a leitura ou cansam.
- Promessas exageradas ("habilidades impecáveis") sem evidência.
- Texto de enchimento só para parecer cheio.

## 3. Restrições

- HTML, CSS e JavaScript puro (Versão 1), sem frameworks nem bibliotecas.
- Edição no VS Code, repositório no GitHub, publicação no GitHub Pages (site estático).
- Construção por partes, com commits pequenos.
- Código simples e comentado, porque o autor está aprendendo JavaScript.
- Conteúdo atual: 2 projetos pequenos em HTML/CSS e 1 em C.

## 4. Abordagens consideradas

| Abordagem | Resumo | Prós | Contras |
|---|---|---|---|
| A | Só os 3 projetos como estudos de caso | Rápido e honesto | Raso, pouco conteúdo |
| B | O site como projeto principal + espaço de estudos que cresce | Mostra evolução, conteúdo vivo | Exige escrever com regularidade |
| C | Criar 2 ou 3 projetos fortes antes de lançar | Conteúdo mais impressionante | Site demora meses, sem vitrine |

**Escolhida pelo autor: B, com C acontecendo depois.** O site é lançado cedo e cada projeto novo vira uma parte seguinte e uma entrada nos estudos.

Plano de tecnologia (decidido pelo autor): Versão 1 em HTML/CSS/JS puro; Versão 2 recriando o site em React com Vite.

## 5. Decisões do autor

- Público: recrutadores e possíveis clientes.
- Tema dark que combine com código e tecnologia, suave e moderno.
- Interações que chamem atenção, sem exagero.
- Bastante conteúdo, que prenda o leitor.
- Construção por partes, para praticar.
- Site pronto para receber projetos futuros.

## 6. Decisões minhas (a confirmar ou corrigir)

1. **Arquitetura orientada a dados.** Cada projeto é um arquivo em `content/projetos/<slug>.js` com os textos do estudo de caso. Uma única página-modelo (`projeto.html?id=<slug>`) lê esse arquivo e monta a página. Adicionar projeto = criar um arquivo + colocar imagens.
2. **Visual inspirado em temas de editor de código.** Fundo azul-noite suave (não preto puro), superfícies um tom acima, texto claro com contraste confortável, um azul-gelo como destaque principal e um âmbar discreto como segundo destaque. Paleta final fechada na parte 1.
3. **Tipografia (proposta):** títulos em Bricolage Grotesque, texto em IBM Plex Sans, código em JetBrains Mono.
4. **Interações (todas respeitam `prefers-reduced-motion`):**
   - Abertura com um trecho de código que se escreve uma única vez.
   - Revelação suave ao rolar, só em blocos de leitura, não em tudo.
   - Barra de progresso de leitura e sumário lateral nos estudos de caso.
   - Hover discreto em links e itens de projeto.
   - Filtro de projetos por tecnologia.
   - Blocos de código com botão "copiar".
5. **Tom dos textos:** português do Brasil, primeira pessoa, direto, sempre com evidência (link, print, código).
6. **Qualidade mínima:** HTML semântico, navegação por teclado, contraste adequado, responsivo desde o celular, meta de 90+ no Lighthouse.
7. **Roteamento simples** por `?id=` em site estático. O compartilhamento de links por projeto funciona no GitHub Pages sem configuração extra.

## 7. Estrutura do site

**Página inicial (rolagem narrativa)**
1. Abertura: nome, frase de posicionamento, trecho de código, botões para projetos e contato.
2. Destaques: até 3 projetos, cada um com problema e resultado.
3. Habilidades: cada tecnologia ligada ao projeto que a comprova.
4. Trajetória: linha do tempo curta de como chegou até aqui.
5. Em construção: registro de estudos e do desenvolvimento do próprio site.
6. Contato: e-mail, GitHub, LinkedIn e currículo em PDF.

**Página de estudo de caso (uma por projeto)**
Resumo, problema, solução, tecnologias, trechos de código comentados, desafios e aprendizados, links (código e demonstração), próximos passos.

## 8. Partes de construção (ordem)

| Parte | Entrega | O que você pratica |
|---|---|---|
| 0 | Repositório e estrutura de pastas | Git, organização |
| 1 | Base visual: variáveis, tipografia, layout, tema dark | CSS avançado, variáveis |
| 2 | Abertura (hero) com o trecho de código animado | JS: temporizadores, DOM |
| 3 | Sistema de dados de projetos + lista, destaques e filtro | JS: módulos, `map`, `filter` |
| 4 | Página-modelo de estudo de caso, sumário e barra de progresso | JS: URL, `IntersectionObserver`, eventos |
| 5 | Seção de habilidades ligadas a projetos | Estrutura de dados |
| 6 | Trajetória e Sobre | HTML/CSS |
| 7 | Em construção (estudos) | Dados + renderização |
| 8 | Contato e currículo | HTML, acessibilidade |
| 9 | Polimento: acessibilidade, performance, SEO | Lighthouse, boas práticas |
| 10 | Publicação no GitHub Pages | Deploy |

Um plano detalhado, parte por parte, será escrito depois da aprovação deste design.

## 9. Pendências do autor (conteúdo)

- Nome a exibir, foto profissional e currículo em PDF.
- Frase de posicionamento e texto de Sobre.
- Prints e descrição dos 3 projetos atuais (problema, solução, aprendizados).
- Links do GitHub, LinkedIn e e-mail.

## 10. O que fica para quem constrói

Escolha final das cores e fontes (parte 1), textos de microinterface, nomes de classes e detalhes de cada animação.
