export function criaInputNomeEvento() {
  const novoInputNomeEvento = document.createElement("input");
  novoInputNomeEvento.type = "text";
  novoInputNomeEvento.classList.add("adicionar-evento__formulario-input");
  novoInputNomeEvento.placeholder = "Nome do evento";
  novoInputNomeEvento.setAttribute("required", true);

  return novoInputNomeEvento;
}
