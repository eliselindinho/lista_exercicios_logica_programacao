/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que 
repetirá, enquanto o segundo será o número de vezes que haverá repetição. Um array será 
retornado.
Exemplo:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function doisParametros(repetiraNumero, quantidadeRepeticao) {
  let repetiraNumero = prompt("Digite um número");
  let quantidadeRepeticao = prompt(
    "Quantas vezes o número digitado anteriormente repetirá?"
  );
  return [repetiraNumero * quantidadeRepeticao];
}
console.log(repetiraNumero, quantidadeRepeticao);
