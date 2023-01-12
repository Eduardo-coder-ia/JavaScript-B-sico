// Criar evento pro meu botton  não atualizar pagina

function escopoProtegido () { // Usando a função para proteger meus dados dentro dela
   const formulario = document.querySelector('.formulario'); // Usando query eu capturo a class do meu html
    const resultado = document.querySelector('.resultado') // Selecionando a div resultado
   
const pessoas = []; // Crio array pra por os dados do meu formulario e vazio pq quem vai preencher meu array é o meu envio
function receberEventoForm (evento) { // Recebo o evento quando clico enviar(submit)
    evento.preventDefault(); // Usando isso eu impeço meu navegador de enviar meus dados reiniciando a página
    const nome = formulario.querySelector('.nome'); //Eu uso formulario em vez de document pq oque eu quero pegar ta dentro dessa classe
    const sobrenome = formulario.querySelector('.sobrenome');
    const peso = formulario.querySelector('.peso');
    const altura = formulario.querySelector('.altura');

    pessoas.push( {
        nome: nome.value, 
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
 
    console.log(pessoas);

   resultado.innerHTML += `<p>Seu nome é ${nome.value}  ${sobrenome.value}</p>` +
   `<p>  você tem ${peso.value}kg  e ${altura.value} de altura.</p>`;
}
formulario.addEventListener('submit', receberEventoForm) ;// Uso addevento pra escutar o meu evento

}

escopoProtegido()