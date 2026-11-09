# Exercícios — Aula 06: CRUD em Memória com Node.js e Express

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_06_CRUD_em_memoria_com_Node_JS_e_Express.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_06_CRUD_em_memoria_com_Node_JS_e_Express.md#13. Código completo da aula ✅|Rever CRUD completo]]

## Exercício 1 — CRUD de alunos 🎓

Crie um array de alunos:

```jsx
let alunos = [
  {
    id: 1,
    nome: "Ana",
    email: "ana@email.com",
    curso: "Node.js",
    ativo: true
  }
];
```

Crie as rotas:

```text
GET /alunos
GET /alunos/:id
POST /alunos
PUT /alunos/:id
DELETE /alunos/:id
```

Campos obrigatórios no cadastro:

```text
nome
email
curso
ativo
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_06_CRUD_em_memoria_com_Node_JS_e_Express.md#9. Validação simples de preço e estoque ✅|Rever validação]]

## Exercício 2 — Validação de aluno ✅

Na rota `POST /alunos`, crie estas validações:

- `nome` é obrigatório
- `email` é obrigatório
- `curso` é obrigatório
- `ativo` não pode ficar vazio
- se faltar algum campo, retornar status `400`

Exemplo de erro:

```json
{
  "erro": "Nome, email, curso e ativo são obrigatórios."
}
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_06_CRUD_em_memoria_com_Node_JS_e_Express.md#13. Código completo da aula ✅|Rever CRUD completo]]
🔗 [[BackEnd/Aulas completas/🟢Aula_06_CRUD_em_memoria_com_Node_JS_e_Express.md#14. Como testar no Postman 🧪|Rever testes no Postman]]

## Exercício 3 — CRUD de pedidos 🛒

Crie um array de pedidos:

```jsx
let pedidos = [
  {
    id: 1,
    cliente: "Carlos",
    produto: "Mouse Gamer",
    quantidade: 2,
    total: 240,
    status: "Pago"
  }
];
```

Crie as rotas:

```text
GET /pedidos
GET /pedidos/:id
POST /pedidos
PUT /pedidos/:id
DELETE /pedidos/:id
```

Validações:

- cliente é obrigatório
- produto é obrigatório
- quantidade deve ser maior que zero
- total deve ser maior que zero
- status é obrigatório
