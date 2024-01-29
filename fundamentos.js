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
let i = 0
for(let i = 0;  5; i =  i++) {
    console.log(' o valor de i é:' + i)
}


// while
let a = 0
while (a < 5) {
    console.log('o valor de k:' + a)
    i++
}


// do while
let j = 0
do {
    console.log('o valor de j é:' + j)
    j++
} while( j < 5)



// function
// function nome(arg 1, arg2) {corpo}
function cumprimentar(nome) {
    console.log('Olá' + nome )
}
// invocação = nome()
cumprimentar('Gabriela')


//arrow function
const testeArrow = () => console.log('isso também é uma função')
testeArrow()


//array, listas
const numeros = [1, 2, 3, 4, 5]
console.log(numeros)