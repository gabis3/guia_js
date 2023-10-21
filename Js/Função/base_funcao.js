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

