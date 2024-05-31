export function adicionarClasseNumeroAtual(colecaoCamposDiasSemana, id) {
  for (let item of colecaoCamposDiasSemana) {
    const campoTeste = item.children[1];
    if (campoTeste.id == id) {
      campoTeste.classList.add("calendario-semana__dia-numero");
    }
  }
}
