// /* - - - - - - - - - - - - IF else IF- - - - - - - - - - - - */

// Number.prototype.entre = function (inicio, fim) {
//    return this >= inicio && this <= fim; 
// }

// const imprimirResultado = function (nota) {
//     if (nota.entre(9, 10)) {
//         console.log("Parabens, aprovado!");
//     } else if (nota.entre(7, 8.99)) {
//         console.log("Aprovado!");
//     } else if (nota.entre(4, 6.99)) {
//         console.log("Recuperação!");
//     } else if (nota.entre(0, 3.99)) {
//         console.log("Reprovado!");
//     } else {
//         console.log("Nota inválida.");
//     }

//     console.log("fim.");
// }

// imprimirResultado(7);
// imprimirResultado(-1);


// /* - - - - - - - - - - - - Switch- - - - - - - - - - - - */

// const notasAlunos = function (notas) {
//     switch (Math.floor(notas)) {
//         case 10:
//         case 9:
//             console.log("Parabens, aprovado!");
//             break;
//         case 8: case 7:
//             console.log("Aprovado!");
//             break;
//         case 6: case 5: case 4:
//             console.log("Recuperação");
//             break;
//         case 3: case 2: case 1: case 0:
//             console.log("Reprovado");
//         default:
//             console.log("Nota invalida");
//             break;
//     }
// }

// notasAlunos(7.9);


// /* - - - - - - - - - - - - While - - - - - - - - - - - - */
// //n sabe quantas vezes vai repetir

// function getInteiroAleatorioEntre(min, max) {
//     const valor = Math.random() * (max - min) + min;
//     return Math.floor(valor)
// }

// let opcao = 0;

// while (opcao != -1 ) {
//     opcao = getInteiroAleatorioEntre(-1, 10);
//     console.log(`Opção escolida foi ${opcao}.`);
// }

// console.log(`Até a próxima`);


