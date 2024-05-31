export function preencheDia(colecaoCamposDiasSemana, id, numeroDia) {
  for (let item of colecaoCamposDiasSemana) {
    const campoTeste = item.children[1];
    if (campoTeste.id == id) {
      campoTeste.innerHTML = numeroDia;
    }
  }
}
