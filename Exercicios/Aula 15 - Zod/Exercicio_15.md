# 🧪 Exercícios

## Exercício 1 — Validação de aluno 🎓

Crie o arquivo:

```
src/validations/studentValidation.js
```

Valide os campos:

```
nome: obrigatório, mínimo 3 caracteres
email: obrigatório
curso: obrigatório
ativo: boolean obrigatório
```

Use Zod.

---

## Exercício 2 — Filtro de produtos 🛒

Melhore a listagem de produtos para aceitar o filtro:

```
precoMax
```

Exemplo:

```
GET /produtos?precoMax=200
```

Deve retornar apenas produtos com preço menor ou igual a `200`.

Dica:

```jsx
query.preco = { $lte: Number(precoMax) };
```

---

## Exercício 3 — Paginação de alunos 📄

No CRUD de alunos com MongoDB, implemente paginação:

```
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