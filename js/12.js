/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal 
dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e 
preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total 
das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplo:
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará “O total de despesas é: R$ 239.99”
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará “O total de despesas é: R$ 34599.89”
*/

function despesasTotais(produtos) {
  let totalDasDespesas = 0;
  for (var i = 0; i < produtos.length; i++) {
    let valorAtualDasDespesas = produtos[i]["preco"];
    totalDasDespesas += valorAtualDasDespesas;
  }
  return totalDasDespesas;
}
console.log(
  "Valor das despesas totais é R$" +
    despesasTotais([
      { nome: "Jeep", categoria: "Automóvel", preco: 350000 },
      { nome: "Pacote Disney", categoria: "Viagem", preco: 50000 },
      { nome: "Casa", categoria: "imóvel", preco: 500000 },
    ]) +
    "."
);
