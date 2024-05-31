import { criaFormulario } from "./criaFormulario.js";
import { criaInputNomeEvento } from "./criaInputNomeEvento.js";
import { criaTitulo } from "./criaTitulo.js";
import { criaInputDataHorarioEvento } from "./criaInputDataHorarioEvento.js";
import { criaBotaoEvento } from "./criaBotaoEvento.js";

export function criarBoxAdicionar(listaHorario, areaAdicionarEvento) {
  const formulario = criaFormulario();

  const titulo = criaTitulo();

  const inputNomeEvento = criaInputNomeEvento();

  const inputDataHorarioEvento = criaInputDataHorarioEvento();

  const inputsAdicionarEvento = [inputNomeEvento, inputDataHorarioEvento];

  const botaoEvento = criaBotaoEvento(
    formulario,
    inputsAdicionarEvento,
    areaAdicionarEvento
  );

  formulario.appendChild(titulo);
  formulario.appendChild(inputNomeEvento);
  formulario.appendChild(inputDataHorarioEvento);
  formulario.appendChild(botaoEvento);

  listaHorario.appendChild(formulario);
}
