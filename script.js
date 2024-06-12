const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
    enunciado: "Pergunta 1",
    alternativas:[
      (
    texto: "Alternativa 1",
      afirmação: "afirmação",
    texto: "Alternativa 2",
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
    texto:  "Alternativa 1",
    texto:  "Alternativa 2",
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
    texto:  "Alternativa 1",
    texto:  "Alternativa 2",
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
    texto:  "Alternativa 1",
    texto:  "Alternativa 2",
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
    texto:  "Alternativa 1",
    texto:  "Alternativa 2",
    ]
  },
];

let atual=0;
let perguntasAtual;

function mostraPergunta (){
  perguntaAtual=perguntas [atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativa(){
  for (const alternativa of perguntaAtual.alternativas){
  const botaoAltrrnativas = document.createElement("button");
  botaoAlternativas.textContent= alternativa;
  caixaAlternativas.appendChild(botaoAlternativas);
  }
}


























];  
