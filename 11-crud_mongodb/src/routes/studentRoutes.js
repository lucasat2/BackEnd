const express = require("express");

const studentController = require("../controllers/studentController");

const router = express.Router();

router.get("/aluno", studentController.listarAluno);

router.get("/aluno/:id", studentController.buscarAlunoId);

router.post("/aluno", studentController.criarAluno);

router.put("/aluno/:id", studentController.atualizarAluno);

router.delete("/aluno/:id", studentController.deletarAluno);

module.exports = router;
