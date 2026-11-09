# Exercícios — Aula 12: Cadastro de Usuário

> Aula de referência: [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md|abrir a aula completa]]

---

# 🧪 Exercícios

🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#1. Criando o model de usuário 🧱|Rever model de usuário]]
🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#2. Criando o service de usuário ⚙️|Rever service de usuário]]

## Exercício 1 — Melhorar validação de email 📧

No cadastro de usuário, crie uma validação simples:

- o email precisa conter `@`

Se não tiver, retorne:

```json
{
  "erro": "Email inválido."
}
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#1. Criando o model de usuário 🧱|Rever campos do model]]
🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#3. Criando o controller de usuário 🎮|Rever controller]]

## Exercício 2 — Criar campo telefone 📱

Adicione o campo `telefone` no model de usuário.

Regras:

- `telefone` deve ser obrigatório
- o cadastro deve receber telefone no body
- a resposta deve retornar o telefone

Exemplo de body:

```json
{
  "nome": "Ana",
  "email": "ana@email.com",
  "senha": "123456",
  "telefone": "11999999999"
}
```

---

🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#3. Criando o controller de usuário 🎮|Rever criação de admin]]
🔗 [[BackEnd/Aulas completas/🟢Aula_12_Cadastro_de_Usuario.md#6. Testando no Postman|Rever testes no Postman]]

## Exercício 3 — Criar usuário admin 👑

Permita receber o campo `tipo` no cadastro.

Regras:

- se não enviar `tipo`, usar `"cliente"`
- se enviar `"admin"`, salvar como admin
- se enviar qualquer outro valor, retornar erro

Valores permitidos:

```text
cliente
admin
```

Exemplo de erro:

```json
{
  "erro": "Tipo de usuário inválido."
}
```
