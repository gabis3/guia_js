//exercicio 1
const num = (valor1, valor2) => {
    let soma = valor1 + valor2;
    let sub = valor1 - valor2;
    let mult = valor1 * valor2;
    let divisao = valor1 / valor2;

    console.log(soma, sub, mult, divisao);
    function name(params) {
        
    }
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
function jurosSimples(capitalInicial, taxaJuros, tempoApli) {
   const simples = capitalInicial * taxaJuros * tempoApli;
   const totalJS = capitalInicial + simples;
   console.log(`Juros simples: R$ ${totalJS}`); 
}

function jurosComposto(capitalInicial, taxaJuros, tempoApli) {
    const montante = capitalInicial * (1 + taxaJuros) **tempoApli;
    console.log(`Juros composto: R$ ${montante.toFixed(2)}`);
}

jurosSimples(2000, 0.05, 10);
jurosComposto(2000, 0.05, 10);
console.log("");


//exercicio 7
function baskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return "Delta Negativo";
    } else {
        delta = Math.sqrt(delta);
        const x1 = (-bx + delta)/(2 * ax2)
        const x2 = (-bx - delta)/(2 * ax2)
        const resposta = [x1.toFixed(1), x2.toFixed(1)]
        return resposta;
    }
}

console.log(baskara(1, 12, -13));
console.log("");


//exercicio 8
const pontosString = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function pontuacao(listaPontosString) {
    let listaArray = listaPontosString.split(", ")
    let maiorPontuacao = listaArray[0];
    let menorPontuacao = listaArray[0];
    let recordVezes = 0;
    let piorJogo = 0;
    for (let i = 0; i < listaArray.length; i++) {
      if(parseInt(listaArray[i]) > parseInt(maiorPontuacao)) {
        maiorPontuacao = listaArray[i];
        recordVezes++;
      }
      if(parseInt(listaArray[i]) < parseInt(menorPontuacao)) {
        menorPontuacao = listaArray[i];
        piorJogo = i + 1;
      }
    }
    const melhorPior = [recordVezes, piorJogo]
    return melhorPior;
}

console.log(pontuacao(pontosString));
console.log("");


//exercicio 9
function sistemaNotas(nota) {
    if(nota <= 100 && nota > 37) {
        let redondo = nota % 5;
        if (redondo >= 3) {
            nota = nota + (5 - redondo)
        }
        return `Nota: ${nota} - APROVADO`
        
    }else if (nota >= 0) {
        return `Nota: ${nota} - REPROVADO`
    }else {
        return "Nota invalida"
    }
}

console.log(sistemaNotas(38));


//exercicio 10
function verificaDivididoPor3(valor) {
    if (valor <= 100 && valor >= 0) {
        const teste = valor % 3
        if (teste == 0) {
            return true
        } else {
            return false
        }
    } else {
        return "valor invalido"
    }
}

console.log(verificaDivididoPor3(-5));