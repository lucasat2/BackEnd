# Exercícios — Aula 14: Rotas Protegidas

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md#4. Criando o middleware de autenticação 🛡️|Rever middleware]]
🔗 [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md#6. Criando a rota de perfil 👤|Rever rota de perfil]]

## Exercício 1 — Criar rota protegida de perfil 👤

Crie a rota:

```text
GET /perfil
```

Regras:

- deve exigir token
- se não enviar token, retornar `401`
- se enviar token válido, retornar os dados do usuário logado

Resposta esperada:

```json
{
  "mensagem": "Perfil acessado com sucesso.",
  "usuario": {
    "id": "id_do_usuario",
    "nome": "Ana",
    "email": "ana@email.com",
    "tipo": "cliente"
  }
}
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md#11. Protegendo rotas de produtos 📦|Rever proteção de produtos]]

## Exercício 2 — Proteger rotas de produtos 📦

Proteja as rotas:

```text
POST /produtos
PUT /produtos/:id
DELETE /produtos/:id
```

Regras:

- sem token, retornar `401`
- com token inválido, retornar `401`
- com token válido, permitir seguir para a próxima etapa

---

🔗 [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md#13. Criando permissão de admin 👑|Rever permissão de admin]]
🔗 [[BackEnd/Aulas completas/🟢Aula_14_Rotas_Protegidas.md#15. Usando autenticação + admin nas rotas 🔐|Rever autenticação e admin]]

## Exercício 3 — Criar permissão de admin 👑

Crie um middleware de admin.

Regras:

- se o usuário não estiver logado, retornar `401`
- se o usuário estiver logado, mas não for admin, retornar `403`
- se for admin, permitir criar, atualizar e deletar produtos

Teste com:

```text
usuário tipo cliente
usuário tipo admin
```
