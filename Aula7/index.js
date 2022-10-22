// let nome; //Declarou a constante
// nome = 'Edu'  // Inicializando a variável
// console.log(nome);
// nome= 'João'
// console.log(nome);

// Não podemos criar contantes com palavras reservada pela linguagem
// cons if;  // Contantes precisam ter nomes significativos
// const nomecliente = 'João'
// console.log(nomecliente);


//Não deve começar o nome de uma constante com um número
// const 1nome;
// const nome;

// nome das contates  não podem contar espaços ou traços 
// const nome-cliente
// Utilizamos camelCase parar conseguir criar constantes com nome composto
// const nomeCompletoDoCliente = 'Lucas Eduardo';
// console.log(nomeCompletoDoCliente); //Case-sensitive "Letra maiuscula  e minuscúla faz diferença"
// let nomeCliente = 'Lucas'
// let nomecliente = 'Eduardo'

// console.log (nomeCliente, nomecliente); //Apesar de terem os nomes iguais a mudança de letra pra maiuscula faz com que o motor do js entenda como duas coisas diferentes
//Case-sensitive
// Não podemos redeclarar Contates com const
// NÃO UTILIZE VAR, UTILIZE LET.

// let nome = 'João'; //Quando eu precisar redefinir uma const é só usar o let
// console.log(nome);

// + - * /
// String = text E Number= Número
const primeiroNumero =  '5'// Number
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado *3
resultadoTriplicado = resultadoTriplicado +5



// console.log( typeof(primeiroNumero))  // Qual o tipo da variável
// console.log ( primeiroNumero + segundoNumero); // Não ocorreu soma e sim a junção dos dois 
console.log ( typeof (primeiroNumero + segundoNumero))