
// // usando notação literal
// const obj1 = {}

// //função contrutora
// const obj2 = new Object;
// //
// function Produto(nome, preco, desc) {
//     this.nome = nome
//     this.getPrecoComDesconto = () => {
//         return preco * (1 - desc);
//     }
// }

// const p1 = new Produto('Canete', 7.0, 0.15);
// console.log(p1.getPrecoComDesconto())


// /* - - - - - - - - - - - - Getters/Setters- - - - - - - - - - - - - */

// const sequencia = {
//     _valor: 1, //convenção - essa variavel vai ser acessada apenas internamente
//     get valor() { return this._valor++},
//     set valor(valor) {
//         if (valor > this._valor) {
//             this._valor = valor;
//         }
//     }
// }

// console.log(sequencia.valor, sequencia.valor);
// sequencia.valor = 100;
// console.log(sequencia.valor, sequencia.valor);
// sequencia.valor = 90;
// console.log(sequencia.valor, sequencia.valor);


// /* - - - - - - - - - - - - Funções importantes obj- - - - - - - - - - - - - */

// const pessoa = {
//     nome: 'Rebeca',
//     idade: 12,
//     peso: 55
// }

// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));
// console.log();

// Object.entries(pessoa).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// })


// const dest = { a: 1 }
// const o1 = { b: 2 }
// const o2 = { c: 3, a: 4 }
// const obj = Object.assign(dest,o1,o2)

// Object.freeze(obj);
// obj.c = 1234;
// console.log('\n', obj);


/* - - - - - - - - - - - - Herança- - - - - - - - - - - - - */

