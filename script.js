const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
  {
      enunciado: "A pizza está boa?",
      alternativas:[
      {
          texto: "Sim",
          afirmação: "Pois a pizzaria faz pizzas de qualidade",
      },
      {
        texto: "Não",
        afirmação: "Falta recheio"
      }
    ]
  },
  {
        enunciado: "Você está feliz?",
        alternativas:[
        {
          texto:  "Sim",
          afirmação: "Tirei uma nota boa na prova!"
        {,
        }
          texto:  "Não",
          afirmação: "Porque tirei uma nota ruim na prova"
        }
      ]
    },
    {
        enunciado: "Está bola de basquete está boa?",
        alternativas:[
        {
          texto:  "Sim",
          afirmação: "Está bem cheia"
        {,
        }
          texto:  "Não",
          afirmação: "Está murcha"
        }
      ]
    },
    {
        enunciado: "Você está gostando das aulas?",
        alternativas:[
        {
          texto:  "Sim",
          afirmação: "As aulas são muito úteis"
          {,
          }
          texto:  "Não",
          afirmação: "As aulas são desnecessárias"
        }
      ]
    },  
    {
        enunciado: "Esse shampoo é bom?",
        alternativas:[
        {  
          texto:  "Sim",
          afirmação: "Esse shampoo limpa muito bem"
          {,
          }
          texto:  "Não",
          afirmação: "Esse shampoo não limpa muito bem"
        }
      ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal

function mostraPergunta() {
    if(atual >= perguntas.length){
    mostraResulta();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}
function mostraPergunta (){
  for (const alternativa of perguntaAtual.alternativas){
    const botaoAltrrnativas = document.createElement("button");
    botaoAlternativas.textContent= alternativa.texto;
    botaoAlternativas.addEventListeneer("click",() => respostasSelecionada(alternativa));   
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;  mudar para opcaoSelecionada.afirmacao
  historiaFinal += afirmacoes + " "; 
  atual++;
  mostraPergunta();
}

function mostraResultado(){
caixaPerguntas.textContent = "Parabéns, você tem mais de 130qi.  :]"
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent ="";
}

mostraPergunta();


























];  
