function adminMiddleware(req,res,next) {
    const {admin} = req.headers;
    
    if (admin !=="true") { 
        return res.status(403).json({
            erro: "Acesso negado. Apenas administradores podem acessar aessa rota"
        });
    }
    
    next();
}

module.exports = adminMiddleware;