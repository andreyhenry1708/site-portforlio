# Site-Portfólio: Plano de Construção

> **Como usar:** cada tarefa tem passos com resultado verificável. Marque `- [ ]` conforme avançar. A cada tarefa o código é apresentado e explicado antes de você escrevê-lo. Digitar à mão, em vez de colar, é o que fixa o aprendizado.

**Objetivo:** construir, por partes, um portfólio dark e moderno que receba novos projetos editando apenas arquivos de dados.

**Arquitetura:** site estático em HTML/CSS/JS puro. CSS dividido por responsabilidade (tokens, base, layout, componentes). Projetos como arquivos de dados lidos por uma página-modelo.

**Tecnologias:** HTML, CSS, JavaScript (módulos ES), Git/GitHub, Live Server, GitHub Pages.

**Design:** `docs/design.md`

## Restrições globais

- HTML, CSS e JavaScript puro (Versão 1), sem frameworks nem bibliotecas.
- Publicação no GitHub Pages (site estático).
- Todas as animações respeitam `prefers-reduced-motion`.
- Português do Brasil, primeira pessoa, sempre com evidência.
- Meta de 90+ no Lighthouse; HTML semântico e navegação por teclado.

## Pontos de atenção (testados nas tarefas indicadas)

1. **JavaScript falhando:** o conteúdo principal continua legível (tarefa 3).
2. **Movimento reduzido ativado no sistema:** nenhuma animação roda (tarefa 2).
3. **Tela de 320 px:** sem rolagem horizontal; blocos de código rolam dentro do próprio bloco (tarefa 4).
4. **Fontes do Google indisponíveis:** a fonte reserva mantém o layout legível (tarefa 2).
5. **Projeto com campo faltando ou id inexistente:** mensagem clara, sem quebrar (partes 3 e 4).

---

## Visão geral das partes

| Parte | Entrega | Pronto quando |
|---|---|---|
| 0 | Repositório e estrutura | Pasta publicada no GitHub com a estrutura |
| 1 | Base visual dark e layout | Página vazia com topo, rodapé e tema, bonita em qualquer tela |
| 2 | Abertura: visual, código que se escreve e fundo de constelação | Abertura completa sem JS; animações respeitam movimento reduzido |
| 3 | Dados de projetos, destaques e filtro | Novo projeto aparece criando só um arquivo |
| 4 | Estudo de caso, sumário e barra de progresso | `projeto.html?id=...` monta a página |
| 5 | Habilidades ligadas a projetos | Cada tecnologia aponta para o projeto que a comprova |
| 6 | Trajetória e Sobre | Linha do tempo legível |
| 7 | Em construção (estudos) | Entradas vêm de arquivo de dados |
| 8 | Contato e currículo | Links funcionando, PDF baixa |
| 9 | Polimento | Lighthouse 90+ em todas as páginas |
| 10 | Publicação | Site no ar no GitHub Pages |

As partes 3 a 10 ganham um plano detalhado quando chegarmos nelas. A parte 2 está resumida abaixo e cada tarefa é detalhada ao começar.

---

## Parte 0: Repositório e estrutura

### Tarefa 0: Estrutura inicial

**Arquivos a criar**
```
index.html
css/        (tokens.css, base.css, layout.css, components.css)
js/         (main.js)
content/projetos/
assets/images/   assets/docs/
docs/       (design.md, plan.md)
README.md   .gitignore
```

- [ ] **Passo 1:** clonar o repositório (`git clone <url-do-repo>`) e abrir a pasta no VS Code. *Resultado:* a pasta aparece no explorador do VS Code.
- [ ] **Passo 2:** instalar a extensão **Live Server**. *Resultado:* botão "Go Live" aparece na barra inferior.
- [ ] **Passo 3:** criar as pastas acima. Pastas vazias não vão para o Git: coloque um arquivo `.gitkeep` em `content/projetos`, `assets/images` e `assets/docs`.
- [ ] **Passo 4:** copiar `design.md` e `plan.md` para `docs/`.
- [ ] **Passo 5:** `README.md` com título, uma frase sobre o projeto e como rodar (Live Server). `.gitignore` com `.DS_Store` e `node_modules/`.
- [ ] **Passo 6:** `index.html` mínimo (`<!DOCTYPE html>`, `lang="pt-BR"`, `charset`, `viewport`, `<title>`) com um `<h1>` de teste. *Resultado:* abrir com Live Server mostra o título.
- [ ] **Passo 7:** commit e push.
```bash
git add .
git commit -m "chore: estrutura inicial do projeto"
git push
```
*Resultado:* os arquivos aparecem no GitHub.

*Você pratica:* Git (clone, add, commit, push) e organização de projeto.

---

## Parte 1: Base visual dark e layout

### Tarefa 1: Tokens de design (`css/tokens.css`)

**Produz:** variáveis CSS usadas por todos os outros arquivos.

- [ ] **Passo 1:** em `:root`, definir as cores (valores decididos):

| Variável | Valor | Uso |
|---|---|---|
| `--bg` | `#0E1320` | fundo da página |
| `--bg-elevado` | `#151C2E` | cartões e blocos |
| `--bg-sutil` | `#1B2438` | hover e realces |
| `--borda` | `#26324A` | linhas e contornos |
| `--texto` | `#E6EAF2` | texto principal |
| `--texto-suave` | `#9AA6BC` | texto secundário |
| `--destaque` | `#7AA2F7` | links e ações |
| `--acento` | `#E0AF68` | detalhes pontuais |

- [ ] **Passo 2:** definir tipografia: `--fonte-titulo` (Bricolage Grotesque), `--fonte-texto` (IBM Plex Sans), `--fonte-codigo` (JetBrains Mono), cada uma com fonte reserva (`system-ui`, `ui-monospace`).
- [ ] **Passo 3:** definir escala de tamanhos com `clamp()` para títulos, e escalas de espaçamento (`--esp-1` a `--esp-8`), raios (`--raio-p: .375rem`, `--raio-m: .75rem`) e transição (`--dur: 200ms`, `--ease: cubic-bezier(.2,.7,.2,1)`).
- [ ] **Passo 4:** verificar contraste de `--texto-suave` e `--destaque` sobre `--bg` (ferramenta de contraste do DevTools). *Esperado:* mínimo 4.5:1 (ambos passam com folga).
- [ ] **Passo 5:** commit `feat: tokens de design`.

*Você pratica:* variáveis CSS, `clamp()`, escalas de design.

### Tarefa 2: Base (`css/base.css`) e fontes

**Consome:** variáveis da tarefa 1.

- [ ] **Passo 1:** em `index.html`, ligar as fontes do Google (`preconnect` + `display=swap`) e os quatro arquivos CSS, na ordem tokens, base, layout, components.
- [ ] **Passo 2:** em `base.css`: reset simples (`box-sizing`), `body` com `--bg`, `--texto` e `--fonte-texto`, títulos com `--fonte-titulo`, links com `--destaque`, `::selection` com cor própria.
- [ ] **Passo 3:** `:focus-visible` com contorno de 3 px em `--acento`.
- [ ] **Passo 4:** classes utilitárias: `.container` (largura máxima 68rem, margens laterais), `.pular` (link "Pular para o conteúdo", visível só com foco).
- [ ] **Passo 5:** regra global `@media (prefers-reduced-motion: reduce)` desligando transições e rolagem suave.
- [ ] **Passo 6 (ponto de atenção 4):** bloquear as fontes do Google no DevTools (aba Network) e recarregar. *Esperado:* fontes reserva aparecem e nada quebra.
- [ ] **Passo 7 (ponto de atenção 2):** ativar "reduzir movimento" no sistema e recarregar. *Esperado:* sem transições.
- [ ] **Passo 8:** commit `feat: base de estilos e fontes`.

*Você pratica:* reset, tipografia, acessibilidade de foco, media queries de preferência.

### Tarefa 3: Estrutura da página e layout (`css/layout.css`, `js/main.js`)

**Produz:** topo fixo, navegação com menu no celular, rodapé.

- [ ] **Passo 1:** em `index.html`: `<header>` com marca (nome) e `<nav>` (Projetos, Trajetória, Estudos, Contato), `<main id="conteudo">` com uma seção de teste, `<footer>` com ano e texto curto.
- [ ] **Passo 2:** `layout.css`: topo com `position: sticky`, fundo semitransparente com leve desfoque (`backdrop-filter`) e borda inferior em `--borda`.
- [ ] **Passo 3:** navegação em linha no desktop; no celular, botão "Menu" que abre a lista abaixo do topo.
- [ ] **Passo 4:** em `js/main.js`, função `alternarMenu()` que alterna a classe `aberto` e o atributo `aria-expanded`; fechar o menu ao clicar em um link. Carregar com `<script type="module" src="js/main.js">`.
- [ ] **Passo 5 (ponto de atenção 1):** desativar o JavaScript no DevTools. *Esperado:* conteúdo e links continuam acessíveis (no celular, a lista de navegação deve aparecer aberta quando não há JS).
- [ ] **Passo 6:** commit `feat: layout base com topo e rodapé`.

*Você pratica:* HTML semântico, `position: sticky`, eventos, atributos ARIA, melhoria progressiva.

### Tarefa 4: Verificação da parte 1

- [ ] **Passo 1 (ponto de atenção 3):** testar em 320 px, 768 px e 1280 px no modo responsivo do DevTools. *Esperado:* sem rolagem horizontal.
- [ ] **Passo 2:** navegar só com a tecla Tab. *Esperado:* foco visível em todos os itens; "Pular para o conteúdo" funciona.
- [ ] **Passo 3:** rodar Lighthouse (Chrome, aba Lighthouse). *Esperado:* Acessibilidade e Boas práticas acima de 90.
- [ ] **Passo 4:** `git push` e conferir no GitHub.

*Você pratica:* testes manuais de responsividade, acessibilidade e desempenho.


---

## Parte 2: Abertura

**Conteúdo aprovado**
- Etiqueta: Estudante de Análise e Desenvolvimento de Sistemas
- Título: Transformo o que aprendo em projetos que funcionam.
- Texto: Sou Andrey Henry. Aqui você encontra meus projetos, o raciocínio por trás de cada um e o que estou estudando agora.
- Botões: Ver projetos (`#projetos`) e Falar comigo (`#contato`)
- Código da janela de editor:
```js
const andrey = {
  formacao: "Análise e Desenvolvimento de Sistemas",
  linguagens: ["HTML", "CSS", "C"],
  estudando: ["JavaScript", "Bancos de dados", "React"],
  objetivo: "Crescer como desenvolvedor",
};
```

### Tarefa 5: Abertura estática (`index.html`, `css/components.css`, `css/tokens.css`)
Layout em duas colunas no desktop e empilhado no celular. A janela de editor já mostra o código completo, com cores de sintaxe vindas de tokens novos. **Pronto quando:** a abertura está completa e legível com o JavaScript desligado.

### Tarefa 6: Código que se escreve sozinho (`js/hero.js`)
O código é digitado uma única vez, quando a abertura fica visível. Com movimento reduzido, aparece completo na hora. Leitores de tela recebem o texto completo uma vez, sem ouvir letra por letra. **Pronto quando:** funciona nos três cenários (animado, movimento reduzido, sem JS).

### Tarefa 7: Fundo de constelação (`js/fundo.js`, `canvas`)
Pontos ligados por linhas, baixa opacidade, reação suave ao mouse. Pausa com movimento reduzido, em telas pequenas e com a aba oculta. **Pronto quando:** o texto continua perfeitamente legível e o Lighthouse de Performance segue acima de 90.

**Pontos de atenção desta parte**
- Código da janela visível mesmo sem JavaScript (tarefa 5).
- Movimento reduzido mostra o código completo, sem animar (tarefa 6).
- Aba oculta pausa a animação do fundo (tarefa 7).
- Janela estreita (320 px): o código rola dentro do próprio bloco, sem rolagem horizontal na página (tarefa 5).
