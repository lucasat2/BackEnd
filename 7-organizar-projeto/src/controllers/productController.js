const productService = require("../services/productService");

// Listar produtos
function listarProdutos(req, res) {
  const produtos = productService.listarProdutos();

  res.json(produtos);
}

// Buscar produto por ID
function buscarProdutoPorId(req, res) {
  const id = Number(req.params.id);

  const produto = productService.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({
      erro: "Produto não encontrado.",
    });
  }

  res.json(produto);
}

// Criar produto
function criarProduto(req, res) {
  const { nome, preco, categoria, estoque } = req.body;

  if (!nome || !preco || !categoria || estoque === undefined) {
    return res.status(400).json({
      erro: "Nome, preço, categoria e estoque são obrigatórios.",
    });
  }

  if (preco <= 0) {
    return res.status(400).json({
      erro: "O preço deve ser maior que zero.",
    });
  }

  if (estoque < 0) {
    return res.status(400).json({
      erro: "O estoque não pode ser negativo.",
    });
  }

  const novoProduto = productService.criarProduto({
    nome,
    preco,
    categoria,
    estoque,
  });

  res.status(201).json(novoProduto);
}

// Atualizar produto
function atualizarProduto(req, res) {
  const id = Number(req.params.id);
  const { nome, preco, categoria, estoque } = req.body;

  if (!nome || !preco || !categoria || estoque === undefined) {
    return res.status(400).json({
      erro: "Nome, preço, categoria e estoque são obrigatórios.",
    });
  }

  if (preco <= 0) {
    return res.status(400).json({
      erro: "O preço deve ser maior que zero.",
    });
  }

  if (estoque < 0) {
    return res.status(400).json({
      erro: "O estoque não pode ser negativo.",
    });
  }

  const produtoAtualizado = productService.atualizarProduto(id, {
    nome,
    preco,
    categoria,
    estoque,
  });

  if (!produtoAtualizado) {
    return res.status(404).json({
      erro: "Produto não encontrado.",
    });
  }

  res.json(produtoAtualizado);
}

// Deletar produto
function deletarProduto(req, res) {
  const id = Number(req.params.id);

  const deletado = productService.deletarProduto(id);

  if (!deletado) {
    return res.status(404).json({
      erro: "Produto não encontrado.",
    });
  }

  res.json({
    mensagem: "Produto deletado com sucesso.",
  });
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
