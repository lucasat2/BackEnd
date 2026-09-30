const express = require("express");

const app = express();

app.use(express.json());

let produtos = [
  {
    id: 1,
    nome: "Mouse Gamer",
    preco: 120,
    categoria: "Informática",
    estoque: 10,
  },
  {
    id: 2,
    nome: "Teclado Mecânico",
    preco: 250,
    categoria: "Informática",
    estoque: 5,
  },
  { id: 3, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis", estoque: 2 },
];

// READ: Lista todos os produtos
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// READ: Busca um produto específico pelo ID
app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

// CREATE: Cria um novo produto
app.post("/produtos", (req, res) => {
  const { nome, preco, categoria, estoque } = req.body;

  if (!nome || !preco || !categoria || estoque === undefined) {
    return res
      .status(400)
      .json({ erro: "Nome, preço, categoria e estoque são obrigatórios." });
  }

  if (preco <= 0) {
    return res.status(400).json({ erro: "O preço deve ser maior que zero." });
  }

  if (estoque < 0) {
    return res.status(400).json({ erro: "O estoque não pode ser negativo." });
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
    categoria,
    estoque,
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

// UPDATE: Atualiza os dados de um produto existente
app.put("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nome, preco, categoria, estoque } = req.body;

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  if (!nome || !preco || !categoria || estoque === undefined) {
    return res
      .status(400)
      .json({ erro: "Nome, preço, categoria e estoque são obrigatórios." });
  }

  if (preco <= 0) {
    return res.status(400).json({ erro: "O preço deve ser maior que zero." });
  }

  if (estoque < 0) {
    return res.status(400).json({ erro: "O estoque não pode ser negativo." });
  }

  produto.nome = nome;
  produto.preco = preco;
  produto.categoria = categoria;
  produto.estoque = estoque;

  res.json(produto);
});

// DELETE: Remove um produto
app.delete("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produtoExiste = produtos.some((item) => item.id === id);

  if (!produtoExiste) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  produtos = produtos.filter((item) => item.id !== id);

  res.json({ mensagem: "Produto deletado com sucesso." });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
