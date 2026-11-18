/* Menu para celulares */
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

function alternarMenu() {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
}

function fecharMenu() {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", alternarMenu);

menu.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) {
        fecharMenu();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

/* Ano do rodapé */
document.querySelector("#ano").textContent = new Date().getFullYear();