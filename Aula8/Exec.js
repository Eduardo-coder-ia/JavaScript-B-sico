// alturaEmCm
// Luiz Otáveio Miranda tem 30 anos, pesa 84kg
// tem 1.8 de altura e seu IMC é de 25.925925925925924
// Lucas Eduardo Silva nasceu em 1980

const nome = "Lucas";
const sobrenome = "Eduardo";
const idade = 25;
const peso = 90;
const alturaEmM = 1.75;

let imc;
imc = peso / alturaEmM ** 2;

let anoNascimento;
anoNascimento = 2022 - idade;

console.log(
  `Olá meu nome é ${nome} ${sobrenome} eu tenho ${idade} anos, e peso ${peso}kg.`
);
console.log(`Tenho ${alturaEmM} de altura e meu imc é de ${imc} `);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
