let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATEMP = varA; // temp é usado para salvar uma variável

[ varA,  varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

