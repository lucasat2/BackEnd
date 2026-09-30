const productService = require("../services/productService");

function listarProdutos(req, res) {
    const produtos = productService.listarProdutos();
    res.json(produtos);
}

function buscarProdutoPorId(req, res) {
    const id = Number(req.params.id);
    const produto = productService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json(produto);
}

function criarProduto(req, res) {
    const { nome, preco, categoria, estoque } = req.body;

    if (!categoria) {
        return res.status(400).json({ erro: "A categoria é obrigatória." });
    }

    if (!nome || nome.length < 3) {
        return res.status(400).json({ erro: "O nome deve ter pelo menos 3 caracteres." });
    }

    if (preco === undefined || preco <= 0) {
        return res.status(400).json({ erro: "O preço deve ser maior que zero." });
    }

    if (estoque === undefined || estoque < 0) {
        return res.status(400).json({ erro: "O estoque não pode ser negativo." });
    }

    const novoProduto = productService.criarProduto({ nome, preco, categoria, estoque });
    res.status(201).json(novoProduto);
}

function atualizarProduto(req, res) {
    const id = Number(req.params.id);
    const { nome, preco, categoria, estoque } = req.body;

    if (!categoria) {
        return res.status(400).json({ erro: "A categoria é obrigatória." });
    }

    if (!nome || nome.length < 3) {
        return res.status(400).json({ erro: "O nome deve ter pelo menos 3 caracteres." });
    }

    if (preco === undefined || preco <= 0) {
        return res.status(400).json({ erro: "O preço deve ser maior que zero." });
    }

    if (estoque === undefined || estoque < 0) {
        return res.status(400).json({ erro: "O estoque não pode ser negativo." });
    }

    const produtoAtualizado = productService.atualizarProduto(id, { nome, preco, categoria, estoque });

    if (!produtoAtualizado) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json(produtoAtualizado);
}

function deletarProduto(req, res) {
    const id = Number(req.params.id);
    const deletado = productService.deletarProduto(id);

    if (!deletado) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json({ mensagem: "Produto deletado com sucesso." });
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};