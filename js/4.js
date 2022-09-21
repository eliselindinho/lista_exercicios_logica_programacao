/*
Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplo:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

menorNumero = function (numero) {
  return Math.min.apply(Math, numero);
};

let numeroMenor = [120, 90, 96, 8, 22];
console.log(menorNumero(numeroMenor));
