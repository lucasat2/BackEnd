const Product = require("../models/Product");

//CREATE 

async function criarProduto(dados){
  const novoProduto = await Product.create(dados);
  return novoProduto;

}

// READ
async function listarProdutos(){
  const produtos = await Product.find();
  return produtos;
}

//READ POR ID 

async function buscarProdutoPorId(){
  const produto = await Product.findById();
  return produto;
}

//UPDATE 

async function atualizarProduto(id,dados){
  const produtoAtualizado = await Product.findByIdAndUpdate(id,dados, {new: true});
  return produtoAtualizado;
}

// DELETE

async function deletarProduto(id){
    const produtoDeletado = await Product.findByIdAndDelete(id);
    return produtoDeletado;
}

module.exports = {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
}


