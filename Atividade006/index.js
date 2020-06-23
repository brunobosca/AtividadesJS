let readlineSync = require('readline-sync')
let nome1 = readlineSync.question('Qual o seu nome? ')
let coisa1 = readlineSync.question('Escreva qualquer coisa ')
console.log(`O total de caracteres é ${coisa1.length}` )
let nome2 = readlineSync.question('Qual o seu nome? ')
let coisa2 = readlineSync.question('Escreva qualquer coisa ')
console.log(`O total de caracteres é ${coisa2.length}` )

if (coisa1.length > coisa2.length) {
    console.log(`O líder é o ${nome1}`)
} else if (coisa1.length == coisa2.length) {
    console.log(`${nome1} e ${nome2} digitaram a mesma quantidade de caracteres`)
} else {
    console.log(`O líder é o ${nome2}`)
}

    /*
} else if (total1 == total2) {
    console.log(`${nome1} digitou a mesma quantidade de caracteres que ${nome2}`)
    } else  {
        console.log(`${nome2} é o líder do ranking com ${total2} caracteres `)
    }
    */


