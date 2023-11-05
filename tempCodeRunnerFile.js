/* - - - - - - - - - Class vs Função Factory - - - - - - - - - - */

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Augusto");
p1.falar();


const pessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
    // function () {
    //     console.log(`Meu nome é ${nome}`)
    // }
  }
}

const p2 = pessoa("Gabi");
p2.falar();