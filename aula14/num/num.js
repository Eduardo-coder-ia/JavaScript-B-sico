// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;
// num1 += num2 // num1 - num1 + num2;
num1 += num2;// 0.8
num1 += num2; // 0.9
num1 += num2;
num1 += num2; // 0.999999 não da pra usar to fixed(2) só pq não vai ser preciso
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;


num1 = Number(num1.toFixed(2));
console.log(Number.isInteger(num1));

console.log(num1);
// console.log(num1.toString() + num2);
// num1 = num1.toString(); com isso eu transformei numero em string
// console.log(typeof num1);
// console.log(num1.toString(2));
// console.log(num1.toFixed(2)); // Meu numero foi alterado para 2 casas decimais apenas
// console.log(Number.isInteger(num1));// pergunta se meu numero é inteiro
// let temp = num1 * 'Ola';
// console.log(Number.isNaN(temp)); // Essa conta é invalida? se for é true
