import { pegaMes } from "../pega/pegaMes.js";

const campoDataMes = document.getElementById("dataMes");

export function carregarMes(dataAtual) {
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = pegaMes(dataAtual.getMonth());

  campoDataMes.innerHTML = `${mesAtual} de ${anoAtual}`;
}
