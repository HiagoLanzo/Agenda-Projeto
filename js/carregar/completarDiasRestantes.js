import { pegaDiaAtualReferencia } from "../pega/pegaDiaAtualReferencia.js";
import { divideColecao } from "./divideColecao.js";

export function completarDiasRestantes(
  diaAtualSemana,
  colecaoCamposDiasSemana,
  dataAtual,
  meses
) {
  const diaReferencia = pegaDiaAtualReferencia(
    diaAtualSemana,
    colecaoCamposDiasSemana
  );

  divideColecao(diaReferencia, colecaoCamposDiasSemana, dataAtual, meses);
}
