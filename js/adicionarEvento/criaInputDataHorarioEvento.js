export function criaInputDataHorarioEvento() {
  const novoInputDataHorarioEvento = document.createElement("input");
  novoInputDataHorarioEvento.type = "datetime-local";
  novoInputDataHorarioEvento.classList.add(
    "adicionar-evento__formulario-input"
  );
  novoInputDataHorarioEvento.setAttribute("required", true);

  return novoInputDataHorarioEvento;
}
