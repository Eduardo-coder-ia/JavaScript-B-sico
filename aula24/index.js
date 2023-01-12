//Com o If o vscode só vai mostrar algo na tela se a condição(const hora) for verdadeira
// (if) Se minha condição for atendida (else if) Se ela não for atendida faça isso
/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
// If pode ser usado sozinho
// Sempre que utilizo else e else if, preciso de um if antes
// Eu posso ter varios else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, Utilizando apenas if e else 

// const hora = 50;

// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia');
//   } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarde');
//   } else if (hora >= 18 && hora <= 23 ){
//     console.log('Boa noite')
//   } else {
//     console.log('Hora errada amigão')
//   }

// const tenhoGrana = true

// if (tenhoGrana) {
//     console.log('Vou sair de casa');
// } else {
//     console.log('Não vou sair de casa');
// }



// function mensagem(horario) {
//     if(horario <= 12){
//         console.log('Bom dia usuário');
//     } else if (horario <= 18) {
//         console.log('Boa tarde usuário');
//     } else {
//         console.log('Boa noite usuário')
//     }
// }

// mensagem(10);
// mensagem(13);
// mensagem(22);


const hora = 24

if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {
    console.log(`Por favor digite um horário válido`);
}