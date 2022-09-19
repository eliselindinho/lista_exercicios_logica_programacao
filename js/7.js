/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o 
símbolo "+" na quantidade especificada no parâmetro.
Exemplo:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais(qtd) {
  let listaDeMais = [];
  for (i = 0; i < qtd; i++) {
    listaDeMais.push("+");
  }
  return listaDeMais.join("");
}
