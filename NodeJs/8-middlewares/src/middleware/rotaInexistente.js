function rotaInexistente(req, res, next) {
    res.status(404).json({
        erro: "Essa rota não existe na API"
    });
}

module.exports = rotaInexistente;