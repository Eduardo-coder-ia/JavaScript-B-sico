//OPERADORES TERNÁRIOS
//  ?   e    :    Ambos podem me ajudar a encurtar if e else
 // (condicao) ? 'Valor para verdadeiro'  : 'Valor para falso';
// exemplo
 // um site onde baseado na respostas dos usuários sejam atribuidos pontos a eles vip ou normal

 const pontuacaoDeUsuarios = 999
 const nivelDeUsuario = pontuacaoDeUsuarios >= 1000 ? 'Usuario VIP' : 'Usuário normal';
console.log(nivelDeUsuario);
//  if (pontuacaoDeUsuarios >= 1000) {
//     console.log(`Usuário Vip`)
//  } else {
//     console.log(`Usuário Normal`);
//  } 
 
 // Usando a operação ternária pra encurtar o código acima
