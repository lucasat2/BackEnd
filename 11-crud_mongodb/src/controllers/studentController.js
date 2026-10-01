const mongoose = require("mongoose");
const studentService = require("../services/studentService");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function listarAluno(req, res, next) {
  try {
    const aluno = await studentService.listarAluno();

    res.json(aluno);
  } catch (error) {
    next(error);
  }
}

async function buscarAlunoId(req, res, next) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const aluno = await stundentService.buscarAlunoId(id);

    if (!aluno) {
      return res.status(404).json({
        erro: "Produto não encontrado.",
      });
    }

    res.json(aluno);
  } catch (error) {
    next(error);
  }
}

async function criarAluno(req, res, next) {
  try {
    const { nome, email, curso, ativo } = req.body;

    if (!nome || !email || !curso || ativo === undefined) {
      return res.status(400).json({
        erro: "Nome, preço, categoria e estoque são obrigatórios.",
      });
    }

    const novoAluno = await studentService.criarAluno({
      nome,
      email,
      curso,
      ativo,
    });

    res.status(201).json(novoAluno);
  } catch (error) {
    next(error);
  }
}

async function atualizarAluno(req, res, next) {
  try {
    const { id } = req.params;
    const { nome, email, curso, ativo } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    if (!nome || !email || !curso || ativo === undefined) {
      return res.status(400).json({
        erro: "Nome, email e curso são obrigatórios.",
      });
    }

    const alunoAtualizado = await stundentService.atualizarAluno(id, {
      nome,
      email,
      curso,
      ativo,
    });

    if (!alunoAtualizado) {
      return res.status(404).json({
        erro: "Aluno não encontrado.",
      });
    }

    res.json(alunoAtualizado);
  } catch (error) {
    next(error);
  }
}

async function deletarAluno(req, res, next) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const alunoDeletado = await stundentService.deletarAluno(id);

    if (!alunoDeletado) {
      return res.status(404).json({
        erro: "Aluno não encontrado.",
      });
    }

    res.json({
      mensagem: "Aluno deletado com sucesso.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarAluno,
  buscarAlunoId,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
