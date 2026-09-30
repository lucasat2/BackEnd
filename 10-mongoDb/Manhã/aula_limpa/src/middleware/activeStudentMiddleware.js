function verificaAluno(req, res, next) {
    const { ativo } = req.headers;

    if (ativo !== "true") { 
        return res.status(404).json({
            erro: "Aluno inativo. Acesso bloqueado."
        })
    }
    next();
}

module.exports = verificaAluno;