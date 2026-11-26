function mostrarDataHora(req, res, next) {
  try {
    const tempo = new Date().toLocaleString("pt-BR");
    console.log(`Requisição recebida em: ${tempo}`);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = mostrarDataHora;