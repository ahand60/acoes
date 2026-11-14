const abrirComissao = document.getElementById("abrirComissao");
const fecharComissao = document.getElementById("fecharComissao");
const modalComissao = document.getElementById("modalComissao");

let elementoAnterior;

function abrirModalComissao() {
  elementoAnterior = document.activeElement;

  modalComissao.hidden = false;
  document.body.style.overflow = "hidden";

  fecharComissao.focus();
}

function fecharModalComissao() {
  modalComissao.hidden = true;
  document.body.style.overflow = "";

  if (elementoAnterior) {
    elementoAnterior.focus();
  }
}

abrirComissao.addEventListener("click", abrirModalComissao);
fecharComissao.addEventListener("click", fecharModalComissao);

// Fecha ao clicar fora da caixa do modal
modalComissao.addEventListener("click", function (evento) {
  if (evento.target === modalComissao) {
    fecharModalComissao();
  }
});

// Fecha ao pressionar Esc
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && !modalComissao.hidden) {
    fecharModalComissao();
  }
});
