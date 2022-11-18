// // IEEE 754-2008 as contas com número decímal no JS seguem esse padrão.
let num1 = 0.7;  //Number  
let num2 = 0.1; // Number

// num1 += num2;    0.8 // num1 = num1 + num2;

num1 += num2; // 0.8
num1 += num2; // 0.9 
num1 += num2; // 1.0


num1 = ((num1 *100) + (num2 * 100)) / 100;
num1 = ((num1 *100) + (num2 * 100)) / 100;
num1 = ((num1 *100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1));

// num1 = num1.toFixed(2); // Não resolve o problema quando tenho um 0.99 porque pro js não mudou pra int
// num1 = parseFloat(num1.toFixed(2));
// num1 = num1.toFixed(2);
// console.log(num1);
// console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2.toString()); // to sting converte meu num pra uma string temporariamente
// num1 = num1.toString();  //fazendo isso eu altero permanentemente a minha string
// console.log(num1.toString(2)); representação binária
// console.log(num1.toFixed(2)); toFixex é usado para arredondar um numero em casa decimas no caso ali foi 2
// console.log(Number.isInteger(num1)); //Retorna V ou F para saber se o numero é inteiro ou não.
// let temp = num1 * '5'; // Vai dar Not a Number
// console.log(Number.isNaN(temp));  //Eu to perguntando pro Java se essa conta é invalida NaN aí ele retorna V ou F

