function verificarAdmin(req, res, next) {
    // Puxa a informação "admin" enviada escondida no cabeçalho (header) da requisição
    const { admin } = req.headers;

    // Validação: Se não for 'true', trava a requisição aqui mesmo e devolve erro 403 (Proibido)
    if (admin !== "true") {
        return res.status(403).json({
            erro: "Acesso negado. Apenas administradores podem acessar esta rota."
        });
    }

    // Se for admin de verdade, libera para seguir para o Controller
    next();
}

module.exports = verificarAdmin;