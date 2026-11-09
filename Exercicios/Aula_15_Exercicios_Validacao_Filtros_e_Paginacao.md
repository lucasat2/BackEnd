# Exercícios — Aula 15: Validação, Filtros e Paginação

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#5. Criando validação de produto ✅|Rever validação com Zod]]
🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#7. Usando Zod no controller 🎮|Rever Zod no controller]]

## Exercício 1 — Validação de aluno 🎓

Crie o arquivo:

```text
src/validations/studentValidation.js
```

Valide os campos:

```text
nome: obrigatório, mínimo 3 caracteres
email: obrigatório
curso: obrigatório
ativo: boolean obrigatório
```

Use Zod.

---

🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#10. Criando filtros na listagem 🔍|Rever filtros]]
🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#11. Atualizando o service de listagem ⚙️|Rever filtro no service]]

## Exercício 2 — Filtro de produtos 🛒

Melhore a listagem de produtos para aceitar o filtro:

```text
precoMax
```

Exemplo:

```text
GET /produtos?precoMax=200
```

Deve retornar apenas produtos com preço menor ou igual a `200`.

Dica:

```jsx
query.preco = { $lte: Number(precoMax) };
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#13. Entendendo paginação 📄|Rever paginação]]
🔗 [[BackEnd/Aulas completas/🟢Aula_15_Validação, Filtros e Paginação.md#16. Validando page e limit ⚠️|Rever page e limit]]

## Exercício 3 — Paginação de alunos 📄

No CRUD de alunos com MongoDB, implemente paginação:

```text
GET /alunos?page=1&limit=10
```

A resposta deve seguir este formato:

```json
{
  "data": [],
  "page": 1,
  "limit": 10,
  "total": 0
}
```
