const bcrypt = require("bcrypt"); // GERA SENHA CRIPTOGRAFADA
const jwt = require("jsonwebtoken");  // gera o token
const userService = require("../services/userService");

async function login(req, res, next) {
  try {

    const { email, senha } = req.body; // BODY POSTMAN

  
    // SE NAO PASSAR EMAIL OU SENHA 

    if (!email || !senha) {
      return res.status(400).json({
        erro: "Email e senha são obrigatórios.",
      });
    }

    const usuario = await userService.buscarUsuarioPorEmail(email);

       //SE NAO EXISTIR O USUARIO
    if (!usuario) {
      return res.status(401).json({
        erro: "Email ou senha inválidos.",
      });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({
        erro: "Email ou senha inválidos.",
      });
    }


    // CRIACAO DO TOKEN - ASSINATURA DOS DADOS 

    const token = jwt.sign(  // CARTORIO - valida que o token foi gerado pela nossa api
      {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
      },
      process.env.JWT_SECRET,  // 123456
      {
        expiresIn: "1d",  // 1 DIA
      },
    );

    res.json({
      mensagem: "Login realizado com sucesso.",
      token,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};
