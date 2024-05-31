export function validacaoDiaPosterior(
  meses,
  mesAtual,
  dataPosteriorAtualizada,
  listaNomesMeses
) {
  const mesPosterior = listaNomesMeses[mesAtual];

  if (dataPosteriorAtualizada + 1 > meses[mesPosterior].dias) {
    return 1;
  }
  return dataPosteriorAtualizada + 1;
}
