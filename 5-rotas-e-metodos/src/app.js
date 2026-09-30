const express = require("express");

const app = express();

app.use(express.json());

const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120, categoria: "Informática" },
  { id: 2, nome: "Teclado Mecânico", preco: 250, categoria: "Informática" },
  { id: 3, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis" },
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

app.get("/buscar-produtos", (req, res) => {
  const { categoria } = req.query;

  if (!categoria) {
    return res.json(produtos);
  }

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoria,
  );

  res.json(produtosFiltrados);
});

app.post("/produtos", (req, res) => {
  const { nome, preco, categoria } = req.body;

  if (!nome || !preco || !categoria) {
    return res.status(400).json({
      erro: "Nome, preço e categoria são obrigatórios.",
    });
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
    categoria,
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

app.put("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nome, preco, categoria } = req.body;

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  produto.nome = nome;
  produto.preco = preco;
  produto.categoria = categoria;

  res.json(produto);
});

app.patch("/produtos/:id/preco", (req, res) => {
  const id = Number(req.params.id);
  const { preco } = req.body;

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  if (!preco) {
    return res.status(400).json({ erro: "Preço é obrigatório." });
  }

  produto.preco = preco;

  res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = produtos.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  produtos.splice(index, 1);

  res.json({ mensagem: "Produto deletado com sucesso." });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
