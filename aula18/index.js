//colchete é array [] e chave é objeto {} 

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome, sobrenome , idade };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Moreira', 55);
// const pessoa4 = criaPessoa('Junior', 'Lara', 44);
// const pessoa5 = criaPessoa('Jean', 'Otávio', 69);


// console.log(pessoa1.nome, pessoa2.sobrenome);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25,

//     fala() {
//         console.log(`A minha idade atual é ${this.idade}.`);
//     },

//     incrementaIdade() {
//         this.idade++;
//     }
// };

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();


// const array = [1,2,3];
// array.push(4);
// console.log(array);


// const pessoa1 = {
//     nome: 'Edu',
//     sobrenome: 'Silva',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Silva',
//     idade: 25
// };

// console.log(pessoa1.sobrenome);
// console.log(pessoa2.idade);

// function listaDePessoas (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = listaDePessoas ('Edu', 'Silva', 25);
// const pessoa2 = listaDePessoas ('Maria', 'Eduarda', 15);
// const pessoa3 = listaDePessoas ('Luiz', 'Otávio', 32);
// const pessoa4 = listaDePessoas ('Ednaldo', 'Pereira', 55);
// const pessoa5 = listaDePessoas ('Manoel', 'Gomes', 41);
// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
// console.log(pessoa2.idade);
// console.log(pessoa3.sobrenome); 
// console.log(pessoa4.nome);
// console.log(pessoa5.sobrenome);

// const pessoa1 = {
//     nome: 'Lucas',
//     sobrenome: 'Eduardo',
//     idade: 25 ,
    
//     fala() {
//         console.log(`A minha idade atual é ${this.idade}! e meu nome é ${this.nome} ${this.sobrenome}`);
//     }, 

//     incrementaIdade() {
//         this.idade++; 
//     }
// };

// pessoa1.fala();
// pessoa1.incrementaIdade();

// CRIE UM OBJETO QUE CONTENHA MINHAS INFOMAÇÕES QUE SÃO NOME SOBRENOME E IDADE E QUE ELAS POSSAM SER ALTERADAS 

const pessoa1 = {
    nome: 'Edu' , 
    sobrenome: 'Silva', 
    idade: 25,

    fala() {
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade} anos!`)
    },

    aumentarIdade() {
        this.idade++;
    }
          
    
};

pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();
pessoa1.aumentarIdade(); 

