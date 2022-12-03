/* Avaliação de curto circuito
&& -> false && true -> false    não preciso checar mais nada se achar uma expressào falsa no meu and
|| ->  true || false -> Vai retornar o valor verdadeiro

FALSY
false
0
''  "" ``
null / underfined
NaN
*/

// console.log('Lucas Eduardo' && true && 'Maria'); // && vai retornar a ultima expressão se tudo for verdadeiro 
// Se for false ele para na expressão falsa NAN por exemplo e mesmo tendo mais verdadeiras depois ele não vai pegar mais

// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = 'Joãozinho'

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true); // OR precisa de apenas uma expressão verdadeira pra retornar logo a primeira expressão verdadeira é exibida
//  const corUsuario = 'vermelho';
//  const corPadrao = corUsuario || 'preto';

//  console.log(corPadrao); // Se meu valor corUsario fosse Null ele ia pegar o proximo valor vdd o preto

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Se tudo for avaliado em falso a ultima falsa sera exibida



