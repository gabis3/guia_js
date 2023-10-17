// console.log("a virgula semara comandos e o mais concatena", "\n") 

// /* - - - - - - - - - - - -  - - - - - - - - - - - - - */

// var a = 3; //int a = 3; - escopo de função e global
// let b = 4; //mais moderno (let n pode redeclarar dentro dela) -escopo de bloco, função e global
// const c = 5; //não permite mudar o valor
// console.log(a, b, c, "\n")

// var a = 40;
// b = 50;
// console.log("alterado " + a, b, "\n");


// /* - - - - - - - - - - - - tipagem fraca - - - - - - - - - - - - - */

// let aaa = "texto qualquer";
// console.log(aaa);
// console.log(typeof aaa, "\n");

// aaa = 2;
// console.log(aaa);
// console.log(typeof aaa, "\n");

// console.log("Eu te amo amor da minha vida S2", "\n");

// console.log(7 / 0); 
// console.log("10" / 2, "\n");


// /* - - - - - - - - - - - - Tipos Numeros- - - - - - - - - - - - - */

//  const peso1 = 1.0;
// const peso2 = Number('2.0');//função

// console.log(peso1, peso2);
//  console.log(Number.isInteger(peso1)); //isInteger - metodo pra saber se numero é inteiro 
// console.log(Number.isInteger(peso2), "\n");

// const teste1 = 8.855;
// const teste2 = 9.93;

// const total = teste1 * peso1 + teste2 * peso2;
// const media = total / (peso1 + peso2);

// console.log(media.toFixed(2)); //função para delimitar as casas decimais 
// console.log(media.toString(2)); //pega o valor original da constante - 2 retorna binary 10 decimal 16 hexadecimal
// console.log(typeof media, "\n");


// /* - - - - - - - - - - - - alguns cuidados- - - - - - - - - - - - - */

// console.log("10,2" / 2);
// console.log("3" + 2); // a string ganha
// console.log("3" - 2);
// console.log("Show" * 2, "\n");

// console.log(0.1 + 0.7);
// console.log(0.1 + 0.8, "\n");

// ////console.log(10.toString()); //não dá para chamar um literal ponto a função
// console.log((10).toString(), "\n"); //mas se colocar parenteses funciona


// /* - - - - - - - - - - - - Math- - - - - - - - - - - - - */
// //Math é um objeto para matematica basica

// const raio = 5;
// let area = Math.PI * Math.pow(raio, 2);  //pow - potenciação primeiro elevado ao segundo

// console.log(area, "\n");


// /* - - - - - - - - - - - - String- - - - - - - - - - - - - */
// // 'normal'  "normal"  `template`


// const escola = "Cod3r";
// console.log(escola.charAt(0));
// console.log(escola.charAt(5)); //retorna um valor vazio - n gera erro - tomar cuidado
// console.log(escola.indexOf("o")); //mostra em qual indice esta oq vc digitou
// console.log(escola.charCodeAt(3), "\n"); //retorna o valor da tabela ASCII - UNICODE

// console.log(escola.substring(2)); //vai imprimir a partir do numero
// console.log(escola.substring(2, 4), "\n"); // imprime do primeiro numero até antes do segundo

// console.log("Escola ".concat(escola).concat("!")); //junta uma string com outrascoisas
// console.log("Escola " + (escola) + ("!"));
// let num = 19;
// console.log("Idade: ".concat(num).concat(" !"), "\n");

// console.log(escola.replace(3, "aa")); //substitui a letra na posição 3 por e
// console.log(escola.replace(/\d/, "e")); //subistitui todos os digitos por e
// let palavra = "bla4 bla4";
// console.log(palavra.replace(/\d/g, "a")); //g é a teg global 
// console.log(palavra.replace(/\w/g, "a"), "\n"); //substitui todas as letras e digitos por a

// console.log("Gabriella, Augusto, Pato".split(",")); //split separa e transforma em array


// /* - - - - - - - - - - - - Template String- - - - - - - - - - - - - */

// const nome = "Augusto";
// const concatenacao = "Olá " + nome + "!";
// const template = `
//     Olá 
// ${nome}!`

// console.log(concatenacao, template, "\n");

// //expressões matematicas
// console.log(`1 + 1 = ${1+1} \n`);
 
// const up = texto => texto.toUpperCase(); //funçãopega o parametro e transforma em letra maiuscula
// console.log(`Ei... ${up("cuidado")}!`); 


// /* - - - - - - - - - - - - Boolean- - - - - - - - - - - - - */
// //js aceita varios tipos de verdadeiro e falso

// let isAtivo = false;
// console.log(isAtivo); //esta imprimindo o literal true ou false
// isAtivo = true;
// console.log(isAtivo, "\n");

// isAtivo = 1;
// console.log(!!isAtivo); //exclamação significa negativo - duas ! retorna o valor booleano original
// console.log(!isAtivo, "\n");

// console.log("os verdadeiros...");
// console.log(!!24);
// console.log(!!-7);
// console.log(!!" ");
// console.log(!!"oi");
// console.log(!![]);
// console.log(!!{});
// console.log(!!Infinity);
// console.log(!!(isAtivo = Infinity));

// console.log("\nos falsos...");
// console.log(!!0);
// console.log(!!"");
// console.log(!!null);
// console.log(!!NaN);
// console.log(!!undefined);
// console.log(!!(isAtivo = 0));

// console.log("\npara finalizar... ");
// console.log(!!("" || null || 0 || " ")); // || significa "ou" // se algum for verdadeiro o retorno será true
// console.log(("" || NaN || "omelete")); //sempre retorna o primeiro valor verdadeiro
// console.log(("" || "Pandora" || "omelete"));
// console.log(("" || NaN || "omelete \n"));

// let nome = "";
// console.log(nome || "Informe o nome por favor!");
// nome = "Augusto"
// console.log(nome || "Informe o nome por favor!");


// /* - - - - - - - - - - - - Array- - - - - - - - - - - - - */

// const valores = [7, 27, 2, 45];
// console.log(valores[0], valores[3]); // , = e
// console.log(valores[4], "\n");

// valores[4] = 10; //adicionando uma posição no array
// valores[7] = 1; 
// console.log(valores, valores.length, "\n");

// valores.push({id: 3}, false, null, "amor"); //adiciona valores no final do array
// console.log(valores, "\n");

// console.log(valores.pop()); //deleta o ultimo item do array e imprime ele
// delete valores[7]; //deleta o vetor escolhido e deixa um espaço vazio (tira um atributo de dentro de um obsejo)
// console.log(valores);
 
// console.log(typeof valores);


// /* - - - - - - - - - - - - Object- - - - - - - - - - - - - */
// //jason: javaScript object notetion

// const prod1 = {}; //{} forma literal de escrever um objeto
// //atribuindo propriedades de forma dinamica
// prod1.nome = "Algusto Barcelos Bastos";
// prod1.preco = 4227.11;
// prod1["Desconto Legal"] = 0.40; // evitar usar atributos com espaço

// console.log(prod1, "\n");

// //notação literal de objeto
// const prod2 = {
//     nome: "Camisa Polo",
//     preco: 42.00,
//     obj: {
//         aaaa: 1,
//         obj: {
//             aaaa: 2
//         }
//     }
// }

// console.log(prod2);


// /* - - - - - - - - - - - - Null e Undefined- - - - - - - - - - - - - */
// //atribuição por valor e atribuição por referencia

// const a = {name: "Teste"};
// console.log("a: ", a);

// const b = a;
// console.log("b: ", b, "\n");
// //a constante possui o endereço que está apontando para um lugar na memória

// b.name = "Opa";
// console.log("b: ", b);
// console.log("a: ", a, "\n"); //os dois estão com o endereço igualado - se um muda o outro tbm

// let c = 3;
// let d = c;
// d++
// console.log("d: ", d);
// console.log("c: ", c, "\n \n"); //valor primitivo é feita uma cópia do valor


// let valor; //não inicializada - por padrão undefined
// console.log(valor);

// valor = null; //quando quisar zerar uma variavel coloca null
// console.log(valor, "\n");
// // console.log(valor.toString()); //erro

// const produto = {};
// console.log(produto);
// console.log(produto.preco);

// produto.preco = 4.20;
// console.log(produto, "\n");

// produto.preco = undefined;
// console.log(!!produto.preco);
// console.log(produto);
// delete produto.preco;
// console.log(produto);


// /* - - - - - - - - - - - - Funçaõ- - - - - - - - - - - - - */
// //função pe um bloco de código, com alguma sentenca ou n, nomeado onde vc pode chamar varias vezes e utiliza-lo no seu código
// console.log(typeof Object);

// class Produto {};
// console.log(typeof Produto, "\n");

// //função sem retorno - escolher bons nomes para as funções - colocar os nomes dos parametros
// function imprimirSoma(a, g){
//     console.log(a + g);
// }

// imprimirSoma(2, 4);
// imprimirSoma();
// imprimirSoma(2);
// imprimirSoma(2, 4, 7, 9);
// const guto = "Guto e "
// imprimirSoma(guto, "Gabs")
// console.log("\n");

// //função com retorno
// function soma(a, g = 1){
//     return a + g;
// }

// console.log(soma(2, 7));
// console.log(soma(2), "\n");


// //armazenando uma função em uma variavel
// const imprimirSoma2 = function (a, g){ //função anonima pq ela n tem o nome declarado
//     console.log(a + g);
// }
// imprimirSoma2(2, 4);

// //armazenando uma função arrow em uma variavel
// const soma2 = (guto, gabs) => {
//     return guto + gabs;
// }
// console.log(soma2(2, 7));

// //retorno implícito
// const subtracao = (a, b) => a - b;
// console.log(subtracao(2, 3), "\n");

// const teamo = g => g + " TE AMO!";
// console.log(teamo("eu"));
// const teamo2 = g => console.log(g);
// teamo2("eu te amo!")


// /* - - - - - - - - - - - - variavel com Var - - - - - - - - - - - - */
// // o var pode ser visto fora do seu bloco (mas na do bloco de uma função) outras variaveis n fazem isso
// {
//     {
//         {
//             {
//                 var sera = "Será??????";
//                 console.log(sera);
//             }
//             let talvez = "talvez";
//             console.log(talvez);
//         }
//         console.log(sera);
//     }
// }
// console.log(sera, "\n");
// //console.log(talvez);  - DA UM ERRO

// function teste() {
//     var local = 123
//     console.log(local);
// }

// teste();
// //console.log(local); - da um erro

// var num = 1;
// {
//     var num = 2;
//     console.log("\ndentro =", num);
// }
// console.log("fora =", num);


// /* - - - - - - - - - - - - variavel com Let - - - - - - - - - - - - */

// let num = 1;
// {
//     let num = 2;
//     console.log("\ndentro =", num);
// }
// console.log("fora =", num);


// let numero = 1;
// {
//     let num2 = 2;
//     console.log("\ndentro =", numero);
// }
// console.log("fora =", numero);


// /* - - - - - - - - - - - - var e let em loop - - - - - - - - - - - - */

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log('i = ', i, "\n");

// const vetor = [];
// for (var g = 0; g < 10; g++) {
//     vetor.push(function() {
//         console.log(g)
//     })
// }
// vetor[2]()
// vetor[8]()
// console.log("\n");


// for (let j = 0; j < 10; j++) {
//     console.log(j);
// }
// //console.log("j =", j); // j is not defined
// console.log("\n");

// const funcs = [];
// for (let a = 1; a < 10; a++) {
//     funcs.push(function() {
//         console.log(a)
//     })
// }
// funcs[2]();
// funcs[8]();


// /* - - - - - - - - - - - - hoisting - - - - - - - - - - - - */
// //icamento da variavel

// console.log("a = ", a);
// var a = 2;
// console.log("a =", a);

// var b
// console.log("\nb = ",b);
// b = 2;
// console.log("b =", b);


// /* - - - - - - - - - - - - Par NomeValor - - - - - - - - - - - - */

// const saudacao = "opa"; //contexto léxico 1 

// function exec() {
//     const saudacao = "oieee"; //contexto léxico 2
//     return saudacao;
// }

// //objetos são grupos aninhados de pares nome/valor
// const cliente = {
//     nome: "Pedro",
//     idade: 32,
//     peso: 90,
//     endereco: {
//         logadouro: "Rua Muito Legal",
//         numero: 123
//     }
// }

// console.log(saudacao);
// console.log(exec());
// console.log(cliente);


// /* - - - - - - - - - - - - Notação Ponto - - - - - - - - - - - - */

// console.log(Math.ceil(2.7));

// const obj = {}
// obj.nome = "bola";
// //obj["nome"] = "bola2"
// console.log(obj.nome);

// function Obj(nome){
//     this.nome = nome;
// }

// const obj2 = new Obj("Cadeira");
// console.log(obj2.nome);


// /* - - - - - - - - - - - - Atribuição - - - - - - - - - - - - */

// const a = 4;
// let b = 2;

// b += a //b = b + a
// console.log(b);

// b -= a //b = b - a
// console.log(b);

// b *= a //b = b * a
// console.log(b);

// b /= a //b = b / a
// console.log(b);

// b %= a //b = b % a - pegar o que restou da divisão 
// console.log(b);


// /* - - - - - - - - - - - - Operadores: destructuring - - - - - - - - - - - - */

// const pessoa = {
//     nome: "Ana",
//     idade: 5,
//     endereco: {
//         logadouro: "Rua Muito Legal",
//         numero: 123
//     }
// }

// const { nome, idade } = pessoa;
// console.log(nome, idade);

// const { nome: n, idade: i } = pessoa;
// console.log(n, i);

// const {sobrenome, guto = 2} = pessoa;
// console.log(sobrenome, guto);

// const {endereco: {logadouro, numero} } = pessoa;
// console.log(logadouro, "\n");


// const [a] = [10]
// console.log(a);

// const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
// console.log(n1, n3, n5, n6);

// const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
// console.log(nota, "\n");


// function rand({ min = 0, max = 1000}) {
//     const valor = Math.random() * (max - min) + min;
//     return Math.floor(valor);
// }

// const obj = {max: 50, min: 40};
// console.log(rand(obj));
// console.log(rand({min: 955}));
// console.log(rand({}), "\n");
// //console.log(rand()); - da um erro


// function amor([min = 0, max = 1000]) {
//     if (min > max) [min, max] = [max, min];
//     const valor2 = Math.random() * (max - min) + min;
//     return Math.floor(valor2);
// }

// console.log(amor([50, 40]));
// console.log(amor([992]));
// console.log(amor([, 10]));


// /* - - - - - - - - - - - - Operadores: relacionais - - - - - - - - - - - - */

// console.log("01) ", "1" == 1);
// console.log("02) ", "1" === 1);
// console.log("03) ", "3" != 3);
// console.log("04) ", "3" !== 3);

// console.log("05) ", 3 < 2);
// console.log("06) ", 3 > 2);
// console.log("07) ", 3 <= 2);

// const d1 = new Date(0);
// const d2 = new Date(0);
// console.log("08) ", d1 === d2); // vai comparar referencia de memoria 
// console.log("09) ", d1.getTime() === d2.getTime());

// console.log("10) ", undefined == null);
// console.log("11) ", undefined === null);


// /* - - - - - - - - - - - - Operadores: logicos - - - - - - - - - - - - */

// function compras(trab1, trab2) {
//     const comprarSorvete = trab1 || trab2; //primeiro ou segundo
//     const comprarTv50 = trab1 && trab2; // primeiro e segundo
//     //const comprarTv30 = !!(trab1 ^ trab2); bitwise ou exclusivo xor
//     const comprarTv30 = trab1 != trab2; // ou exclusivo 
//     const manterSaudavel = !comprarSorvete;

//     return {comprarSorvete, comprarTv50, comprarTv30, manterSaudavel}
// }

// console.log(compras(true, true));
// console.log(compras(true, false));
// console.log(compras(false, true));
// console.log(compras(false, false));


/* - - - - - - - - - - - - Operadores: unarios - - - - - - - - - - - - */