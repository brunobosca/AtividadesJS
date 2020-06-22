let readlineSync = require('readline-sync');

let base = readlineSync.question('Digite o valor da base')

let altura = readlineSync.question('Digite o valor da altura')

console.log(`A área do seu quadrado é de ${base * altura}`)