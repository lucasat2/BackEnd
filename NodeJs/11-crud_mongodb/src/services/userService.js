const User = require("../models/User");


//READ 
async function buscarUsuarioPorEmail(email){
    const usuario = await User.findOne({email});

    return usuario;
}


//CREATE

async function criarUsuario(dados){
    const novoUsuario = await User.create(dados);

    return novoUsuario;
}


module.exports = {
    buscarUsuarioPorEmail,
    criarUsuario
};