class Veiculo {
  marca;
  ano;
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
  obterDetalhes(){
    return `Veículo: Marca "${this.marca}" e ano ${this.ano}.`
  }
}

class Carro extends Veiculo {
  portas;
  constructor(marca, ano, portas) {
    super(marca, ano)
    this.portas = portas;
  }
  obterDetalhes(){
    return `Carro: Marca "${this.marca}", Ano ${this.ano} e ${this.portas} portas.`
  }
}

let carro = new Carro('GM - Chevrolet', '2008', 4);

console.log(carro.obterDetalhes());
