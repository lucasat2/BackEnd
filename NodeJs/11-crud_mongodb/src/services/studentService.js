const Student = require("../models/Student");

async function listarAluno() {
  const aluno = await Student.find();

  return aluno;
}

async function buscarAlunoId(id) {
  const aluno = await Student.findById(id);

  return aluno;
}

async function criarAluno(dados) {
  const novoAluno = await Student.create(dados);

  return novoAluno;
}

async function atualizarAluno(id, dados) {
  const alunoAtualizado = await Student.findByIdAndUpdate(id, dados, {
    new: true,
  });

  return alunoAtualizado;
}

async function deletarAluno(id) {
  const alunoDeletado = await Student.findByIdAndDelete(id);

  return alunoDeletado;
}

module.exports = {
  listarAluno,
  buscarAlunoId,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
