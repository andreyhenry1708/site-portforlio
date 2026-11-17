import { projetos } from "./projetos.js";

/* ---------- Projetos e filtro ---------- */
const lista = document.querySelector("#lista-projetos");
const filtros = document.querySelector("#filtros");
let filtroAtual = "Todos";

// flatMap junta todas as tecnologias; Set remove as repetidas.
function listarTecnologias() {
  const todas = projetos.flatMap((projeto) => projeto.tecnologias);
  return ["Todos", ...new Set(todas)];
}

function criarFiltros() {
  filtros.innerHTML = "";
  listarTecnologias().forEach((tecnologia) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "filtro";
    botao.textContent = tecnologia;
    botao.setAttribute("aria-pressed", String(tecnologia === filtroAtual));
    botao.addEventListener("click", () => {
      filtroAtual = tecnologia;
      criarFiltros();
      renderizarProjetos();
    });
    filtros.append(botao);
  });
}

function renderizarProjetos() {
  const visiveis = projetos.filter(
    (projeto) => filtroAtual === "Todos" || projeto.tecnologias.includes(filtroAtual)
  );

  if (visiveis.length === 0) {
    lista.innerHTML = `<li class="vazio">Nenhum projeto com essa tecnologia ainda.</li>`;
    return;
  }

  lista.innerHTML = visiveis
    .map((projeto) => `
      <li class="projeto">
        <div>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </div>
        <ul class="tags">
          ${projeto.tecnologias.map((tec) => `<li>${tec}</li>`).join("")}
        </ul>
        <p class="projeto__links">
          ${projeto.github ? `<a href="${projeto.github}" rel="noopener">Código</a>` : ""}
          ${projeto.demo ? `<a href="${projeto.demo}" rel="noopener">Demonstração</a>` : ""}
        </p>
      </li>`)
    .join("");
}

/* ---------- Modo escuro ---------- */
const raiz = document.documentElement;
const botaoTema = document.querySelector("#botao-tema");

function lerTemaSalvo() {
  try { return localStorage.getItem("tema"); } catch { return null; }
}

function aplicarTema(tema) {
  raiz.dataset.tema = tema;
  const escuro = tema === "escuro";
  botaoTema.setAttribute("aria-pressed", String(escuro));
  botaoTema.textContent = escuro ? "Modo claro" : "Modo escuro";
  try { localStorage.setItem("tema", tema); } catch { /* sem armazenamento: ignora */ }
}

const preferenciaDoSistema = matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
aplicarTema(lerTemaSalvo() ?? preferenciaDoSistema);

botaoTema.addEventListener("click", () => {
  aplicarTema(raiz.dataset.tema === "escuro" ? "claro" : "escuro");
});

/* ---------- Menu no celular ---------- */
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
});

menu.addEventListener("click", (evento) => {
  if (evento.target.matches("a")) {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Início ---------- */
document.querySelector("#ano").textContent = new Date().getFullYear();
criarFiltros();
renderizarProjetos();
