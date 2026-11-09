# Exercícios — Aula 13: Login com JWT

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#8. Criando o controller de autenticação 🎮|Rever controller de autenticação]]
🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#14. Criando as rotas de autenticação 🔗|Rever rotas de login]]

## Exercício 1 — Criar login de usuário 🔐

Crie a rota:

```text
POST /login
```

Ela deve receber:

```json
{
  "email": "ana@email.com",
  "senha": "123456"
}
```

Regras:

- email é obrigatório
- senha é obrigatória
- se o usuário não existir, retornar `401`
- se a senha estiver errada, retornar `401`
- se estiver tudo certo, retornar token JWT

---

🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#11. Gerando o token JWT 🎫|Rever geração do token]]
🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#12. O que é o payload?|Rever payload]]

## Exercício 2 — Melhorar resposta do login 👤

Na resposta do login, além do token, retorne os dados básicos do usuário.

Exemplo:

```json
{
  "mensagem": "Login realizado com sucesso.",
  "token": "token_aqui",
  "usuario": {
    "id": "665f1f7a3c9f4b0012a8e999",
    "nome": "Ana",
    "email": "ana@email.com",
    "tipo": "cliente"
  }
}
```

Atenção:

```text
Não retorne a senha.
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#16. Testando no Postman 🧪|Rever testes no Postman]]
🔗 [[BackEnd/Aulas completas/🟢Aula_13_Login_com_JWT.md#19. Testando campos obrigatórios ❌|Rever erros de validação]]

## Exercício 3 — Testar erros no Postman 🧪

Teste no Postman os seguintes cenários:

1. Login correto
2. Senha errada
3. Email inexistente
4. Sem email
5. Sem senha

Para cada caso, anote:

```text
URL usada
Body enviado
Status retornado
Resposta da API
```
