// strings são indexisáveis ou seja iteráveis 
//cada caractere tem um indíce onde 0 representa o primeiro elemento
//               01234567
let umaString = "Um texto"; 

// console.log(umaString[4]);  // o numero quatro representa o indice 4 da minha string que é a letra "e";

// console.log(umaString.charAt(6)); //Utilizo charAT para separar e mostrar na tela um indice da minha string;

// console.log(umaString.concat('' , 'em', '' ,'um')); forma antiga de fazer porém é muito mais fácil umas as template strings
// console.log(`${umaString} em um lindo dia.`); // melhor forma de adicionar coisas a sua string;

// console.log(umaString.indexOf('texto')); // idexOf é usado para pesquisar o indíce que começa uma determinada palavra da minha string
// se der negativo é porque não encontrou nada  (-1)
// Se eu adicionar uma virgula após (('texto',3));  ele só vai começar a procurar a partir do indice 3 da minha string

// console.log(umaString.lastIndexOf(`m`,)); // Faz eu pesquisar o meu indíce de traz pra frente

// EXPRESSÕES REGULARES

// console.log(umaString.match(/[a-z]/g)); //Usei pra procurar todas as letras minúsculas no meu texto

console.log(umaString.search(/x/)); //Procura o indíce que eu pedi pra ser encontrado 
// // Aqui eu pedi pra ele procurar a letra x no meu indíce

// console.log(umaString.replace(`Um`, `Outra`)); //Usado para substituir 


// let umaString = `O rato roeu a roupa do rei de roma.`;

// console.log(umaString.slice(2, 6)); // Uso para pegar uma palavra específica do meu indíce
// //Lembrando que meu indíce sempre vai começar do 0

// console.log(umaString.slice(-3)); // Quando eu utilizo negativo com slice eu começo a contar meu indíce do final

// console.log(umaString.length); // Eu uso length pra contar quantos elementos tem na minha string
// console.log(umaString.slice(-5, -1));
// console.log(umaString.split('r')); //Usado para dividir a string baseado em algum caractere qualquer
// console.log(umaString.split('r', 2)); Fazendo assim ele só vai tirar os 2 primeiros caracteres da string
