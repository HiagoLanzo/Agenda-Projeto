import { validacaoDiaAnterior } from "./validacaoDiaAnterior.js";

export function adicionarDiasAnteriores(
  array,
  meses,
  mesAtual,
  listaNomesMeses
) {
  for (let i = 1; i < array.length; i++) {
    const dataAnterior = array[i - 1].children[1].childNodes[0].data;
    const dataAnteriorAtualizada = Number(dataAnterior);
    const campoDataInserir = array[i].children[1];

    const dataInserir = document.createTextNode(
      validacaoDiaAnterior(
        meses,
        mesAtual,
        dataAnteriorAtualizada,
        listaNomesMeses
      )
    );

    campoDataInserir.appendChild(dataInserir);
  }
}
