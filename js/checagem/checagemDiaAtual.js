import { adicionarClasseNumeroAtual } from "../carregar/adicionaClasse.js";
import { preencheDia } from "../carregar/preencheDia.js";
import { criaListaIds } from "./criaListaIds.js";

export function checagemDiaAtual(
  colecaoCamposDiasSemana,
  diaAtualSemana,
  diaAtualNumero
) {
  const listaIds = criaListaIds(colecaoCamposDiasSemana);

  for (let idDia of listaIds) {
    if (idDia == diaAtualSemana) {
      preencheDia(colecaoCamposDiasSemana, idDia, diaAtualNumero);
      adicionarClasseNumeroAtual(colecaoCamposDiasSemana, idDia);
    }
  }
}
