/*
Escreva uma função que receba um array de números e retornará a soma de todos os 
números desse array.
Exemplo:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(arr) {
  let somaDosNumeros = 0;
  for (let i = 0; i < arr.length; i++) {
    let valorAtual = arr[i];
    somaDosNumeros += valorAtual;
  }
  return somaDosNumeros;
}
