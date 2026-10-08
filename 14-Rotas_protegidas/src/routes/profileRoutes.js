const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/perfil",authMiddleware,(req,res => {
    res.json({
        mensagem: "Perfil acessado com sucesso",
        usuario: req.user
    });
}))

module.exports = router;