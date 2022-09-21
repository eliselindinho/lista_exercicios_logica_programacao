/**
 Elabore uma função que recebe um objeto com estudantes e suas notas.As notas de cada estudante estarão
 num array, conforme exemplo abaixo.Você deverá calcular a média da nota de cada aluno e retornar um objeto
 com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 Exemplo:
 receberMelhorEstudante({
     Joao: [8, 7.6, 8.9, 6], // média 7.625
     Mariana: [9, 6.6, 7.9, 8], // média 7.875
     Carla: [7, 7, 8, 9] // média 7.75
 }) // retornará { nome: "Mariana", media: 7.875 }
 */

function media(arrNotas) {
  let somaAcumulador = 0;
  arrNotas.forEach(function (nota) {
    somaAcumulador += nota;
  });
  return somaAcumulador / arrNotas.length;
}

function receberMelhorEstudante(objetoEstudantes) {
  let arrEstudantes = [];
  Object.entries(objetoEstudantes).forEach(function (estudante) {
    let objetoEstudante = {};
    objetoEstudante.nome = estudante[0];
    objetoEstudante.media = media(estudante[1]);
    arrEstudantes.push(objEstudante);
  });
  return arrEstudantes.sort((a, b) => b.media - a.media)[0];
}

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
