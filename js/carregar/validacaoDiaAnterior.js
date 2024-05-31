export function validacaoDiaAnterior(
  meses,
  mesAtual,
  dataAnteriorAtualizada,
  listaNomesMeses
) {
  if (dataAnteriorAtualizada - 1 <= 0) {
    let index = mesAtual - 1;
    if (index <= -1) {
      index = listaNomesMeses.length - 1;
    }
    const mesAnterior = listaNomesMeses[index];
    console.log(listaNomesMeses[-1]);
    return meses[mesAnterior].dias;
  }
  return dataAnteriorAtualizada - 1;
}
