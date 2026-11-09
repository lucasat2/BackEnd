# Exercícios — Aula 07: Organização de um Projeto

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#4. Estrutura que você vai criar 🗂️|Rever estrutura do projeto]]
🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#6. Criando o service de produtos ⚙️|Rever service]]
🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#8. Criando o controller de produtos 🎮|Rever controller]]

## Exercício 1 — Organizar CRUD de alunos 🎓

Crie a estrutura:

```text
src/
  routes/
    studentRoutes.js
  controllers/
    studentController.js
  services/
    studentService.js
```

Crie as rotas:

```text
GET /alunos
GET /alunos/:id
POST /alunos
PUT /alunos/:id
DELETE /alunos/:id
```

Use este array no service:

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

---

🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#10. Criando as rotas de produtos 🔗|Rever rotas]]
🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#12. Atualizando o server.js 🚀|Rever integração no server]]

## Exercício 2 — Criar CRUD de pedidos 🛒

Crie a estrutura:

```text
src/
  routes/
    orderRoutes.js
  controllers/
    orderController.js
  services/
    orderService.js
```

Use este array:

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

---

🔗 [[BackEnd/Aulas completas/🟢Aula_07_Organizacao_de_um_Projeto.md#18. Código final da aula ✅|Rever código final organizado]]

## Exercício 3 — Melhorar validações ✅

No controller de produtos, melhore as validações:

- `nome` deve ter pelo menos 3 caracteres
- `preco` deve ser maior que zero
- `categoria` é obrigatória
- `estoque` não pode ser negativo

Exemplo de erro:

```json
{
  "erro": "O nome deve ter pelo menos 3 caracteres."
}
```
