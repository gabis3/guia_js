//exercicio 1
const num = (valor1, valor2) => {
    let soma = valor1 + valor2;
    let sub = valor1 - valor2;
    let mult = valor1 * valor2;
    let divisao = valor1 / valor2;

    console.log(soma, sub, mult, divisao);
}

num(2, 4);
console.log("");


//exercicio 2
function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Quadrado Equilátero");
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log("Quadrado Isóceles");
    } else {
        console.log("Quadrado Escaleno");
    }
}

tipoTriangulo(2, 4, 3)
console.log("");


//exercicio 3
function expo(base, expoente) {
    return base ** expoente;
}

console.log(expo(4, 2));
console.log("");


//exercicio 4
function divisao(dividendo, divisor) {
    const divi = Math.floor(dividendo / divisor);
    const resto = dividendo % divisor;
    console.log(`Resultado: ${divi}
Resto: ${resto}`);
}

divisao(7, 5)
console.log("");


//exercicio 5
function arredondar(valor) {
    console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`)
}
arredondar(0.1 + 0.2)
console.log("");


//exercicio 6
