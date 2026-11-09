# Exercícios — Aula 04: Primeiro Servidor com Express

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md#7. Criando o primeiro servidor 🚀|Rever criação do servidor]]
🔗 [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md#Criando uma rota|Rever criação de rota]]

## Exercício 1 — Criar rota de status ⚙️

Crie uma rota:

```text
GET /status
```

Ela deve responder:

```json
{
  "status": "online",
  "message": "Servidor funcionando corretamente"
}
```

Teste no navegador ou Postman:

```text
http://localhost:3000/status
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md#12. Criando novas rotas 🔗|Rever novas rotas]]
🔗 [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md#13. Exemplo contextualizado: plataforma de cursos 🎓|Rever API de cursos]]

## Exercício 2 — Criar rota de alunos 🎓

Crie uma rota:

```text
GET /alunos
```

Ela deve retornar uma lista com 3 alunos.

Cada aluno deve ter:

```text
id
nome
email
curso
```

Exemplo:

```json
[
  {
    "id": 1,
    "nome": "Ana",
    "email": "ana@email.com",
    "curso": "Node.js"
  }
]
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_04_Primeiro_Servidor_com_Express.md#13. Exemplo contextualizado: plataforma de cursos 🎓|Rever rotas contextualizadas]]

## Exercício 3 — Criar rota de pedidos 🛒

Crie uma rota:

```text
GET /pedidos
```

Ela deve retornar uma lista com 2 pedidos.

Cada pedido deve ter:

```text
id
cliente
produto
quantidade
total
status
```

Exemplo:

```json
[
  {
    "id": 1,
    "cliente": "Carlos",
    "produto": "Mouse Gamer",
    "quantidade": 2,
    "total": 240,
    "status": "Pago"
  }
]
```

Teste a rota no navegador ou Postman:

```text
http://localhost:3000/pedidos
```
