import { adicionarDiasAnteriores } from "./adicionarDiasAnteriores.js";
import { adicionarDiasPosteriores } from "./adicionarDiasPosteriores.js";

export function divideColecao(
  diaReferencia,
  colecaoCamposDiasSemana,
  dataAtual,
  meses
) {
  const colecaoIteravel = [];
  for (let item of colecaoCamposDiasSemana) {
    colecaoIteravel.push(item);
  }
  const indexDiaReferencia = colecaoIteravel.indexOf(diaReferencia);

  const listaNomesMeses = [
    "janeiro",
    "fevereiro",
    "marco",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const arrayAntesDoDiaAtual = colecaoIteravel.slice(0, indexDiaReferencia + 1);
  arrayAntesDoDiaAtual.reverse();

  adicionarDiasAnteriores(
    arrayAntesDoDiaAtual,
    meses,
    dataAtual.getMonth(),
    listaNomesMeses
  );

  const arrayDepoisDoDiaAtual = colecaoIteravel.slice(
    indexDiaReferencia,
    colecaoIteravel.length
  );

  adicionarDiasPosteriores(
    arrayDepoisDoDiaAtual,
    meses,
    dataAtual.getMonth(),
    listaNomesMeses
  );
}
