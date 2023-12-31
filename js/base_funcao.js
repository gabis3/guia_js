// /* - - - - - - - - - Parâmetros variaveis - - - - - - - - - - */

// function soma() {
//     let soma = 0;
//     for (i in arguments) { //argument bject contains an array of the arguments used when the function was called
//         soma += arguments[i]
//     }
//     return soma;
// }

// console.log(soma(1));
// console.log(soma(1.3, 4.2 ,2.5));

// console.log(soma(2, 4, "te amo"));
// console.log(soma("a", 'b', "c"));


// /* - - - - - - - - - This e função bind - - - - - - - - - - */

// const pessoa = {
//     saudacao: "Bom dia, amor!",
//     falar() {
//         console.log(this.saudacao);
//     }
// }

// pessoa.falar()

// const falar = pessoa.falar;
// falar(); //conflito entre paradigmas: funcional e OO

// const falarPessoa = pessoa.falar.bind(pessoa); // faz o this apontar para pessoa
// falarPessoa();


// function Pessoa() {
//     this.idade = 0;

//     const self = this
//     setInterval(function() {
//         self.idade++
//         console.log(self.idade);
//     }/*.bind(this)*/, 1000)
// }

// new Pessoa;


// /* - - - - - - - - - Função Arrow - - - - - - - - - - */

// function Pessoa() {
//     this.idade = 0;

//     setInterval(() => {
//         this.idade++;
//         console.log(this.idade);
//     }, 1000)
// }
// new Pessoa;


// let compararComThis = function (param) {
//     console.log(this === param);
// }

// compararComThis(global);
// compararComThis(module.exports);
// compararComThis(this);

// const obj = {};
// compararComThis = compararComThis.bind(obj);
// compararComThis(global)
// compararComThis(obj);
// console.log("");

// let compararComThisArrow = param => console.log(this === param);

// compararComThisArrow(global);
// compararComThisArrow(module.exports);

// compararComThisArrow = compararComThisArrow.bind(obj);
// compararComThisArrow(obj);


// /* - - - - - - - - - Função Anonima - - - - - - - - - - */

// const soma = function (x, y) {
//     return x + y;
// }

// const imprimirResultado = function (a, b, operacao = soma) {
//    console.log(operacao(a, b));
// }

// imprimirResultado(2, 4);
// imprimirResultado(2, 4, function (a, b) {
//     return a - b;
// });
// imprimirResultado(2, 4, (x, y) => x *y)
// console.log();


// const pessoa = {
//     falar: function (){
//         console.log("Opa");
//     },
//     falar2() {
//         console.log("Opa2");
//     }
//  }

// pessoa.falar();
// pessoa.falar2();


// /* - - - - - - - - - Função Callback - - - - - - - - - - */

// const fabricantes = ["Mercedes", "Audi", "BMW"]

// function imprimir(nome, indi) {
//     console.log(`${indi + 1}. ${nome}`);
// }

// fabricantes.forEach(imprimir);
// fabricantes.forEach(fabricante => console.log(fabricante))


// const notas = [2.4, 4.7, 8.2, 6.7, 9.4]

// //sem callback
// const notasBaixas = []
// for (let i in notas) {
//     if (notas[i] < 7) {
//         notasBaixas.push(notas[i])
//     }
// }
// console.log(notasBaixas);

// //com callback
// const notasBaixas2 = notas.filter(notas => notas < 7)
// console.log(notasBaixas2);


// /* - - - - - - - - - Função Construtoras - - - - - - - - - - */

// function Carro(velocidadeMaxima = 200, delta = 5) {
//   //atributo privado
//   let velocidadeAtual = 0;

//   //metodo publico
//   this.acelerar = function () {
//     if (velocidadeAtual + delta <= velocidadeMaxima) {
//         velocidadeAtual += delta;
//     } else {
//         velocidadeAtual = velocidadeMaxima;
//     }
//   }

//   //metodo publico
//   this.getVelocidadeAtual = function () {
//     return velocidadeAtual;
//   }
// }

// const uno = new Carro;
// uno.acelerar();
// console.log(uno.getVelocidadeAtual());

// const ferrari = new Carro(350, 20);
// ferrari.acelerar();
// ferrari.acelerar();
// ferrari.acelerar();
// console.log(ferrari.getVelocidadeAtual());


// /* - - - - - - - - - Contexto Léxico - - - - - - - - - - */

// const valor = "Global";

// function minhaFuncao() {
//   console.log(valor);
// }

// function exec() {
//   const valor = "Local";
//   minhaFuncao();
// }

// exec();


// /* - - - - - - - - - Função Factory - - - - - - - - - - */

// //Factory Simples
// function criarPessoa() {
//   return {
//     nome: "...",
//     preco: 42
//   }
// }

// console.log(criarPessoa());


// function criarProduto(nome, preco) {
//   return {
//     nome,
//     preco,
//     desconto: 0.1
//   }
// }

// console.log(criarProduto("Celular", 1900));
// console.log(criarProduto("Celular2", 1800));


// /* - - - - - - - - - Class vs Função Factory - - - - - - - - - - */

// class Pessoa {
//   constructor(nome) {
//     this.nome = nome
//   }

//   falar() {
//     console.log(`Meu nome é ${this.nome}`);
//   }
// }

// const p1 = new Pessoa("Augusto");
// p1.falar();


// const pessoa = nome => {
//   return {
//     falar: () => console.log(`Meu nome é ${nome}`)
//     // function () {
//     //     console.log(`Meu nome é ${nome}`)
//     // }
//   }
// }

// const p2 = pessoa("Gabi");
// p2.falar();


// function Pessoa2 (nome) {
//   this.nome = nome;
//   this.falar2 = function() {
//     console.log(`Meu nome é ${this.nome}`);
//   }
// }

// const p3 = new Pessoa2("Gabi");
// p3.falar2();


// /* - - - - - - - - - IIFE - - - - - - - - - - */
// //Immediately Invoked Function Expression

// (function() {
//   console.log("Será executado na hora");
//   console.log("Foge do escopo mais abrangente!");
// })()


// /* - - - - - - - - - Call e Apply - - - - - - - - - - */

// function getPreco(imposto = 0, moeda = "R$") {
//   return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
// }

// const produto = {
//   nome: "Celular",
//   preco: 1900,
//   desc: 0.15,
//   getPreco
// }

// global.preco = 20;
// global.desc = 0.1
// console.log(getPreco());
// console.log(produto.getPreco(), "\n");


// const carro = {preco: 2340, desc: 0.20}

// console.log(getPreco.call(carro));
// console.log(getPreco.apply(carro), "\n");

// console.log(getPreco.call(carro, 0.17, "$"));
// console.log(getPreco.apply(carro, [0.17, "$"]));
