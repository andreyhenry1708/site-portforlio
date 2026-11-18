/* Menu para celulares */
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

function alterarMenu() {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
}

function fecharMenu() {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", alterarMenu);

menu.addEventListener("click", (evento) => {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

/* Ano do rodapé */
document.querySelector("#ano").textContent = new Date().getFullYear();