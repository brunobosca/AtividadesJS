let readlineSync = require('readline-sync')

let nome = readlineSync.question('Olá, para fazer o seu check-in digite o seu nome')
let numerovoo = readlineSync.question('Digite o número do seu vôo')
let fileira = readlineSync.question('Em qual fileira você quer sentar? A, B, C, D ou F?')
let cartaoEmbarque = console.log(`Parabéns ${nome}! Você realizou o seu check-in do vôo número ${numerovoo} sua fileira é a ${fileira}`)


