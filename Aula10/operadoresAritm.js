/*Ordem de precedencia

() 1
**  2
/ %  3
+ -   4

*/
// let contador = 1;
// contador++; 
// console.log(contador);

// let contador = 2;
// contador = contador + passo;
// console.log(contador)
// contador = contador + passo;
// console.log(contador)
// contador += passo; contador = contador + 50; // contador = contador + 50
// contador += passo; contador = contador + 50;
// contador += passo; contador = contador + 50;
// contador += passo; contador = contador + 50;
// contador += passo; contador = contador + 50;
// contador += passo; contador = contador + 50;
// contador += passo; contador = contador + 50;
// console.log(contador);

// contador += contador * 2; vai adicionar mais um contador no valor de +1 e só depois ele vai fazer a operacao de multiplicar

// let contador = 2;
// contador += contador; // ao realizar contador aqui  vale 4
// contador += contador; // logo aqui vai ser feito 4 + 4 por isso vai dar 8

// contador = contador * 2;
// contador = contador * 2;
// contador = contador * 2;
// contador = contador / 5;

// let contador = 2;
// contador *= 2;
// contador **= 10;
// contador *= 2;
// console.log(contador);


// const num1 = 10;
// const num2 = 'L5';

// console.log(num1 * num2);
// console.log(typeof num2);

const num1 = 20;
// const num2 = parseInt('5'); // função parsetInt Transforma minha string em numérico
const num2 = parseFloat('5.7'); // Transforma string em numero incluindo decimais
const num3 = Number('5.2'); // transforma string em numero no geral de maneira mais eficiente
const resultado = num1 + num2 / num3;
const resultadoConvertido = resultado.toFixed(2);
console.log(resultadoConvertido);