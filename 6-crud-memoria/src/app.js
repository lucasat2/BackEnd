/**
 * Resumo Passo a Passo: CRUD em Memória com Node.js e Express
 *
 * 1. O que é CRUD: 
 * É a sigla para as quatro operações básicas de um sistema: Create (Criar com POST), Read (Ler/Listar com GET), Update (Atualizar com PUT) e Delete (Deletar com DELETE).
 *
 * 2. Banco de Dados Temporário: 
 * Utilizamos uma variável 'let' para criar uma lista (array) de produtos. Usamos 'let' em vez de 'const' porque essa lista será modificada (itens serão adicionados ou removidos). Os dados somem ao reiniciar o servidor.
 *
 * 3. Validações e Estoque: 
 * O código verifica se todos os campos foram preenchidos e se os valores são válidos (ex: preço maior que 0). Para o estoque, usamos 'estoque === undefined' porque o número 0 é válido para estoque, mas o JavaScript o interpreta como 'falso' em validações simples.
 *
 * 4. Métodos de Lista (Arrays): 
 * O método '.find()' é usado no GET e no PUT para encontrar e retornar um item específico. 
 * O método '.some()' é usado no DELETE apenas para verificar se o item existe (retorna verdadeiro ou falso). 
 * O método '.filter()' é usado no DELETE para recriar a lista, excluindo o item que tem o ID informado.
 *
 * 5. Testes: 
 * Você pode testar todas essas rotas e validações usando o Postman (https://www.postman.com/) ou o Insomnia (https://insomnia.rest/).
 */

const express = require("express");

const app = express();

// Permite receber dados no formato JSON
app.use(express.json());

// Banco de dados temporário criado com 'let' para permitir modificações (exclusão de itens)
let produtos = [
    { id: 1, nome: "Mouse Gamer", preco: 120, categoria: "Informática", estoque: 10 },
    { id: 2, nome: "Teclado Mecânico", preco: 250, categoria: "Informática", estoque: 5 },
    { id: 3, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis", estoque: 2 }
];

// READ: Lista todos os produtos
app.get("/produtos", (req, res) => {
    res.json(produtos);
});

// READ: Busca um produto específico pelo ID
app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    // Procura o produto na lista
    const produto = produtos.find((item) => item.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json(produto);
});

// CREATE: Cria um novo produto
app.post("/produtos", (req, res) => {
    const { nome, preco, categoria, estoque } = req.body;

    // Verifica se faltou enviar algum dado. 'estoque === undefined' garante que o número 0 seja aceito
    if (!nome || !preco || !categoria || estoque === undefined) {
        return res.status(400).json({ erro: "Nome, preço, categoria e estoque são obrigatórios." });
    }

    // Impede cadastro de produtos de graça ou com preço negativo
    if (preco <= 0) {
        return res.status(400).json({ erro: "O preço deve ser maior que zero." });
    }

    // Impede cadastro de estoque negativo
    if (estoque < 0) {
        return res.status(400).json({ erro: "O estoque não pode ser negativo." });
    }

    // Monta o novo produto
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        categoria,
        estoque
    };

    // Salva na lista
    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

// UPDATE: Atualiza os dados de um produto existente
app.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { nome, preco, categoria, estoque } = req.body;

    // Busca o produto pelo ID
    const produto = produtos.find((item) => item.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Repete as mesmas validações de criação para garantir que os novos dados também sejam corretos
    if (!nome || !preco || !categoria || estoque === undefined) {
        return res.status(400).json({ erro: "Nome, preço, categoria e estoque são obrigatórios." });
    }

    if (preco <= 0) {
        return res.status(400).json({ erro: "O preço deve ser maior que zero." });
    }

    if (estoque < 0) {
        return res.status(400).json({ erro: "O estoque não pode ser negativo." });
    }

    // Substitui os dados antigos pelos novos
    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;
    produto.estoque = estoque;

    res.json(produto);
});

// DELETE: Remove um produto
app.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    // 'some' apenas verifica se existe pelo menos um item com esse ID, retornando verdadeiro ou falso
    const produtoExiste = produtos.some((item) => item.id === id);

    if (!produtoExiste) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // O 'filter' recria a lista, mantendo apenas os produtos que têm o ID diferente do que foi enviado
    produtos = produtos.filter((item) => item.id !== id);

    res.json({ mensagem: "Produto deletado com sucesso." });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});