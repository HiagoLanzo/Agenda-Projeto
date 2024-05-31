export function criaFormulario() {
  const novoFormulario = document.createElement("form");
  novoFormulario.id = "formulario";
  novoFormulario.classList.add("adicionar-evento__formulario");
  novoFormulario.style.gridColumn = 2;
  novoFormulario.style.gridRowStart = 1;
  novoFormulario.style.gridRowEnd = 4;

  return novoFormulario;
}
