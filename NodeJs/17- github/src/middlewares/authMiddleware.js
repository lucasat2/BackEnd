const jwt = require("jsonwebtoken");

  
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    
    // VALIDA QUANDO NAO ENVIA TOKEN
    if(!authHeader){
        return res.status(401).json({
            erro: "Token não enviado"
        });
    }

    const partes = authHeader.split(" "); //2 partes

    // FALTANDO BEARER
    if(partes.length!== 2){
        return res.status(401).json({
            erro: "Token inválido"
        });
    }

    const[tipo,token] = partes;

    if(tipo !== "Bearer") { 
        return res.status(401).json({
            erro: "Formato do token inválido"
        });
    }

     try{
        const usuario = jwt.verify(token,process.env.JWT_SECRET);

        req.user = usuario;

        next();
     } catch(error){
        return res.status(401).json({
            erro:"Token inválido ou expirado"
        });
     }
}

module.exports = authMiddleware;