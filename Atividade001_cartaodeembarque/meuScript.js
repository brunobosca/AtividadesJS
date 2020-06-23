let readlineSync = require('readline-sync')
let nome = readlineSync.question('Digite seu nome para fazer o check-in ')
let numeroVoo = readlineSync.question('Digite o nuemro do vôo ')
let fileira = readlineSync.question('Em qual fileira você quer sentar? A, B, C, D ou F? ')

switch (fileira) {
    case 'A':
        console.log('Fileira A');
        break;
    case 'B':
        console.log('Fileira B');
        break;
    case 'C':
        console.log('Fileira C');
        break;
    case 'D':
        console.log('Fileira D');
        break;
    case 'F':
        console.log('Fileira F');
        break;
    default:
        console.log('Fileira inválida');
        break;              
}
   

