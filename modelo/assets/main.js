const form = document.querySelector("#formulario");// peguei minha classe

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Usando prevent pra capturar o evento
  const inputPeso = event.target.querySelector("#peso"); // vai me dar o elemento que ta recebendo o evento
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value); // faz eu pegar meu input e que ele seja do tipo number
  const altura = Number(inputAltura.value); // Assim eu atribuo só numero no imput e o valor dele fica salvo
  if (!peso) {
    setResultado(`Peso inválido`, false); // criando mensagem de erro para peso caso seja !number
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura); // criando const pra pegar meu imc com os parametros

  const nivelImc = statusIMC(imc); // const criada para poder exibir minha função na msg

  const msg = `Seu IMC é ${imc} (${nivelImc})`; // const criada para exibir minha mensagem

  setResultado(msg, true); // mensagem do meu statusImc só sera exibida se a condição for true
  // caso não seja true meu setResultado vai dar inválido lá em cima
});

function statusIMC(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ]; // crio um array pra colocar a lista de mensagens que vão pro meu resultado do imc
  if (imc >= 39.9) return nivel[5]; // uso return mas o indíce do meu array corresnpodente 
  if (imc >= 34.9) return nivel[4]; // caso atenda a condição de um deles deve haver o return
  if (imc >= 29.9) return nivel[3]; // tendo return ativado o restante das funções não serão usadas
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // função que uso pra fazer o calculo imc tendo peso e altura como parametros
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaParagrafo() { //  função usada para criar a mensagem dentro do meu html
  const p = document.createElement("p"); // criei elemento html
  p.classList.add("paragrafo-resultado"); // Adiciona uma classe na lista de classes do meu P
  return p;
}

function setResultado(mensagem, isValid) { // isValid aqui é usado para caso não seja valido algum valor eu poder passar class estilizada
  // assim eu posso passar uma mensagem pro meu html
  const resultado = document.querySelector("#resultado"); // Usei pra conseguir o meu id resultado
  resultado.innerHTML = ""; // função pra introduzir html na minha div resultado que ficara em branco
  const p = criaParagrafo(); 

  if (isValid) {
    p.classList.add("paragrafo-resultado"); // se for valida vai atirar minha class de paragrafo resultado
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = mensagem;
  resultado.appendChild(p); //com isso meu P foi inserido na div
}
