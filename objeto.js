
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


// /* - - - - - - - - - - - - Herança- - - - - - - - - - - - - */

// const ferrari = {
//     modelo: "F40",
//     velMax: 340
// }

// const volvo = {
//     modelo: "V40",
//     velMax: 200
// }

// console.log(ferrari.prototype);
// console.log(ferrari.__proto__);
// console.log(ferrari.__proto__ === Object.prototype);
// console.log(volvo.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null, '\n');

// function MeuObjeto() {}
// console.log(typeof Object, typeof MeuObjeto);
// console.log(MeuObjeto.prototype, '\n');


// // cadeia de prototios (prototype chain)
// Object.prototype.atb0 = 0; //não faça isso.
// const avo = { atb1: "A" }
// const pai = { __proto__: avo, atb2: "B", atb3: 3 }
// const filho = { __proto__: pai, atb3: "C" }
// console.log(filho.atb0, filho.atb1, filho.atb2, filho.atb3, '\n');

// const carro = {
//     velAtual: 0,
//     velMax: 200,
//     acelerarMais(delta) {
//         if (this.velAtual + delta <= this.velMax) {
//             this.velAtual += delta;
//         } else {
//             this.velAtual = this.velMax
//         }
//     },
//     status() {
//         return `${this.velAtual}Km/h de ${this.velMax}Km/h`
//     }
// }

// const bmw = {
//     modelo: "F40",
//     velMax: 340 //shadowing
// }

// const mercedes = {
//     modelo: "V40",
//     status() {
//         return `${this.modelo}: ${super.status()}`
//     }
// }

// Object.setPrototypeOf(bmw, carro);
// Object.setPrototypeOf(mercedes, carro);

// carro.acelerarMais(40);
// console.log(bmw.status());

// carro.acelerarMais(300);
// console.log(mercedes.status(), '\n');


// //
// const dad = { nome: "Pedro", corCabelo: "Preto" }
// const daughter1 = Object.create(dad);
// daughter1.nome = "Ana";
// console.log(`${daughter1.nome} tem cabelo ${daughter1.corCabelo}`);

// const daughter2 = Object.create(dad, {
//     nome: { value: "Bia", writable: false, enumerable: false}
// })

// daughter2.nome ="Carla";
// console.log(`${daughter2.nome} tem cabelo ${daughter2.corCabelo}`);

// console.log(Object.keys(daughter1));
// console.log(Object.keys(daughter2), '\n');


// //
// function meuObjeto() {}
// console.log(meuObjeto.prototype);

// const obj1 = new meuObjeto;
// console.log(obj1.__proto__ === meuObjeto.prototype);

// meuObjeto.prototype.nome = "Anonimo"
// meuObjeto.prototype.falar = function() {
//     console.log(`Bom dia! Meu nome é ${this.nome}`);
// }

// obj1.falar()
// obj1.nome = "Gabi"
// obj1.falar()

// const obj2 = {}
// obj2.__proto__ = meuObjeto.prototype;
// obj2.nome = "obj2";
// obj2.falar()
// console.log();


// //
// String.prototype.reverter = function() {
//     return this.split('').reverse().join('');
// }
// console.log('Gabriella Sousa'.reverter());

// Array.prototype.primeiro = function() {
//     return this[0];
// }
// console.log([1, 2, 3, 4].primeiro(), '\n');

// // String.prototype.toString = function() {
// //     return "Lascou tudo"
// // }
// // console.log('Gabriella Sousa'.reverter());


// //
// function aula(nome, videoId) {
//     this.nome = nome,
//     this.videoId = videoId
// }

// const aula1 = new aula("Bem vindo", 123);
// const aula2 = new aula("Até breve", 456);
// console.log(aula1, aula2, '\n');


