/*
Primitivos(Imutáveis)  - String, Number, Boolean, Undefined,
Null (bigint, symbol) - Valores primitivos são copiado quando passa valor usando sinal de = 
*/
// //          0123
// let nome = `Luiz`;
// nome[0] = 'R'
// console.log(nome[0]);


// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);


// a = `Outra coisa`;

// console.log(a, b);


// Referencia (Mutável) - Array, Objetc, Function  -- Valores passados por referencias

// let a = [1, 2, 3];
// let b = [...a]; 
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);
// a.push(`Luiz`);
// console.log(a, c);
// const a = {
//     nome:  'Luiz',
//     sobrenome: 'Otávio'
// };
// const b = {...a};

// b.nome = 'João';
// console.log(a);
// console.log(b);

