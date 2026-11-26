// Middleware de erro obrigatoriamente recebe 4 parâmetros
function errorHandler(err, req, res, next) {
    // Mostra o erro técnico completo apenas no terminal para o desenvolvedor investigar
    console.error(err);

    // Devolve uma mensagem amigável e genérica de erro 500 para quem fez a requisição
    res.status(500).json({
        erro: "Erro interno no servidor."
    });
}

module.exports = errorHandler;