// ex: 1
console.log('Ola, Mundo!')

// ex: 2
let string = '1234'
let number = Number(string)
console.log(typeof number)

// ex: 3
let message = 'JavaScript é incrível'
let numeroDeCaracteres = message.length
let numeroDePalavras = message.split(" ").length

// ex:4
const nomes = ['Anna', 'Lucas', 'Johan', 'Nina', 'Luis']
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

// ex:5
function converterHorario(horario24) {
   // const hora = horario24.split(":")[0]
   // const minuto = horario24.split(":")[1]

    const [hora, minuto] = horario24.split(":")

    const hora12 = hora % 12 || 12

    let periodo = 'AM'
    if(hora > 12) {
        periodo = 'PM'
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("15:16")
converterHorario("09:46")

