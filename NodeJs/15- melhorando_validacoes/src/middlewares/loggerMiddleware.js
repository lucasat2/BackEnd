// Passo 1: Cria o middleware de log
// Recebe requisição (req), resposta (res) e a função de continuar (next)
function logger(req, res, next) {
    // Mostra no terminal o método (GET, POST...) e o endereço acessado
    console.log(`${req.method} ${req.url}`);

    // Passo 2: Libera a requisição para ir para a próxima etapa
    next();
}

module.exports = logger;