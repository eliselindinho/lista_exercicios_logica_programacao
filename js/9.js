/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao 
segundo.
Exemplo:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

function maiorOuIgual(num1, num2) {
  if (num1 === num2 || num1 > num2) {
    return true;
  } else {
    return false;
  }
}
