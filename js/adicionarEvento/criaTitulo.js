export function criaTitulo() {
  const novoTitulo = document.createElement("h2");
  novoTitulo.classList.add("adicionar-evento__formulario-titulo");
  const valorTitulo = document.createTextNode("Adicionar evento");
  novoTitulo.appendChild(valorTitulo);

  return novoTitulo;
}
