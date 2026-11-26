const mongoose = require("mongoose");
const productService = require("../services/productService");

function isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

// READ
async function listarProdutos(req, res, next) {
    try {
        const produtos = await productService.listarProdutos();

        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

// READ POR ID
async function buscarProdutoPorId(req, res, next) {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(400).json({
                erro: "ID inválido"
            });
        }

        const produto = await productService.buscarProdutoPorId(id);

        if (!produto) {
            return res.status(404).json({
                erro: "Produto não encontrado"
            });
        }

        res.json(produto);
    } catch (error) {
        next(error);
    }
}

// CREATE
async function criarProduto(req, res, next) {
    try {
        const {
            nome,
            preco,
            categoria,
            estoque
        } = req.body;

        // Validar dados obrigatórios
        if (!nome || !preco || !categoria || estoque === undefined) {
            return res.status(400).json({
                erro: "Nome, preço, categoria e estoque são obrigatórios"
            });
        }

        // Preço deve ser maior que zero
        if (preco <= 0) {
            return res.status(400).json({
                erro: "O preço deve ser maior que zero"
            });
        }

        // Estoque não pode ser negativo
        if (estoque < 0) {
            return res.status(400).json({
                erro: "O estoque não pode ser menor que zero"
            });
        }

        const novoProduto = await productService.criarProduto({
            nome,
            preco,
            categoria,
            estoque
        });

        res.status(201).json(novoProduto);
    } catch (error) {
        next(error);
    }
}

// UPDATE
async function atualizarProduto(req, res, next) {
    try {
        const {id} = req.params;

        const {
            nome,
            preco,
            categoria,
            estoque
        } = req.body;

        // Validar ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({
                erro: "ID inválido"
            });
        }

        // Validar dados obrigatórios
        if (!nome || !preco || !categoria || estoque === undefined) {
            return res.status(400).json({
                erro: "Nome, preço, categoria e estoque são obrigatórios"
            });
        }

        // Preço deve ser maior que zero
        if (preco <= 0) {
            return res.status(400).json({
                erro: "O preço deve ser maior que zero"
            });
        }

        // Estoque não pode ser negativo
        if (estoque < 0) {
            return res.status(400).json({
                erro: "O estoque não pode ser menor que zero"
            });
        }

        const produtoAtualizado =
            await productService.atualizarProduto(id, {
                nome,
                preco,
                categoria,
                estoque
            });

        // Produto não encontrado
        if (!produtoAtualizado) {
            return res.status(404).json({
                erro: "Produto não encontrado"
            });
        }

        res.json(produtoAtualizado);

    } catch (error) {
        next(error);
    }
}

// DELETE
async function deletarProduto(req, res, next) {
    try {
        const { id } = req.params;

        // Validar ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({
                erro: "ID inválido"
            });
        }

        const produtoDeletado =
            await productService.deletarProduto(id);

        // Produto não encontrado
        if (!produtoDeletado) {
            return res.status(404).json({
                erro: "Produto não encontrado"
            });
        }

        res.json({
            mensagem: "Produto deletado com sucesso"
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};