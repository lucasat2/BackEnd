const prompt = require ('prompt-sync') ({sigint: true});

const produtos = [{
    id: 1,
    nome:"Mouse",
    preco: 50,
    estoque: 200
},
{
    id: 2,
    nome:"Teclado",
    preco: 150,
    estoque: 300
},
{
    id: 3,
    nome:"Cadeira",
    preco: 500,
    estoque: 100
},
{
    id: 4,
    nome:"Notebook",
    preco: 4000,
    estoque: 80
}
];

const produtoId = Number(prompt('Digite o Id: '));
const quantidade = Number(prompt('Digite a quantidade: '));

const produto = produtos.find((item)=>item.id === produtoId)
console.log(produto);

if(!produto) {
    console.log("Produto não encontrado");
}else if (produto.estoque < quantidade) { 
    console.log("Estoque insuficiente");
}else{
    const total  = produto.preco * quantidade;
    console.log(`Produto: ${produto.nome}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Total: ${total}`);

}

