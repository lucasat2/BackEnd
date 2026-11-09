# Exercícios — Aula 05: Rotas e Métodos HTTP

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md#5. GET — Listar dados 🔍|Rever GET]]

## Exercício 1 — Criar rota de alunos 🎓

Crie um array de alunos:

```jsx
const alunos = [
  { id: 1, nome: "Ana", email: "ana@email.com", curso: "Node.js" },
  { id: 2, nome: "Carlos", email: "carlos@email.com", curso: "React" },
  { id: 3, nome: "Mariana", email: "mariana@email.com", curso: "Python" }
];
```

Crie as rotas:

```text
GET /alunos
GET /alunos/:id
```

Regras:

- se encontrar o aluno, retornar os dados
- se não encontrar, retornar status `404`

---

🔗 [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md#10. POST — Criar dados ➕|Rever POST]]
🔗 [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md#11. O que é `req.body`? 📥|Rever req.body]]

## Exercício 2 — Cadastrar aluno ➕

Crie a rota:

```text
POST /alunos
```

Ela deve receber:

```json
{
  "nome": "Lucas",
  "email": "lucas@email.com",
  "curso": "Node.js"
}
```

Regras:

- `nome`, `email` e `curso` são obrigatórios
- se faltar algum campo, retornar status `400`
- se estiver tudo certo, cadastrar o aluno e retornar status `201`

---

🔗 [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md#12. PUT — Atualizar dados ✏️|Rever PUT]]
🔗 [[BackEnd/Aulas completas/🟢Aula_05_Rotas_e_Metodos_HTTP.md#14. DELETE — Remover dados 🗑️|Rever DELETE]]

## Exercício 3 — Atualizar e deletar aluno 🗑️

Crie as rotas:

```text
PUT /alunos/:id
DELETE /alunos/:id
```

Regras do `PUT`:

- buscar aluno pelo ID
- se não encontrar, retornar `404`
- se encontrar, atualizar `nome`, `email` e `curso`

Regras do `DELETE`:

- buscar aluno pelo ID
- se não encontrar, retornar `404`
- se encontrar, remover da lista
- retornar mensagem de sucesso
