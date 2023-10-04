// console.log("a virgula semara comandos e o mais concatena", "\n") 

// /* - - - - - - - - - - - -  - - - - - - - - - - - - - */

// var a = 3; //int a = 3;
// let b = 4; //mais moderno (let n pode redeclarar dentro dela)
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

/* - - - - - - - - - - - - Null e Undefined- - - - - - - - - - - - - */
