//               0        1         2          3       4
// const alunos = ['Luiz' , 'Maria' , 'João']; // Luiza , Eduardo  usando push

// console.log(typeof alunos);
// console.log(alunos instanceof Array); // faço ele perguntar pro js se minha instancia é um array

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3)); //Usando negativo vai de tras pra frente

// console.log(alunos[50]); fazendo isso o Js vai me retornar undefined

// delete alunos[1]; // Usando delete o indice fica vazio mostrando no JS
// console.log(alunos[1]);

//console.log(removido);
// const removido = alunos.pop(); // Usando o const dessa forma eu mostro o elemento removido
// alunos.shift(); // Remove meu primeiro indice do meu array
// alunos.pop(); //A função pop remove o ultimo indice do meu array

// alunos.unshift('Luiza'); //Adicionei no começo indice do array
// alunos.unshift('Fábio'); //Agora o de cima deixou de ser o primeiro

// alunos.push('Luiza'); // Com a função push eu consigo adicionar elementos no fim de melhor forma
// alunos.push('Fábio'); // Adiciona no fim do array

// alunos [alunos.length] = 'Luiza'; Usando isso eu consegui adicionar indices a meu array
// alunos [alunos.length] = 'Fábio';
// alunos [alunos.length] = 'Luana';

// console.log(alunos.length); // pra saber quantos indices tem dentro do meu array

// alunos[0] = 'Eduardo'; // Eu editei o meu primeiro indice do array e troquei por eduardo
// alunos[3] = 'Luiza'; // Fazendo isso eu adicionei mais um índice ao meu array

// console.log(alunos[0]); Assim eu consigo pegar um elemento do meu array
// console.log(alunos[2]);
// console.log(alunos[1]);

const alunos = ["Luiz", "Maria", "João"]; // Array recomendavel ter só um tipo de dado



// console.log(typeof alunos); //Array é um objeto
// console.log(alunos instanceof Array); // alunos é uma instancia de array? true or false

// alunos.push('Luiza');
// alunos.push('Edu');
// console.log(alunos.slice(0, 3)); // com slice eu consigo pegar mais de um indice do meu array

// console.log(alunos[50]); // Quando eu tento acessar um indice que não existe no meu array ele vai me retornar undefined
// delete alunos[1];// Deixei o indice 1 da minha função vazio
// console.log(alunos);

// const removidoDoFinal = alunos.pop()//Uso pop pra remover algo do meu array e posso mostrar oque foi removido criando uma função
// const removidoDoComeco = alunos.shift(); // remove algo do array no começo

// alunos.push('Otavio', 'Olivia', 'Fabiana'); // Adiciona no fim
// alunos.unshift('Edu');//adiciona no começo
// alunos[alunos.length] = "Luiza";
// alunos[alunos.length] = "Fabio";
// alunos[alunos.length] = "Luana";
// alunos[3] = 'Luiza';
// alunos[0] = 'Eduardo'; //modifiquei o indice 0 do meu array
// console.log(alunos[0]);
// console.log(alunos[2]);
