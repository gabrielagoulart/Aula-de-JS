// fundamentos
// var nome = 'valor'
var nomeUsuario = prompt('Qual é o seu nome?')
var idadeUsuario = 17
var meuObjeto = {}
var MeuArray = []
var meuNull = null
var meuUndefined = undefined


// Operadores de comparação 
let x = 5
let y = 10

console.log(x == y)
console.log(x != y)


// Operadores lógicos
// ANDA &&
// OR ||

console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)


// Conversão de tipos
const meuNumero2 = "123"
const meuNumeroConvertido = Number(meuNumero2)


// estrutura de condição (if, else, if else)
const idade = 17
if(idade < 13) {
    console.log('criança')
} else if (idade < 20) {
    console.log('adolescente')
} else {
    console.log('adulto')
}


// switch
const fruta = 'maça'
switch (fruta) {
    case 'banana':
        console.log('banana é a fruta')
        break
    case 'maça':
        console.log('maça é  a fruta') 
        break
    default:
        console.log('fruta não encontrada')        
}


// estrutura de repetição

//contador, condição de limites, incremento
for(let i = 0; < 5; i =  i++) {
    console.log(' o valor de i é:' + i)
}