// alturaEmCm
// Luiz Otáveio Miranda tem 30 anos, pesa 84kg 
// tem 1.8 de altura e seu IMC é de 25.925925925925924
// Lucas Eduardo Silva nasceu em 1980

const nome = 'Lucas Eduardo';
const sobrenome = 'Silva';
const idade = 25;
const peso = 90;
const alturaEmM = 1.75;
let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento;
anoNascimento = (2022 - idade)
// template string
console.log(`${nome} ${sobrenome} tem  ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc} `)
console.log(`${nome} ${sobrenome}  nasceu em ${anoNascimento} `)
