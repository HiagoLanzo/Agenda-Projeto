import { checagemDiaAtual } from "../checagem/checagemDiaAtual.js";
import { pegaDia } from "../pega/pegaDia.js";
import { completarDiasRestantes } from "./completarDiasRestantes.js";

export function carregarDias(dataAtual, colecaoCamposDiasSemana) {
  const diaAtualNumero = dataAtual.getDate();
  const diaAtualSemana = pegaDia(dataAtual.getDay());
  const meses = {
    janeiro: {
      dias: 31,
    },
    fevereiro: {
      dias: 28,
    },
    marco: {
      dias: 31,
    },
    abril: {
      dias: 30,
    },
    maio: {
      dias: 31,
    },
    junho: {
      dias: 30,
    },
    julho: {
      dias: 31,
    },
    agosto: {
      dias: 31,
    },
    setembro: {
      dias: 30,
    },
    outubro: {
      dias: 31,
    },
    novembro: {
      dias: 30,
    },
    dezembro: {
      dias: 31,
    },
  };
  
  checagemDiaAtual(colecaoCamposDiasSemana, diaAtualSemana, diaAtualNumero);
  completarDiasRestantes(
    diaAtualSemana,
    colecaoCamposDiasSemana,
    dataAtual,
    meses
  );
}
