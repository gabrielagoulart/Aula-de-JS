// Manipulação de Arrays
const frutas = ['maça', 'laranja']

// adiciona o elemento no começo do array
frutas.unshift('acerola')

// remove.shift remove o primeiro elemento
frutas.shift()

// map, filter, reduce => arrow function
const numeros = [1, 2, 3, 4, 5]


// find só retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0)

// filter retorna todos os elementos do critério 
const numerosPares = numeros.filter((num) => num % 2 === 0)


// Manipulação de strings
const frase = 'Olá, Mundo!  '
const palavras = frase.trim().split(" ")

const frase2 = 'JavaScript é incrível!'
console.log(frase2.startsWith("Java"))
console.log(frase2.endsWith("!"))


// exceções e tratamentos de erros
/*
const idade = 15
if (idade < 15) {
    throw new Error ("Você deve ter menos de 18 anos")
}
*/

try {
    
    const idade = 15
    if (idade < 15) {
    throw new Error ("Você deve ter menos de 18 anos")
    }

} catch (error) {
    console.log(error.message)
}


// Callbace => função
function cumprimentar(nome, callback) {
    console.log('Ola,' + nome)
    callback()
}

function mostrarSaudacao() {
    console.log('Como você está?')
}

cumprimentar('Gabriela', mostrarSaudacao)

cumprimentar('Maria', function () {
    console.log('Tá tudo bem?')
})


// promises
const promessa = new Promise((resolve, reject) => {
    const condicao = true
    if(condicao) {
        resolve('a condição é verdadeira')
    } else {
        reject('a condição é falsa')
    }
})
promessa.then((mensagem) => {
    console.log(mensagem)
})
.catch((erro) => {
    console.log(erro)
})


// Bibliotecas feitas que são 'promise based'
const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject0) => {
    setTimeout(resolve, 2500, 'testando')
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores))


// Async Await
async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
       setTimeout(() => resolve('valor obtido'), 2000)
    })
    const valor = await promessa
    console.log(valor)
}
obterValor()

async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject('valor com erro'), 2000)
         })
         const valor = await promessa
         console.log(valor)
    } catch (error) {
        console.log(error)
    }
}
obterValorComErro()


// JSON (KavaScript Object Notation)
// {nome: 'teste'} => {'nome' : 'teste'}
// padroniza a comunicação
// front-end e back-end em uma linguagem só 
const objeto = {nome: 'João', idade: 30}
const jsonString = JSON.stringify(objeto)
console.log(jsonString)
console.log(typeof jsonString)

const json = '{"nome": "João", "idade": "30"}'
const objeto2 = JSON.parse(json) 
console.log(objeto2)