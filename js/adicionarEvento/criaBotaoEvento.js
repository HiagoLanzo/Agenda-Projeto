import { adicionarEvento } from "./adicionarEvento.js";
import { removerBoxAdicionar } from "./removerBoxAdicionar.js";

export function criaBotaoEvento(
  formulario,
  inputsAdicionarEvento,
  areaAdicionarEvento
) {
  const novoBotaoEvento = document.createElement("button");
  novoBotaoEvento.classList.add("adicionar-evento__formulario-botao");
  novoBotaoEvento.addEventListener("click", (event) => {
    event.stopPropagation();
    adicionarEvento(inputsAdicionarEvento, areaAdicionarEvento, event);
    removerBoxAdicionar(formulario);
  });
  const valorBotaoEvento = document.createTextNode("adicionar evento");
  const imagemBotaoEvento = document.createElement("img");
  imagemBotaoEvento.classList.add("adicionar-evento__formulario-icone");
  imagemBotaoEvento.src = "https://img.icons8.com/ios/50/000000/ok--v1.png";
  novoBotaoEvento.appendChild(valorBotaoEvento);
  novoBotaoEvento.appendChild(imagemBotaoEvento);

  return novoBotaoEvento;
}
