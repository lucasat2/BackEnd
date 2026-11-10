const express = require("express");

// Importa o controlador e os middlewares para verificações.

const orderController = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

// Coloca o método de criar rotas dentro da variavel router.
const router = express.router();

//Rotas
router.post("/pedidos", authMiddleware, orderController.criarPedido);

router.get("/meus-pedidos", authMiddleware, orderController.listarMeusPedidos);

router.get("/pedidos/:id", authMiddleware, orderController.buscarPedidoPorId);

router.patch(
  "/pedidos/:id/status",
  authMiddleware,
  adminMiddleware,
  orderController.atualizarStatusPedido,
);

module.exports = router;
