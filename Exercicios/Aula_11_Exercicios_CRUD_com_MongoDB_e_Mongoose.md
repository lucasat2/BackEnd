# Exercícios — Aula 11: CRUD com MongoDB e Mongoose

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md#5. Atualizando o service de produtos ⚙️|Rever service com MongoDB]]
🔗 [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md#8. Atualizando o controller 🎮|Rever controller com MongoDB]]

## Exercício 1 — CRUD de alunos com MongoDB 🎓

Crie o CRUD de alunos usando MongoDB.

Use o model `Student`.

Rotas:

```text
GET /alunos
GET /alunos/:id
POST /alunos
PUT /alunos/:id
DELETE /alunos/:id
```

Campos:

```text
nome
email
curso
ativo
```

Regras:

- todos os campos são obrigatórios
- ID inválido deve retornar `400`
- aluno não encontrado deve retornar `404`

---

🔗 [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md#5. Atualizando o service de produtos ⚙️|Rever service de pedidos]]
🔗 [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md#Testando no Postman 🧪|Rever testes no Postman]]

## Exercício 2 — CRUD de pedidos com MongoDB 🛒

Crie o CRUD de pedidos usando MongoDB.

Use o model `Order`.

Rotas:

```text
GET /pedidos
GET /pedidos/:id
POST /pedidos
PUT /pedidos/:id
DELETE /pedidos/:id
```

Campos:

```text
cliente
produto
quantidade
total
status
```

Regras:

- quantidade deve ser maior que zero
- total deve ser maior que zero
- pedido não encontrado deve retornar `404`
- ID inválido deve retornar `400`

---

🔗 [[BackEnd/Aulas completas/🟢Aula_11_CRUD_com_MongoDB_e_Mongoose.md#12. Testando erros comuns ❌|Rever erros comuns]]

## Exercício 3 — Melhorar validações de produto ✅

No CRUD de produtos, melhore as validações:

- `nome` deve ter pelo menos 3 caracteres
- `preco` deve ser maior que zero
- `categoria` é obrigatória
- `estoque` não pode ser negativo

Exemplo:

```json
{
  "erro": "O nome deve ter pelo menos 3 caracteres."
}
```
