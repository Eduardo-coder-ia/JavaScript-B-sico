// let num1 = prompt('Digite seu numero:');
// let num2 = prompt('Digite outro numero:');
// num1 = Number(num1);
// num2 = Number(num2);
// const resultado = num1 + num2;
// alert(`A soma dos dois numeros é ${resultado}`);

// let altura = prompt('Digite sua altura');
// let peso = prompt('Digite seu peso');
// altura = Number(altura);
// peso = Number(peso);
// const imc = peso / altura ** 2;
// const imcFormatado = imc.toFixed(2);
// function meuImc (calculo)  {
//     if (calculo < 18.5) {

//         return  'Abaixo do peso'
//     }

// }
// alert(`O seu indice de massa corporal é ${imcFormatado} e você esta `+ meuImc(imc));

let altura = Number(prompt("Digite sua altura"));
let peso =  Number(prompt("Digite seu peso"));
let nome = prompt("Qual o seu nome:");


function meuImc(peso, altura, nome) {
  let calculo = calculoIMC(peso, altura, 2);
  
  if (calculo>= 39.9) return `Obesidade grau 3`;
      
  if (calculo >= 34.9) return `Obesidade grau 2`;
 
  if (calculo >= 29.9) return `Obesidade grau 1`;

  if (calculo >= 24.9) return `Sobrepeso`;
 
  if (calculo >= 18.5) return `Peso normal`;
 
  if (calculo < 18.5) return `Abaixo do peso`;
}

function massaCorporal(peso, altura) {
  const imc = calculoIMC(peso, altura, 2);
  const imcFormatado = imc.toFixed(2);
  return imcFormatado;
}

function calculoIMC(peso, altura, multiplicador) { 
  return peso/ altura ** multiplicador;
}



alert(
  "O seu indice de massa corporal é " +
    massaCorporal(peso, altura) +
    " e você esta com " + 
    meuImc(peso, altura , nome)
);
