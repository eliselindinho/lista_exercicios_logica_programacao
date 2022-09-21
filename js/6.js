/*
Escreva uma função que receba um array de números e retornará a soma de todos os 
números desse array.
Exemplo:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(numeros) {
  let somaDosNumeros = 0;
  for (let i = 0; i < numeros.length; i++) {
    let valorAtual = numeros[i];
    somaDosNumeros += valorAtual;
  }
  return somaDosNumeros;
}
console.log(somarNumeros([1, 3, 1]));
