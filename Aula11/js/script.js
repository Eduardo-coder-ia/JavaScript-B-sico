let num1 = prompt('Digite um número:')  // tentei usar const por isso errei const é pra objetos que não vão mudar 
let num2 = prompt('Digite outro número:')
num1 = Number(num1);  //Usei parseint aqui mas seria melhor usar Number mesmo;
num2 = Number(num2);
alert(`O resultaodo da sua conta foi: ${num1 + num2} `);   //Dessa forma aqui fica mais fácil e não precisa de um const resultado
// Porém se vocÊ usar o const resultado é mais fácil tanto pra você quanto para os outros entenderem o seu código
