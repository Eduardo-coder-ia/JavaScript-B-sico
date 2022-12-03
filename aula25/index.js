const numero = 10;

// Esse numero esta entre:

//Se (numero >= 0 && numer <= 5) ocorrer, faça isso {Codigo}
//Se não faça isso {O codigo}
if (numero <= 10) { // Verdadeiro
    console.log( 'O número é menor que 10'); // Se preciso chegar uma coisa independente devo criar outro if
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11'); //Verdadeiro
} else {
    console.log('O numero não está entre 0 e 11');
}

console.log('...Aqui vai o resto do código.');