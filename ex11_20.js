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



//exercicio 14



//exercicio 15



//exercicio 16



//exercicio 17



//exercicio 18
      


//exercicio 19



//exercicio 20
