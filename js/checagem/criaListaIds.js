export function criaListaIds(colecaoCamposDiasSemana) {
  const lista = [];
  for (let item of colecaoCamposDiasSemana) {
    lista.push(item.children[1].id);
  }
  return lista;
}
