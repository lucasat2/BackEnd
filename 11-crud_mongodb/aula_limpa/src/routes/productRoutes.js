const express = require("express");
const productController = require("../controllers/productController");
const verificarAdmin = require("../middlewares/adminMiddleware"); // Importa a trava de rota

const router = express.Router();

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", verificarAdmin, productController.criarProduto); // Middleware inserido entre o endereço e o Controller. Ele barra ou libera a criação.

router.put("/produtos/:id", productController.atualizarProduto);
router.delete("/produtos/:id", productController.deletarProduto);

// Rota para simular um erro interno de servidor e testar o errorMiddleware
router.get("/erro-teste", (req, res, next) => {
    // O try tenta executar um código
    try {
        // Força um erro técnico acontecer
        throw new Error("Erro forçado para teste");
    } catch (error) {
        // Se der erro, o catch captura e o next(error) joga ele direto para o errorMiddleware no server.js
        next(error);
    }
});

module.exports = router;