// Comentários
document.write("Hello")

// variáveis, tipos de dados
let myvar = "Hello"
const myconst = "He"

document.write(myvar + myconst)
document.write("<br>")

// string
const s1 = "Isso é uma string"
const s2 = 'Isso também é uma string'
const s3 = `isso também`

document.write(s3)
document.write("<br>")

//number
const n1 = 1
const n2 = 2
document.write(n1+n2)
document.write("<br>")

// boolean - true ou false
const bTrue = true
const bFalse = false
document.write(bTrue)
document.write("<br>")

// objeto
// todos objetos possuem propriedades e funcionalidades
const pessoa ={
  altura: "1,80m",
  idade: 24,
  solteiro: false,
  correr(){
     return "run forest run"
  }
}
document.write(pessoa.altura)
document.write("<br>")
document.write(pessoa.idade)
document.write("<br>")
document.write(pessoa.solteiro)
document.write("<br>")
document.write(pessoa.correr())
document.write("<br>")

pessoa.correr()

// array/vetor
// coleção de algo
const colecaoDeBolinhas = ["blue", "green", 1, {name: "Amanda"}]

document.write(colecaoDeBolinhas)
document.write("<br>")
document.write(colecaoDeBolinhas[1])
document.write("<br>")
document.write(colecaoDeBolinhas[3].name)
document.write("<br>")

// função, atalhos, reuso de código

// registro de função
function sayMyName() {
  document.write("AmandaTop10")
  document.write("<br>")
}

// executa a função
sayMyName()

function comidaTop(name) {
  document.write(name)
  document.write("<br>")
}

// passando valores para a função
comidaTop("Pudim")
comidaTop("Brigadeiro")
comidaTop("Lasanha")

// condicionais

const notaFinal = 7

if ( notaFinal < 5) {
  // caminho 1    
  document.write("Reprovado")
  document.write("<br>")
} else {
  // caminho 2
  document.write("Aprovado")
  document.write("<br>")
}

// loop/repetições

for (i=0; i<5; i++) {
  document.write("<p> ei? </p>")
}

for (i=3; i>=0; i--) {
document.write(`<p> ${i} </p>`)
}