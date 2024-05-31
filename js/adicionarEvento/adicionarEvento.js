export function adicionarEvento(inputs, area, evento) {
  evento.preventDefault();
  const nomeEvento = inputs[0].value;
  const dataHorario = inputs[1].value;
  const dataObjeto = new Date(dataHorario);
  const regexHorario = /(?<=T)\d{2}:\d{2}/;

  const diaIndex = dataObjeto.getDay();
  const hora = dataObjeto.getHours();

  const caixa = document.createElement("div");
  caixa.style.gridColumn = diaIndex + 2;
  caixa.style.gridRow = hora + 1;
  caixa.classList.add("evento-adicionado");

  const titulo = document.createElement("h3");
  titulo.classList.add("evento-adicionado__titulo");
  const valorTitulo = document.createTextNode(nomeEvento);

  const campoHorarioEvento = document.createElement("p");
  campoHorarioEvento.classList.add("evento-adicionado__horario");
  const horarioTitulo = document.createTextNode(
    dataHorario.match(regexHorario).toString()
  );

  titulo.appendChild(valorTitulo);
  caixa.appendChild(titulo);

  campoHorarioEvento.appendChild(horarioTitulo);
  caixa.appendChild(campoHorarioEvento);

  area.appendChild(caixa);
}
