const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", productController.criarProduto);

router.put("/produtos/:id", productController.atualizarProduto);

router.delete("/produtos/:id", productController.deletarProduto);

module.exports = router;





