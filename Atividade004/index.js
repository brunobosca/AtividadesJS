

/*Como saber as datas de cada signo:

Áries: de 21 março a 20 abril
Touro: de 21 abril a 20 maio
Gêmeos: de 21 maio a 20 junho
Câncer: de 21 junho a 22 julho
Leão: de 23 julho a 22 agosto
Virgem: de 23 agosto a 22 setembro
Libra: de 23 setembro a 22 outubro
Escorpião: de 23 outubro a 21 novembro
Sagitário: de 22 novembro a 21 dezembro
Capricórnio: de 22 dezembro a 20 janeiro
Aquário: de 21 janeiro a 18 fevereiro
Peixes: de 19 fevereiro a 20 março
*/

let readlineSync = require('readline-sync')
let dia = readlineSync.questionInt('Qual o seu dia de nascimento? ')
let meses = readlineSync.questionInt('Qual o seu mês de nascimento? ')

switch(meses) {
    case 1: 
    let signo1 = dia <= 20 ? 'CAPRICORNIO' : 'AQUARIO';
    console.log(`Seu signo é ${signo1}.`);
    break;
    case 2:
    let signo2 = dia > 18 ? 'PEIXES' : 'AQUARIO';
    console.log(`Seu signo é ${signo2}.`);
    break;
    case 3:
    let signo3 = dia > 21 ? 'ARIES' : 'PEIXES';
    console.log(`Seu signo é ${signo3}.`);
    break;
    default:
    console.log('Mes invalido')
    break;
}

    










