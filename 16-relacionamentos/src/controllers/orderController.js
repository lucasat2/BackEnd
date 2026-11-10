const mongoose = require("mongoose");
const orderService = require("../services/orderService");
const { orderSchema } = require("../validations/orderValidation");

// Confere se o id enviado tem o formato valido do MongoDb
function isValidObjectID(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

// Criar pedido atrelado a um usuario - POST
async function criarPedido(req, res, next) {
  try {
    const resultado = orderSchema.safeParse(req.body);

    //Se der algum erro....

    if (!resultado.success) {
      return res.status(400).json({
        erro: resultado.error.issues[0].message,
      });
    }

    // Mostra o id do usuario que criou e os itens.
    const pedido = await orderService.criarPedido(
      req.user.id,
      resultado.data.itens,
    );

    // Responda com o pedido completo.
    res.status(201).json(pedido);
  } catch (error) {
    if (
      error.message === "Produto não encontrado" ||
      error.message.includes("Estoque insuficiente")
    ) {
      return res.status.json({
        erro: error.message,
      });
    }
    next(error);
  }
}

// Listar pedidos de um usuario - GET
async function listarMeusPedidos(req, res, next) {
  try {
    const pedidos = await orderService.listarPedidosDoUsuario(req.user.id);

    res.json(pedidos);
  } catch (error) {
    next(error);
  }
}

// Buscar um pedido por id - GET

async function buscarPedidoPorId(req, res, next) {
  try {
    const { id } = req.params; // Passar no postman o id

    // Se mandarem um id invalido...

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "Id inválido",
      });
    }

    // Mostra o id do produto, o usuario e o seu tipo
    const pedido = await orderService.buscarPedidoPorId(
      id,
      req.user.id,
      req.user.tipo,
    );

    if (!pedido) {
      return res.status.json({
        erro: "Pedido não encontrado",
      });
    }

    // Responde com o pedido.
    res.json(pedido);
  } catch (error) {
    next(error);
  }
}

async function atualizarStatusPedido(req, res, next) {
  try {
    // crie as variaveis e passe os dados no postman nelas.
    const { id } = req.params;
    const { status } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    // criar os status aceitos.

    const statusPermitidos = ["pendente", "pago", "enviado", "cancelado"];

    // Se a pessoa colocar algum status que nao existe na lista.

    if (!statusPermitos.includes(status)) {
      return res.status(400).json({
        erro: "Status Inválido",
      });
    }

    // Chamar o service pra atualizar o status

    const pedidoAtualizado = await orderService.atualizarStatusPedido(
      id,
      status,
    );

    // se nao tiver nada pra atualizar status...
    if (!pedidoAtualizado) {
      return res.status(404).json({
        erro: "Pedido não encontrado",
      });
    }
    res.json(pedidoAtualizado);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  criarPedido,
  listarMeusPedidos,
  buscarPedidoPorId,
  atualizarStatusPedido
};