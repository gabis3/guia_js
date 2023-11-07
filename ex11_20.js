//exercicio 11
function anoBissexto(ano) {
    if (ano <= 0) {
        return false;
    }else if (ano % 400 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false
    }else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBissexto(2020));
console.log("");


//exercicio 12
function calculoFatorial(num) {
    let fatorial = num;
    if (num == 0){
        return 1
    }else {
        for (let i = num - 1; i > 0; i--) {
            fatorial = fatorial * i;
        }
        return fatorial
    }
    
}
console.log(calculoFatorial(5));
console.log("");


//exercicio 13
function diaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("fim de semana");
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("dia util");
            break;
        case 7:
            console.log("fim de semana");
            break;
        default:
            console.log("dia inválido");
            break;
    }
}
diaSemana(1)
console.log("");


//exercicio 14
function vendaFrutas(tipoFruta) {
    switch (tipoFruta) {
        case "maçã":
            console.log("Não vendemos essa fruta aqui.");
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis.");
            break;      
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.");
            break;
        default:
            console.log("erro - nome incorreto");
            break;
    }
}
vendaFrutas("maçã")
vendaFrutas("kiwi")
vendaFrutas("melancia")
vendaFrutas("abacaxi")
console.log("");


//exercicio 15
 function revendaCarro(carro) {
    switch (carro) {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza que quer comprar esse modelo?");
            break;
        default:
            console.log("Não trabalhamos com esse modelo");
            break
    }
 }

 revendaCarro("sedan")
 console.log();


//exercicio 16
function calculadora(valor1, operador, valor2) {
    switch (operador) {
        case "+":
            return valor1 + valor2;
            break;
        case "-":
            return valor1 - valor2;
            break;
        case "*":
            return valor1 * valor2;
            break;
        case "/":
            return valor1 / valor2;
            break;
        default:
            return "operador errado"
    }
}

console.log(calculadora(2, "-", 5));
console.log("");


//exercicio 17
function calculoSalario(plano, salario) {
    switch (plano) {
        case "A":
            console.log(salario + salario * 0.10);
            break;
        case "B":
            console.log(salario + salario * 0.15);
            break;
        case "C":
            console.log(salario + salario * 0.20);
            break;
        default:
            console.log("Plano incorreto");
            break;        
    }
}
calculoSalario("C", 2000)
console.log("");


//exercicio 18
function escreveExtenso(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Numero fora do intervalo.')
    }
}
escreveExtenso(4)    
console.log();


//exercicio 19
function lanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3
            break
        case 200:
            return quantidade * 4
            break
        case 300:
            return quantidade * 5.50
            break
        case 400:
            return quantidade * 7.50
            break
        case 500:
            return quantidade * 3.50
            break
        case 600:
            return quantidade * 2.80
            break
        default:
            return 'Código errado'
    }
}

console.log(lanchonete(400, 5));
console.log();


//exercicio 20
