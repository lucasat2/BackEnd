const express = require("express");

const productController = require("../controllers/productController");

const verificarAdmin = require("../middleware/adminMiddleware");

// const verificaAluno = require("../middleware/activeStudentMiddleware");

const router = express.Router();

// router.get("/area-do-aluno", verificaAluno,productController.validaAluno); //rota -middleware - controlador.

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", verificarAdmin, productController.criarProduto);

router.put("/produtos/:id", productController.atualizarProduto);

router.delete("/produtos/:id", productController.deletarProduto);


module.exports = router;