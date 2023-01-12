// function saudacao (nome)  {
//     return `Olá ${nome} tenha um ótimo dia.`
// }


// console.log(saudacao('Edu'));

// function saudacao (nome) {
//       return `Bom dia ${nome}!`;
// }
// const variavel = saudacao('Edu');
// console.log(variavel);

// saudacao('Edu');
// saudacao('Ana');
// saudacao('Bia');
// saudacao('Luiz');
// saudacao('Dani');


// function falaOi(nome) {    // () <- Dentro dos parenteses posso adicionar um parametro pra função
//     console.log(`${nome} fala oi pra mim aqui amigão`); //Dessa forma eu inseri meu parametro dentro do texto e atribui um valor a ele la em baixo
// }

// falaOi('Edu');  // posso declarar minha função e chama-la aqui fora e dentro do meu parametro adiciono oque eu quero
// falaOi('Nunes'); // Minha função dessa forma se torna reutilizável


// function saudacao(nome) {
    //     // console.log(`Bom dia ${nome}`); //da forma que ta aqui a minha função não tem valor então fora dele não me retorna nada
    //     return `Bom dia ${nome}` // atribuindo isso o valor da minha função para a ser esse é pode ser executado fora 
    // }
// const variavel = saudacao('Luiz');
// console.log(variavel);

// function soma(x, y) { //Agora to recebendo dois valores
//     const resultado = x + y
//     return resultado // quando JS ler a palavra return tudo que esta abaixo não será executado
// }

// // console.log(soma(2, 2));
// // console.log(soma(3, 1));
// // console.log(soma(5, 10));
// // console.log(resultado); // não consigo pegar o valor resultado porque ele esta protegido dentro da função
//  const resultado = soma(2, 10);
//  console.log(resultado);



//  function soma2(x = 1 , y = 2) { // se estiver pré definido um valor na função caso eu não defina outro
//     const somaDeNumero = x + y // outro lá em baixo na função ele vai usar o valor que ta no meu parametro
//     return somaDeNumero 
//  }

//  const somaDeNumero = soma2(5); // aqui ele pegou o valor de x que eu dei mas usou o valor de y no parametro ja que eu não dei numero
//  console.log(somaDeNumero);


// const raizQuadrada =  function (numero) { // criando a função dentro do meu const eu torno ela anonima
//     return numero** 0.5;
// };

// console.log(raizQuadrada(9));


// const raiz = n => n ** 0.5; // A aero function caso tenha só uma linha pode ser simplificada 

// let corSite = 'azul';
// function resetaCor(cor, tonalidade){
    //     corSite = cor + '' + tonalidade;
// }

// console.log(corSite);
// resetaCor('verde','claro');


// let papelDeParede = 'Dragonball'
// function mudarPapelDeParede (tema) {
//     papelDeParede = tema
//     console.log(`Meu papel de parede é ${tema}.`);
// }

// mudarPapelDeParede('Bleach');

// function calcularMedia (nota1 , nota2) {
//     const soma = nota1 + nota2;
//     const media = soma / 2;
//     if (media >= 6) {
//         console.log(`Parabéns você foi aprovado! com média de: ${media}.`);
//     } else {
//         console.log(`Você foi reprovado! com média de: ${media} Estude mais ano que vem! `);
//     }
// }

// calcularMedia(10, 8.6);
// calcularMedia(5, 5); 



function calcularMedia (nota1 , nota2) {
    const soma = nota1 + nota2;
    const media = soma / 2
    if (media >= 6) {
        console.log(`Parabéns você foi aprovado! com média de : ${media}`);
    } else {
        console.log(`Você foi reprovado! com média de: ${media} Estude mais!`)
    }
}

calcularMedia(10, 8.5);
calcularMedia(4, 4); 


