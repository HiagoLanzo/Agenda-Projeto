import { validacaoDiaPosterior } from "./validacaoDiaPosterior.js";

export function adicionarDiasPosteriores(
  array,
  meses,
  mesAtual,
  listaNomesMeses
) {
  for (let i = 1; i < array.length; i++) {
    const dataPosterior = array[i - 1].children[1].childNodes[0].data;
    const dataPosteriorAtualizada = Number(dataPosterior);
    const campoDataInserir = array[i].children[1];

    const dataInserir = document.createTextNode(
      validacaoDiaPosterior(
        meses,
        mesAtual,
        dataPosteriorAtualizada,
        listaNomesMeses
      )
    );

    campoDataInserir.appendChild(dataInserir);
  }
}
