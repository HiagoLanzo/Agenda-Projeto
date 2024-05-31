export function pegaDiaAtualReferencia(
  diaAtualSemana,
  colecaoCamposDiasSemana
) {
  for (let item of colecaoCamposDiasSemana) {
    const campoTeste = item.children[1].id;
    if (campoTeste == diaAtualSemana) {
      return item;
    }
  }
}
