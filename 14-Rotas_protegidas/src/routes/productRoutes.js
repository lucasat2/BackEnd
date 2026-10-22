const express = require("express");

const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

// QUALQUER USUARIO PODE ACESSAR OS PRODUTOS COM GET 
router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

// SOMENTE USUARIOS LOGADOS PODEM ACESSAR COM TOKEN / SÓ ADMIN

router.post("/produtos", authMiddleware,adminMiddleware, productController.criarProduto);

router.put("/produtos/:id",authMiddleware,adminMiddleware,productController.atualizarProduto);

router.delete("/produtos/:id", authMiddleware,adminMiddleware,productController.deletarProduto);

module.exports = router;