
function adminMiddleware(req,res,next){
    
    //Validar autenticacao

    if(!req.user) { 
        return res.status(401).json({
            erro: "Usuario não autenticado."
        });
    }

    //VALIDAR ADMINISTRADOR
    if(req.user.tipo!="admin"){
        return res.status(403).json({
            erro:"Acesso negado.Apenas administradores podem acessar esta rota"
        }); // 403 - autenticado mas sem permissao.
    }

    next();
}

module.exports = adminMiddleware;