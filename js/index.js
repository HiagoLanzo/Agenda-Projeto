import { carregarMes } from "./carregar/carregarMes.js";
import { carregarDias } from "./carregar/carregarDias.js";
import { adicionarEvento } from "./adicionarEvento/adicionarEvento.js";
import { criarBoxAdicionar } from "./adicionarEvento/criarBoxAdicionar.js";

const dataAtual = new Date();
const colecaoCamposDiasSemana = document.getElementsByClassName(
  "calendario-semana__dia-item"
);

window.onload = carregarMes(dataAtual);
window.onload = carregarDias(dataAtual, colecaoCamposDiasSemana);
const checagemTamanhoTela = window.matchMedia("(max-width: 1024px)");

const botaoAdicionarEvento = document.getElementsByClassName(
  "adicionar-evento__formulario-botao"
)[0];
const areaAdicionarEvento = document.getElementsByClassName(
  "calendario-semana__horario"
)[0];

const inputsAdicionarEvento = document.getElementsByClassName(
  "adicionar-evento__formulario-input"
);

botaoAdicionarEvento.addEventListener("click", (event) => {
  adicionarEvento(inputsAdicionarEvento, areaAdicionarEvento, event);
  inputsAdicionarEvento[0].value = "";
  inputsAdicionarEvento[1].value = "";
});

const listaHorario = document.getElementsByClassName(
  "calendario-semana__horario"
)[0];
const filhosListaHorario = listaHorario.children;

if (checagemTamanhoTela.matches) {
  listaHorario.addEventListener("click", (event) => {
    console.log(`Evento no listaHorario ${event}`);
    if (filhosListaHorario[filhosListaHorario.length - 1].id == "formulario") {
      console.log("If statment travando execução por aqui");
      return;
    }
    criarBoxAdicionar(listaHorario, areaAdicionarEvento);
  });
}
