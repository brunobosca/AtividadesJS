/*
let readlineSync = require('readline-sync')

let lavarMaos = readlineSync.question('Você está lavando as mãos?')
let mask = readlineSync.question('Você está usando máscara?')

if (lavarMaos == "sim" && mask == "sim") {
console.log('Parabéns Você é uma pessoa previnida!')
}
else {
    console.log('Você está errado!')
}
*/

let readlineSync = require('readline-sync')
let lavarMaos = readlineSync.question('Você está lavando as mãos?')
let mask = readlineSync.question('Você está usando máscara?')

let resultado = lavarMaos === mask ? 'Parabéns você é uma pessoa previnida' : 'Você está errado, previna-se!'
console.log(`${resultado}`)
