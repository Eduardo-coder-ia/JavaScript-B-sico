// (condicao) ? 'valor para verdadeiro : 'valor para falso  Operador ternário  --> Pode substituir/encustar seu codigos em partes que usam if e else

const pountuacaoUsuario = 9979;
const nivelUsuario = pountuacaoUsuario >= 1000 ? 'Usario VIP' : 'Usuário normal';

const corUsuario = null 
const corPadrao = corUsuario || 'preta';


console.log(nivelUsuario, corPadrao);

// if (pountuacaoUsuario >= 1000) {
//     console.log('Usuario Vip');
                                          //Mesma coisa
// } else {
//     console.log('Usuário normal!');
// }