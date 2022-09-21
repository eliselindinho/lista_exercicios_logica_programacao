/*

Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como 
uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é 
o 2° mês.
Exemplo:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
*/

function receberNomeDoMes(mes) {
  let mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return mesesDoAno[mes - 1];
}

console.log(
  "Digite um número de 1 a 12. O mês escolhido é " + receberNomeDoMes(4) + "."
);
