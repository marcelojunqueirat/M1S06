import somaArray from './somaArray.js';
import multiplicaArray from './multiplicaArray.js';
import calculaMedia from './calculaMedia.js';

let numeros = [];
let tamanhoArray = Number(prompt('Quantos números você gostaria de digitar para realizar as operações de soma, multiplicação e média?'))

for (let index = 0; index < tamanhoArray; index++) {
  numeros[index] = Number(prompt(`Digite o ${index+1}° número`))
}

let soma = somaArray(numeros)
let multiplica = multiplicaArray(numeros)
let media = calculaMedia(numeros)

console.log(soma);
console.log(multiplica);
console.log(media);

alert(`Segue relatório das operações com os números digitados: SOMA -> ${soma}. MULTIPLICAÇÃO -> ${multiplica}. MÉDIA -> ${media}.`)
